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





|argument|type|description|
|--------|----|-----------|
|flag|u8|Boolean for "touch screen".|
|speed|i8|Speed value [_100_100].|
|turn|i8|Turn value. [_100_100]|

Example sending the ` PCMD ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const PCMDMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.PCMD
);

drone.message.send(PCMDMessage);

```


## projects.jpsumo.Piloting.Posture

Request a posture





|argument|type|description|
|--------|----|-----------|
|type|enum|Type of Posture|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|standing|Standing type|
|1|jumper|Jumper type|
|2|kicker|Kicker type|

Example sending the ` Posture ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const PostureMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Posture
);

drone.message.send(PostureMessage);

```


## projects.jpsumo.Piloting.addCapOffset

Add the specified offset to the current cap.





|argument|type|description|
|--------|----|-----------|
|offset|float|Offset value in radians.|

Example sending the ` addCapOffset ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const addCapOffsetMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|state|enum|State of posture|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|standing|Standing state|
|1|jumper|Jumper state|
|2|kicker|Kicker state|
|3|stuck|Stuck state|
|4|unknown|Unknown state|


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





|argument|type|description|
|--------|----|-----------|
|state|enum|JS alert state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|none|No alert|
|1|critical_battery|Critical battery alert|
|2|low_battery|Low battery alert|


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





|argument|type|description|
|--------|----|-----------|
|speed|i8|Speed command applied to motors in range [_100;100].|
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





|argument|type|description|
|--------|----|-----------|

Example sending the ` JumpStop ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const JumpStopMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.JumpStop
);

drone.message.send(JumpStopMessage);

```


## projects.jpsumo.Animations.JumpCancel

Cancel jump and come back to previous state (if possible).





|argument|type|description|
|--------|----|-----------|

Example sending the ` JumpCancel ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const JumpCancelMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.JumpCancel
);

drone.message.send(JumpCancelMessage);

```


## projects.jpsumo.Animations.JumpLoad

Request jump loading





|argument|type|description|
|--------|----|-----------|

Example sending the ` JumpLoad ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const JumpLoadMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.JumpLoad
);

drone.message.send(JumpLoadMessage);

```


## projects.jpsumo.Animations.Jump

Request a jump





|argument|type|description|
|--------|----|-----------|
|type|enum|Type of jump|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|long|Long jump.|
|1|high|High jump|

Example sending the ` Jump ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const JumpMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Jump
);

drone.message.send(JumpMessage);

```


## projects.jpsumo.Animations.SimpleAnimation

Play a parameterless animation.





|argument|type|description|
|--------|----|-----------|
|id|enum|Animation ID.|
Enums/Symbols (fancy way of saying possible values) for id :

|id value|id name|id description|
|-----|----|-----------|
|0|stop|Stop ongoing animation.|
|1|spin|Start a spin animation.|
|2|tap|Start a tap animation.|
|3|slowshake|Start a slow shake animation.|
|4|metronome|Start a Metronome animation.|
|5|ondulation|Start a standing dance animation.|
|6|spinjump|Start a spin jump animation.|
|7|spintoposture|Start a spin that end in standing posture, or in jumper if it was standing animation.|
|8|spiral|Start a spiral animation.|
|9|slalom|Start a slalom animation.|

Example sending the ` SimpleAnimation ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Animations;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const SimpleAnimationMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|state|enum|State of jump load|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|unknown|Unknown state (obsolete).|
|1|unloaded|Unloaded state.|
|2|loaded|Loaded state.|
|3|busy|Unknown state (obsolete).|
|4|low_battery_unloaded|Unloaded state and low battery.|
|5|low_battery_loaded|Loaded state and low battery.|


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





|argument|type|description|
|--------|----|-----------|
|state|enum|State of jump type.|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|none|None.|
|1|long|Long jump type.|
|2|high|High jump type.|


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





|argument|type|description|
|--------|----|-----------|
|error|enum|Enum describing the problem of the motor|
Enums/Symbols (fancy way of saying possible values) for error :

|error value|error name|error description|
|-----|----|-----------|
|0|none|None.|
|1|blocked|Motor blocked|
|2|over_heated|Motor over heated|


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





|argument|type|description|
|--------|----|-----------|
|software|string|Product GPS software version|
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





|argument|type|description|
|--------|----|-----------|
|mass_storage_id|u8|Mass storage id to take picture|

