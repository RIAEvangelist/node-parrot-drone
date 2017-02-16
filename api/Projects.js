'use strict';
const CommonCommands=require('./CommonCommands.js');
//https://github.com/RIAEvangelist/libARCommands/blob/ARSDK3_version_3_1_0/Xml/common_commands.xml

//All common drone command classes
class Projects{
  constructor(){
    this.lookup=[
      0
    ];

    this.common=new CommonCommands;
    this.common.id=0;
  }

  push(...entries){
    for(const project of entries){
      this.lookup.push(project.id);
      project.commands.id=project.id;

      this[
        project.name
      ]=project.commands;
    }

    return this;
  }
}

module.exports=Projects;
