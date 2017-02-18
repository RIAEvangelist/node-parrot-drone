'use strict';
const os=require('os');
const ipc=require('node-ipc');

class IPCConfig{
  constructor(){
    this.discovery=Object.assign(
      this,
      {
        id              : 'discovery',
        networkPort     : 44444,
        networkHost     : '192.168.2.1',
        encoding        : 'ascii',
        rawBuffer       : true,
        silent          : true,
        maxConnections  : 1,
        retry           : 1000,
        maxRetries      : Infinity,
        stopRetrying    : false
      }
    );

    this.d2c=Object.assign(
      {},
      this.discovery,
      {
        id              : 'd2c',
        networkHost     : '0.0.0.0', //will listen for external messages
        networkPort     : 7778,
        encoding        : 'binary',
        silent          : true,
        maxConnections  : 1
      }
    );
  }
}

module.exports=IPCConfig;
