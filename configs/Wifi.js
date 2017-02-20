'use strict';
const IPCConfig=require('./IPC.js');

class DroneConfig{
  constructor(){
    this.ipc=new IPCConfig;
    this.droneName=null;

    //client sends message to drone port
    this.c2d_port=null;

    //client sends update to drone
    this.c2d_update_port=null;
    //client connects to drone (telnet)
    this.c2d_user_port=null;

    this.arstream_fragment_size=null;
    this.arstream_fragment_maximum_number=null;
    this.arstream_max_ack_interval=null;

    this.controller_type='tablet';
    this.controller_name='node-parrot-drone';
    this.device_id=null;

    this.skycontroller_version=null;
    this.status=null;
  }

  assign(data){
      data=data.toString().replace(/\0/g,'');

      try{
          data=JSON.parse(data);
      }catch(err){
          console.log(err);
          return;
      }

      Object.assign(
          this,
          data
      );
  }
};

module.exports=DroneConfig;
