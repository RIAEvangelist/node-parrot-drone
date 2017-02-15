'use strict';
class Message{
  constructor(size){
    //
    // ARNETWORKAL_Frame_t
    //
    // uint8  type  - frame type ARNETWORK_FRAME_TYPE
    // uint8  id      - identifier of the buffer sending the frame
    // uint8  seq   - sequence number of the frame
    // uint32 size  - size of the frame
    //
    this.type=constants.ARNETWORKAL_FRAME_TYPE_DATA;
    this.id=constants.BD_NET_CD_NONACK_ID;
    this.data=new Buffer.allocUnsafe(size);

    this.messageIndex = [];
    this.headerLength = 7 // size of ARNETWORKAL_Frame_t header
    this.header = new Buffer.alocUnsafe(headerLength);
  }

  get index(){
      return messageIndex[this.id];
  }

  send() {
      if (!messageIndex[this.id]) {
          messageIndex[this.id] = 0;
      }

      messageIndex[this.id]++;

      if (messageIndex[this.id] > 255) {
          messageIndex[this.id] = 0;
      }

      header.writeUInt8(this.type, 0);
      header.writeUInt8(this.id, 1);
      header.writeUInt8(messageIndex[id], 2);
      header.writeUInt32LE(this.data.length + headerLength, 3);

      var message=Buffer.concat(
          [
              header,
              data
          ]
      );
  };
}
