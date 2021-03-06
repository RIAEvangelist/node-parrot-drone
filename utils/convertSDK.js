const fs = require('fs');
const util = require('util');
const convert = require('xml-js');

const SDKDir    = `${__dirname}/../arsdk-xml/xml/`;
const SDKDevices= `${__dirname}/../libARController/Xml/deviceControllers.xml`;
const outDir    = `${__dirname}/../projects/`;
const docsDir    = `${__dirname}/../docs/`;
const docLink    = `https://github.com/RIAEvangelist/node-parrot-drone/tree/master/docs/`;

const result={
  pass:[],
  fail:[]
}

function isXML(name){
  if(name.indexOf('.xml')<0){
    return false;
  }

  return true;
}

function logErr(err,file){
  console.log(err);
  console.log(`ERR ${file}`);
  result.fail.push(file);
}

function assignLookup(parent,child){
  //console.log('CHILD : ', child.info);
  child.info.id=Number(child.info.id);

  parent.lookup[
    child.info.id
  ]=child.info.name;
}

function isCommandRelated(child){
  //console.trace(child)
  if(child===null){
    return false;
  }
  if(!child.info){
    return false;
  }
  if(
    !child.info.tagType
  ){
    return false;
  }

  if(!child.lookup){
    child.lookup={};
  }

  return true;
}

function cleanData(data){
  data=data.toString().replace(/[\t\n\r]/g,' ')
    .replace(/<!--[\s\S\w]*?-->/ig,'')
    .replace(/<\?[\s\S\w]*?\?>/ig,'')
    .replace(/[\-]/g,'_')
    .replace(/<(\w+) name="([\w]+)"/g,'<$2 originalTag="$1" name="$2"')
    .replace(/(\S)\:(\S)/g,'$1_$2')
    .replace(/<(\w+)([^>]+)?\/>/g,'<$1 $2></$1>')
    .replace(/\s+/g,' ');

    while(data.indexOf('originalTag=')>-1){
      const regEx = /<(\w+) originalTag="(\w+)"/;
      const match = data.match(regEx);

      let key=match[1];
      const tag=match[2];

      const tagRegex=new RegExp(`</${tag}`);
      data=data.replace(tagRegex,`</${key}`);

      if(Number(key[0])){
        const keyRegex=new RegExp(`${key}`,'g');
        const cleanKey=`_${key}`;
        data=data.replace(keyRegex,`${cleanKey}`);
      }

      data=data.replace('originalTag="','tagType="');
    }

    return data;
}

