'use strict';

const FrameTypes=require('../../api/FrameTypeCollection.js');
const FrameIDs=require('../../api/FrameIDCollection.js');

class Message{
  constructor(drone){
    this.frameTypes   = new FrameTypes;
    this.frameIDs     = new FrameIDs;
    this.drone        = drone;
    this.sequence     = {};

  }

  build(
    projectID=null,
    classID=null,
    commandRef=null,
    frameType=this.frameTypes.dataType,
    frameID=this.frameIDs.cdNoNackID
  ){

      // if(commandRef.info.buffer && commandRef.info.buffer=='NON_ACK'){
      //   this.frameType=
      // }

      const header = new Buffer.allocUnsafe(7);
      header.fill(0);

      if (!this.sequence[this.frameID]) {
        this.sequence[this.frameID] = 0;
      }

      this.sequence[this.frameID]++

      if (this.sequence[this.frameID]>255) {
        this.sequence[this.frameID] = 0;
      }

      const args=[];
      let argSize=0;

      for(const argName in commandRef){
        const arg=commandRef[argName];
        if(!arg.info){
          continue;
        }
        if(!arg.info.tagType){
          continue;
        }
        let size=arg.info.bytes;
        //console.log(arg);
        if(arg.info.type=='string'){
          arg.value+='\0';
          size=arg.value.length;
          arg.info.bytes=size;
        }
        args.push(arg);
        argSize+=size;
      }

      // console.log(`
      //   ${argSize+4}
      // `);

      const commandArgs = new Buffer.allocUnsafe(argSize+4);
      commandArgs.fill(0);

      commandArgs.writeUInt8(projectID,0);
      commandArgs.writeUInt8(classID,1);
      commandArgs.writeUInt16LE(commandRef.info.id,2);

      let currentArgByte=4;
      for(const arg of args){
        console.log(arg.info.type,arg.value,currentArgByte);
        switch(arg.info.type){
          case 'u8' :
            commandArgs.writeUInt8(
              Number(arg.value),
              currentArgByte
            );
            break;
          case 'i8' :
            commandArgs.writeInt8(
              Number(arg.value),
              currentArgByte
            );
            break;
          case 'u16' :
            commandArgs.writeUInt16LE(
              Number(arg.value),
              currentArgByte
            );
            break;
          case 'i16' :
            commandArgs.writeInt16LE(
              Number(arg.value),
              currentArgByte
            );
          break;
          case 'enum' :
          case 'u32' :
            commandArgs.writeUInt32LE(
              Number(arg.value),
              currentArgByte
            );
            break;
          case 'i32' :
            commandArgs.writeInt32LE(
              Number(arg.value),
              currentArgByte
            );
            break;
          case 'float' :
            commandArgs.writeFloatLE(
              Number(arg.value),
              currentArgByte
            );
            break;
          default :
            commandArgs.write(arg.value,currentArgByte);
        }
        currentArgByte+=arg.info.bytes;
      }

      const payloadSize=commandArgs.length + header.length;

      header.writeUInt8(
        Number(frameType),
        0
      );
      header.writeUInt8(
        Number(frameID),
        1
      );
      header.writeUInt8(this.sequence[this.frameID], 2);
      header.writeUInt32LE(payloadSize, 3);

      const payload=Buffer.concat(
          [
              header,
              commandArgs
          ],
          payloadSize
      );

      return payload;
  };

  send(payload){
    if(!this.drone.droneSocket){
      setTimeout(
        this.send.bind(this,payload),
        10
      );
      return;
    }
    this.drone.d2c.server.emit(
        this.drone.droneSocket,
        payload
    );

    this.drone.emit(
        'messageSent',
        {
          socket:this.drone.droneSocket,
          payload:payload
        }
    );
  }
}

module.exports=Message;
