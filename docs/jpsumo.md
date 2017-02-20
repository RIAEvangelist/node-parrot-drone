# projects.jpsumo
-----
### All commands specific to the Jumping Sumo.

Below is a table of all the jpsumo Project command classes.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Class Name | ID | Hex ID | Description |
|------------|----|--------|-------------|
|[Piloting](#projectsjpsumopiloting)|0|0x0|All commands related to piloting the JumpingSumo|
|[PilotingState](#projectsjpsumopilotingstate)|1|0x1|Animations state from JS.|
|[Animations](#projectsjpsumoanimations)|2|0x2|Animation commands|
|[AnimationsState](#projectsjpsumoanimationsstate)|3|0x3|Animations state from JS.|
|[SettingsState](#projectsjpsumosettingsstate)|5|0x5|Settings state from product|
|[MediaRecord](#projectsjpsumomediarecord)|6|0x6|Media recording management|
|[MediaRecordState](#projectsjpsumomediarecordstate)|7|0x7|State of media recording|
|[NetworkSettings](#projectsjpsumonetworksettings)|8|0x8|Network settings commands|
|[NetworkSettingsState](#projectsjpsumonetworksettingsstate)|9|0x9|Network settings state from product|
|[Network](#projectsjpsumonetwork)|10|0xa|Network related commands|
|[NetworkState](#projectsjpsumonetworkstate)|11|0xb|Network state from Product|
|[AudioSettings](#projectsjpsumoaudiosettings)|12|0xc|Audio settings.|
|[AudioSettingsState](#projectsjpsumoaudiosettingsstate)|13|0xd|Audio settings state.|
|[RoadPlan](#projectsjpsumoroadplan)|14|0xe|RoadPlan commands.|
|[RoadPlanState](#projectsjpsumoroadplanstate)|15|0xf|RoadPlan command responses.|
|[SpeedSettings](#projectsjpsumospeedsettings)|16|0x10|Speed Settings commands|
|[SpeedSettingsState](#projectsjpsumospeedsettingsstate)|17|0x11|Speed Settings state from product|
|[MediaStreaming](#projectsjpsumomediastreaming)|18|0x12|Control media streaming behavior.|
|[MediaStreamingState](#projectsjpsumomediastreamingstate)|19|0x13|Media streaming status.|
|[MediaRecordEvent](#projectsjpsumomediarecordevent)|20|0x14|Events of media recording|
|[VideoSettings](#projectsjpsumovideosettings)|21|0x15|Video settings.|
|[VideoSettingsState](#projectsjpsumovideosettingsstate)|22|0x16|Video settings state.|
# projects.jpsumo.Piloting
-----
### All commands related to piloting the JumpingSumo

The Piloting Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PCMD](#projectsjpsumopilotingpcmd)|0|0x0|Ask the JS speed and turn ratio.|
|[Posture](#projectsjpsumopilotingposture)|1|0x1|Request a posture|
|[addCapOffset](#projectsjpsumopilotingaddcapoffset)|2|0x2|Add the specified offset to the current cap.|
## projects.jpsumo.Piloting.PCMD

Ask the JS speed and turn ratio.





argument|type|description|
|--------|----|-----------||flag|u8|Boolean for "touch screen".|
|speed|i8|Speed value [_100_100].|
|turn|i8|Turn value. [_100_100]|

Example sending the ` PCMD ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Piloting;

//build a message requesting all settings
const PCMDMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PCMD
);

drone.message.send(PCMDMessage);

```


## projects.jpsumo.Piloting.Posture

Request a posture





argument|type|description|
|--------|----|-----------||type|enum|Type of Posture|

Example sending the ` Posture ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Piloting;

//build a message requesting all settings
const PostureMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Posture
);

drone.message.send(PostureMessage);

```


## projects.jpsumo.Piloting.addCapOffset

Add the specified offset to the current cap.





argument|type|description|
|--------|----|-----------||offset|float|Offset value in radians.|

Example sending the ` addCapOffset ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Piloting;

//build a message requesting all settings
const addCapOffsetMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.addCapOffset
);

drone.message.send(addCapOffsetMessage);

```


# projects.jpsumo.PilotingState
-----
### Animations state from JS.

The PilotingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PostureChanged](#projectsjpsumopilotingstateposturechanged)|0|0x0|State of posture changed.|
|[AlertStateChanged](#projectsjpsumopilotingstatealertstatechanged)|1|0x1|JS alert state changed|
|[SpeedChanged](#projectsjpsumopilotingstatespeedchanged)|2|0x2|Notification sent when JS speed changes.|
## projects.jpsumo.PilotingState.PostureChanged

State of posture changed.





argument|type|description|
|--------|----|-----------||state|enum|State of posture|


Example binding to listen for the ` PostureChanged ` event from the drone :

```javascript

drone.on(
  'PostureChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.PilotingState.AlertStateChanged

JS alert state changed





argument|type|description|
|--------|----|-----------||state|enum|JS alert state|


Example binding to listen for the ` AlertStateChanged ` event from the drone :

```javascript

drone.on(
  'AlertStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.PilotingState.SpeedChanged

Notification sent when JS speed changes.





argument|type|description|
|--------|----|-----------||speed|i8|Speed command applied to motors in range [_100;100].|
|realSpeed|i16|Actual real_world speed in cm/s. Value _32768 returned if not available.|


Example binding to listen for the ` SpeedChanged ` event from the drone :

```javascript

drone.on(
  'SpeedChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.Animations
-----
### Animation commands

The Animations Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[JumpStop](#projectsjpsumoanimationsjumpstop)|0|0x0|Stop jump, emergency jump stop, stop jump motor and stay there.|
|[JumpCancel](#projectsjpsumoanimationsjumpcancel)|1|0x1|Cancel jump and come back to previous state (if possible).|
|[JumpLoad](#projectsjpsumoanimationsjumpload)|2|0x2|Request jump loading|
|[Jump](#projectsjpsumoanimationsjump)|3|0x3|Request a jump|
|[SimpleAnimation](#projectsjpsumoanimationssimpleanimation)|4|0x4|Play a parameterless animation.|
## projects.jpsumo.Animations.JumpStop

Stop jump, emergency jump stop, stop jump motor and stay there.





argument|type|description|
|--------|----|-----------|
Example sending the ` JumpStop ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//build a message requesting all settings
const JumpStopMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.JumpStop
);

drone.message.send(JumpStopMessage);

```


## projects.jpsumo.Animations.JumpCancel

Cancel jump and come back to previous state (if possible).





argument|type|description|
|--------|----|-----------|
Example sending the ` JumpCancel ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//build a message requesting all settings
const JumpCancelMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.JumpCancel
);

drone.message.send(JumpCancelMessage);

```


## projects.jpsumo.Animations.JumpLoad

Request jump loading





argument|type|description|
|--------|----|-----------|
Example sending the ` JumpLoad ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//build a message requesting all settings
const JumpLoadMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.JumpLoad
);

drone.message.send(JumpLoadMessage);

```


## projects.jpsumo.Animations.Jump

Request a jump





argument|type|description|
|--------|----|-----------||type|enum|Type of jump|

Example sending the ` Jump ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//build a message requesting all settings
const JumpMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Jump
);

drone.message.send(JumpMessage);

```


## projects.jpsumo.Animations.SimpleAnimation

Play a parameterless animation.





argument|type|description|
|--------|----|-----------||id|enum|Animation ID.|

Example sending the ` SimpleAnimation ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//build a message requesting all settings
const SimpleAnimationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SimpleAnimation
);

drone.message.send(SimpleAnimationMessage);

```


# projects.jpsumo.AnimationsState
-----
### Animations state from JS.

The AnimationsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[JumpLoadChanged](#projectsjpsumoanimationsstatejumploadchanged)|0|0x0|State of jump load changed|
|[JumpTypeChanged](#projectsjpsumoanimationsstatejumptypechanged)|1|0x1|State of jump type changed.|
|[JumpMotorProblemChanged](#projectsjpsumoanimationsstatejumpmotorproblemchanged)|2|0x2|State about the jump motor problem|
## projects.jpsumo.AnimationsState.JumpLoadChanged

State of jump load changed





argument|type|description|
|--------|----|-----------||state|enum|State of jump load|


Example binding to listen for the ` JumpLoadChanged ` event from the drone :

```javascript

drone.on(
  'JumpLoadChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.AnimationsState.JumpTypeChanged

State of jump type changed.





argument|type|description|
|--------|----|-----------||state|enum|State of jump type.|


Example binding to listen for the ` JumpTypeChanged ` event from the drone :

```javascript

drone.on(
  'JumpTypeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.AnimationsState.JumpMotorProblemChanged

State about the jump motor problem





argument|type|description|
|--------|----|-----------||error|enum|Enum describing the problem of the motor|


Example binding to listen for the ` JumpMotorProblemChanged ` event from the drone :

```javascript

drone.on(
  'JumpMotorProblemChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.SettingsState
-----
### Settings state from product

The SettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ProductGPSVersionChanged](#projectsjpsumosettingsstateproductgpsversionchanged)|0|0x0|@deprecated Product GPS versions|
## projects.jpsumo.SettingsState.ProductGPSVersionChanged

@deprecated Product GPS versions





argument|type|description|
|--------|----|-----------||software|string|Product GPS software version|
|hardware|string|Product GPS hardware version|


Example binding to listen for the ` ProductGPSVersionChanged ` event from the drone :

```javascript

drone.on(
  'ProductGPSVersionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.MediaRecord
-----
### Media recording management

The MediaRecord Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Picture](#projectsjpsumomediarecordpicture)|0|0x0|@deprecated Take picture|
|[Video](#projectsjpsumomediarecordvideo)|1|0x1|@deprecated Video record|
|[PictureV2](#projectsjpsumomediarecordpicturev2)|2|0x2|Take picture|
|[VideoV2](#projectsjpsumomediarecordvideov2)|3|0x3|Video record|
## projects.jpsumo.MediaRecord.Picture

@deprecated Take picture





argument|type|description|
|--------|----|-----------||mass_storage_id|u8|Mass storage id to take picture|

Example sending the ` Picture ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const PictureMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Picture
);

drone.message.send(PictureMessage);

```


## projects.jpsumo.MediaRecord.Video

@deprecated Video record





argument|type|description|
|--------|----|-----------||record|enum|Command to record video|
|mass_storage_id|u8|Mass storage id to record|

Example sending the ` Video ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const VideoMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Video
);

drone.message.send(VideoMessage);

```


## projects.jpsumo.MediaRecord.PictureV2

Take picture





argument|type|description|
|--------|----|-----------|
Example sending the ` PictureV2 ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const PictureV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PictureV2
);

drone.message.send(PictureV2Message);

```


## projects.jpsumo.MediaRecord.VideoV2

Video record





argument|type|description|
|--------|----|-----------||record|enum|Command to record video|

Example sending the ` VideoV2 ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const VideoV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoV2
);

drone.message.send(VideoV2Message);

```


# projects.jpsumo.MediaRecordState
-----
### State of media recording

The MediaRecordState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureStateChanged](#projectsjpsumomediarecordstatepicturestatechanged)|0|0x0|@deprecated State of picture recording|
|[VideoStateChanged](#projectsjpsumomediarecordstatevideostatechanged)|1|0x1|@deprecated State of video recording|
|[PictureStateChangedV2](#projectsjpsumomediarecordstatepicturestatechangedv2)|2|0x2|State of device picture recording changed|
|[VideoStateChangedV2](#projectsjpsumomediarecordstatevideostatechangedv2)|3|0x3|State of device video recording changed|
## projects.jpsumo.MediaRecordState.PictureStateChanged

@deprecated State of picture recording





argument|type|description|
|--------|----|-----------||state|u8|1 if picture has been taken, 0 otherwise|
|mass_storage_id|u8|Mass storage id where the picture was recorded|


Example binding to listen for the ` PictureStateChanged ` event from the drone :

```javascript

drone.on(
  'PictureStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.MediaRecordState.VideoStateChanged

@deprecated State of video recording





argument|type|description|
|--------|----|-----------||state|enum|State of video|
|mass_storage_id|u8|Mass storage id where the video was recorded|


Example binding to listen for the ` VideoStateChanged ` event from the drone :

```javascript

drone.on(
  'VideoStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.MediaRecordState.PictureStateChangedV2

State of device picture recording changed





argument|type|description|
|--------|----|-----------||state|enum|State of device picture recording|
|error|enum|Error to explain the state|


Example binding to listen for the ` PictureStateChangedV2 ` event from the drone :

```javascript

drone.on(
  'PictureStateChangedV2',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.MediaRecordState.VideoStateChangedV2

State of device video recording changed





argument|type|description|
|--------|----|-----------||state|enum|State of device video recording|
|error|enum|Error to explain the state|


Example binding to listen for the ` VideoStateChangedV2 ` event from the drone :

```javascript

drone.on(
  'VideoStateChangedV2',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.NetworkSettings
-----
### Network settings commands

The NetworkSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiSelection](#projectsjpsumonetworksettingswifiselection)|0|0x0|Auto_select channel of choosen band|
## projects.jpsumo.NetworkSettings.WifiSelection

Auto_select channel of choosen band





argument|type|description|
|--------|----|-----------||type|enum|The type of wifi selection (auto, manual)|
|band|enum|The allowed band(s) : 2.4 Ghz, 5 Ghz, or all|
|channel|u8|The channel (not used in auto mode)|

Example sending the ` WifiSelection ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.NetworkSettings;

//build a message requesting all settings
const WifiSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiSelection
);

drone.message.send(WifiSelectionMessage);

```


# projects.jpsumo.NetworkSettingsState
-----
### Network settings state from product

The NetworkSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiSelectionChanged](#projectsjpsumonetworksettingsstatewifiselectionchanged)|0|0x0|Wifi selection from product|
## projects.jpsumo.NetworkSettingsState.WifiSelectionChanged

Wifi selection from product





argument|type|description|
|--------|----|-----------||type|enum|The type of wifi selection settings|
|band|enum|The actual wifi band state|
|channel|u8|The channel (depends of the band)|


Example binding to listen for the ` WifiSelectionChanged ` event from the drone :

```javascript

drone.on(
  'WifiSelectionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.Network
-----
### Network related commands

The Network Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiScan](#projectsjpsumonetworkwifiscan)|0|0x0|Launches wifi network scan|
|[WifiAuthChannel](#projectsjpsumonetworkwifiauthchannel)|1|0x1|Controller inquire the list of authorized wifi channels.|
## projects.jpsumo.Network.WifiScan

Launches wifi network scan





argument|type|description|
|--------|----|-----------||band|enum|The band(s) : 2.4 Ghz, 5 Ghz, or both|

Example sending the ` WifiScan ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Network;

//build a message requesting all settings
const WifiScanMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiScan
);

drone.message.send(WifiScanMessage);

```


## projects.jpsumo.Network.WifiAuthChannel

Controller inquire the list of authorized wifi channels.





argument|type|description|
|--------|----|-----------|
Example sending the ` WifiAuthChannel ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Network;

//build a message requesting all settings
const WifiAuthChannelMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiAuthChannel
);

drone.message.send(WifiAuthChannelMessage);

```


# projects.jpsumo.NetworkState
-----
### Network state from Product

The NetworkState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiScanListChanged](#projectsjpsumonetworkstatewifiscanlistchanged)|0|0x0|One scanning result found|
|[AllWifiScanChanged](#projectsjpsumonetworkstateallwifiscanchanged)|1|0x1|State sent when all scanning result sent|
|[WifiAuthChannelListChanged](#projectsjpsumonetworkstatewifiauthchannellistchanged)|2|0x2|Notify of an Authorized Channel.|
|[AllWifiAuthChannelChanged](#projectsjpsumonetworkstateallwifiauthchannelchanged)|3|0x3|Notify the end of the list of Authorized wifi Channel.|
|[LinkQualityChanged](#projectsjpsumonetworkstatelinkqualitychanged)|4|0x4|Notification sent by the firmware to give an indication of the WiFi link quality.|
## projects.jpsumo.NetworkState.WifiScanListChanged

One scanning result found





argument|type|description|
|--------|----|-----------||ssid|string|SSID of the AP|
|rssi|i16|RSSI of the AP in dbm (negative value)|
|band|enum|The band : 2.4 GHz or 5 GHz|
|channel|u8|Channel of the AP|


Example binding to listen for the ` WifiScanListChanged ` event from the drone :

```javascript

drone.on(
  'WifiScanListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.NetworkState.AllWifiScanChanged

State sent when all scanning result sent





argument|type|description|
|--------|----|-----------|

Example binding to listen for the ` AllWifiScanChanged ` event from the drone :

```javascript

drone.on(
  'AllWifiScanChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.NetworkState.WifiAuthChannelListChanged

Notify of an Authorized Channel.





argument|type|description|
|--------|----|-----------||band|enum|The band of this channel : 2.4 GHz or 5 GHz|
|channel|u8|The authorized channel.|
|in_or_out|u8|Bit 0 is 1 if channel is authorized outside (0 otherwise) ; Bit 1 is 1 if channel is authorized inside (0 otherwise)|


Example binding to listen for the ` WifiAuthChannelListChanged ` event from the drone :

```javascript

drone.on(
  'WifiAuthChannelListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.NetworkState.AllWifiAuthChannelChanged

Notify the end of the list of Authorized wifi Channel.





argument|type|description|
|--------|----|-----------|

Example binding to listen for the ` AllWifiAuthChannelChanged ` event from the drone :

```javascript

drone.on(
  'AllWifiAuthChannelChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.NetworkState.LinkQualityChanged

Notification sent by the firmware to give an indication of the WiFi link quality.





argument|type|description|
|--------|----|-----------||quality|u8|The WiFi link quality in range 0_6, the higher the value, the higher the link quality.|


Example binding to listen for the ` LinkQualityChanged ` event from the drone :

```javascript

drone.on(
  'LinkQualityChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.AudioSettings
-----
### Audio settings.

The AudioSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MasterVolume](#projectsjpsumoaudiosettingsmastervolume)|0|0x0|Master volume control.|
|[Theme](#projectsjpsumoaudiosettingstheme)|1|0x1|Audio Theme.|
## projects.jpsumo.AudioSettings.MasterVolume

Master volume control.





argument|type|description|
|--------|----|-----------||volume|u8|Master audio volume [0_100].|

Example sending the ` MasterVolume ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.AudioSettings;

//build a message requesting all settings
const MasterVolumeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MasterVolume
);

drone.message.send(MasterVolumeMessage);

```


## projects.jpsumo.AudioSettings.Theme

Audio Theme.





argument|type|description|
|--------|----|-----------||theme|enum|The audio theme to set.|

Example sending the ` Theme ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.AudioSettings;

//build a message requesting all settings
const ThemeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Theme
);

drone.message.send(ThemeMessage);

```


# projects.jpsumo.AudioSettingsState
-----
### Audio settings state.

The AudioSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MasterVolumeChanged](#projectsjpsumoaudiosettingsstatemastervolumechanged)|0|0x0|Master volume control.|
|[ThemeChanged](#projectsjpsumoaudiosettingsstatethemechanged)|1|0x1|Command to notify controller of new Audio Theme.|
## projects.jpsumo.AudioSettingsState.MasterVolumeChanged

Master volume control.





argument|type|description|
|--------|----|-----------||volume|u8|Master audio volume [0_100].|


Example binding to listen for the ` MasterVolumeChanged ` event from the drone :

```javascript

drone.on(
  'MasterVolumeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.AudioSettingsState.ThemeChanged

Command to notify controller of new Audio Theme.





argument|type|description|
|--------|----|-----------||theme|enum|The audio theme to set.|


Example binding to listen for the ` ThemeChanged ` event from the drone :

```javascript

drone.on(
  'ThemeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.RoadPlan
-----
### RoadPlan commands.

The RoadPlan Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllScriptsMetadata](#projectsjpsumoroadplanallscriptsmetadata)|0|0x0|Command to ask device all metadata scripts.|
|[ScriptUploaded](#projectsjpsumoroadplanscriptuploaded)|1|0x1|Notify device that a new file has been uploaded.|
|[ScriptDelete](#projectsjpsumoroadplanscriptdelete)|2|0x2|Ask the device to delete a script.|
|[PlayScript](#projectsjpsumoroadplanplayscript)|3|0x3|Ask the device to play a script.|
## projects.jpsumo.RoadPlan.AllScriptsMetadata

Command to ask device all metadata scripts.





argument|type|description|
|--------|----|-----------|
Example sending the ` AllScriptsMetadata ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//build a message requesting all settings
const AllScriptsMetadataMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AllScriptsMetadata
);

drone.message.send(AllScriptsMetadataMessage);

```


## projects.jpsumo.RoadPlan.ScriptUploaded

Notify device that a new file has been uploaded.





argument|type|description|
|--------|----|-----------||uuid|string|UUID of uploaded file.|
|md5Hash|string|MD5 hash code computed over file.|

Example sending the ` ScriptUploaded ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//build a message requesting all settings
const ScriptUploadedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ScriptUploaded
);

drone.message.send(ScriptUploadedMessage);

```


## projects.jpsumo.RoadPlan.ScriptDelete

Ask the device to delete a script.





argument|type|description|
|--------|----|-----------||uuid|string|UUID of the file to delete.|

Example sending the ` ScriptDelete ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//build a message requesting all settings
const ScriptDeleteMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ScriptDelete
);

drone.message.send(ScriptDeleteMessage);

```


## projects.jpsumo.RoadPlan.PlayScript

Ask the device to play a script.





argument|type|description|
|--------|----|-----------||uuid|string|UUID of the file to play.|

Example sending the ` PlayScript ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//build a message requesting all settings
const PlayScriptMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PlayScript
);

drone.message.send(PlayScriptMessage);

```


# projects.jpsumo.RoadPlanState
-----
### RoadPlan command responses.

The RoadPlanState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ScriptMetadataListChanged](#projectsjpsumoroadplanstatescriptmetadatalistchanged)|0|0x0|Update the controller with metadata.|
|[AllScriptsMetadataChanged](#projectsjpsumoroadplanstateallscriptsmetadatachanged)|1|0x1|Notify controller that all script metadatas are updated.|
|[ScriptUploadChanged](#projectsjpsumoroadplanstatescriptuploadchanged)|2|0x2|Device response to ScriptUploaded command.|
|[ScriptDeleteChanged](#projectsjpsumoroadplanstatescriptdeletechanged)|3|0x3|Device response to ScriptDelete command.|
|[PlayScriptChanged](#projectsjpsumoroadplanstateplayscriptchanged)|4|0x4|Device response to PlayScript command.|
## projects.jpsumo.RoadPlanState.ScriptMetadataListChanged

Update the controller with metadata.





argument|type|description|
|--------|----|-----------||uuid|string|Script uuid for which metadata changed.|
|version|u8|Version number for this script.|
|product|string|Product targeted by script.|
|name|string|Display name of the script.|
|lastModified|u64|Timestamp relative to the UNIX epoch of the last time the file was modified.|


Example binding to listen for the ` ScriptMetadataListChanged ` event from the drone :

```javascript

drone.on(
  'ScriptMetadataListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.RoadPlanState.AllScriptsMetadataChanged

Notify controller that all script metadatas are updated.





argument|type|description|
|--------|----|-----------|

Example binding to listen for the ` AllScriptsMetadataChanged ` event from the drone :

```javascript

drone.on(
  'AllScriptsMetadataChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.RoadPlanState.ScriptUploadChanged

Device response to ScriptUploaded command.





argument|type|description|
|--------|----|-----------||resultCode|enum|Error code.|


Example binding to listen for the ` ScriptUploadChanged ` event from the drone :

```javascript

drone.on(
  'ScriptUploadChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.RoadPlanState.ScriptDeleteChanged

Device response to ScriptDelete command.





argument|type|description|
|--------|----|-----------||resultCode|enum|Error code.|


Example binding to listen for the ` ScriptDeleteChanged ` event from the drone :

```javascript

drone.on(
  'ScriptDeleteChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.RoadPlanState.PlayScriptChanged

Device response to PlayScript command.





argument|type|description|
|--------|----|-----------||resultCode|enum|Error code.|


Example binding to listen for the ` PlayScriptChanged ` event from the drone :

```javascript

drone.on(
  'PlayScriptChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.SpeedSettings
-----
### Speed Settings commands

The SpeedSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Outdoor](#projectsjpsumospeedsettingsoutdoor)|0|0x0|@deprecated Outdoor property|
## projects.jpsumo.SpeedSettings.Outdoor

@deprecated Outdoor property





argument|type|description|
|--------|----|-----------||outdoor|u8|1 if outdoor, 0 if indoor|

Example sending the ` Outdoor ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const OutdoorMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Outdoor
);

drone.message.send(OutdoorMessage);

```


# projects.jpsumo.SpeedSettingsState
-----
### Speed Settings state from product

The SpeedSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[OutdoorChanged](#projectsjpsumospeedsettingsstateoutdoorchanged)|0|0x0|@deprecated Outdoor property sent by product|
## projects.jpsumo.SpeedSettingsState.OutdoorChanged

@deprecated Outdoor property sent by product





argument|type|description|
|--------|----|-----------||outdoor|u8|1 if outdoor, 0 if indoor|


Example binding to listen for the ` OutdoorChanged ` event from the drone :

```javascript

drone.on(
  'OutdoorChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.MediaStreaming
-----
### Control media streaming behavior.

The MediaStreaming Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[VideoEnable](#projectsjpsumomediastreamingvideoenable)|0|0x0|Enable/disable video streaming.|
## projects.jpsumo.MediaStreaming.VideoEnable

Enable/disable video streaming.





argument|type|description|
|--------|----|-----------||enable|u8|1 to enable, 0 to disable.|

Example sending the ` VideoEnable ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaStreaming;

//build a message requesting all settings
const VideoEnableMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoEnable
);

drone.message.send(VideoEnableMessage);

```


# projects.jpsumo.MediaStreamingState
-----
### Media streaming status.

The MediaStreamingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[VideoEnableChanged](#projectsjpsumomediastreamingstatevideoenablechanged)|0|0x0|Return video streaming status.|
## projects.jpsumo.MediaStreamingState.VideoEnableChanged

Return video streaming status.





argument|type|description|
|--------|----|-----------||enabled|enum|Current video streaming status.|


Example binding to listen for the ` VideoEnableChanged ` event from the drone :

```javascript

drone.on(
  'VideoEnableChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.MediaRecordEvent
-----
### Events of media recording

The MediaRecordEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureEventChanged](#projectsjpsumomediarecordeventpictureeventchanged)|0|0x0|Event of picture recording|
|[VideoEventChanged](#projectsjpsumomediarecordeventvideoeventchanged)|1|0x1|Event of video recording|
## projects.jpsumo.MediaRecordEvent.PictureEventChanged

Event of picture recording





argument|type|description|
|--------|----|-----------||event|enum|Last event of picture recording|
|error|enum|Error to explain the event|


Example binding to listen for the ` PictureEventChanged ` event from the drone :

```javascript

drone.on(
  'PictureEventChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.jpsumo.MediaRecordEvent.VideoEventChanged

Event of video recording





argument|type|description|
|--------|----|-----------||event|enum|Event of video recording|
|error|enum|Error to explain the event|


Example binding to listen for the ` VideoEventChanged ` event from the drone :

```javascript

drone.on(
  'VideoEventChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.jpsumo.VideoSettings
-----
### Video settings.

The VideoSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Autorecord](#projectsjpsumovideosettingsautorecord)|0|0x0|Set video automatic recording state.|
## projects.jpsumo.VideoSettings.Autorecord

Set video automatic recording state.





argument|type|description|
|--------|----|-----------||enabled|u8|0: Disabled 1: Enabled.|

Example sending the ` Autorecord ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.VideoSettings;

//build a message requesting all settings
const AutorecordMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Autorecord
);

drone.message.send(AutorecordMessage);

```


# projects.jpsumo.VideoSettingsState
-----
### Video settings state.

The VideoSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AutorecordChanged](#projectsjpsumovideosettingsstateautorecordchanged)|0|0x0|Get video automatic recording status.|
## projects.jpsumo.VideoSettingsState.AutorecordChanged

Get video automatic recording status.





argument|type|description|
|--------|----|-----------||enabled|u8|0: Disabled 1: Enabled.|


Example binding to listen for the ` AutorecordChanged ` event from the drone :

```javascript

drone.on(
  'AutorecordChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```

