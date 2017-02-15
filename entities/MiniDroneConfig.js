'use strict';
const parser=require('../parsers/miniDrone.js');
const constants=require('../lib/sharedARConstants.js');

class MiniDroneConfig{
  constructor(){
    this.droneName=undefined;
    this.droneIp=undefined;
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

    this.constants=constants;
  }

  assign(data){
      parser.Configure(data);

      Object.assign(
          this,
          data
      );
  }
};

module.exports=MiniDroneConfig;