fs.readdir(
  SDKDir,
  function(err, files){
    if(err){
      logErr(err,SDKDir);
    }
    files.forEach(
      function(SDKXML){
        if(!isXML(SDKXML)){
          return;
        }
        const SDKFile=SDKXML.replace('.xml','');
        fs.readFile(
          `${SDKDir}${SDKXML}`,
          function(err, data) {
            if(err){
              log(err,'LOADING '+SDKXML);
              return;
            }
            console.log('... PARSING : ',SDKXML);
            data=cleanData(data);

            // console.log(
            //   data.slice(
            //     741,
            //     761
            //   )
            // );

            let projects={};

            try{
              projects=convert.xml2js(
                data,
                {
                  compact       : true,
                  trim          : true,
                  nativeType    : true,
                  attributesKey : 'info',
                  textKey       : 'details'
                }
              );
            }catch(err){
              logErr(err,SDKXML);
              return;
            }

            //done this way to ensure refrence use
            // dont know how to use features yet
            if(projects.feature){
              logErr('FEATURES NOT YET HANDLED',SDKFile+'.md');
            //   if(!projects.feature.info.tagType){
            //     projects.feature.info.tagType='project';
            //   }
            //   if(
            //     !projects[
            //       projects.feature.info.name
            //     ]
            //   ){
            //     projects[
            //       projects.feature.info.name
            //     ]={};
            //   }
            //
            //   Object.assign(
            //     projects[
            //       projects.feature.info.name
            //     ],
            //     projects.feature
            //   );
            //
            //   delete projects.feature;
            }

            projects.lookup={};

            for(const key in projects){
              const project=projects[key];

              //console.log(entry,key);
              if(!isCommandRelated(project)){
                continue;
              }

              assignLookup(projects,project);

              for(const key in project){
                const entry=project[key];

                if(!isCommandRelated(entry)){
                  continue;
                }

                assignLookup(project,entry);

                for(const key in entry){
                  const command=entry[key];
                  if(!isCommandRelated(command)){
                    continue;
                  }

                  let argCount=0;
                  assignLookup(entry,command);

                  for(const key in command){
                    const arg=command[key];
                    if(!isCommandRelated(arg)){
                      continue;
                    }

                    arg.info.id=argCount;
                    argCount++;

                    switch(arg.info.type){
                      case 'u16' :
                      case 'i16' :
                        arg.info.bytes=2;
                        break;
                      case 'enum'  :
                      case 'u32'  :
                      case 'i32'  :
                      case 'float':
                        arg.info.bytes=4;
                        break;
                      default :
                        arg.info.bytes=1;
                    }

                    arg.value=null;

                    let enumCount=0;
                    assignLookup(command,arg);

                    for(const key in arg){
                      const enumEntry=arg[key];
                      if(!isCommandRelated(enumEntry)){
                        continue;
                      }

                      enumEntry.info.id=enumCount;
                      enumCount++;

                      assignLookup(arg,enumEntry);
                    }
                  }
                }
              }
            }

            fs.writeFile(
              `${outDir}${SDKFile}.js`,
              `'use strict';
/*************************************************\\
generated from arsdk-xml/xml/*.xml
generated by utils/convertSDK.js
generated on : ${new Date().toLocaleString()}
\\**************************************************/
const projects=${
  JSON.stringify(
    projects,
    null,
    2
  )
}

module.exports=projects;
              `,
              function(err, data) {
                if(err){
                  logErr(err,SDKFile+'.js');
                  return;
                }
                console.log('WROTE : ',SDKFile+'.js');
              }
            );

            let markdown='';

            let type='Project commands';



            for(const key in projects.lookup){
              const projectName=projects.lookup[key];
              const project=projects[projectName];

              markdown+=`# projects.${projectName}
-----
### ${project.details}

Below is a table of all the ${projectName} Project command classes.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Class Name | ID | Hex ID | Description |
|------------|----|--------|-------------|`;

      for(const key in project.lookup){
          const className=project.lookup[key];
          const entry=project[className];
          markdown+=`
|[${className}](#projects${
  (projectName+className).toLowerCase()
})|${entry.info.id}|0x${
  Number(entry.info.id).toString(16)
}|${entry.details}|`;
              }

              for(const key in project.lookup){
                  const className=project.lookup[key];
                  const entry=project[className];
                  markdown+=`
# projects.${projectName}.${className}
-----
### ${entry.details}

The ${className} Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|`;

          for(const key in entry.lookup){
              const commandName=entry.lookup[key];
              const command=entry[commandName];
              markdown+=`
|[${commandName}](#projects${
  (projectName+className+commandName).toLowerCase()
})|${command.info.id}|0x${
  Number(command.info.id).toString(16)
}|${
  (command.comment)? command.comment.info.title : command.details
}|`;
                  }

                  for(const key in entry.lookup){
                      const commandName=entry.lookup[key];
                      const command=entry[commandName];
                      markdown+=`
## projects.${projectName}.${className}.${commandName}

${
  (command.comment)? command.comment.info.title : command.details
}

${
  (command.comment)? command.comment.info.desc.replace(/\\n/g,`
`) : ''
}

${
  ((command.comment)?
      ((command.comment.info.triggered)?
        `Triggered : ${command.comment.info.triggered}`
        : `Result : ${command.comment.info.result}`
      ) : ''
  ).replace(/\\n/,`
`)
}

|argument|type|description|
|--------|----|-----------|
`;

                  const enums=[];

                  for(const key in command.lookup){
                      const argName=command.lookup[key];
                      const arg=command[argName];
                      markdown+=`|${arg.info.name}|${arg.info.type}|${arg.details}|
`;
                      if(Object.keys(arg.lookup).length>0){
                        enums.push(arg);
                      }
                  }

                  for(const arg of enums){
                    markdown+=`Enums/Symbols (fancy way of saying possible values) for ${arg.info.name} :

|${arg.info.name} value|${arg.info.name} name|${arg.info.name} description|
|-----|----|-----------|
`;
                    for(const enumID in arg.lookup){
                      const enumEntry=arg[
                        arg.lookup[enumID]
                      ];

                      markdown+=`|${enumID}|${enumEntry.info.name}|${enumEntry.details}|
`;
                    }
                  }

                  if(
                    (
                      command.comment
                      && command.comment.info.triggered
                    )
                    || command.info.name.indexOf('Changed')>-1
                  ){
                    markdown+=`

Example binding to listen for the \` ${commandName} \` event from the drone :

\`\`\`javascript

drone.on(
  '${commandName}',
  function(commandObject){
    console.log(commandObject);
  }
)

\`\`\`

`
                  }else{
                    markdown+=`
Example sending the \` ${commandName} \` command to your parrot drone :

\`\`\`javascript

const project=drone.projects.${projectName};
const commandClass=project.${className};

//change the value of the args you want to change if applicable
commandClass.\${argName}.value=1;

//build the ${commandName} command message
const ${commandName}Message=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.${commandName}
);

//send the ${commandName} command message
drone.message.send(${commandName}Message);

\`\`\`

`
                  }
                }
              }

              fs.writeFile(
                `${docsDir}${SDKFile}.md`,
                markdown,
                function(err, data) {
                  if(err){
                    logErr(err,SDKFile+'.md');
                    return;
                  }
                  console.log('WROTE : ',SDKFile+'.md');
                }
              );

              console.log(`PARSED ${SDKFile} OK!`);
              result.pass.push(SDKFile);
            }
          }
        );
      }
    );

    buildDrones();
  }
);

