'use strict';
const Events=require('event-pubsub');

class Response extends Events{
    constructor(data){
      this.message={};
      if(data){
        this.parse(data);
      }
    }

    get raw(){
        return this.message.raw;
    }

    get type(){
        return this.message.type;
    }

    get id(){
        return this.message.id;
    }

    get data(){
        return this.message.data;
    }

    get index(){
        return this.message.index;
    }

    get size(){
        return this.message.size;
    }

    parse(data){
      this.message.raw     = data;
      this.message.type    = data.readUInt8(0);
      this.message.id      = data.readUInt8(1);
      this.message.index   = data.readUInt8(2);
      this.message.size    = data.readUInt32LE(3);

      this.message.data       = null;
      this.message.droneType  = null;
      this.message.payload    = {};

      if(this.message.size > 7){
        data.slice(7)
      }

      //
      // libARNetwork/Sources/ARNETWORK_Receiver.c#ARNETWORK_Receiver_ThreadRun
      //

      // if(this.message.type === constants.ARNETWORKAL_FRAME_TYPE_DATA_WITH_ACK){
      //   this._writePacket(this._createAck(networkFrame));
      // }
      //
      // if(
      //   this.message.type === constants.ARNETWORKAL_FRAME_TYPE_DATA_LOW_LATENCY
      //   && networkFrame.id === constants.BD_NET_DC_VIDEO_DATA_ID
      // ){
      //   var arstreamFrame = arstreamFrameParser(this.message.data);
      //   this._writePacket(this._createARStreamACK(arstreamFrame));
      // }

      //
      if(networkFrame.id === constants.BD_NET_DC_EVENT_ID){
        this.droneType = this.message.data.readUInt8(0);
        this.class = this.message.data.readUInt8(1);
        this.classID = this.message.data.readUInt16LE(2);
        switch (this.droneType){
          case constants.ARCOMMANDS_ID_PROJECT_COMMON:
            switch (this.class){
              case constants.ARCOMMANDS_ID_COMMON_CLASS_COMMONSTATE:

                this.message.payload.state={};

                switch (this.classID){
                  case constants.ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_BATTERYSTATECHANGED:
                    this.message.payload.state.battery = this.message.data.readUInt8(4);
                    break;
                  case constants.ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_ALLSTATESCHANGED:
                  case constants.ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGESTATELISTCHANGED:
                  case constants.ARCOMMANDS_ID_COMMON_COMMONSTATE_CMD_MASSSTORAGEINFOSTATELISTCHANGED:
                    break;
                  default:
                    console.log("Unhandled COMMON_CLASS_COMMONSTATE commandId: " + commandId);
                    break;
                }
                break;
              default:
                console.log("Unhandled PROJECT_COMMON commandClass: " + commandClass + ", commandId: " + commandId);
                break;
            }
            break;
          case constants.ARCOMMANDS_ID_PROJECT_JUMPINGSUMO:
            switch (commandClass){
              case constants.ARCOMMANDS_ID_JUMPINGSUMO_CLASS_PILOTINGSTATE:
                switch (commandId){
                  case constants.ARCOMMANDS_ID_JUMPINGSUMO_PILOTINGSTATE_CMD_POSTURECHANGED:
                    var state = this.message.data.readInt32LE(4);
                    switch(state){
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_POSTURECHANGED_STATE_STANDING:
                        this.navData.posture = { standing: true };
                        this.emit("postureStanding");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_POSTURECHANGED_STATE_JUMPER:
                        this.navData.posture = { jumper: true };
                        this.emit("postureJumper");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_POSTURECHANGED_STATE_KICKER:
                        this.navData.posture = { kicker: true };
                        this.emit("postureKicker");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_POSTURECHANGED_STATE_STUCK:
                        this.navData.posture = { stuck: true };
                        this.emit("postureStuck");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_POSTURECHANGED_STATE_UNKNOWN:
                        this.navData.posture = { unknown: true };
                        this.emit("postureUnknown");
                        break;
                      default:
                        console.log("Unhandled JUMPINGSUMO_PILOTINGSTATE_POSTURECHANGED_STATE state: " + state);
                        break;
                    }
                    break;
                  case constants.ARCOMMANDS_ID_JUMPINGSUMO_PILOTINGSTATE_CMD_ALERTSTATECHANGED:
                    var state = this.message.data.readInt32LE(4);
                    switch(state){
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_ALERTSTATECHANGED_STATE_NONE:
                        this.navData.alertState = {};
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_ALERTSTATECHANGED_STATE_CRITICAL_BATTERY:
                        this.navData.alertState = { batteryCritical: true };
                        this.emit("batteryCritical");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_PILOTINGSTATE_ALERTSTATECHANGED_STATE_LOW_BATTERY:
                        this.navData.alertState = { batteryLow: true };
                        this.emit("batteryLow");
                        break;
                      default:
                        console.log("Unhandled JUMPINGSUMO_PILOTINGSTATE_ALERTSTATECHANGED_STATE state: " + state);
                        break;
                    }
                    break;
                  default:
                    console.log("Unhandled JUMPINGSUMO_CLASS_PILOTINGSTATE commandId: " + commandId);
                    break;
                }
                break;
              case constants.ARCOMMANDS_ID_JUMPINGSUMO_CLASS_ANIMATIONSSTATE:
                switch (commandId){
                  case constants.ARCOMMANDS_ID_JUMPINGSUMO_ANIMATIONSSTATE_CMD_JUMPLOADCHANGED:
                    var state = this.message.data.readInt32LE(4);
                    switch(state){
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPLOADCHANGED_STATE_UNKNOWN:
                        this.navData.jumpLoad = { unknown: true };
                        this.emit("jumpLoadUnknown");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPLOADCHANGED_STATE_UNLOADED:
                        this.navData.jumpLoad = { unloaded: true };
                        this.emit("jumpLoadUnloaded");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPLOADCHANGED_STATE_LOADED:
                        this.navData.jumpLoad = { loaded: true };
                        this.emit("jumpLoadLoaded");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPLOADCHANGED_STATE_BUSY:
                        this.navData.jumpLoad = { busy: true };
                        this.emit("jumpLoadBusy");
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPLOADCHANGED_STATE_LOW_BATTERY_UNLOADED:
                        this.navData.jumpLoad = { lowBatteryUnloaded: true };
                        this.emit("jumpLoadLowBatteryUnloaded");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPLOADCHANGED_STATE_LOW_BATTERY_LOADED:
                        this.navData.jumpLoad = { lowBatteryLoaded: true };
                        this.emit("jumpLoadLowBatteryLoaded");
                        break;
                      default:
                        console.log("Unhandled JUMPINGSUMO_ANIMATIONSSTATE_JUMPLOADCHANGED_STATE state: " + state);
                        break;
                    }
                    break;
                  case constants.ARCOMMANDS_ID_JUMPINGSUMO_ANIMATIONSSTATE_CMD_JUMPMOTORPROBLEMCHANGED:
                    var error = this.message.data.readInt32LE(4);
                    switch(error){
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPMOTORPROBLEMCHANGED_ERROR_NONE:
                        this.navData.jumpMotorError = {};
                        this.emit("jumpMotorOK");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPMOTORPROBLEMCHANGED_ERROR_BLOCKED:
                        this.navData.jumpMotorError = { blocked: true };
                        this.emit("jumpMotorErrorBlocked");
                        break;
                      case constants.ARCOMMANDS_JUMPINGSUMO_ANIMATIONSSTATE_JUMPMOTORPROBLEMCHANGED_ERROR_OVER_HEATED:
                        this.navData.jumpMotorError = { overheated: true};
                        this.emit("jumpMotorErrorOverheated");
                        break;
                      default:
                        console.log("Unhandled JUMPINGSUMO_ANIMATIONSSTATE_JUMPMOTORPROBLEMCHANGED_ERROR error: " + error);
                        break;
                    }
                    break;
                  default:
                    console.log("Unhandled JUMPINGSUMO_CLASS_ANIMATIONSSTATE commandId: " + commandId);
                    break;
                }
                break;
              case constants.ARCOMMANDS_ID_JUMPINGSUMO_CLASS_NETWORKSTATE:
                switch (commandId){
                  case constants.ARCOMMANDS_ID_JUMPINGSUMO_NETWORKSTATE_CMD_LINKQUALITYCHANGED:
                    break;
                  default:
                    console.log("Unhandled JUMPINGSUMO_CLASS_NETWORKSTATE commandId: " + commandId);
                    break;
                }
                break;
              case constants.ARCOMMANDS_ID_JUMPINGSUMO_CLASS_MEDIASTREAMINGSTATE:
                switch (commandId){
                  case constants.ARCOMMANDS_ID_JUMPINGSUMO_MEDIASTREAMINGSTATE_CMD_VIDEOENABLECHANGED:
                    break;
                  default:
                    console.log("Unhandled JUMPINGSUMO_CLASS_MEDIASTREAMINGSTATE commandId: " + commandId);
                    break;
                }
                break;
              default:
                console.log("Unhandled PROJECT_JUMPINGSUMO commandClass: " + commandClass + ", commandId: " + commandId);
                break;
            }
            break;
          default:
            console.log("Unhandled commandProject: " + commandProject + ", commandClass: " + commandClass + ", commandId: " + commandId);
            break;
        }
      }

      //
      // libARNetwork/Sources/ARNETWORK_Receiver.c#ARNETWORK_Receiver_ThreadRun
      //
      if(networkFrame.id === constants.ARNETWORK_MANAGER_INTERNAL_BUFFER_ID_PING){
        this.navData.runningTime = this.message.data.readUInt32LE(0) + (this.message.data.readUInt32LE(4) / 1000000000.0);
        this._writePacket(this._createPong(networkFrame));
      }
    }
}

module.exports=Response;
