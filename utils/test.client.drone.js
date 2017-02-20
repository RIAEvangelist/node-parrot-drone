const parrot=require('../node-parrot-drone.js');

const drone=new parrot.Wifi;

drone.discovery.config.networkHost='localhost';
drone.d2c.config.networkHost='localhost';


drone.connect();
