var MiniDrone=require('../parrot-mini-drone.js').MiniDrone;

var drone=new MiniDrone;
drone.config.droneName='test-sumo';
drone.config.droneIp='192.168.2.1';
drone.config.d2c_port=drone.ipc.config.networkPort;
drone.config.discoveryPort=44444;

drone.connect();
