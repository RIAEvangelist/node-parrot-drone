# projects.powerup
-----
### All commands specific to the Power Up.

Below is a table of all the powerup Project command classes.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Class Name | ID | Hex ID | Description |
|------------|----|--------|-------------|
|[Piloting](#projectspoweruppiloting)|0|0x0|All commands related to piloting the PowerUp|
|[PilotingState](#projectspoweruppilotingstate)|1|0x1|Piloting state from Power Up.|
|[PilotingSettings](#projectspoweruppilotingsettings)|2|0x2|Piloting settings|
|[PilotingSettingsState](#projectspoweruppilotingsettingsstate)|3|0x3|Piloting settings|
|[MediaRecord](#projectspowerupmediarecord)|4|0x4|Media recording management|
|[MediaRecordState](#projectspowerupmediarecordstate)|5|0x5|State of media recording|
|[MediaRecordEvent](#projectspowerupmediarecordevent)|6|0x6|Events of media recording|
|[NetworkSettings](#projectspowerupnetworksettings)|7|0x7|Network settings commands|
|[NetworkSettingsState](#projectspowerupnetworksettingsstate)|8|0x8|Network settings state from product|
|[Network](#projectspowerupnetwork)|9|0x9|Network related commands|
|[NetworkState](#projectspowerupnetworkstate)|10|0xa|Network state from Product|
|[MediaStreaming](#projectspowerupmediastreaming)|11|0xb|Control media streaming behavior.|
|[MediaStreamingState](#projectspowerupmediastreamingstate)|12|0xc|Media streaming status.|
|[VideoSettings](#projectspowerupvideosettings)|13|0xd|Video settings.|
|[VideoSettingsState](#projectspowerupvideosettingsstate)|14|0xe|Video settings state.|
|[Sounds](#projectspowerupsounds)|15|0xf|Sounds related commands.|
|[SoundsState](#projectspowerupsoundsstate)|16|0x10|Sound related events.|
# projects.powerup.Piloting
-----
### All commands related to piloting the PowerUp

The Piloting Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PCMD](#projectspoweruppilotingpcmd)|0|0x0|Ask the Power Up speed and turn ratio.|
|[UserTakeOff](#projectspoweruppilotingusertakeoff)|1|0x1|Set drone in user take off state|
|[MotorMode](#projectspoweruppilotingmotormode)|2|0x2|Motor mode|
## projects.powerup.Piloting.PCMD 

Ask the Power Up speed and turn ratio.




Example sending the ` PCMD ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Piloting;

//build a message requesting all settings
const PCMDMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PCMD
);

drone.message.send(PCMDMessage);

```


## projects.powerup.Piloting.UserTakeOff 

Set drone in user take off state




Example sending the ` UserTakeOff ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Piloting;

//build a message requesting all settings
const UserTakeOffMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.UserTakeOff
);

drone.message.send(UserTakeOffMessage);

```


## projects.powerup.Piloting.MotorMode 

Motor mode




Example sending the ` MotorMode ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Piloting;

//build a message requesting all settings
const MotorModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MotorMode
);

drone.message.send(MotorModeMessage);

```


# projects.powerup.PilotingState
-----
### Piloting state from Power Up.

The PilotingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AlertStateChanged](#projectspoweruppilotingstatealertstatechanged)|0|0x0|JS alert state changed|
|[FlyingStateChanged](#projectspoweruppilotingstateflyingstatechanged)|1|0x1|Drone flying state changed|
|[MotorModeChanged](#projectspoweruppilotingstatemotormodechanged)|2|0x2|Motor mode changed|
|[AttitudeChanged](#projectspoweruppilotingstateattitudechanged)|3|0x3|Drone attitude changed|
|[AltitudeChanged](#projectspoweruppilotingstatealtitudechanged)|4|0x4|Drone altitude changed|
## projects.powerup.PilotingState.AlertStateChanged 

JS alert state changed





Example binding to listen for the ` AlertStateChanged ` event from the drone :

```javascript

drone.on(
  'AlertStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.PilotingState.FlyingStateChanged 

Drone flying state changed





Example binding to listen for the ` FlyingStateChanged ` event from the drone :

```javascript

drone.on(
  'FlyingStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.PilotingState.MotorModeChanged 

Motor mode changed





Example binding to listen for the ` MotorModeChanged ` event from the drone :

```javascript

drone.on(
  'MotorModeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.PilotingState.AttitudeChanged 

Drone attitude changed





Example binding to listen for the ` AttitudeChanged ` event from the drone :

```javascript

drone.on(
  'AttitudeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.PilotingState.AltitudeChanged 

Drone altitude changed





Example binding to listen for the ` AltitudeChanged ` event from the drone :

```javascript

drone.on(
  'AltitudeChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.PilotingSettings
-----
### Piloting settings

The PilotingSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[set](#projectspoweruppilotingsettingsset)|0|0x0|Set the given setting|
## projects.powerup.PilotingSettings.set 

Set the given setting




Example sending the ` set ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const setMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.set
);

drone.message.send(setMessage);

```


# projects.powerup.PilotingSettingsState
-----
### Piloting settings

The PilotingSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[settingChanged](#projectspoweruppilotingsettingsstatesettingchanged)|0|0x0|Fired when a setting has changed|
## projects.powerup.PilotingSettingsState.settingChanged 

Fired when a setting has changed





Example binding to listen for the ` settingChanged ` event from the drone :

```javascript

drone.on(
  'settingChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.MediaRecord
-----
### Media recording management

The MediaRecord Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureV2](#projectspowerupmediarecordpicturev2)|0|0x0|Take picture|
|[VideoV2](#projectspowerupmediarecordvideov2)|1|0x1|Video record|
## projects.powerup.MediaRecord.PictureV2 

Take picture




Example sending the ` PictureV2 ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const PictureV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PictureV2
);

drone.message.send(PictureV2Message);

```


## projects.powerup.MediaRecord.VideoV2 

Video record




Example sending the ` VideoV2 ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const VideoV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoV2
);

drone.message.send(VideoV2Message);

```


# projects.powerup.MediaRecordState
-----
### State of media recording

The MediaRecordState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureStateChangedV2](#projectspowerupmediarecordstatepicturestatechangedv2)|0|0x0|State of device picture recording changed|
|[VideoStateChangedV2](#projectspowerupmediarecordstatevideostatechangedv2)|1|0x1|State of device video recording changed|
## projects.powerup.MediaRecordState.PictureStateChangedV2 

State of device picture recording changed





Example binding to listen for the ` PictureStateChangedV2 ` event from the drone :

```javascript

drone.on(
  'PictureStateChangedV2',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.MediaRecordState.VideoStateChangedV2 

State of device video recording changed





Example binding to listen for the ` VideoStateChangedV2 ` event from the drone :

```javascript

drone.on(
  'VideoStateChangedV2',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.MediaRecordEvent
-----
### Events of media recording

The MediaRecordEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureEventChanged](#projectspowerupmediarecordeventpictureeventchanged)|0|0x0|Event of picture recording|
|[VideoEventChanged](#projectspowerupmediarecordeventvideoeventchanged)|1|0x1|Event of video recording|
## projects.powerup.MediaRecordEvent.PictureEventChanged 

Event of picture recording





Example binding to listen for the ` PictureEventChanged ` event from the drone :

```javascript

drone.on(
  'PictureEventChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.MediaRecordEvent.VideoEventChanged 

Event of video recording





Example binding to listen for the ` VideoEventChanged ` event from the drone :

```javascript

drone.on(
  'VideoEventChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.NetworkSettings
-----
### Network settings commands

The NetworkSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiSelection](#projectspowerupnetworksettingswifiselection)|0|0x0|Auto_select channel of choosen band|
## projects.powerup.NetworkSettings.WifiSelection 

Auto_select channel of choosen band




Example sending the ` WifiSelection ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.NetworkSettings;

//build a message requesting all settings
const WifiSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiSelection
);

drone.message.send(WifiSelectionMessage);

```


# projects.powerup.NetworkSettingsState
-----
### Network settings state from product

The NetworkSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiSelectionChanged](#projectspowerupnetworksettingsstatewifiselectionchanged)|0|0x0|Wifi selection from product|
## projects.powerup.NetworkSettingsState.WifiSelectionChanged 

Wifi selection from product





Example binding to listen for the ` WifiSelectionChanged ` event from the drone :

```javascript

drone.on(
  'WifiSelectionChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.Network
-----
### Network related commands

The Network Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiScan](#projectspowerupnetworkwifiscan)|0|0x0|Launches wifi network scan|
|[WifiAuthChannel](#projectspowerupnetworkwifiauthchannel)|1|0x1|Controller inquire the list of authorized wifi channels.|
## projects.powerup.Network.WifiScan 

Launches wifi network scan




Example sending the ` WifiScan ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Network;

//build a message requesting all settings
const WifiScanMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiScan
);

drone.message.send(WifiScanMessage);

```


## projects.powerup.Network.WifiAuthChannel 

Controller inquire the list of authorized wifi channels.




Example sending the ` WifiAuthChannel ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Network;

//build a message requesting all settings
const WifiAuthChannelMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiAuthChannel
);

drone.message.send(WifiAuthChannelMessage);

```


# projects.powerup.NetworkState
-----
### Network state from Product

The NetworkState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiScanListChanged](#projectspowerupnetworkstatewifiscanlistchanged)|0|0x0|One scanning result found|
|[AllWifiScanChanged](#projectspowerupnetworkstateallwifiscanchanged)|1|0x1|State sent when all scanning result sent|
|[WifiAuthChannelListChanged](#projectspowerupnetworkstatewifiauthchannellistchanged)|2|0x2|Notify of an Authorized Channel.|
|[AllWifiAuthChannelChanged](#projectspowerupnetworkstateallwifiauthchannelchanged)|3|0x3|Notify the end of the list of Authorized wifi Channel.|
|[LinkQualityChanged](#projectspowerupnetworkstatelinkqualitychanged)|4|0x4|Notification sent by the firmware to give an indication of the WiFi link quality.|
## projects.powerup.NetworkState.WifiScanListChanged 

One scanning result found





Example binding to listen for the ` WifiScanListChanged ` event from the drone :

```javascript

drone.on(
  'WifiScanListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.NetworkState.AllWifiScanChanged 

State sent when all scanning result sent





Example binding to listen for the ` AllWifiScanChanged ` event from the drone :

```javascript

drone.on(
  'AllWifiScanChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.NetworkState.WifiAuthChannelListChanged 

Notify of an Authorized Channel.





Example binding to listen for the ` WifiAuthChannelListChanged ` event from the drone :

```javascript

drone.on(
  'WifiAuthChannelListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.NetworkState.AllWifiAuthChannelChanged 

Notify the end of the list of Authorized wifi Channel.





Example binding to listen for the ` AllWifiAuthChannelChanged ` event from the drone :

```javascript

drone.on(
  'AllWifiAuthChannelChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.NetworkState.LinkQualityChanged 

Notification sent by the firmware to give an indication of the WiFi link quality.





Example binding to listen for the ` LinkQualityChanged ` event from the drone :

```javascript

drone.on(
  'LinkQualityChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.MediaStreaming
-----
### Control media streaming behavior.

The MediaStreaming Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[VideoEnable](#projectspowerupmediastreamingvideoenable)|0|0x0|Enable/disable video streaming.|
## projects.powerup.MediaStreaming.VideoEnable 

Enable/disable video streaming.




Example sending the ` VideoEnable ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.MediaStreaming;

//build a message requesting all settings
const VideoEnableMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoEnable
);

drone.message.send(VideoEnableMessage);

```


# projects.powerup.MediaStreamingState
-----
### Media streaming status.

The MediaStreamingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[VideoEnableChanged](#projectspowerupmediastreamingstatevideoenablechanged)|0|0x0|Return video streaming status.|
## projects.powerup.MediaStreamingState.VideoEnableChanged 

Return video streaming status.





Example binding to listen for the ` VideoEnableChanged ` event from the drone :

```javascript

drone.on(
  'VideoEnableChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.VideoSettings
-----
### Video settings.

The VideoSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Autorecord](#projectspowerupvideosettingsautorecord)|0|0x0|Set video automatic recording state.|
|[VideoMode](#projectspowerupvideosettingsvideomode)|1|0x1|Set video mode|
## projects.powerup.VideoSettings.Autorecord 

Set video automatic recording state.




Example sending the ` Autorecord ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.VideoSettings;

//build a message requesting all settings
const AutorecordMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Autorecord
);

drone.message.send(AutorecordMessage);

```


## projects.powerup.VideoSettings.VideoMode 

Set video mode




Example sending the ` VideoMode ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.VideoSettings;

//build a message requesting all settings
const VideoModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoMode
);

drone.message.send(VideoModeMessage);

```


# projects.powerup.VideoSettingsState
-----
### Video settings state.

The VideoSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AutorecordChanged](#projectspowerupvideosettingsstateautorecordchanged)|0|0x0|Get video automatic recording status.|
|[VideoModeChanged](#projectspowerupvideosettingsstatevideomodechanged)|1|0x1|Video mode|
## projects.powerup.VideoSettingsState.AutorecordChanged 

Get video automatic recording status.





Example binding to listen for the ` AutorecordChanged ` event from the drone :

```javascript

drone.on(
  'AutorecordChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.powerup.VideoSettingsState.VideoModeChanged 

Video mode





Example binding to listen for the ` VideoModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoModeChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.powerup.Sounds
-----
### Sounds related commands.

The Sounds Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[buzz](#projectspowerupsoundsbuzz)|0|0x0|Enable/disable the buzzer sound|
## projects.powerup.Sounds.buzz 

Enable/disable the buzzer sound




Example sending the ` buzz ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Sounds;

//build a message requesting all settings
const buzzMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.buzz
);

drone.message.send(buzzMessage);

```


# projects.powerup.SoundsState
-----
### Sound related events.

The SoundsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[buzzChanged](#projectspowerupsoundsstatebuzzchanged)|0|0x0|State of the buzzer|
## projects.powerup.SoundsState.buzzChanged 

State of the buzzer





Example binding to listen for the ` buzzChanged ` event from the drone :

```javascript

drone.on(
  'buzzChanged',
  function(data){
    console.log(data);
  }
)

```