Example sending the ` Picture ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const PictureMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Picture
);

drone.message.send(PictureMessage);

```


## projects.jpsumo.MediaRecord.Video

@deprecated Video record





|argument|type|description|
|--------|----|-----------|
|record|enum|Command to record video|
|mass_storage_id|u8|Mass storage id to record|
Enums/Symbols (fancy way of saying possible values) for record :

|record value|record name|record description|
|-----|----|-----------|
|0|stop|Stop the video recording|
|1|start|Start the video recording|

Example sending the ` Video ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const VideoMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Video
);

drone.message.send(VideoMessage);

```


## projects.jpsumo.MediaRecord.PictureV2

Take picture





|argument|type|description|
|--------|----|-----------|

Example sending the ` PictureV2 ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const PictureV2Message=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.PictureV2
);

drone.message.send(PictureV2Message);

```


## projects.jpsumo.MediaRecord.VideoV2

Video record





|argument|type|description|
|--------|----|-----------|
|record|enum|Command to record video|
Enums/Symbols (fancy way of saying possible values) for record :

|record value|record name|record description|
|-----|----|-----------|
|0|stop|Stop the video recording|
|1|start|Start the video recording|

Example sending the ` VideoV2 ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const VideoV2Message=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|state|u8|1 if picture has been taken, 0 otherwise|
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





|argument|type|description|
|--------|----|-----------|
|state|enum|State of video|
|mass_storage_id|u8|Mass storage id where the video was recorded|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|stopped|Video was stopped|
|1|started|Video was started|
|2|failed|Video was failed|


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





|argument|type|description|
|--------|----|-----------|
|state|enum|State of device picture recording|
|error|enum|Error to explain the state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|ready|The picture recording is ready|
|1|busy|The picture recording is busy|
|2|notAvailable|The picture recording is not available|
Enums/Symbols (fancy way of saying possible values) for error :

|error value|error name|error description|
|-----|----|-----------|
|0|ok|No Error|
|1|unknown|Unknown generic error|
|2|camera_ko|Picture camera is out of order|
|3|memoryFull|Memory full ; cannot save one additional picture|
|4|lowBattery|Battery is too low to start/keep recording.|


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





|argument|type|description|
|--------|----|-----------|
|state|enum|State of device video recording|
|error|enum|Error to explain the state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|stopped|Video is stopped|
|1|started|Video is started|
|2|notAvailable|The video recording is not available|
Enums/Symbols (fancy way of saying possible values) for error :

|error value|error name|error description|
|-----|----|-----------|
|0|ok|No Error|
|1|unknown|Unknown generic error|
|2|camera_ko|Video camera is out of order|
|3|memoryFull|Memory full ; cannot save one additional video|
|4|lowBattery|Battery is too low to start/keep recording.|


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





|argument|type|description|
|--------|----|-----------|
|type|enum|The type of wifi selection (auto, manual)|
|band|enum|The allowed band(s) : 2.4 Ghz, 5 Ghz, or all|
|channel|u8|The channel (not used in auto mode)|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|auto|Auto selection|
|1|manual|Manual selection|
Enums/Symbols (fancy way of saying possible values) for band :

|band value|band name|band description|
|-----|----|-----------|
|0|_2_4ghz|2.4 GHz band|
|1|_5ghz|5 GHz band|
|2|all|Both 2.4 and 5 GHz bands|

Example sending the ` WifiSelection ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.NetworkSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const WifiSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|type|enum|The type of wifi selection settings|
|band|enum|The actual wifi band state|
|channel|u8|The channel (depends of the band)|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|auto_all|Auto selection|
|1|auto__2_4ghz|Auto selection 2.4ghz|
|2|auto__5ghz|Auto selection 5 ghz|
|3|manual|Manual selection|
Enums/Symbols (fancy way of saying possible values) for band :

|band value|band name|band description|
|-----|----|-----------|
|0|_2_4ghz|2.4 GHz band|
|1|_5ghz|5 GHz band|
|2|all|Both 2.4 and 5 GHz bands|


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





|argument|type|description|
|--------|----|-----------|
|band|enum|The band(s) : 2.4 Ghz, 5 Ghz, or both|
Enums/Symbols (fancy way of saying possible values) for band :

