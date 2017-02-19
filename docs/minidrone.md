# projects.minidrone
-----
### All MiniDrone_only commands

Below is a table of all the minidrone Project command classes.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Class Name | ID | Hex ID | Description |
|------------|----|--------|-------------|
|[Piloting](#projectsminidronepiloting)|0|0x0|All commands related to piloting the MiniDrone|
|[SpeedSettings](#projectsminidronespeedsettings)|1|0x1|Speed Settings commands|
|[MediaRecordEvent](#projectsminidronemediarecordevent)|2|0x2|Events of media recording|
|[PilotingState](#projectsminidronepilotingstate)|3|0x3|Occasional information|
|[Animations](#projectsminidroneanimations)|4|0x4|Animation commands|
|[SpeedSettingsState](#projectsminidronespeedsettingsstate)|5|0x5|Speed Settings state from product|
|[MediaRecord](#projectsminidronemediarecord)|6|0x6|Media recording management|
|[MediaRecordState](#projectsminidronemediarecordstate)|7|0x7|State of media recording|
|[PilotingSettings](#projectsminidronepilotingsettings)|8|0x8|Piloting Settings commands|
|[PilotingSettingsState](#projectsminidronepilotingsettingsstate)|9|0x9|Piloting Settings state from product|
|[Settings](#projectsminidronesettings)|10|0xa|Settings commands|
|[SettingsState](#projectsminidronesettingsstate)|11|0xb|Settings state from product|
|[FloodControlState](#projectsminidronefloodcontrolstate)|12|0xc|Settings state from product|
|[GPS](#projectsminidronegps)|13|0xd|GPS related commands|
|[Configuration](#projectsminidroneconfiguration)|14|0xe|Configuration related commands|
|[UsbAccessoryState](#projectsminidroneusbaccessorystate)|15|0xf|USB Accessories state commands.|
|[UsbAccessory](#projectsminidroneusbaccessory)|16|0x10|USB Accessories control commands.|
|[RemoteController](#projectsminidroneremotecontroller)|17|0x11|Remote controller related commands.|
|[NavigationDataState](#projectsminidronenavigationdatastate)|18|0x12|Navigation Data.|
# projects.minidrone.Piloting
-----
### All commands related to piloting the MiniDrone

The Piloting Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[FlatTrim](#projectsminidronepilotingflattrim)|0|0x0|Do a flat trim|
|[TakeOff](#projectsminidronepilotingtakeoff)|1|0x1|Ask the drone to take off|
|[PCMD](#projectsminidronepilotingpcmd)|2|0x2|Ask the drone to move around.|
|[Landing](#projectsminidronepilotinglanding)|3|0x3|Ask the MiniDrone to land|
|[Emergency](#projectsminidronepilotingemergency)|4|0x4|Put drone in emergency state|
|[AutoTakeOffMode](#projectsminidronepilotingautotakeoffmode)|5|0x5|Set MiniDrone automatic take off mode|
|[FlyingMode](#projectsminidronepilotingflyingmode)|6|0x6|Set drone FlyingMode. Only supported by WingX|
|[PlaneGearBox](#projectsminidronepilotingplanegearbox)|7|0x7|Set Plane Gear Box. Only supported by WingX|
## projects.minidrone.Piloting.FlatTrim 

Do a flat trim




Example sending the ` FlatTrim ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const FlatTrimMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.FlatTrim
);

drone.message.send(FlatTrimMessage);

```


## projects.minidrone.Piloting.TakeOff 

Ask the drone to take off




Example sending the ` TakeOff ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const TakeOffMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.TakeOff
);

drone.message.send(TakeOffMessage);

```


## projects.minidrone.Piloting.PCMD 

Ask the drone to move around.




Example sending the ` PCMD ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const PCMDMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PCMD
);

drone.message.send(PCMDMessage);

```


## projects.minidrone.Piloting.Landing 

Ask the MiniDrone to land




Example sending the ` Landing ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const LandingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Landing
);

drone.message.send(LandingMessage);

```


## projects.minidrone.Piloting.Emergency 

Put drone in emergency state




Example sending the ` Emergency ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const EmergencyMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Emergency
);

drone.message.send(EmergencyMessage);

```


## projects.minidrone.Piloting.AutoTakeOffMode 

Set MiniDrone automatic take off mode




Example sending the ` AutoTakeOffMode ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const AutoTakeOffModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AutoTakeOffMode
);

drone.message.send(AutoTakeOffModeMessage);

```


## projects.minidrone.Piloting.FlyingMode 

Set drone FlyingMode. Only supported by WingX




Example sending the ` FlyingMode ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const FlyingModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.FlyingMode
);

drone.message.send(FlyingModeMessage);

```


## projects.minidrone.Piloting.PlaneGearBox 

Set Plane Gear Box. Only supported by WingX




Example sending the ` PlaneGearBox ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Piloting;

//build a message requesting all settings
const PlaneGearBoxMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PlaneGearBox
);

drone.message.send(PlaneGearBoxMessage);

```


# projects.minidrone.SpeedSettings
-----
### Speed Settings commands

The SpeedSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxVerticalSpeed](#projectsminidronespeedsettingsmaxverticalspeed)|0|0x0|Set Max Vertical speed|
|[MaxRotationSpeed](#projectsminidronespeedsettingsmaxrotationspeed)|1|0x1|Set Max Rotation speed|
|[Wheels](#projectsminidronespeedsettingswheels)|2|0x2|Presence of wheels|
|[MaxHorizontalSpeed](#projectsminidronespeedsettingsmaxhorizontalspeed)|3|0x3|Set Max Horizontal speed (only used in case where PilotingSettings_MaxTilt is not used like in hydrofoil mode)|
|[MaxPlaneModeRotationSpeed](#projectsminidronespeedsettingsmaxplanemoderotationspeed)|4|0x4|Set max plane mode rotation speed (only available for wing x)|
## projects.minidrone.SpeedSettings.MaxVerticalSpeed 

Set Max Vertical speed




Example sending the ` MaxVerticalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const MaxVerticalSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxVerticalSpeed
);

drone.message.send(MaxVerticalSpeedMessage);

```


## projects.minidrone.SpeedSettings.MaxRotationSpeed 

Set Max Rotation speed




Example sending the ` MaxRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const MaxRotationSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxRotationSpeed
);

drone.message.send(MaxRotationSpeedMessage);

```


## projects.minidrone.SpeedSettings.Wheels 

Presence of wheels




Example sending the ` Wheels ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const WheelsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Wheels
);

drone.message.send(WheelsMessage);

```


## projects.minidrone.SpeedSettings.MaxHorizontalSpeed 

Set Max Horizontal speed (only used in case where PilotingSettings_MaxTilt is not used like in hydrofoil mode)




Example sending the ` MaxHorizontalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const MaxHorizontalSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxHorizontalSpeed
);

drone.message.send(MaxHorizontalSpeedMessage);

```


## projects.minidrone.SpeedSettings.MaxPlaneModeRotationSpeed 

Set max plane mode rotation speed (only available for wing x)




Example sending the ` MaxPlaneModeRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const MaxPlaneModeRotationSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxPlaneModeRotationSpeed
);

drone.message.send(MaxPlaneModeRotationSpeedMessage);

```


# projects.minidrone.MediaRecordEvent
-----
### Events of media recording

The MediaRecordEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureEventChanged](#projectsminidronemediarecordeventpictureeventchanged)|0|0x0|Event of picture recording|
## projects.minidrone.MediaRecordEvent.PictureEventChanged 

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


# projects.minidrone.PilotingState
-----
### Occasional information

The PilotingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[FlatTrimChanged](#projectsminidronepilotingstateflattrimchanged)|0|0x0|MiniDrone send flat trim was correctly processed|
|[FlyingStateChanged](#projectsminidronepilotingstateflyingstatechanged)|1|0x1|Drone flying state changed|
|[AlertStateChanged](#projectsminidronepilotingstatealertstatechanged)|2|0x2|Drone alert state changed|
|[AutoTakeOffModeChanged](#projectsminidronepilotingstateautotakeoffmodechanged)|3|0x3|Set MiniDrone automatic take off mode|
|[FlyingModeChanged](#projectsminidronepilotingstateflyingmodechanged)|4|0x4|FlyingMode changed. Only supported by WingX|
|[PlaneGearBoxChanged](#projectsminidronepilotingstateplanegearboxchanged)|5|0x5|Plane Gear Box changed. Only supported by WingX|
## projects.minidrone.PilotingState.FlatTrimChanged 

MiniDrone send flat trim was correctly processed





Example binding to listen for the ` FlatTrimChanged ` event from the drone :

```javascript

drone.on(
  'FlatTrimChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.PilotingState.FlyingStateChanged 

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


## projects.minidrone.PilotingState.AlertStateChanged 

Drone alert state changed





Example binding to listen for the ` AlertStateChanged ` event from the drone :

```javascript

drone.on(
  'AlertStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.PilotingState.AutoTakeOffModeChanged 

Set MiniDrone automatic take off mode





Example binding to listen for the ` AutoTakeOffModeChanged ` event from the drone :

```javascript

drone.on(
  'AutoTakeOffModeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.PilotingState.FlyingModeChanged 

FlyingMode changed. Only supported by WingX





Example binding to listen for the ` FlyingModeChanged ` event from the drone :

```javascript

drone.on(
  'FlyingModeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.PilotingState.PlaneGearBoxChanged 

Plane Gear Box changed. Only supported by WingX





Example binding to listen for the ` PlaneGearBoxChanged ` event from the drone :

```javascript

drone.on(
  'PlaneGearBoxChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.minidrone.Animations
-----
### Animation commands

The Animations Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Flip](#projectsminidroneanimationsflip)|0|0x0|Make a flip|
|[Cap](#projectsminidroneanimationscap)|1|0x1|Change the product cap|
## projects.minidrone.Animations.Flip 

Make a flip




Example sending the ` Flip ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Animations;

//build a message requesting all settings
const FlipMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Flip
);

drone.message.send(FlipMessage);

```


## projects.minidrone.Animations.Cap 

Change the product cap




Example sending the ` Cap ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Animations;

//build a message requesting all settings
const CapMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Cap
);

drone.message.send(CapMessage);

```


# projects.minidrone.SpeedSettingsState
-----
### Speed Settings state from product

The SpeedSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxVerticalSpeedChanged](#projectsminidronespeedsettingsstatemaxverticalspeedchanged)|0|0x0|Max vertical speed sent by product|
|[MaxRotationSpeedChanged](#projectsminidronespeedsettingsstatemaxrotationspeedchanged)|1|0x1|Max rotation speed sent by product|
|[WheelsChanged](#projectsminidronespeedsettingsstatewheelschanged)|2|0x2|Presence of wheels sent by product|
|[MaxHorizontalSpeedChanged](#projectsminidronespeedsettingsstatemaxhorizontalspeedchanged)|3|0x3|Max horizontal speed sent by product (only used in case where PilotingSettings_MaxTilt is not used like in hydrofoil mode)|
|[MaxPlaneModeRotationSpeedChanged](#projectsminidronespeedsettingsstatemaxplanemoderotationspeedchanged)|4|0x4|Max plane rotation speed sent by product (only available for wing x)|
## projects.minidrone.SpeedSettingsState.MaxVerticalSpeedChanged 

Max vertical speed sent by product





Example binding to listen for the ` MaxVerticalSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxVerticalSpeedChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.SpeedSettingsState.MaxRotationSpeedChanged 

Max rotation speed sent by product





Example binding to listen for the ` MaxRotationSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxRotationSpeedChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.SpeedSettingsState.WheelsChanged 

Presence of wheels sent by product





Example binding to listen for the ` WheelsChanged ` event from the drone :

```javascript

drone.on(
  'WheelsChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.SpeedSettingsState.MaxHorizontalSpeedChanged 

Max horizontal speed sent by product (only used in case where PilotingSettings_MaxTilt is not used like in hydrofoil mode)





Example binding to listen for the ` MaxHorizontalSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxHorizontalSpeedChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.SpeedSettingsState.MaxPlaneModeRotationSpeedChanged 

Max plane rotation speed sent by product (only available for wing x)





Example binding to listen for the ` MaxPlaneModeRotationSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxPlaneModeRotationSpeedChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.minidrone.MediaRecord
-----
### Media recording management

The MediaRecord Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Picture](#projectsminidronemediarecordpicture)|0|0x0|@deprecated Take picture|
|[PictureV2](#projectsminidronemediarecordpicturev2)|1|0x1|Take picture|
## projects.minidrone.MediaRecord.Picture 

@deprecated Take picture




Example sending the ` Picture ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const PictureMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Picture
);

drone.message.send(PictureMessage);

```


## projects.minidrone.MediaRecord.PictureV2 

Take picture




Example sending the ` PictureV2 ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const PictureV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PictureV2
);

drone.message.send(PictureV2Message);

```


# projects.minidrone.MediaRecordState
-----
### State of media recording

The MediaRecordState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureStateChanged](#projectsminidronemediarecordstatepicturestatechanged)|0|0x0|@deprecated State of picture recording|
|[PictureStateChangedV2](#projectsminidronemediarecordstatepicturestatechangedv2)|1|0x1|State of device picture recording changed|
## projects.minidrone.MediaRecordState.PictureStateChanged 

@deprecated State of picture recording





Example binding to listen for the ` PictureStateChanged ` event from the drone :

```javascript

drone.on(
  'PictureStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.MediaRecordState.PictureStateChangedV2 

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


# projects.minidrone.PilotingSettings
-----
### Piloting Settings commands

The PilotingSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxAltitude](#projectsminidronepilotingsettingsmaxaltitude)|0|0x0|Set Max Altitude|
|[MaxTilt](#projectsminidronepilotingsettingsmaxtilt)|1|0x1|Set Max Tilt|
|[BankedTurn](#projectsminidronepilotingsettingsbankedturn)|2|0x2|Set banked turn mode|
## projects.minidrone.PilotingSettings.MaxAltitude 

Set Max Altitude




Example sending the ` MaxAltitude ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const MaxAltitudeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxAltitude
);

drone.message.send(MaxAltitudeMessage);

```


## projects.minidrone.PilotingSettings.MaxTilt 

Set Max Tilt




Example sending the ` MaxTilt ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const MaxTiltMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxTilt
);

drone.message.send(MaxTiltMessage);

```


## projects.minidrone.PilotingSettings.BankedTurn Command

Set banked turn mode

Set banked turn mode.
 When banked turn mode is enabled, the drone will use yaw values from the piloting command to infer with roll and pitch on the drone when its horizontal speed is not null.

Result : The banked turn mode is enabled or disabled.
 Then, event [BankedTurnMode](#2_9_2) is triggered.
Example sending the ` BankedTurn ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const BankedTurnMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.BankedTurn
);

drone.message.send(BankedTurnMessage);

```


# projects.minidrone.PilotingSettingsState
-----
### Piloting Settings state from product

The PilotingSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxAltitudeChanged](#projectsminidronepilotingsettingsstatemaxaltitudechanged)|0|0x0|Max Altitude sent by product|
|[MaxTiltChanged](#projectsminidronepilotingsettingsstatemaxtiltchanged)|1|0x1|Max tilt sent by product|
|[BankedTurnChanged](#projectsminidronepilotingsettingsstatebankedturnchanged)|2|0x2|Banked Turn mode|
## projects.minidrone.PilotingSettingsState.MaxAltitudeChanged 

Max Altitude sent by product





Example binding to listen for the ` MaxAltitudeChanged ` event from the drone :

```javascript

drone.on(
  'MaxAltitudeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.PilotingSettingsState.MaxTiltChanged 

Max tilt sent by product





Example binding to listen for the ` MaxTiltChanged ` event from the drone :

```javascript

drone.on(
  'MaxTiltChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.PilotingSettingsState.BankedTurnChanged Event

Banked Turn mode

Banked Turn mode.
 If banked turn mode is enabled, the drone will use yaw values from the piloting command to infer with roll and pitch on the drone when its horizontal speed is not null.

Triggered : by [SetBankedTurnMode](#2_8_2).

Example binding to listen for the ` BankedTurnChanged ` event from the drone :

```javascript

drone.on(
  'BankedTurnChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.minidrone.Settings
-----
### Settings commands

The Settings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[CutOutMode](#projectsminidronesettingscutoutmode)|0|0x0|Set MiniDrone cut out mode|
## projects.minidrone.Settings.CutOutMode 

Set MiniDrone cut out mode




Example sending the ` CutOutMode ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Settings;

//build a message requesting all settings
const CutOutModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CutOutMode
);

drone.message.send(CutOutModeMessage);

```


# projects.minidrone.SettingsState
-----
### Settings state from product

The SettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ProductMotorsVersionChanged](#projectsminidronesettingsstateproductmotorsversionchanged)|0|0x0|@deprecated Product Motors versions|
|[ProductInertialVersionChanged](#projectsminidronesettingsstateproductinertialversionchanged)|1|0x1|@deprecated Product Inertial versions|
|[CutOutModeChanged](#projectsminidronesettingsstatecutoutmodechanged)|2|0x2|MiniDrone cut out mode|
## projects.minidrone.SettingsState.ProductMotorsVersionChanged 

@deprecated Product Motors versions





Example binding to listen for the ` ProductMotorsVersionChanged ` event from the drone :

```javascript

drone.on(
  'ProductMotorsVersionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.SettingsState.ProductInertialVersionChanged 

@deprecated Product Inertial versions





Example binding to listen for the ` ProductInertialVersionChanged ` event from the drone :

```javascript

drone.on(
  'ProductInertialVersionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.minidrone.SettingsState.CutOutModeChanged 

MiniDrone cut out mode





Example binding to listen for the ` CutOutModeChanged ` event from the drone :

```javascript

drone.on(
  'CutOutModeChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.minidrone.FloodControlState
-----
### Settings state from product

The FloodControlState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[FloodControlChanged](#projectsminidronefloodcontrolstatefloodcontrolchanged)|0|0x0|@deprecated Flood control regulation|
## projects.minidrone.FloodControlState.FloodControlChanged 

@deprecated Flood control regulation





Example binding to listen for the ` FloodControlChanged ` event from the drone :

```javascript

drone.on(
  'FloodControlChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.minidrone.GPS
-----
### GPS related commands

The GPS Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerLatitudeForRun](#projectsminidronegpscontrollerlatitudeforrun)|0|0x0|Set the controller latitude for a run.|
|[ControllerLongitudeForRun](#projectsminidronegpscontrollerlongitudeforrun)|1|0x1|Set the controller longitude for a run.|
## projects.minidrone.GPS.ControllerLatitudeForRun 

Set the controller latitude for a run.




Example sending the ` ControllerLatitudeForRun ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.GPS;

//build a message requesting all settings
const ControllerLatitudeForRunMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ControllerLatitudeForRun
);

drone.message.send(ControllerLatitudeForRunMessage);

```


## projects.minidrone.GPS.ControllerLongitudeForRun 

Set the controller longitude for a run.




Example sending the ` ControllerLongitudeForRun ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.GPS;

//build a message requesting all settings
const ControllerLongitudeForRunMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ControllerLongitudeForRun
);

drone.message.send(ControllerLongitudeForRunMessage);

```


# projects.minidrone.Configuration
-----
### Configuration related commands

The Configuration Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerType](#projectsminidroneconfigurationcontrollertype)|0|0x0|Set the controller type.|
|[ControllerName](#projectsminidroneconfigurationcontrollername)|1|0x1|Set the controller name.|
## projects.minidrone.Configuration.ControllerType 

Set the controller type.




Example sending the ` ControllerType ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Configuration;

//build a message requesting all settings
const ControllerTypeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ControllerType
);

drone.message.send(ControllerTypeMessage);

```


## projects.minidrone.Configuration.ControllerName 

Set the controller name.




Example sending the ` ControllerName ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.Configuration;

//build a message requesting all settings
const ControllerNameMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ControllerName
);

drone.message.send(ControllerNameMessage);

```


# projects.minidrone.UsbAccessoryState
-----
### USB Accessories state commands.

The UsbAccessoryState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[LightState](#projectsminidroneusbaccessorystatelightstate)|0|0x0|USB Light accessory state cmd.|
|[ClawState](#projectsminidroneusbaccessorystateclawstate)|1|0x1|USB Claw accessory state cmd.|
|[GunState](#projectsminidroneusbaccessorystategunstate)|2|0x2|USB Gun accessory state cmd.|
## projects.minidrone.UsbAccessoryState.LightState 

USB Light accessory state cmd.




Example sending the ` LightState ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.UsbAccessoryState;

//build a message requesting all settings
const LightStateMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.LightState
);

drone.message.send(LightStateMessage);

```


## projects.minidrone.UsbAccessoryState.ClawState 

USB Claw accessory state cmd.




Example sending the ` ClawState ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.UsbAccessoryState;

//build a message requesting all settings
const ClawStateMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ClawState
);

drone.message.send(ClawStateMessage);

```


## projects.minidrone.UsbAccessoryState.GunState 

USB Gun accessory state cmd.




Example sending the ` GunState ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.UsbAccessoryState;

//build a message requesting all settings
const GunStateMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.GunState
);

drone.message.send(GunStateMessage);

```


# projects.minidrone.UsbAccessory
-----
### USB Accessories control commands.

The UsbAccessory Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[LightControl](#projectsminidroneusbaccessorylightcontrol)|0|0x0|USB Light control cmd.|
|[ClawControl](#projectsminidroneusbaccessoryclawcontrol)|1|0x1|USB Claw control cmd.|
|[GunControl](#projectsminidroneusbaccessoryguncontrol)|2|0x2|USB Gun control cmd.|
## projects.minidrone.UsbAccessory.LightControl 

USB Light control cmd.




Example sending the ` LightControl ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.UsbAccessory;

//build a message requesting all settings
const LightControlMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.LightControl
);

drone.message.send(LightControlMessage);

```


## projects.minidrone.UsbAccessory.ClawControl 

USB Claw control cmd.




Example sending the ` ClawControl ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.UsbAccessory;

//build a message requesting all settings
const ClawControlMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ClawControl
);

drone.message.send(ClawControlMessage);

```


## projects.minidrone.UsbAccessory.GunControl 

USB Gun control cmd.




Example sending the ` GunControl ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.UsbAccessory;

//build a message requesting all settings
const GunControlMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.GunControl
);

drone.message.send(GunControlMessage);

```


# projects.minidrone.RemoteController
-----
### Remote controller related commands.

The RemoteController Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SetPairedRemote](#projectsminidroneremotecontrollersetpairedremote)|0|0x0|Send the address of the remote controller on which the drone should be paired This is used to pair a Tinos controller Where mac address: MSB_MID_LSB.|
## projects.minidrone.RemoteController.SetPairedRemote 

Send the address of the remote controller on which the drone should be paired This is used to pair a Tinos controller Where mac address: MSB_MID_LSB.




Example sending the ` SetPairedRemote ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.RemoteController;

//build a message requesting all settings
const SetPairedRemoteMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SetPairedRemote
);

drone.message.send(SetPairedRemoteMessage);

```


# projects.minidrone.NavigationDataState
-----
### Navigation Data.

The NavigationDataState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[DronePosition](#projectsminidronenavigationdatastatedroneposition)|0|0x0|Get the drone position from takeoff point (0, 0, 0, 0). The orthonormal basis is fixed at this point. The axis are oriented the following way : * X : From the rear of the drone to its front. * Y : From the right of the drone to its left. * Z : Orthogonal to X and Y and oriented upward. * Psi : From 180 to _180 in the clockwise direction,|
## projects.minidrone.NavigationDataState.DronePosition 

Get the drone position from takeoff point (0, 0, 0, 0). The orthonormal basis is fixed at this point. The axis are oriented the following way : * X : From the rear of the drone to its front. * Y : From the right of the drone to its left. * Z : Orthogonal to X and Y and oriented upward. * Psi : From 180 to _180 in the clockwise direction,




Example sending the ` DronePosition ` command to your parrot drone :

```javascript

const project=drone.projects.minidrone;
const commandClass=project.NavigationDataState;

//build a message requesting all settings
const DronePositionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.DronePosition
);

drone.message.send(DronePositionMessage);

```