function buildDrones(){
  fs.readFile(
    `${SDKDevices}`,
    function(err, data) {
      SDKDeviceFile=SDKDevices.split('/').pop().replace('.xml','');
      if(err){
        logErr(err,SDKDeviceFile);
        return;
      }
      data=cleanData(data);

      //console.log(data);

      let devices={};

      try{
        devices=convert.xml2js(
          data,
          {
            compact       : true,
            trim          : true,
            nativeType    : true,
            attributesKey : 'info',
            textKey       : 'details'
          }
        );
      }catch(err){
        console.warn(
          `Failed to parse ${SDKDeviceFile}.xml`
        );
        //console.log(err,data.slice(3900,4060));
        logErr(err,SDKDeviceFile);
        return;
      }

      let droneRequires='const projects={lookup:{}};';
      let mergeLookup='Object.assign(projects.lookup,';
      let merge='Object.assign(projects,';
      ``
      for(const req of result.pass){
        droneRequires+=`
const ${req}=require('./${req}.js');
`;
        merge+=`${req},`;
        mergeLookup+=`${req}.lookup,`;
        for(deviceName in devices.deviceControllers){
          const device=devices.deviceControllers[deviceName];
          if(device[req]){
            device[req]=`\${${req}}`
          }
        }
      }
      droneRequires+=`${merge.slice(0,-1)});
${mergeLookup.slice(0,-1)});`;

      let droneRefs=JSON.stringify(
        devices,
        null,
        2
      ).replace(
        /"\$\{(\w+)\}"/g,
        '$1'
      );

      const dronesJS=`'use strict';
${droneRequires}

const droneRefs=${droneRefs}

module.exports={
  drones:droneRefs,
  projects:projects
};
`;


      // console.log(
      //   util.inspect(devices, { depth: null, colors:true })
      // );

      let markdown=`# Drone list
-------
**Please note while all the data to support all drones is available, currently only wifi is implemented** Bluetooth Drones need a seperate adapter in \` /adapters/ \`

Each drone has a list of the command sets it uses. Please click the link to see the documentation for each set of commands. Some are quite extencive.

`;

      for(deviceName in devices.deviceControllers){
        const device=devices.deviceControllers[deviceName];
        if(!device.info){
          continue;
        }

        markdown+=`
# ${device.info.name}
Product : ${device.info.product}
${device.details}

This drone uses the following command sets :

`;
        const exclude=['info','details','comment','_comment'];
        for(const command in device){
          if(exclude.includes(command)){
            continue;
          }
          if(result.pass.includes(command)){
            markdown+=`* [${command}](${docLink}${command}.md)
`;
            continue;
          }

          markdown+=`* [${command}](../projects/${command}.js) not yet documented. See the raw object for now.
`;
        }
      }

      fs.writeFile(
        `${docsDir}README.md`,
        markdown,
        function(err, data) {
          if(err){
            logErr(err,SDKDeviceFile+'.md as README.md');
          }
        }
      );

      fs.writeFile(
        `${outDir}${SDKDeviceFile}.js`,
        dronesJS,
        function(err, data) {
          if(err){
            logErr(err,SDKDeviceFile+'.js');
          }
          setTimeout(
            function(){
              console.log(
                util.inspect(
                  result,
                  {
                    colors:true
                  }
                )
              );
            },
            500
          );
        }
      );

      console.log(`PARSED ${SDKDeviceFile} OK!`);
      result.pass.push(SDKDeviceFile);
    }
  );
}
