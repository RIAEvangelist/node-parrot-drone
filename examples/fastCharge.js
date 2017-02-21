const parrot=require('../node-parrot-drone.js');
const drone=new parrot.Wifi;

drone.connect();

drone.on(
  'connected',
  function(){
    console.log('CONNECTED\n\n')

    const project=drone.projects.common;
    const commandClass=project.Charger;

    //change the value of the args you want to change if applicable
    commandClass.rate.value=2;

    //build a message requesting all settings
    const SetMaxChargeRateMessage=drone.message.build(
      project.info.id,
      commandClass.info.id,
      commandClass.SetMaxChargeRate
    );

    drone.message.send(SetMaxChargeRateMessage);
  }
);

drone.on(
  'MaxChargeRateChanged',
  function(commandObject){
    console.log(commandObject);
  }
);
