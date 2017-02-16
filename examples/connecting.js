var miniDrone=require('../parrot-mini-drone.js');

var drone=new miniDrone.Wifi;
drone.config.droneName='test-sumo';

drone.connect();