|band value|band name|band description|
|-----|----|-----------|
|0|_2_4ghz|2.4 GHz band|
|1|_5ghz|5 GHz band|
|2|all|Both 2.4 and 5 GHz bands|

Example sending the ` WifiScan ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Network;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const WifiScanMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.WifiScan
);

drone.message.send(WifiScanMessage);

```


## projects.jpsumo.Network.WifiAuthChannel

Controller inquire the list of authorized wifi channels.





|argument|type|description|
|--------|----|-----------|

Example sending the ` WifiAuthChannel ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.Network;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const WifiAuthChannelMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|ssid|string|SSID of the AP|
|rssi|i16|RSSI of the AP in dbm (negative value)|
|band|enum|The band : 2.4 GHz or 5 GHz|
|channel|u8|Channel of the AP|
Enums/Symbols (fancy way of saying possible values) for band :

|band value|band name|band description|
|-----|----|-----------|
|0|_2_4ghz|2.4 GHz band|
|1|_5ghz|5 GHz band|


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





|argument|type|description|
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





|argument|type|description|
|--------|----|-----------|
|band|enum|The band of this channel : 2.4 GHz or 5 GHz|
|channel|u8|The authorized channel.|
|in_or_out|u8|Bit 0 is 1 if channel is authorized outside (0 otherwise) ; Bit 1 is 1 if channel is authorized inside (0 otherwise)|
Enums/Symbols (fancy way of saying possible values) for band :

|band value|band name|band description|
|-----|----|-----------|
|0|_2_4ghz|2.4 GHz band|
|1|_5ghz|5 GHz band|


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





|argument|type|description|
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





|argument|type|description|
|--------|----|-----------|
|quality|u8|The WiFi link quality in range 0_6, the higher the value, the higher the link quality.|


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





|argument|type|description|
|--------|----|-----------|
|volume|u8|Master audio volume [0_100].|

Example sending the ` MasterVolume ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.AudioSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const MasterVolumeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MasterVolume
);

drone.message.send(MasterVolumeMessage);

```


## projects.jpsumo.AudioSettings.Theme

Audio Theme.





|argument|type|description|
|--------|----|-----------|
|theme|enum|The audio theme to set.|
Enums/Symbols (fancy way of saying possible values) for theme :

|theme value|theme name|theme description|
|-----|----|-----------|
|0|default|Default audio theme (depends on the product color)|
|1|robot|Robot audio theme.|
|2|insect|Insect audio theme.|
|3|monster|Monster audio theme.|

Example sending the ` Theme ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.AudioSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const ThemeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|volume|u8|Master audio volume [0_100].|


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





|argument|type|description|
|--------|----|-----------|
|theme|enum|The audio theme to set.|
Enums/Symbols (fancy way of saying possible values) for theme :

|theme value|theme name|theme description|
|-----|----|-----------|
|0|default|Default audio theme (depends on the product color)|
|1|robot|Robot audio theme.|
|2|insect|Insect audio theme.|
|3|monster|Monster audio theme.|


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





|argument|type|description|
|--------|----|-----------|

Example sending the ` AllScriptsMetadata ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const AllScriptsMetadataMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.AllScriptsMetadata
);

drone.message.send(AllScriptsMetadataMessage);

```


## projects.jpsumo.RoadPlan.ScriptUploaded

Notify device that a new file has been uploaded.





|argument|type|description|
|--------|----|-----------|
|uuid|string|UUID of uploaded file.|
|md5Hash|string|MD5 hash code computed over file.|

Example sending the ` ScriptUploaded ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const ScriptUploadedMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.ScriptUploaded
);

drone.message.send(ScriptUploadedMessage);

```


## projects.jpsumo.RoadPlan.ScriptDelete

Ask the device to delete a script.





|argument|type|description|
|--------|----|-----------|
|uuid|string|UUID of the file to delete.|

Example sending the ` ScriptDelete ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const ScriptDeleteMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.ScriptDelete
);

drone.message.send(ScriptDeleteMessage);

```


## projects.jpsumo.RoadPlan.PlayScript

Ask the device to play a script.





|argument|type|description|
|--------|----|-----------|
|uuid|string|UUID of the file to play.|

