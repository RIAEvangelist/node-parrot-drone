'use strict';
const CommonCommands=require('./CommonCommands.js');
//https://github.com/RIAEvangelist/libARController/blob/master/Xml/deviceControllers.xml

//All common drone command classes
class Projects{
  constructor(){
    this.lookup=[
      {
        name:'common',
        id:0
      }
    ];

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
