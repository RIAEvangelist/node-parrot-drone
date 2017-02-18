'use strict';
const Collection=require('./Collection.js');

class FrameTypes extends Collection{
  constructor(){
    super();
    // ARNETWORKAL_Frame_t identifiers
    this.push(
      {
        name:'internalBufferPing',
        id:0
      },
      {
        name:'internalBufferPong',
        id:1
      },
      {
        name:'internalBufferMax',
        id:3
      },
      {
        name:'cdNoNackID',
        id:10
      },
      {
        name:'cdAckID',
        id:11
      },
      {
        name:'cdEmergencyID',
        id:12
      },
      {
        name:'cdVideoAckID',
        id:13
      },
      {
        name:'dcVideoDataID',
        id:125
      },
      {
        name:'dcEventID',
        id:126
      },
      {
        name:'dcNavDataID',
        id:127
      },
      {
        name:'defaultManagerMaxID',
        id:256
      }
    );
  }
}

module.exports=FrameTypes;
