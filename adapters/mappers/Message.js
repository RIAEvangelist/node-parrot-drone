'use strict';

class Message{
  constructor(){
    this.projectID=null;
    this.classID=null;
    this.command=null;

    this.arguments=null;

    this.messageIndex = 0;
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

      this.arguments = new Buffer.allocUnsafe(argSize);
      this.arguments.fill(0);

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

      this.header.writeUInt8(this.projectID, 0);
      this.header.writeUInt8(this.classID, 1);
      this.header.writeUInt8(this.command.id, 2);
      this.header.writeUInt32LE(payloadSize, 3);

      this.payload=Buffer.concat(
          [
              this.header,
              this.data
          ],
          payloadSize
      );
  };
}

module.exports=Message;
