'use strict';
const Events=require('event-pubsub');
//https://github.com/RIAEvangelist/libARCommands/tree/ARSDK3_version_3_1_0/Xml

//API Classes abstract
class AbstractClasses{
  constructor(){
    this.lookup=[];
  }

  //add entries to lookup and as a key on this assigning its index as its id
  push(...entries){
    for(const id in entries){
      this.lookup.push(entries[id]);
      const newClassType=new ClassType;
      newClassType.id=this.lookup.length-1;

      this[
        entries[id]
      ]=newClassType;
    }

    return this;
  }
};

//Drone Command ClassType
class ClassType{
  constructor(){
    this.id=null;
    this.lookup=[];
  }

  //add commands to lookup and as a key on this assigning its index as its id
  push(...entries){
    for(const id in entries){
      this.lookup.push(entries[id]);
      const newCommand=new Command;
      newCommand.id=this.lookup.length-1;

      this[
        entries[id]
      ]=newCommand;
    }

    return this;
  }
}

//Drone Command
class Command extends Events{
  constructor(){
    super();
    this.lookup=[];
    this.id=null;
  }

  create(){
    return Object.assign({},this);
  }

  //adds arg objects to command and lookup in the order they should be in response
  push(...entries){
    for(const id in entries){
      const arg=entries[id];
      const argName=arg.name;

      delete arg.name;

      this.lookup.push(argName);
      arg.id=this.lookup.length-1;

      this[argName]=Object.assign(
        new CommandArgument,
        arg
      );
    }

    return this;
  }
}

//Drone Command Argument
class CommandArgument{
  constructor(){
    this.bytes=1;
    this.type='number';
    this.value=null;
  }
}

module.exports=AbstractClasses;
