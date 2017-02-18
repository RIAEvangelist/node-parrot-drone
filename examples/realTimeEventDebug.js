const parrot=require('../node-parrot-drone.js');

const drone=new parrot.Wifi;

drone.on(
  '*',
  function(type,data){
    console.log(` Detected ${type} event on drone with data of : `);
    console.log(data);
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
