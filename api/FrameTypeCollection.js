'use strict';
const Collection=require('./Collection.js');

class FrameTypes extends Collection{
  constructor(){
    super();
    // ARNETWORKAL_Frame_t identifiers
    this.push(
      //Unknown type. Don't use
      'uninitializedType',
      //Acknowledgment type. Internal use only
      'ackType',
      //Data type. Main type for data that does not require an acknowledge
      'dataType',
      //Low latency data type. Should only be used when needed
      'lowLatencyType',
      //Data that should have an acknowledge type. This type can have a long latency
      'dataWithAckType',
      //Unused, iterator maximum value
      'maxType'
    );
  }
}

module.exports=FrameTypes;
