const parrot=require('../node-parrot-drone.js');

const drone=new parrot.Wifi;

drone.on(
  'batteryStateChanged',
  function(data){
    console.log(`Battery State : ${data.percent.value}`);
  }
);

drone.connect();
