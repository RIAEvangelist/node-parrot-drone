'use strict';
const Events=require('event-pubsub');

class Response extends Events{
    constructor(messageRef,ipcRef,droneSocket,data){
      super();
      this.message={};
      this.messageRef=messageRef;
      this.ipcRef=ipcRef;
      this.droneSocket=droneSocket;
      if(data){
        this.parse(data);
      }
    }

    get raw(){
        return this.message.raw;
    }

    get type(){
        return this.message.type;
    }

    get id(){
        return this.message.id;
    }

    get data(){
        return this.message.data;
    }

    get index(){
        return this.message.index;
    }

    get size(){
        return this.message.size;
    }

    parse(data){
      this.message.raw        = data;

      this.message.frameType  = this.messageRef.frameTypes.lookup[data.readUInt8(0)];
      this.message.frameID    = this.messageRef.frameIDs.lookup[data.readUInt8(1)];
      this.message.index      = data.readUInt8(2);
      this.message.size       = data.readUInt32LE(3);

      this.message.projectID  = data.readUInt8(7);
      this.message.classID    = data.readUInt8(8);
      this.message.commandID  = data.readUInt16LE(9);

      this.message.arguments  = null;

      let next=null;

      if(this.message.raw.length>this.message.size){
        next=data.slice(this.messsage.size);
        this.raw=data.slice(0,this.messsage.size);
      }

      if(this.message.frameID === this.messageRef.frameIDs.internalBufferPing){
        this.messageRef.runningTime = this.message.raw.readUInt32LE(7) + (this.message.raw.readUInt32LE(11) / 1e10)

        this.message.raw.writeUInt8(
          this.messageRef.frameIDs.internalBufferPong,
          1
        );

        this.ipcRef.server.emit(
            this.droneSocket,
            this.message.raw
        );

        if(next){
          this.parse(next);
        }

        return;
      }

      if(this.message.size>10){
        this.message.arguments=this.message.raw.slice(11);
      }

      this.message.commandName    = null;
      this.message.className      = null;
      this.message.project    = this.messageRef.projects.lookup[
        this.message.projectID
      ];

      this.message.command = null;

      if(this.message.project){
        this.message.className    = this.messageRef.projects[
          this.message.project.name
        ].lookup[
          this.message.classID
        ];
      }

      if(this.message.className){
        const classRef=this.messageRef.projects[
          this.message.project.name
        ][
          this.message.className
        ];

        this.message.commandName=classRef.lookup[
          this.message.commandID
        ];

        this.message.command    = classRef[
          this.message.commandName
        ];
      }

      if(this.message.command && this.message.command.lookup.length>0){
        for(const argName of this.message.command.lookup){
          const arg=this.message.command[argName];
          console.log(argName,arg,this.message.arguments)
          switch(arg.type){
            case 'unsigned' :
              switch(arg.bytes){
                case 1 :
                  arg.value=this.message.arguments.readUInt8(0);
                break;
                case 2 :
                  arg.value=this.message.arguments.readUInt16LE(0);
                break;
                default :
                  arg.value=this.message.arguments.readUInt32LE(0);
              }
            break;
            case 'signed' :
              switch(arg.bytes){
                case 1 :
                  arg.value=this.message.arguments.readInt8(0);
                break;
                case 2 :
                  arg.value=this.message.arguments.readInt16LE(0);
                break;
                default :
                  arg.value=this.message.arguments.readInt32LE(0);
              }
            break;
            case 'float' :
              arg.value=this.message.arguments.readFloatLE(0);
            break;
            case 'string' :
              arg.bytes=this.message.arguments.indexOf('\0');
              arg.value=this.message.arguments.slice(0,arg.bytes).toString();
            break;
          }

          this.message.arguments=this.message.arguments.slice(arg.bytes);
        }
      }

      this.messageRef.messageIndex=this.message.index+1;

      console.log(this.message.commandName,this.message.command);

      this.message.command.publish('change');

      if(
        this.message.frameType.id==this.messageRef.frameTypes.dataWithAckType
        ||this.message.frameType.id==this.messageRef.frameTypes.undefinedID
      ){
        this.ipcRef.server.emit(
            this.droneSocket,
            this.message.raw
        );
      }

      if(next){
        setTimeout(
          this.parse.bind(next),
          5
        );
      }
    }
}

module.exports=Response;
