'use strict';
const Config =require('../configs/Wifi.js');
const Response=require('./mappers/Response.js');
const Message=require('./mappers/Message.js');
const ipc=require('node-ipc');

class MiniDroneWifi {
    constructor(){
      this.config=new Config;
      this.ipc=new ipc.IPC;
      Object.assign(
        this.ipc.config,
        this.config.ipc
      );
    }

    connect(){
      this.ipc.connectToNet(
        this.config.droneName,
        this.config.droneIp,
        this.config.discoveryPort
      );

      this.bound={};
      this.bound.connectedToDrone=this.connectedToDrone.bind(this);
      this.bound.importDataFromDrone=this.importDataFromDrone.bind(this);
      this.bound.init=this.init.bind(this);

      this.ipc.of[this.config.droneName].on(
        'connect',
        this.bound.connectedToDrone
      );

      this.ipc.of[this.config.droneName].on(
          'data',
          this.bound.importDataFromDrone
      );
    }

    connectedToDrone(){
        console.log('connected to drone');
        const message={
          'controller_type': this.config.controller_type,
          'controller_name': this.config.controller_name,
          'd2c_port': this.config.d2c_port
        }

        this.ipc.serveNet(
            this.config.d2c_port,
            'udp4',
            this.bound.init
        );

        this.ipc.server.start();

        this.ipc.of[this.config.droneName].emit(
            JSON.stringify(message)
        );
    }


    importDataFromDrone(data){
        this.ipc.disconnect(this.config.droneName);

        this.config.assign(data);
    }

    init(){
        console.log('--------------------------')
        var message=new Message(0,this.config.constants);
        message.type=this.config.constants.ARCOMMANDS_ID_PROJECT_COMMON;
        message.id=this.config.constants.ARCOMMANDS_ID_COMMON_CLASS_COMMON;
        message.data=this.config.constants.ARCOMMANDS_ID_COMMON_COMMON_CMD_ALLSTATES;

        this.ipc.server.on(
            'data',
            this.gotResponse
        );

        message.build();

        this.ipc.server.emit(
            {
                address : this.config.droneIp,
                port    : this.config.c2d_port
            },
            message.payload
        );
    }

    gotResponse(data){
      console.log('<<<<<<<<<<<<>>>>>>>>>>>>>>>>');
        const response=new Response(data);
        console.log(response.message);
    }
}

module.exports=MiniDroneWifi;
