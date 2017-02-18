'use strict';

const FrameTypes=require('../../api/FrameTypeCollection.js');
const FrameIDs=require('../../api/FrameIDCollection.js');

class Message{
  constructor(projects){
    this.frameTypes   = new FrameTypes;
    this.frameIDs     = new FrameIDs;
    this.projects     = projects;
    this.sequence     = {};

    this.reset();
  }

  reset(){
    this.frameType=this.frameTypes.dataType;
    this.frameID=this.frameIDs.cdNoNackID;

    this.projectID=null;
    this.classID=null;
    this.command=null;

    this.arguments=null;

    this.header = new Buffer.allocUnsafe(7);
    this.header.fill(0);

    this.payload=null;
  }

  build() {
      this.payload=null;

      if (!this.sequence[this.frameID]) {
        this.sequence[this.frameID] = 0;
      }

      this.sequence[this.frameID]++

      if (this.sequence[this.frameID]>255) {
        this.sequence[this.frameID] = 0;
      }

      const args=[];
      let argSize=0;

      for(const argName of this.command.lookup){
        const arg=this.command[argName];
        let size=arg.bytes;
        if(arg.type=='string'){
          arg.value+='\0';
          size=arg.value.length;
          arg.bytes=size;
        }
        args.push(arg);
        argSize+=size;
      }

      this.arguments = new Buffer.allocUnsafe(argSize+4);
      this.arguments.fill(0);

      this.arguments.writeUInt8(this.projectID,0);
      this.arguments.writeUInt8(this.classID,1);
      this.arguments.writeUInt16LE(this.command.id,2);

      let currentArgByte=0;
      for(const arg of args){
        switch(arg.bytes){
          case 1 :
            if(arg.type=='unsigned'){
              this.arguments.writeUInt8(
                Number(arg.value),
                currentArgByte
              );
              break;
            }
            this.arguments.writeInt8(
              Number(arg.value),
              currentArgByte
            );
          break;
          case 2 :
            if(arg.type=='unsigned'){
              this.arguments.writeUInt16LE(
                Number(arg.value),
                currentArgByte
              );
              break;
            }
            this.arguments.writeInt16LE(
              Number(arg.value),
              currentArgByte
            );
          break;
          case 4 :
            if(arg.type=='unsigned'){
              this.arguments.writeUInt32LE(
                Number(arg.value),
                currentArgByte
              );
              break;
            }
            if(arg.type=='float'){
              this.arguments.writeFloatLE(
                Number(arg.value),
                currentArgByte
              );
              break;
            }
            this.arguments.writeInt32LE(
              Number(arg.value),
              currentArgByte
            );
          break;
          default :
            this.arguments.write(arg.value,currentArgByte);
        }
        currentArgByte+=arg.size;
      }

      const payloadSize=this.arguments.length + this.header.length;

      this.header.writeUInt8(
        Number(this.frameType),
        0
      );
      this.header.writeUInt8(
        Number(this.frameID),
        1
      );
      this.header.writeUInt8(this.sequence[this.frameID], 2);
      this.header.writeUInt32LE(payloadSize, 3);

      this.payload=Buffer.concat(
          [
              this.header,
              this.arguments
          ],
          payloadSize
      );

      return this.payload;
  };
}

module.exports=Message;
