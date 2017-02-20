'use strict';
const Events=require('event-pubsub');
const Config =require('../configs/Wifi.js');
const Response=require('./connectors/Response.js');
const Message=require('./connectors/Message.js');
const ipc=require('node-ipc');
const controllers=require('../projects/deviceControllers.js');

class DroneWifi extends Events{
    constructor(){
      super();
      this.config   = new Config;
      this.discovery= new ipc.IPC;
      this.d2c      = new ipc.IPC;

      Object.assign(
        this.discovery.config,
        this.config.ipc.discovery
      );

      Object.assign(
        this.d2c.config,
        this.config.ipc.d2c
      );

      this.drones   = controllers.drones;
      this.projects = controllers.projects;
      this.message  = new Message(this);
    }

    connect(callback=function(){}){
      this.bound={};
      this.bound.connectedToDrone=this.connectedToDrone.bind(this);
      this.bound.init=this.init.bind(this);
      this.bound.d2cResponse=this.gotResponse.bind(this);

      this.d2c.serveNet(
          'udp4',
          this.bound.init
      );

      this.d2c.server.start();

      this.discovery.connectToNet(
        'drone',
        function(callback){
          this.discovery.of.drone.on(
            'connect',
            this.bound.connectedToDrone
          );

          this.bound.importDataFromDrone=this.importDataFromDrone.bind(this,callback);

          this.discovery.of.drone.on(
              'data',
              this.bound.importDataFromDrone
          );
        }.bind(this,callback)
      );
    }

    disconnect(){
      const payload=this.message.build(
        this.projects.common.id,
        this.projects.common.disconnect.id
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


    importDataFromDrone(callback,data){
        this.discovery.config.stopRetrying=true;
        this.discovery.disconnect('discovery');
        data=data.toString().replace(/\0/g,'');
        console.log(data)
        this.config.assign(
          data
        );

        this.droneSocket={
          address : this.discovery.config.networkHost,
          port    : this.config.c2d_port
        };

        // const project=this.projects.common;
        // let commandClass=project.Settings;
        // //console.log(project)
        //
        // const getSettingsState=this.message.build(
        //   project.info.id,
        //   commandClass.info.id,
        //   commandClass.AllSettings
        // );
        //
        // commandClass=project.Common;
        //
        // const getCommonState=this.message.build(
        //   project.info.id,
        //   commandClass.info.id,
        //   commandClass.AllStates
        // );
        //
        // commandClass=project.Controller;
        //
        // commandClass.isPiloting.piloting.value=1;
        //
        // const setPiloting=this.message.build(
        //   project.info.id,
        //   commandClass.info.id,
        //   commandClass.isPiloting
        // );
        //
        // this.message.send(getSettingsState);
        // this.message.send(getCommonState);

        this.emit(
          'connected',
          data
        );

        callback(data);
    }

    init(){
      this.d2c.server.on(
          'data',
          this.bound.d2cResponse
      );
    }

    gotResponse(data){
        const response=new Response(
          this,
          data
        );
    }
}

module.exports=DroneWifi;
