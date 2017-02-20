const parrot=require('../node-parrot-drone.js');
const drone=new parrot.Wifi;

drone.connect();

drone.on(
  'connected',
  function(){
    console.log('CONNECTED\n\n')

    //console.log(MoveMessage);

    setInterval(
      move,
      1000
    );
  }
);

function move(){
  const project=drone.projects.jpsumo;
  const commandClass=project.Piloting;

  //change the value of the args you want to change if applicable
  commandClass.PCMD.flag.value=1;
  commandClass.PCMD.speed.value=commandClass.PCMD.speed.value*-1||100;
  commandClass.PCMD.turn.value=0;

  //build a message requesting all settings
  const MoveMessage=drone.message.build(
    project.info.id,
    commandClass.info.id,
    commandClass.PCMD
  );
  drone.message.send(MoveMessage);
}

drone.on(
  'messageSent',
  function(data){
    console.log(data)
  }
);
