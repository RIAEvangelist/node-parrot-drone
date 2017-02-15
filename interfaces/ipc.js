'use strict';
const os=require('os');
const ipc=require('node-ipc');

class IPCInterface{
  constructor(){
    this.types=Object.keys(config);
    this.ipc=new ipc.IPC;

    this.configKey='';
    this.type='defaultMiniDrone';
  }

  set type(key){
    if(!config[key]){
      return false;
    }

    this.configKey=key;

    Object.assign(
      this.ipc,
      config[key]
    );
  }

  get type(){
    return this.configKey;
  }

  get config(){
    return config[this.type];
  }
}

const config={};

config.defaultMiniDrone={
    id              : os.hostname(),
    networkHost     : '0.0.0.0', //will listen for external messages
    networkPort     : 7778,
    encoding        : 'utf8',
    rawBuffer       : true,
    silent          : false,
    maxConnections  : 100,
    retry           : 1000,
    maxRetries      : Infinity,
    stopRetrying    : false
}

module.exports=IPCInterface;
