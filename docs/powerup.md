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





|argument|type|description|
|--------|----|-----------|
|flag|u8|Boolean for "touch screen".|
|throttle|u8|Throttle value [0_100].|
|roll|i8|Yaw_roll value. [_100_100]|

Example sending the ` PCMD ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the PCMD command message
const PCMDMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.PCMD
);

//send the PCMD command message
drone.message.send(PCMDMessage);

```


## projects.powerup.Piloting.UserTakeOff

Set drone in user take off state





|argument|type|description|
|--------|----|-----------|
|state|u8|State of user take off mode _ 1 to enter in user take off. _ 0 to exit from user take off.|

Example sending the ` UserTakeOff ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the UserTakeOff command message
const UserTakeOffMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.UserTakeOff
);

//send the UserTakeOff command message
drone.message.send(UserTakeOffMessage);

```


## projects.powerup.Piloting.MotorMode

Motor mode





|argument|type|description|
|--------|----|-----------|
|mode|enum|undefined|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|normal|The motors will only start on user action after being in state user take off|
|1|forced|Motors will use the current pcmd values without considering the flying state|

Example sending the ` MotorMode ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MotorMode command message
const MotorModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MotorMode
);

//send the MotorMode command message
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


## projects.powerup.PilotingState.FlyingStateChanged

Drone flying state changed





|argument|type|description|
|--------|----|-----------|
|state|enum|Drone flying state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|landed|Landed state|
|1|takingoff|Taking off state|
|2|flying|Flying state|
|3|recovery|Recovery state|
|4|emergency|Emergency state|
|5|usertakeoff|User take off state. Waiting for user action to take off.|
|6|init|Initializing state (user should let the drone steady for a while)|


Example binding to listen for the ` FlyingStateChanged ` event from the drone :

```javascript

drone.on(
  'FlyingStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.powerup.PilotingState.MotorModeChanged

Motor mode changed





|argument|type|description|
|--------|----|-----------|
|mode|enum|undefined|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|normal|The motors will only start on user action after being in state user take off|
|1|forced|Motors will use the current pcmd values without considering the flying state|


Example binding to listen for the ` MotorModeChanged ` event from the drone :

```javascript

drone.on(
  'MotorModeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.powerup.PilotingState.AttitudeChanged

Drone attitude changed





|argument|type|description|
|--------|----|-----------|
|roll|float|roll value (in radian) (relative to horizontal)|
|pitch|float|Pitch value (in radian) (relative to horizontal)|
|yaw|float|Yaw value (in radian) (relative to North)|


Example binding to listen for the ` AttitudeChanged ` event from the drone :

```javascript

drone.on(
  'AttitudeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.powerup.PilotingState.AltitudeChanged

Drone altitude changed





|argument|type|description|
|--------|----|-----------|
|altitude|float|Altitude in meters relative to take off altitude|


Example binding to listen for the ` AltitudeChanged ` event from the drone :

```javascript

drone.on(
  'AltitudeChanged',
  function(commandObject){
    console.log(commandObject);
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





|argument|type|description|
|--------|----|-----------|
|setting|enum|Variety of setting that can be customized|
|value|float|value of the given setting|
Enums/Symbols (fancy way of saying possible values) for setting :

|setting value|setting name|setting description|
|-----|----|-----------|
|0|MAX_ROLL|Max roll value. In degree.|
|1|ROLL_KP|How fast the plane reaches the desired roll angle. No unit.|
|2|ROLL_RATE_KP|How fast the plane reaches the desired roll rate. No unit.|
|3|MAX_PITCH|Max pitch value. In degree.|
|4|MIN_PITCH|Min pitch value. In degree.|
|5|PITCH_KP|How fast the plane reaches the desired pitch angle. No unit.|
|6|PITCH_RATE_KP|How fast the plane reaches the desired pitch rate. No unit.|
|7|YAW_KP|How fast the plane reaches the desired yaw angle. No unit.|
|8|YAW_RATE_KP|How fast the plane reaches the desired yaw rate. No unit.|
|9|ROLL_TO_THROTTLE_RATE|Portion of thrust that is added to motors according to the roll/yaw command to compensate a dive during turn. No unit.|
|10|ANGLE_OF_ATTACK|Angle of attack of a plane needed horizontal flight.|
|11|ALT_HOLD|Altitude hold during autopilot. 0 for false, other value for true.|
|12|ALT_HOLD_THROTTLE|Altitude hold throttle. Expressed in percentage divided by 100 (from 0 to 1).|
|13|DR_RSSI_EDGE|Rssi value that indicates that the airplane is close to the pilot.|
|14|RECOVERY_DURATION_LIMIT|Limit time for return home duration. In seconds.|
|15|WIND_SPEED|Wind speed in m/s. Should be sent before flight.|
|16|PLANE_SPEED|Target plane speed in m/s. Should be sent before flight.|

Example sending the ` set ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the set command message
const setMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.set
);

//send the set command message
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





|argument|type|description|
|--------|----|-----------|
|setting|enum|Variety of setting that can be customized|
|current|float|Current value of the given setting|
|min|float|Minimal value of the given setting|
|max|float|Max value of the given setting|
|list_flags|u8|List entry attribute Bitfield. 0x01: First: indicate it's the first element of the list. 0x02: Last: indicate it's the last element of the list. 0x04: Empty: indicate the list is empty (implies First/Last). All other arguments should be ignored. 0x08: Remove: This value should be removed from the existing list.|
Enums/Symbols (fancy way of saying possible values) for setting :

|setting value|setting name|setting description|
|-----|----|-----------|
|0|MAX_ROLL|Max roll value. In degree.|
|1|ROLL_KP|How fast the plane reaches the desired roll angle. No unit.|
|2|ROLL_RATE_KP|How fast the plane reaches the desired roll rate. No unit.|
|3|MAX_PITCH|Max pitch value. In degree.|
|4|MIN_PITCH|Min pitch value. In degree.|
|5|PITCH_KP|How fast the plane reaches the desired pitch angle. No unit.|
|6|PITCH_RATE_KP|How fast the plane reaches the desired pitch rate. No unit.|
|7|YAW_KP|How fast the plane reaches the desired yaw angle. No unit.|
|8|YAW_RATE_KP|How fast the plane reaches the desired yaw rate. No unit.|
|9|ROLL_TO_THROTTLE_RATE|Portion of thrust that is added to motors according to the roll/yaw command to compensate a dive during turn. No unit.|
|10|ANGLE_OF_ATTACK|Angle of attack of a plane needed horizontal flight.|
|11|ALT_HOLD|Altitude hold during autopilot. 0 for false, other value for true.|
|12|ALT_HOLD_THROTTLE|Altitude hold throttle. Expressed in percentage divided by 100 (from 0 to 1).|
|13|DR_RSSI_EDGE|Rssi value that indicates that the airplane is close to the pilot.|
|14|RECOVERY_DURATION_LIMIT|Limit time for return home duration. In seconds.|
|15|WIND_SPEED|Wind speed in m/s.|
|16|PLANE_SPEED|Target plane speed in m/s.|


Example binding to listen for the ` settingChanged ` event from the drone :

```javascript

drone.on(
  'settingChanged',
  function(commandObject){
    console.log(commandObject);
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





|argument|type|description|
|--------|----|-----------|

Example sending the ` PictureV2 ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the PictureV2 command message
const PictureV2Message=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.PictureV2
);