Example sending the ` PlayScript ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.RoadPlan;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const PlayScriptMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|uuid|string|Script uuid for which metadata changed.|
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





|argument|type|description|
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





|argument|type|description|
|--------|----|-----------|
|resultCode|enum|Error code.|
Enums/Symbols (fancy way of saying possible values) for resultCode :

|resultCode value|resultCode name|resultCode description|
|-----|----|-----------|
|0|error_ok|The script was parsed successfully.|
|1|error_file_corrupted|The MD5 hash codes are different or file is unreadable.|
|2|error_invalid_format|The parser is not well formed or can not be parsed.|
|3|error_file_too_large|The file is larger than maximum allowed size.|
|4|error_unsupported|Script version is not supported by device.|


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





|argument|type|description|
|--------|----|-----------|
|resultCode|enum|Error code.|
Enums/Symbols (fancy way of saying possible values) for resultCode :

|resultCode value|resultCode name|resultCode description|
|-----|----|-----------|
|0|error_ok|The script was deleted successfully.|
|1|error_no_such_script|No script with this uuid exists.|
|2|error_internal_failure|An internal error occured while attempting to delete the script.|


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





|argument|type|description|
|--------|----|-----------|
|resultCode|enum|Error code.|
Enums/Symbols (fancy way of saying possible values) for resultCode :

|resultCode value|resultCode name|resultCode description|
|-----|----|-----------|
|0|script_started|The script started playing successfully.|
|1|script_finished|The script finished successfully.|
|2|script_no_such_script|No script with this uuid exists.|
|3|script_error|An error occured while playing the script.|


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





|argument|type|description|
|--------|----|-----------|
|outdoor|u8|1 if outdoor, 0 if indoor|

Example sending the ` Outdoor ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.SpeedSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const OutdoorMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|outdoor|u8|1 if outdoor, 0 if indoor|


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





|argument|type|description|
|--------|----|-----------|
|enable|u8|1 to enable, 0 to disable.|

Example sending the ` VideoEnable ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.MediaStreaming;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const VideoEnableMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|enabled|enum|Current video streaming status.|
Enums/Symbols (fancy way of saying possible values) for enabled :

|enabled value|enabled name|enabled description|
|-----|----|-----------|
|0|enabled|Video streaming is enabled.|
|1|disabled|Video streaming is disabled.|
|2|error|Video streaming failed to start.|


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





|argument|type|description|
|--------|----|-----------|
|event|enum|Last event of picture recording|
|error|enum|Error to explain the event|
Enums/Symbols (fancy way of saying possible values) for event :

|event value|event name|event description|
|-----|----|-----------|
|0|taken|Picture taken and saved|
|1|failed|Picture failed|
Enums/Symbols (fancy way of saying possible values) for error :

|error value|error name|error description|
|-----|----|-----------|
|0|ok|No Error|
|1|unknown|Unknown generic error ; only when state is failed|
|2|busy|Picture recording is busy ; only when state is failed|
|3|notAvailable|Picture recording not available ; only when state is failed|
|4|memoryFull|Memory full ; only when state is failed|
|5|lowBattery|Battery is too low to record.|


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





|argument|type|description|
|--------|----|-----------|
|event|enum|Event of video recording|
|error|enum|Error to explain the event|
Enums/Symbols (fancy way of saying possible values) for event :

|event value|event name|event description|
|-----|----|-----------|
|0|start|Video start|
|1|stop|Video stop and saved|
|2|failed|Video failed|
Enums/Symbols (fancy way of saying possible values) for error :

|error value|error name|error description|
|-----|----|-----------|
|0|ok|No Error|
|1|unknown|Unknown generic error ; only when state is failed|
|2|busy|Video recording is busy ; only when state is failed|
|3|notAvailable|Video recording not available ; only when state is failed|
|4|memoryFull|Memory full|
|5|lowBattery|Battery is too low to record.|
|6|autoStopped|Video was auto stopped|


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





|argument|type|description|
|--------|----|-----------|
|enabled|u8|0: Disabled 1: Enabled.|

Example sending the ` Autorecord ` command to your parrot drone :

```javascript

const project=drone.projects.jpsumo;
const commandClass=project.VideoSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build a message requesting all settings
const AutorecordMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
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





|argument|type|description|
|--------|----|-----------|
|enabled|u8|0: Disabled 1: Enabled.|


Example binding to listen for the ` AutorecordChanged ` event from the drone :

```javascript

drone.on(
  'AutorecordChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```

