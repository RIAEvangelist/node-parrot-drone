const parrot=require('../node-parrot-drone.js');
const drone=new parrot.Wifi;

drone.connect();

drone.on(
  'connected',
  function(){
    console.log('CONNECTED\n\n')
    const project=drone.projects.jpsumo;
    const commandClass=project.Piloting;

    //change the value of the args you want to change if applicable
    commandClass.PCMD.flag.value=0;
    commandClass.PCMD.speed.value=100;
    commandClass.PCMD.turn.value=100;

    //build a message requesting all settings
    const PostureMessage=drone.message.build(
      project.info.id,
      commandClass.info.id,
      commandClass.PCMD
    );

    setInterval(
      function(){
        drone.message.send(PostureMessage);
      },
      10
    );
  }
);

drone.on(
  'messageSent',
  function(data){
    console.log(data)
  }
);
