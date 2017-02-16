'use strict';

class Message{
  constructor(size,constants){
    this.constants=constants;
    //
    // ARNETWORKAL_Frame_t
    //
    // uint8  type  - frame type ARNETWORK_FRAME_TYPE
    // uint8  id      - identifier of the buffer sending the frame
    // uint8  seq   - sequence number of the frame
    // uint32 size  - size of the frame
    //
    this.type=this.constants.ARNETWORKAL_FRAME_TYPE_DATA;
    this.id=this.constants.BD_NET_CD_NONACK_ID;

    this.data=new Buffer.allocUnsafe(size);
    this.messageIndex = [];
    this.headerLength = 7 // size of ARNETWORKAL_Frame_t header
    this.header = new Buffer.allocUnsafe(this.headerLength);
    this.payload=null;
  }

  get index(){
      return this.messageIndex[this.id];
  }

  build() {
      this.payload=null;
      if (!this.messageIndex[this.id]) {
          this.messageIndex[this.id] = 0;
      }

      this.messageIndex[this.id]++;

      if (this.messageIndex[this.id] > 255) {
          this.messageIndex[this.id] = 0;
      }

      this.header.writeUInt8(this.type, 0);
      this.header.writeUInt8(this.id, 1);
      this.header.writeUInt8(this.messageIndex[this.id], 2);
      this.header.writeUInt32LE(this.data.length + this.headerLength, 3);

      this.payload=this.header;

      // Buffer.concat(
      //     [
      //         this.header,
      //         this.data
      //     ]
      // );
  };
}

module.exports=Message;
