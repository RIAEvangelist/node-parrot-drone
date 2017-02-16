'use strict';
const BaseClasses=require('./BaseClasses.js');
//https://github.com/RIAEvangelist/libARCommands/blob/ARSDK3_version_3_1_0/Xml/common_commands.xml

//All common drone command classes
class CommonClasses extends BaseClasses{
  constructor(){
    super();
    this.push(
      //Network related commands
      'network',
      //events from drone
      'event',
      //Settings commands
      'settings',
      //Settings state from drone
      'settingsState',
      //Common commands
      'common',
      //Common state from drone
      'commonState',
      //Over heat commands
      'overHeat',
      //Overheat state from drone
      'overHeatState',
      //Notify the drone about the state of the controller application.
      'controllerState',
      //Wifi settings commands
    	'wifiSettings',
    	//Wifi settings state from drone
      'wifiSettingsState',
    	//Mavlink flight plans commands
    	'mavlink',
      //Mavlink flight plans states commands
      'mavlinkState',
      //Calibration commands
      'calibration',
      //Status of the calibration
      'calibrationState',
      //Status of the camera settings
      'cameraSettingsState'
    );
  }
};

module.exports=CommonClasses;
