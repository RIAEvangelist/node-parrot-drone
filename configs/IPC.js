'use strict';
const os=require('os');
const ipc=require('node-ipc');

class IPCConfig{
  constructor(){
    Object.assign(
      this,
      {
        id              : os.hostname(),
        networkHost     : '0.0.0.0', //will listen for external messages
        networkPort     : 7778,
        encoding        : 'ascii',
        rawBuffer       : true,
        silent          : false,
        maxConnections  : 100,
        retry           : 1000,
        maxRetries      : Infinity,
        stopRetrying    : false
      }
    );
  }
}

module.exports=IPCConfig;
