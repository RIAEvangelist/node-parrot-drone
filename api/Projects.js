'use strict';
const Events=require('event-pubsub');
const CommonCommands=require('./CommonCommands.js');
//https://github.com/RIAEvangelist/libARCommands/blob/ARSDK3_version_3_1_0/Xml/common_commands.xml

//All common drone command classes
class Projects extends Events{
  constructor(){
    this.lookup=[
      {
        name:'common',
        id:0
      }
    ];

    this.runningTime=0;

    this.common=new CommonCommands;
    this.common.id=0;
  }

  push(...entries){
    for(const project of entries){
      this.lookup.push(project.id);

      this[
        project.name
      ]=project.commands;
    }

    return this;
  }
}

module.exports=Projects;
