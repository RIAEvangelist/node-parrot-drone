'use strict';
const CommonClasses=require('./CommonClasses.js');
//https://github.com/RIAEvangelist/libARCommands/blob/ARSDK3_version_3_1_0/Xml/common_commands.xml

//All common drone commands
class CommonCommands extends CommonClasses{
  constructor(){
    super();

    //network commands
    this.network.push(
      //Signals the remote that the host will disconnect and close its
      //libARNetwork instance (and all threads that use libARNetwork)
      'disconnect'
    );

    //event commands
    this.event.push(
        //none
    );

    //settings commands
    this.settings.push(
        //Get all product settings, the product must send all settings
        'allSettings',
        //Reset all settings
        'reset',
        //Set Product name
        'productName',
        //Set current Country of controller
        'country',
        //Set Auto Country Settings
        'AutoCountry'
    );

    this.settings.productName.push(
      {
        //Product name
        name:'name',
        type:'string'
      }
    );

    this.settings.country.push(
      {
        //Country code with ISO 3166 format
        name:'code',
        type:'string'
      }
    );

    this.settings.AutoCountry.push(
      {
        //Boolean : 0 : Manual / 1 : Auto
        name:'automatic',
        bytes:1,
        type:'unsigned'
      }
    );


    //SettingsState commands
    this.settingsState.push(
      //State sent when all settings have been sent.
      'allSettingsChanged',
      //State sent when all settings has been resetting.
      'resetChanged',
      //Product name
      'productNameChanged',
      //Product versions
      'productVersionChanged',
      //Product serial number high byte
      'productSerialHighChanged',
      //Product serial number low byte
      'productSerialLowChanged',
      //Inform current Country set in product. (Answer to 'Country' command)
      'countryChanged',
      //Inform Auto Country Settings
      'autoCountryChanged'
    );

    this.settingsState.productNameChanged.push(
      {
        //Product name
        name:'code',
        type:'string'
      }
    );

    this.settingsState.productVersionChanged.push(
      {
        //Product software version
        name:'software',
        type:'string'
      },
      {
        //Product hardware version
        name:'hardware',
        type:'string'
      }
    );

    this.settingsState.productSerialHighChanged.push(
      {
        //Serial high number (hexadecimal value)
        name:'high',
        type:'string'
      }
    );

    this.settingsState.productSerialLowChanged.push(
      {
        //Serial low number (hexadecimal value)
        name:'low',
        type:'string'
      }
    );

    this.settingsState.countryChanged.push(
      {
        //Country code with ISO 3166 format, empty string means unknown country.
        name:'code',
        type:'string'
      }
    );

    this.settingsState.autoCountryChanged.push(
      {
        //Boolean : 0 : Manual / 1 : Auto
        name:'automatic',
        type:'unsigned',
        bytes:1
      }
    );

    //Common Commands
    this.common.push(
      //Get all product states.
      'allStates',
      //Set current date of controller
      'currentDate',
      //Set current time of controller
      'currentTime',
      //Command to ask reboot to product
      'reboot'
    );

    this.common.currentDate.push(
      {
        //Date with ISO-8601 format
        name:'automatic',
        type:'string'
      }
    );

    this.common.currentTime.push(
      {
        //Time with ISO-8601 format
        name:'time',
        type:'string'
      }
    );

    //Common state from product
    this.commonState.push(
      //State sent when all product states has been sent.
      'allStatesChanged',
      //Battery state
      'batteryStateChanged',
      //Mass storage state list
      'massStorageStateListChanged',
      //Mass storage info state list
      'massStorageInfoStateListChanged',
      //Current date state
      'currentDateChanged',
      //Current time state
      'currentTimeChanged',
      //Mass storage info remaining list
      'massStorageInfoRemainingListChanged',
      //Wifi Signal between controller and product state
      'wifiSignalChanged'
    );

    this.commonState.batteryStateChanged.push(
      {
        //Battery percentage
        name:'percent',
        type:'unsigned',
        bytes:1
      }
    );

    this.commonState.massStorageStateListChanged.push(
      {
        //Mass storage id (unique)
        name:'mass_storage_id',
        type:'unsigned',
        bytes:1
      },
      {
        //Mass storage name
        name:'name',
        type:'string'
      }
    );

    this.commonState.massStorageInfoStateListChanged.push(
      {
        //Mass storage state id (unique)
        name:'mass_storage_id',
        type:'unsigned',
        bytes:1
      },
      {
        //Mass storage size in MBytes
        name:'size',
        type:'unsigned',
        bytes:4
      },
      {
        //used_size in MB
        name:'used_size',
        type:'unsigned',
        bytes:4
      },
      {
        //Mass storage plugged (1 if mass storage is plugged, otherwise 0)
        name:'plugged',
        type:'unsigned',
        bytes:1
      },
      {
        //Mass storage full information state (1 if mass storage full, 0 otherwise).
        name:'full',
        type:'unsigned',
        bytes:1
      },
      {
        //Mass storage internal type state (1 if mass storage is internal, 0 otherwise)
        name:'internal',
        type:'unsigned',
        bytes:1
      }
    );

    this.commonState.currentDateChanged.push(
      {
        //Date with ISO-8601 format
        name:'time',
        type:'string'
      }
    );

    this.commonState.currentTimeChanged.push(
      {
        //Time with ISO-8601 format
        name:'time',
        type:'string'
      }
    );

    this.commonState.massStorageInfoRemainingListChanged.push(
      {
        //Mass storage free space in MBytes
        name:'free_space',
        type:'unsigned',
        bytes:4
      },
      {
        //Mass storage record time reamining in minutes
        name:'rec_time',
        type:'unsigned',
        bytes:2
      },
      {
        //Mass storage photo remaining
        name:'photo_remaining',
        type:'unsigned',
        bytes:4
      }
    );

    this.commonState.wifiSignalChanged.push(
      {
        //RSSI of the signal between controller and the product (in dbm)
        name:'rssi',
        type:'signed',
        bytes:2
      }
    );

    this.overHeat.push(
      //Switch off the drone when a overheat appeared
      'switchOff',
      //Ventilate the drone when a overheat appeared
      'ventilate'
    );

    this.overHeatState.push(
      //Overheat temperature reached
      'overHeatChanged',
      //Overheat regulation state changed
      'overHeatRegulationChanged'
    );

    this.overHeatState.overHeatRegulationChanged.push(
      {
        //Type of overheat regulation : 0 for ventilation, 1 for switch off
        name:'regulationType',
        type:'unsigned',
        bytes:1
      }
    );

    //Notify the device about the state of the controller application.
    this.controllerState.push(
      //Tell the device when the controller application enters/leaves the piloting HUD.
      'isPilotingChanged'
    );

    this.controllerState.isPilotingChanged.push(
      {
        //0 when the application is not in the piloting HUD, 1 when it enters the HUD.
        name:'piloting',
        type:'unsigned',
        bytes:1
      }
    );

    //Wifi settings commands
    this.wifiSettings.push(
  		//Send to product if it should use its outdoor wifi config, or indoor
      'outdoorSetting'
    );

    this.wifiSettings.outdoorSetting.push(
      {
        //1 if it should use outdoor wifi settings, 0 otherwise
        name:'outdoor',
        type:'unsigned',
        bytes:1
      }
    );

    //Wifi settings state from product
    this.wifiSettingsState.push(
    	//Wifi settings state from product
      'outdoorSettingsChanged'
    );

    //Status of the wifi config : either indoor or outdoor
    this.wifiSettingsState.outdoorSettingsChanged.push(
      {
        //1 if it should use outdoor wifi settings, 0 otherwise
        name:'outdoor',
        type:'unsigned',
        bytes:1
      }
    );

    //Mavlink flight plans commands
    this.mavlink.push(
    	//Start the flight plan
      'start',
      //Pause the flightplan (can be restarted with a start)
      'pause',
      //Stop the flightplan
      'stop'
    );

    this.mavlink.start.push(
      {
        //flight plan file path from the mavlink ftp root
        name:'filepath',
        type:'string'
      },
      {
        //type of the played mavlink file
        name:'type',
        type:'string',
        enum:[
          //  Mavlink file for FlightPlan
          'flightPlan',
          //Mavlink file for MapMyHouse
          'mapMyHouse'
        ]
      }
    );

    //Mavlink flight plans states commands
    this.mavlinkState.push(
      //Playing state of a mavlink flight plan
      'mavlinkFilePlayingStateChanged',
       //FlightPlan play state error
       'mavlinkPlayErrorStateChanged'
    );

    this.mavlinkState.mavlinkFilePlayingStateChanged.push(
      {
        //type of the played mavlink file
        name:'state',
        type:'string',
        enum:[
          //Mavlink file is playing
          'playing',
          //Mavlink file is stopped (arg filepath and type are useless in this state)
          'stopped',
          //Mavlink file is paused
          'paused'
        ]
      },
      {
        //flight plan file path from the mavlink ftp root
        name:'filepath',
        type:'string'
      },
      {
        //type of the played mavlink file
        name:'type',
        type:'string',
        enum:[
          //  Mavlink file for FlightPlan
          'flightPlan',
          //Mavlink file for MapMyHouse
          'mapMyHouse'
        ]
      }
    );

    this.mavlinkState.mavlinkPlayErrorStateChanged.push(
      {
        //State of play error
        name:'error',
        type:'string',
        enum:[
          //There is no error
          'none',
          //The drone is not in outdoor mode
          'notInOutDoorMode',
          //The gps is not fixed
          'gpsNotFixed'
        ]
      }
    );

    //Calibration commands
    this.calibration.push(
      //Sent when a calibration of the magnetometer is asked or is aborted
      'magnetoCalibration'
    );

    this.calibration.magnetoCalibration.push(
      {
        //1 if the calibration should be started, 0 if it should be aborted
        name:'calibrate',
        type:'unsigned',
        bytes:1
      }
    );

    //Status of the calibration
    this.calibrationState.push(
      //Sent when the state of the magneto calibration has changed
      'magnetoCalibrationStateChanged',
      //Status of the calibration requirement
      'magnetoCalibrationRequiredState',
      //Event sent by a product to inform about the axis to calibrate
      'magnetoCalibrationAxisToCalibrateChanged',
      //Status of the calibration process
      'magnetoCalibrationStartedChanged'
    );

    this.calibrationState.magnetoCalibrationStateChanged.push(
      {
        //State of the x axis (roll) calibration : 1 if calibration is done, 0 otherwise
        name:'xAxisCalibration',
        type:'unsigned',
        bytes:1
      },
      {
        //State of the y axis (pitch) calibration : 1 if calibration is done, 0 otherwise
        name:'yAxisCalibration',
        type:'unsigned',
        bytes:1
      },
      {
        //State of the z axis (yaw) calibration : 1 if calibration is done, 0 otherwise
        name:'zAxisCalibration',
        type:'unsigned',
        bytes:1
      },
      {
        //1 if calibration has failed, 0 otherwise. If this arg is 1, consider all previous arg as 0
        name:'calibrationFailed',
        type:'unsigned',
        bytes:1
      }
    );

    this.calibrationState.magnetoCalibrationRequiredState.push(
      {
        //1 if calibration is required, 0 if current calibration is still valid
        name:'required',
        type:'unsigned',
        bytes:1
      }
    );

    this.calibrationState.magnetoCalibrationAxisToCalibrateChanged.push(
      {
        //The axis to calibrate
        name:'axis',
        type:'string',
        enum:[
          //If the current calibration axis should be the x axis
          'xAxis',
          //If the current calibration axis should be the y axis
          'yAxis',
          //If the current calibration axis should be the z axis
          'zAxis',
          //If none of the axis should be calibrated
          'none'
        ]
      }
    );

    this.calibrationState.magnetoCalibrationStartedChanged.push(
      {
        //1 if calibration has started, 0 otherwise
        name:'started',
        type:'unsigned',
        bytes:1
      }
    );

    //Status of the camera settings
    this.cameraSettingsState.push(
      //Status of the camera settings
      'cameraSettingsChanged'
    );

    this.cameraSettingsState.cameraSettingsChanged.push(
      {
        //Value of the camera horizontal fov (in degree)
        name:'fov',
        type:'float',
        bytes:4
      },
      {
        //Value of max pan (right pan) (in degree)
        name:'panMax',
        type:'float',
        bytes:4
      },
      {
        //  Value of min pan (left pan) (in degree)
          name:'panMin',
          type:'float',
          bytes:4
      },
      {
        //Value of max tilt (top tilt) (in degree)
        name:'tiltMax',
        type:'float',
        bytes:4
      },
      {
        //Value of min tilt (bottom tilt) (in degree)
        name:'tiltMin',
        type:'float',
        bytes:4
      }
    );
  }
};

module.exports=CommonCommands;
