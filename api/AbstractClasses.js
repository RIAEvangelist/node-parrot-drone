'use strict';
//https://github.com/RIAEvangelist/libARCommands/tree/ARSDK3_version_3_1_0/Xml

//API Classes abstract
class AbstractClasses{
  constructor(){
    this.classLookup=[];
  }

  //add entries to classLookup and as a key on this assigning its index as its id
  push(...entries){
    for(const id in entries){
      this.classLookup.push(entries[id]);
      const newClassType=new ClassType;
      newClassType.id=this.classLookup.length-1;

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
    this.commandLookup=[];
  }

  //add commands to commandLookup and as a key on this assigning its index as its id
  push(...entries){
    for(const id in entries){
      this.commandLookup.push(entries[id]);
      const newCommand=new Command;
      newCommand.id=this.commandLookup.length-1;

      this[
        entries[id]
      ]=newCommand;
    }

    return this;
  }
}

//Drone Command
class Command{
  constructor(){
    this.argLookup=[];
    this.value=undefined;
  }

  //adds arg objects to command and argLookup in the order they should be in response
  push(...entries){
    for(const id in entries){
      const arg=entries[id];
      const argName=arg.name;

      delete arg.name;

      this.argLookup.push(argName);
      arg.id=this.argLookup.length-1;

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
    this.value=undefined;
  }
}

module.exports=AbstractClasses;
