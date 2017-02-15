'use strict';
const constants   =require('../lib/sharedARConstants.js');
const MiniDroneConfig =require('../entities/MiniDroneConfig.js');
const IPCInterface=require('../interfaces/ipc.js');
const parser=require('../parsers/miniDrone.js');

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

      this.ipcInterface.ipc.of[this.config.droneName].on(
        'connect',
        this.connectedToDrone
      );
    }

    connectedToDrone(){
        const message={
          'controller_type': this.config.controller_type,
          'controller_name': this.config.controller_name,
          'd2c_port': this.config.d2c_port
        }

        this.ipcInterface.ipc.of[this.config.droneName].on(
            'data',
            this.importDataFromDrone
        );

        this.ipcInterface.ipc.of[this.config.droneName].emit(
            JSON.stringify(message)
        );
    }


    importDataFromDrone(data){
        this.ipcInterface.ipc.disconnect(this.config.droneName);

        this.config.merge(data);

        this.ipcInterface.ipc.serveNet(
            this.config.d2c_port,
            'udp4',
            this.init
        );
    }

    init(){
        var message=new Message();
        message.data=new Buffer.allocUnsafe(4);

        message.data.writeUInt8(constants.ARCOMMANDS_ID_PROJECT_COMMON, 0);
        message.data.writeUInt8(constants.ARCOMMANDS_ID_COMMON_CLASS_COMMON, 1);
        message.data.writeUInt16LE(constants.ARCOMMANDS_ID_COMMON_COMMON_CMD_ALLSTATES, 2);

        this.ipcInterface.ipc.server.on(
            'message',
            this.gotResponse
        );

        console.log(message);

        this.ipcInterface.ipc.server.emit(
            {
                address : this.config.droneIp,
                port    : this.config.c2d_port
            },
            message
        );
    }

    gotResponse(data){
        response=new parser.Response(data);
        console.log(response.message);
    }
}

module.exports=MiniDrone;