//send the PictureV2 command message
drone.message.send(PictureV2Message);

```


## projects.powerup.MediaRecord.VideoV2

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

const project=drone.projects.powerup;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoV2 command message
const VideoV2Message=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoV2
);

//send the VideoV2 command message
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


## projects.powerup.MediaRecordState.VideoStateChangedV2

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


## projects.powerup.MediaRecordEvent.VideoEventChanged

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

const project=drone.projects.powerup;
const commandClass=project.NetworkSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the WifiSelection command message
const WifiSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.WifiSelection
);

//send the WifiSelection command message
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

const project=drone.projects.powerup;
const commandClass=project.Network;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the WifiScan command message
const WifiScanMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.WifiScan
);

//send the WifiScan command message
drone.message.send(WifiScanMessage);

```


## projects.powerup.Network.WifiAuthChannel

Controller inquire the list of authorized wifi channels.





|argument|type|description|
|--------|----|-----------|

Example sending the ` WifiAuthChannel ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Network;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the WifiAuthChannel command message
const WifiAuthChannelMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.WifiAuthChannel
);

//send the WifiAuthChannel command message
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


## projects.powerup.NetworkState.AllWifiScanChanged

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


## projects.powerup.NetworkState.WifiAuthChannelListChanged

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


## projects.powerup.NetworkState.AllWifiAuthChannelChanged

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


## projects.powerup.NetworkState.LinkQualityChanged

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





|argument|type|description|
|--------|----|-----------|
|enable|u8|1 to enable, 0 to disable.|

Example sending the ` VideoEnable ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.MediaStreaming;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoEnable command message
const VideoEnableMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoEnable
);

//send the VideoEnable command message
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





|argument|type|description|
|--------|----|-----------|
|enable|u8|0: Disabled 1: Enabled.|

Example sending the ` Autorecord ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.VideoSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Autorecord command message
const AutorecordMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Autorecord
);

//send the Autorecord command message
drone.message.send(AutorecordMessage);

```


## projects.powerup.VideoSettings.VideoMode

Set video mode





|argument|type|description|
|--------|----|-----------|
|mode|enum|Video mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|quality|Maximize video quality (VGA 30fps).|
|1|performance|Maximize video performance (QVGA 24fps).|

Example sending the ` VideoMode ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.VideoSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoMode command message
const VideoModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoMode
);

//send the VideoMode command message
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


## projects.powerup.VideoSettingsState.VideoModeChanged

Video mode





|argument|type|description|
|--------|----|-----------|
|mode|enum|Video mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|quality|Maximize video quality (VGA 30fps).|
|1|performance|Maximize video performance (QVGA 24fps).|


Example binding to listen for the ` VideoModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoModeChanged',
  function(commandObject){
    console.log(commandObject);
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





|argument|type|description|
|--------|----|-----------|
|enable|u8|0: Disabled 1: Enabled.|

Example sending the ` buzz ` command to your parrot drone :

```javascript

const project=drone.projects.powerup;
const commandClass=project.Sounds;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the buzz command message
const buzzMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.buzz
);

//send the buzz command message
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





|argument|type|description|
|--------|----|-----------|
|enabled|u8|0: Disabled 1: Enabled.|


Example binding to listen for the ` buzzChanged ` event from the drone :

```javascript

drone.on(
  'buzzChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```

