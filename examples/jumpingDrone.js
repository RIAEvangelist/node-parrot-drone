const parrot=require('../node-parrot-drone.js');
const drone=new parrot.Wifi;

drone.connect();

drone.on(
  'connect',
  function(){
    const project=drone.projects.jpsumo;
    const commandClass=project.Piloting;

    //change the value of the args you want to change if applicable
    project.Piloting.Posture.type.value=1;

    //build a message requesting all settings
    const PostureMessage=drone.message.build(
      project.id,
      commandClass.id,
      commandClass.Posture
    );

    drone.message.send(PostureMessage);
  }
);
