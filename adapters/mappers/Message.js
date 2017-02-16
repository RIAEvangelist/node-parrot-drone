'use strict';

const FrameTypes=require('../../api/FrameTypeCollection.js');
const FrameIDs=require('../../api/FrameIDCollection.js');

class Message{
  constructor(){
    this.frameTypes   = new FrameTypes;
    this.frameIDs     = new FrameIDs;
    this.messageIndex = 0;

    this.reset();
  }

  reset(){
    this.frameType=this.frameTypes.dataType;
    this.frameID=this.frameIDs.cdNoNack;

    this.command=null;

    this.arguments=null;

    this.header = new Buffer.allocUnsafe(7);
    this.header.fill(0);

    this.payload=null;
  }

  build() {
      this.payload=null;
      this.messageIndex++;

      if (this.messageIndex > 255) {
          this.messageIndex = 0;
      }

      const argValues=[];
      let argSize=0;

      for(const arg of this.command.lookup){
        const arg=command[arg];
        let size=arg.bytes;
        if(arg.type=='string'){
          arg.value+='\0';
          size=arg.value.length;
          arg.bytes=size;
        }
        argValues.push(arg);
        argSize+=size;
      }

      this.arguments = new Buffer.allocUnsafe(argSize+1);
      this.arguments.fill(0);

      this.arguments.writeUInt8(this.command.id);

      for(const i in argValues){
        switch(arg.bytes){
          case 1 :
            this.arguments.writeUInt8(arg.value);
          break;
          case 2 :
            this.arguments.writeUInt16LE(arg.value);
          break;
          case 4 :
            this.arguments.writeUInt32LE(arg.value);
          break;
          default :
            this.arguments.write(arg.value);
        }
      }

      const payloadSize=this.arguments.length + this.header.length;

      this.header.writeUInt8(this.frameType, 0);
      this.header.writeUInt8(this.frameID, 1);
      this.header.writeUInt8(this.messageIndex, 2);
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
