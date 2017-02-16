'use strict';
const Collection=require('./Collection.js');

class FrameIDs extends Collection{
  constructor(){
    super();
    // ARNETWORKAL_Frame_t identifiers
    this.push(
      {
        name:'cdNoNack',
        id:10
      },
      {
        name:'cdAck',
        id:11
      },
      {
        name:'cdEmergency',
        id:12
      },
      {
        name:'cdVideoAck',
        id:13
      },
      {
        name:'dcVideoData',
        id:125
      },
      {
        name:'dcEvent',
        id:126
      },
      {
        name:'dcNavData',
        id:127
      }
    );
  }
}

module.exports=FrameIDs;
