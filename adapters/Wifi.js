'use strict';
const Config =require('../configs/Wifi.js');
const Response=require('./mappers/Response.js');
const Message=require('./mappers/Message.js');
const ipc=require('node-ipc');
const Projects=require('../api/Projects.js');

class MiniDroneWifi {
    constructor(){
      this.config=new Config;
      this.discovery=new ipc.IPC;
      this.d2c=new ipc.IPC;

      Object.assign(
        this.discovery.config,
        this.config.ipc.discovery
      );

      Object.assign(
        this.d2c.config,
        this.config.ipc.d2c
      );

      this.projects=new Projects;
      this.message=new Message(this.projects);
    }

    connect(){
      this.bound={};
      this.bound.connectedToDrone=this.connectedToDrone.bind(this);
      this.bound.importDataFromDrone=this.importDataFromDrone.bind(this);
      this.bound.init=this.init.bind(this);
      this.bound.d2cResponse=this.gotResponse.bind(this,this.d2c);

      this.d2c.serveNet(
          'udp4',
          this.bound.init
      );

      this.d2c.server.start();

      this.discovery.connectToNet(
        'drone',
        function(){
          this.discovery.of.drone.on(
            'connect',
            this.bound.connectedToDrone
          );

          this.discovery.of.drone.on(
              'data',
              this.bound.importDataFromDrone
          );
        }.bind(this)
      );
    }

    connectedToDrone(){
        console.log('connected to drone');
        const message={
          'controller_type': this.config.controller_type,
          'controller_name': this.config.controller_name,
          'd2c_port': this.d2c.config.networkPort
        }

        this.discovery.of.drone.emit(
            JSON.stringify(message)
        );
    }


    importDataFromDrone(data){
        this.discovery.config.stopRetrying=true;
        this.discovery.disconnect('discovery');
        data=data.toString().replace(/\0/g,'');
        console.log(
          'data',
          data
        );

        this.config.assign(
          data
        );

        const project=this.projects.common;

        this.message.projectID=project.id;
        this.message.classID=project.settings.id;
        this.message.command=project.settings.allSettings;

        const getSettingsState=this.message.build();

        this.message.classID=project.common.id;
        this.message.command=project.common.allStates;

        const getCommonState=this.message.build();

        this.message.classID=project.calibration.id;
        this.message.command=project.calibration.magnetoCalibration;
        this.message.command.calibrate.value=1;

        const calibrate=this.message.build();

        setTimeout(
          function(){
            this.d2c.server.emit(
                {
                    address : this.discovery.config.networkHost,
                    port    : this.config.c2d_port
                },
                getSettingsState
            );

            this.d2c.server.emit(
                {
                    address : this.discovery.config.networkHost,
                    port    : this.config.c2d_port
                },
                getCommonState
            );

            this.d2c.server.emit(
                {
                    address : this.discovery.config.networkHost,
                    port    : this.config.c2d_port
                },
                calibrate
            );
          }.bind(this),
          3000
        );
    }

    init(){
      this.d2c.server.on(
          'data',
          this.bound.d2cResponse
      );
    }

    gotResponse(ipc,data){
      console.log('<<<<<<<<<<<<>>>>>>>>>>>>>>>>');
        const response=new Response(
          this.message,
          this.d2c,
          {
            address : this.discovery.config.networkHost,
            port    : this.config.c2d_port
          },
          data
        );
    }
}

module.exports=MiniDroneWifi;
