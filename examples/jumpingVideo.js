const parrot=require('../node-parrot-drone.js');
const drone=new parrot.Wifi;

drone.connect();

drone.on(
  'connected',
  function(){
    console.log('CONNECTED\n\n')

    const project=drone.projects.jpsumo;
    const commandClass=project.MediaStreaming;

    commandClass.VideoEnable.enable.value=1;

    const VideoEnableMessage=drone.message.build(
      project.info.id,
      commandClass.info.id,
      commandClass.VideoEnable
    );

    drone.message.send(VideoEnableMessage);
  }
);

drone.on(
  'VideoEnableChanged',
  function(data){
    console.log('Video state has changed : ',data);
  }
);
