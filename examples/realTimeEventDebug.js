const parrot=require('../node-parrot-drone.js');
const util=require('util');

const drone=new parrot.Wifi;

drone.on(
  '*',
  function(type,data){
    //filter out some noise for you
    const filter=['message','messageSent', 'dronePing', 'dronePong'];
    if(filter.includes(type)){
      //low level debug stuff
      return;
    }
    console.log(` Detected ${type} event on drone with data of : `);
    console.log(util.inspect(data, { depth: null,colors:true }));
    console.log(
      `
        You can also listen for '${type}' events on the drone.

        drone.on(
          '${type}',
          (commandRef) => console.log(commandRef)
        );
      `
    );
  }
);

drone.connect();
