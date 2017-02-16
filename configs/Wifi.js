'use strict';
const constants=require('../lib/sharedARConstants.js');
const IPCConfig=require('./IPC.js');

class MiniDroneConfig{
  constructor(){
    this.ipc=new IPCConfig;
    this.constants=constants;
    this.droneName=undefined;
    this.droneIp='192.168.2.1';
    this.discoveryPort=44444;

    //client sends message to drone port
    this.c2d_port=undefined;
    //drone sends message to client port
    this.d2c_port=7778;

    //client sends update to drone
    this.c2d_update_port=undefined;
    //client connects to drone (telnet)
    this.c2d_user_port=undefined;

    this.arstream_fragment_size=undefined;
    this.arstream_fragment_maximum_number=undefined;
    this.arstream_max_ack_interval=undefined;

    this.controller_type='tablet';
    this.controller_name='node-mini-drone';
    this.device_id=undefined;

    this.skycontroller_version=undefined;
    this.status=undefined;
  }

  assign(data){
      data=data.toString().replace(/\0/g,'');

      try{
          data=JSON.parse(data);
      }catch(err){
          console.log(err);
          return;
      }

      console.log(data);

      Object.assign(
          this,
          data
      );
  }
};

module.exports=MiniDroneConfig;
