'use strict';
const MiniDroneConfig =require('../entities/MiniDroneConfig.js');
const IPCInterface=require('../interfaces/ipc.js');
const parser=require('../parsers/miniDrone.js');
const Message=require('../entities/Message.js');

class MiniDrone {
    constructor(){
      this.config=new MiniDroneConfig;
      this.ipcInterface=new IPCInterface;
    }

    connect(){
      this.ipcInterface.ipc.connectToNet(
        this.config.droneName,
        this.config.droneIp,
        this.config.discoveryPort
      );

      this.bound={};
      this.bound.connectedToDrone=this.connectedToDrone.bind(this);
      this.bound.importDataFromDrone=this.importDataFromDrone.bind(this);
      this.bound.init=this.init.bind(this);

      this.ipcInterface.ipc.of[this.config.droneName].on(
        'connect',
        this.bound.connectedToDrone.bind(this)
      );

      this.ipcInterface.ipc.of[this.config.droneName].on(
          'data',
          this.bound.importDataFromDrone.bind(this)
      );
    }

    connectedToDrone(){
        console.log('connected to drone');
        const message={
          'controller_type': this.config.controller_type,
          'controller_name': this.config.controller_name,
          'd2c_port': this.config.d2c_port
        }

        this.ipcInterface.ipc.serveNet(
            this.config.d2c_port,
            'udp4',
            this.bound.init
        );

        this.ipcInterface.ipc.server.start();

        this.ipcInterface.ipc.of[this.config.droneName].emit(
            JSON.stringify(message)
        );
    }


    importDataFromDrone(data){
        this.ipcInterface.ipc.disconnect(this.config.droneName);

        this.config.assign(data);
    }

    init(){
        console.log('--------------------------')
        var message=new Message(0,this.config.constants);
        message.type=this.config.constants.ARCOMMANDS_ID_PROJECT_COMMON;
        message.id=this.config.constants.ARCOMMANDS_ID_COMMON_CLASS_COMMON;
        message.data=this.config.constants.ARCOMMANDS_ID_COMMON_COMMON_CMD_ALLSTATES;

        this.ipcInterface.ipc.server.on(
            'message',
            this.gotResponse
        );

        message.build();

        this.ipcInterface.ipc.server.emit(
            {
                address : this.config.droneIp,
                port    : this.config.c2d_port
            },
            message.payload
        );
    }

    gotResponse(data){
        response=new parser.Response(data);
        console.log(response.message);
    }
}

module.exports=MiniDrone;
