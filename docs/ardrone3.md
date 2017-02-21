# projects.ardrone3
-----
### All ARDrone3_only commands

Below is a table of all the ardrone3 Project command classes.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Class Name | ID | Hex ID | Description |
|------------|----|--------|-------------|
|[Piloting](#projectsardrone3piloting)|0|0x0|All commands related to piloting the drone|
|[Camera](#projectsardrone3camera)|1|0x1|Ask the drone to move camera|
|[PilotingSettings](#projectsardrone3pilotingsettings)|2|0x2|Piloting Settings commands|
|[MediaRecordEvent](#projectsardrone3mediarecordevent)|3|0x3|Events of media recording|
|[PilotingState](#projectsardrone3pilotingstate)|4|0x4|State from drone|
|[Animations](#projectsardrone3animations)|5|0x5|Animation commands|
|[PilotingSettingsState](#projectsardrone3pilotingsettingsstate)|6|0x6|Piloting Settings state from product|
|[MediaRecord](#projectsardrone3mediarecord)|7|0x7|Media recording management|
|[MediaRecordState](#projectsardrone3mediarecordstate)|8|0x8|State of media recording|
|[NetworkSettings](#projectsardrone3networksettings)|9|0x9|Network settings commands|
|[NetworkSettingsState](#projectsardrone3networksettingsstate)|10|0xa|Network settings state from product|
|[SpeedSettings](#projectsardrone3speedsettings)|11|0xb|Speed Settings commands|
|[SpeedSettingsState](#projectsardrone3speedsettingsstate)|12|0xc|Speed Settings state from product|
|[Network](#projectsardrone3network)|13|0xd|Network related commands|
|[NetworkState](#projectsardrone3networkstate)|14|0xe|Network state from Product|
|[SettingsState](#projectsardrone3settingsstate)|16|0x10|Settings state from product|
|[PictureSettings](#projectsardrone3picturesettings)|19|0x13|Photo settings chosen by the user|
|[PictureSettingsState](#projectsardrone3picturesettingsstate)|20|0x14|Photo settings state from product|
|[MediaStreaming](#projectsardrone3mediastreaming)|21|0x15|Control media streaming behavior.|
|[MediaStreamingState](#projectsardrone3mediastreamingstate)|22|0x16|Media streaming status.|
|[GPSSettings](#projectsardrone3gpssettings)|23|0x17|GPS settings|
|[GPSSettingsState](#projectsardrone3gpssettingsstate)|24|0x18|GPS settings state|
|[CameraState](#projectsardrone3camerastate)|25|0x19|Camera state|
|[Antiflickering](#projectsardrone3antiflickering)|29|0x1d|Anti_flickering related commands|
|[AntiflickeringState](#projectsardrone3antiflickeringstate)|30|0x1e|Anti_flickering related states|
|[GPSState](#projectsardrone3gpsstate)|31|0x1f|GPS related States|
|[PROState](#projectsardrone3prostate)|32|0x20|Pro features enabled on the Bebop|
|[PilotingEvent](#projectsardrone3pilotingevent)|34|0x22|Events of Piloting|
# projects.ardrone3.Piloting
-----
### All commands related to piloting the drone

The Piloting Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[FlatTrim](#projectsardrone3pilotingflattrim)|0|0x0|Do a flat trim|
|[TakeOff](#projectsardrone3pilotingtakeoff)|1|0x1|Take off|
|[PCMD](#projectsardrone3pilotingpcmd)|2|0x2|Move the drone|
|[Landing](#projectsardrone3pilotinglanding)|3|0x3|Land|
|[Emergency](#projectsardrone3pilotingemergency)|4|0x4|Cut out the motors|
|[NavigateHome](#projectsardrone3pilotingnavigatehome)|5|0x5|Return home|
|[AutoTakeOffMode](#projectsardrone3pilotingautotakeoffmode)|6|0x6|Auto take off mode|
|[moveBy](#projectsardrone3pilotingmoveby)|7|0x7|Move the drone to a relative position|
|[UserTakeOff](#projectsardrone3pilotingusertakeoff)|8|0x8|Prepare the drone to take off|
|[Circle](#projectsardrone3pilotingcircle)|9|0x9|Circle|
## projects.ardrone3.Piloting.FlatTrim

Do a flat trim

Do a flat trim of the accelerometer/gyro.
 Could be useful when the drone is sliding in hover mode.

Result : Accelerometer and gyroscope are calibrated then event [FlatTrimChanged](#1_4_0) is triggered.

|argument|type|description|
|--------|----|-----------|

Example sending the ` FlatTrim ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the FlatTrim command message
const FlatTrimMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.FlatTrim
);

//send the FlatTrim command message
drone.message.send(FlatTrimMessage);

```


## projects.ardrone3.Piloting.TakeOff

Take off

Ask the drone to take off.
 On the fixed wings (such as Disco): not used except to cancel a land.

Result : On the quadcopters: the drone takes off if its [FlyingState](#1_4_1) was landed.
 On the fixed wings, the landing process is aborted if the [FlyingState](#1_4_1) was landing.\n Then, event [FlyingState](#1_4_1) is triggered.

|argument|type|description|
|--------|----|-----------|

Example sending the ` TakeOff ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the TakeOff command message
const TakeOffMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.TakeOff
);

//send the TakeOff command message
drone.message.send(TakeOffMessage);

```


## projects.ardrone3.Piloting.PCMD

Move the drone

Move the drone.
 The libARController is sending the command each 50ms.

 **Please note that you should call setPilotingPCMD and not sendPilotingPCMD because the libARController is handling the periodicity and the buffer on which it is sent.**

Result : The drone moves! Yaaaaay!
 Event [SpeedChanged](#1_4_5), [AttitudeChanged](#1_4_6) and [PositionChanged](#1_4_4) (only if gps of the drone has fixed) are triggered.

|argument|type|description|
|--------|----|-----------|
|flag|u8|Boolean flag: 1 if the roll and pitch values should be taken in consideration. 0 otherwise|
|roll|i8|Roll angle as signed percentage. On copters: Roll angle expressed as signed percentage of the max pitch/roll setting, in range [_100, 100] _100 corresponds to a roll angle of max pitch/roll to the left (drone will fly left) 100 corresponds to a roll angle of max pitch/roll to the right (drone will fly right) This value may be clamped if necessary, in order to respect the maximum supported physical tilt of the copter. On fixed wings: Roll angle expressed as signed percentage of the physical max roll of the wing, in range [_100, 100] Negative value makes the plane fly to the left Positive value makes the plane fly to the right|
|pitch|i8|Pitch angle as signed percentage. On copters: Expressed as signed percentage of the max pitch/roll setting, in range [_100, 100] _100 corresponds to a pitch angle of max pitch/roll towards sky (drone will fly backward) 100 corresponds to a pitch angle of max pitch/roll towards ground (drone will fly forward) This value may be clamped if necessary, in order to respect the maximum supported physical tilt of the copter. On fixed wings: Expressed as signed percentage of the physical max pitch of the wing, in range [_100, 100] Negative value makes the plane fly in direction of the sky Positive value makes the plane fly in direction of the ground|
|yaw|i8|Yaw rotation speed as signed percentage. On copters: Expressed as signed percentage of the max yaw rotation speed setting, in range [_100, 100]. _100 corresponds to a counter_clockwise rotation of max yaw rotation speed 100 corresponds to a clockwise rotation of max yaw rotation speed This value may be clamped if necessary, in order to respect the maximum supported physical tilt of the copter. On fixed wings: Giving more than a fixed value (75% for the moment) triggers a circle. Positive value will trigger a clockwise circling Negative value will trigger a counter_clockwise circling|
|gaz|i8|Throttle as signed percentage. On copters: Expressed as signed percentage of the max vertical speed setting, in range [_100, 100] _100 corresponds to a max vertical speed towards ground 100 corresponds to a max vertical speed towards sky This value may be clamped if necessary, in order to respect the maximum supported physical tilt of the copter. During the landing phase, putting some positive gaz will cancel the land. On fixed wings: Expressed as signed percentage of the physical max throttle, in range [_100, 100] Negative value makes the plane fly slower Positive value makes the plane fly faster|
|timestampAndSeqNum|u32|Command timestamp in milliseconds (low 24 bits) + command sequence number (high 8 bits) [0;255].|

Example sending the ` PCMD ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
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


## projects.ardrone3.Piloting.Landing

Land

Land.
 Please note that on copters, if you put some positive gaz (in the [PilotingCommand](#1_0_2)) during the landing, it will cancel it.

Result : On the copters, the drone lands if its [FlyingState](#1_4_1) was taking off, hovering or flying.
 On the fixed wings, the drone lands if its [FlyingState](#1_4_1) was hovering or flying.\n Then, event [FlyingState](#1_4_1) is triggered.

|argument|type|description|
|--------|----|-----------|

Example sending the ` Landing ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Landing command message
const LandingMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Landing
);

//send the Landing command message
drone.message.send(LandingMessage);

```


## projects.ardrone3.Piloting.Emergency

Cut out the motors

Cut out the motors.
 This cuts immediatly the motors. The drone will fall.
 This command is sent on a dedicated high priority buffer which will infinitely retry to send it if the command is not delivered.

Result : The drone immediatly cuts off its motors.
 Then, event [FlyingState](#1_4_1) is triggered.

|argument|type|description|
|--------|----|-----------|

Example sending the ` Emergency ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Emergency command message
const EmergencyMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Emergency
);

//send the Emergency command message
drone.message.send(EmergencyMessage);

```


## projects.ardrone3.Piloting.NavigateHome

Return home

Return home.
 Ask the drone to fly to its [HomePosition](#1_24_0).
 The availability of the return home can be get from [ReturnHomeState](#1_4_3).
 Please note that the drone will wait to be hovering to start its return home. This means that it will wait to have a [flag](#1_0_2) set at 0.

Result : The drone will fly back to its home position.
 Then, event [ReturnHomeState](#1_4_3) is triggered.\n You can get a state pending if the drone is not ready to start its return home process but will do it as soon as it is possible.

|argument|type|description|
|--------|----|-----------|
|start|u8|1 to start the navigate home, 0 to stop it|

Example sending the ` NavigateHome ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the NavigateHome command message
const NavigateHomeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.NavigateHome
);

//send the NavigateHome command message
drone.message.send(NavigateHomeMessage);

```


## projects.ardrone3.Piloting.AutoTakeOffMode

Auto take off mode

Auto take off mode.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|state|u8|State of automatic take off mode (1 for autotake off enabled)|

Example sending the ` AutoTakeOffMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the AutoTakeOffMode command message
const AutoTakeOffModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.AutoTakeOffMode
);

//send the AutoTakeOffMode command message
drone.message.send(AutoTakeOffModeMessage);

```


## projects.ardrone3.Piloting.moveBy

Move the drone to a relative position

Move the drone to a relative position and rotate heading by a given angle.
 Moves are relative to the current drone orientation, (drone's reference).
 Also note that the given rotation will not modify the move (i.e. moves are always rectilinear).

Result : The drone will move of the given offsets.
 Then, event [RelativeMoveEnded](#1_34_0) is triggered.\n If you send a second relative move command, the drone will trigger a [RelativeMoveEnded](#1_34_0) with the offsets it managed to do before this new command and the value of error set to interrupted.

|argument|type|description|
|--------|----|-----------|
|dX|float|Wanted displacement along the front axis [m]|
|dY|float|Wanted displacement along the right axis [m]|
|dZ|float|Wanted displacement along the down axis [m]|
|dPsi|float|Wanted rotation of heading [rad]|

Example sending the ` moveBy ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the moveBy command message
const moveByMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.moveBy
);

//send the moveBy command message
drone.message.send(moveByMessage);

```


## projects.ardrone3.Piloting.UserTakeOff

Prepare the drone to take off

Prepare the drone to take off.
 This is the command that initiates the take off process on the fixed wings.
 Setting the state to 0 will cancel the preparation. You can cancel it before that the drone takes off.

Result : The drone will arm its motors if not already armed.
 Then, event [FlyingState](#1_4_1) is triggered with state set at motor ramping.\n Then, event [FlyingState](#1_4_1) is triggered with state set at userTakeOff.\n Then user can throw the drone to make it take off.

|argument|type|description|
|--------|----|-----------|
|state|u8|State of user take off mode _ 1 to enter in user take off. _ 0 to exit from user take off.|

Example sending the ` UserTakeOff ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
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


## projects.ardrone3.Piloting.Circle

Circle

Make the fixed wing circle.
 The circle will use the [CirclingAltitude](#1_6_14) and the [CirclingRadius](#1_6_13)

Result : The fixed wing will circle in the given direction.
 Then, event [FlyingState](#1_4_1) is triggered with state set at hovering.

|argument|type|description|
|--------|----|-----------|
|direction|enum|The circling direction|
Enums/Symbols (fancy way of saying possible values) for direction :

|direction value|direction name|direction description|
|-----|----|-----------|
|0|CW|Circling ClockWise|
|1|CCW|Circling Counter ClockWise|
|2|default|Use drone default Circling direction set by CirclingDirection cmd|

Example sending the ` Circle ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Circle command message
const CircleMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Circle
);

//send the Circle command message
drone.message.send(CircleMessage);

```


# projects.ardrone3.Camera
-----
### Ask the drone to move camera

The Camera Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Orientation](#projectsardrone3cameraorientation)|0|0x0|Move the camera|
|[OrientationV2](#projectsardrone3cameraorientationv2)|1|0x1|Move the camera|
|[Velocity](#projectsardrone3cameravelocity)|2|0x2|Move the camera using velocity|
## projects.ardrone3.Camera.Orientation

Move the camera

Move the camera.
 You can get min and max values for tilt and pan using [CameraInfo](#0_15_0).

Result : The drone moves its camera.
 Then, event [CameraOrientation](#1_25_0) is triggered.

|argument|type|description|
|--------|----|-----------|
|tilt|i8|Tilt camera consign for the drone (in degree) The value is saturated by the drone. Saturation value is sent by thre drone through CameraSettingsChanged command.|
|pan|i8|Pan camera consign for the drone (in degree) The value is saturated by the drone. Saturation value is sent by thre drone through CameraSettingsChanged command.|

Example sending the ` Orientation ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Camera;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Orientation command message
const OrientationMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Orientation
);

//send the Orientation command message
drone.message.send(OrientationMessage);

```


## projects.ardrone3.Camera.OrientationV2

Move the camera

Move the camera.
 You can get min and max values for tilt and pan using [CameraInfo](#0_15_0).

Result : The drone moves its camera.
 Then, event [CameraOrientationV2](#1_25_2) is triggered.

|argument|type|description|
|--------|----|-----------|
|tilt|float|Tilt camera consign for the drone (in degree) The value is saturated by the drone. Saturation value is sent by thre drone through CameraSettingsChanged command.|
|pan|float|Pan camera consign for the drone (in degree) The value is saturated by the drone. Saturation value is sent by thre drone through CameraSettingsChanged command.|

Example sending the ` OrientationV2 ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Camera;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the OrientationV2 command message
const OrientationV2Message=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.OrientationV2
);

//send the OrientationV2 command message
drone.message.send(OrientationV2Message);

```


## projects.ardrone3.Camera.Velocity

Move the camera using velocity

Move the camera given velocity consign.
 You can get min and max values for tilt and pan using [CameraVelocityRange](#1_25_4).

Result : The drone moves its camera.
 Then, event [CameraOrientationV2](#1_25_2) is triggered.

|argument|type|description|
|--------|----|-----------|
|tilt|float|Tilt camera velocity consign [deg/s] Negative tilt velocity move camera to bottom Positive tilt velocity move camera to top|
|pan|float|Pan camera velocity consign [deg/s] Negative pan velocity move camera to left Positive pan velocity move camera to right|

Example sending the ` Velocity ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Camera;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Velocity command message
const VelocityMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Velocity
);

//send the Velocity command message
drone.message.send(VelocityMessage);

```


# projects.ardrone3.PilotingSettings
-----
### Piloting Settings commands

The PilotingSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxAltitude](#projectsardrone3pilotingsettingsmaxaltitude)|0|0x0|Set max altitude|
|[MaxTilt](#projectsardrone3pilotingsettingsmaxtilt)|1|0x1|Set max pitch/roll|
|[AbsolutControl](#projectsardrone3pilotingsettingsabsolutcontrol)|2|0x2|Set absolut control|
|[MaxDistance](#projectsardrone3pilotingsettingsmaxdistance)|3|0x3|Set max distance|
|[NoFlyOverMaxDistance](#projectsardrone3pilotingsettingsnoflyovermaxdistance)|4|0x4|Enable geofence|
|[setAutonomousFlightMaxHorizontalSpeed](#projectsardrone3pilotingsettingssetautonomousflightmaxhorizontalspeed)|5|0x5|Set autonomous flight max horizontal speed|
|[setAutonomousFlightMaxVerticalSpeed](#projectsardrone3pilotingsettingssetautonomousflightmaxverticalspeed)|6|0x6|Set autonomous flight max vertical speed|
|[setAutonomousFlightMaxHorizontalAcceleration](#projectsardrone3pilotingsettingssetautonomousflightmaxhorizontalacceleration)|7|0x7|Set autonomous flight max horizontal acceleration|
|[setAutonomousFlightMaxVerticalAcceleration](#projectsardrone3pilotingsettingssetautonomousflightmaxverticalacceleration)|8|0x8|Set autonomous flight max vertical acceleration|
|[setAutonomousFlightMaxRotationSpeed](#projectsardrone3pilotingsettingssetautonomousflightmaxrotationspeed)|9|0x9|Set autonomous flight max rotation speed|
|[BankedTurn](#projectsardrone3pilotingsettingsbankedturn)|10|0xa|Set banked turn mode|
|[MinAltitude](#projectsardrone3pilotingsettingsminaltitude)|11|0xb|Set minimum altitude|
|[CirclingDirection](#projectsardrone3pilotingsettingscirclingdirection)|12|0xc|Set default circling direction|
|[CirclingRadius](#projectsardrone3pilotingsettingscirclingradius)|13|0xd|Set circling radius|
|[CirclingAltitude](#projectsardrone3pilotingsettingscirclingaltitude)|14|0xe|Set min circling altitude|
|[PitchMode](#projectsardrone3pilotingsettingspitchmode)|15|0xf|Set pitch mode|
## projects.ardrone3.PilotingSettings.MaxAltitude

Set max altitude

Set max altitude.
 The drone will not fly over this max altitude when it is in manual piloting.
 Please note that if you set a max altitude which is below the current drone altitude, the drone will not go to given max altitude.
 You can get the bounds in the event [MaxAltitude](#1_6_0).

Result : The max altitude is set.
 Then, event [MaxAltitude](#1_6_0) is triggered.

|argument|type|description|
|--------|----|-----------|
|current|float|Current altitude max in m|

Example sending the ` MaxAltitude ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MaxAltitude command message
const MaxAltitudeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MaxAltitude
);

//send the MaxAltitude command message
drone.message.send(MaxAltitudeMessage);

```


## projects.ardrone3.PilotingSettings.MaxTilt

Set max pitch/roll

Set max pitch/roll.
 This represent the max inclination allowed by the drone.
 You can get the bounds with the commands [MaxPitchRoll](#1_6_1).

Result : The max pitch/roll is set.
 Then, event [MaxPitchRoll](#1_6_1) is triggered.

|argument|type|description|
|--------|----|-----------|
|current|float|Current tilt max in degree|

Example sending the ` MaxTilt ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MaxTilt command message
const MaxTiltMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MaxTilt
);

//send the MaxTilt command message
drone.message.send(MaxTiltMessage);

```


## projects.ardrone3.PilotingSettings.AbsolutControl

Set absolut control

Set absolut control.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|on|u8|1 to enable, 0 to disable|

Example sending the ` AbsolutControl ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the AbsolutControl command message
const AbsolutControlMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.AbsolutControl
);

//send the AbsolutControl command message
drone.message.send(AbsolutControlMessage);

```


## projects.ardrone3.PilotingSettings.MaxDistance

Set max distance

Set max distance.
 You can get the bounds from the event [MaxDistance](#1_6_3).

 If [Geofence](#1_6_4) is activated, the drone won't fly over the given max distance.

Result : The max distance is set.
 Then, event [MaxDistance](#1_6_3) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|Current max distance in meter|

Example sending the ` MaxDistance ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MaxDistance command message
const MaxDistanceMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MaxDistance
);

//send the MaxDistance command message
drone.message.send(MaxDistanceMessage);

```


## projects.ardrone3.PilotingSettings.NoFlyOverMaxDistance

Enable geofence

Enable geofence.
 If geofence is enabled, the drone won't fly over the given max distance.
 You can get the max distance from the event [MaxDistance](#1_6_3). 
 For copters: the distance is computed from the controller position, if this position is not known, it will use the take off.
 For fixed wings: the distance is computed from the take off position.

Result : Geofencing is enabled or disabled.
 Then, event [Geofencing](#1_6_4) is triggered.

|argument|type|description|
|--------|----|-----------|
|shouldNotFlyOver|u8|1 if the drone can't fly further than max distance, 0 if no limitation on the drone should be done|

Example sending the ` NoFlyOverMaxDistance ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the NoFlyOverMaxDistance command message
const NoFlyOverMaxDistanceMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.NoFlyOverMaxDistance
);

//send the NoFlyOverMaxDistance command message
drone.message.send(NoFlyOverMaxDistanceMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxHorizontalSpeed

Set autonomous flight max horizontal speed

Set autonomous flight max horizontal speed.
 This will only be used during autonomous flights such as moveBy.

Result : The max horizontal speed is set.
 Then, event [AutonomousFlightMaxHorizontalSpeed](#1_6_5) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|maximum horizontal speed [m/s]|

Example sending the ` setAutonomousFlightMaxHorizontalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the setAutonomousFlightMaxHorizontalSpeed command message
const setAutonomousFlightMaxHorizontalSpeedMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.setAutonomousFlightMaxHorizontalSpeed
);

//send the setAutonomousFlightMaxHorizontalSpeed command message
drone.message.send(setAutonomousFlightMaxHorizontalSpeedMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxVerticalSpeed

Set autonomous flight max vertical speed

Set autonomous flight max vertical speed.
 This will only be used during autonomous flights such as moveBy.

Result : The max vertical speed is set.
 Then, event [AutonomousFlightMaxVerticalSpeed](#1_6_6) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|maximum vertical speed [m/s]|

Example sending the ` setAutonomousFlightMaxVerticalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the setAutonomousFlightMaxVerticalSpeed command message
const setAutonomousFlightMaxVerticalSpeedMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.setAutonomousFlightMaxVerticalSpeed
);

//send the setAutonomousFlightMaxVerticalSpeed command message
drone.message.send(setAutonomousFlightMaxVerticalSpeedMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxHorizontalAcceleration

Set autonomous flight max horizontal acceleration

Set autonomous flight max horizontal acceleration.
 This will only be used during autonomous flights such as moveBy.

Result : The max horizontal acceleration is set.
 Then, event [AutonomousFlightMaxHorizontalAcceleration](#1_6_7) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|maximum horizontal acceleration [m/s2]|

Example sending the ` setAutonomousFlightMaxHorizontalAcceleration ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the setAutonomousFlightMaxHorizontalAcceleration command message
const setAutonomousFlightMaxHorizontalAccelerationMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.setAutonomousFlightMaxHorizontalAcceleration
);

//send the setAutonomousFlightMaxHorizontalAcceleration command message
drone.message.send(setAutonomousFlightMaxHorizontalAccelerationMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxVerticalAcceleration

Set autonomous flight max vertical acceleration

Set autonomous flight max vertical acceleration.
 This will only be used during autonomous flights such as moveBy.

Result : The max vertical acceleration is set.
 Then, event [AutonomousFlightMaxVerticalAcceleration](#1_6_8) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|maximum vertical acceleration [m/s2]|

Example sending the ` setAutonomousFlightMaxVerticalAcceleration ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the setAutonomousFlightMaxVerticalAcceleration command message
const setAutonomousFlightMaxVerticalAccelerationMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.setAutonomousFlightMaxVerticalAcceleration
);

//send the setAutonomousFlightMaxVerticalAcceleration command message
drone.message.send(setAutonomousFlightMaxVerticalAccelerationMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxRotationSpeed

Set autonomous flight max rotation speed

Set autonomous flight max rotation speed.
 This will only be used during autonomous flights such as moveBy.

Result : The max rotation speed is set.
 Then, event [AutonomousFlightMaxRotationSpeed](#1_6_9) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|maximum yaw rotation speed [deg/s]|

Example sending the ` setAutonomousFlightMaxRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the setAutonomousFlightMaxRotationSpeed command message
const setAutonomousFlightMaxRotationSpeedMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.setAutonomousFlightMaxRotationSpeed
);

//send the setAutonomousFlightMaxRotationSpeed command message
drone.message.send(setAutonomousFlightMaxRotationSpeedMessage);

```


## projects.ardrone3.PilotingSettings.BankedTurn

Set banked turn mode

Set banked turn mode.
 When banked turn mode is enabled, the drone will use yaw values from the piloting command to infer with roll and pitch on the drone when its horizontal speed is not null.

Result : The banked turn mode is enabled or disabled.
 Then, event [BankedTurnMode](#1_6_10) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|u8|1 to enable, 0 to disable|

Example sending the ` BankedTurn ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the BankedTurn command message
const BankedTurnMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.BankedTurn
);

//send the BankedTurn command message
drone.message.send(BankedTurnMessage);

```


## projects.ardrone3.PilotingSettings.MinAltitude

Set minimum altitude

Set minimum altitude.
 Only available for fixed wings.

Result : The minimum altitude is set.
 Then, event [MinimumAltitude](#1_6_11) is triggered.

|argument|type|description|
|--------|----|-----------|
|current|float|Current altitude min in m|

Example sending the ` MinAltitude ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MinAltitude command message
const MinAltitudeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MinAltitude
);

//send the MinAltitude command message
drone.message.send(MinAltitudeMessage);

```


## projects.ardrone3.PilotingSettings.CirclingDirection

Set default circling direction

Set default circling direction. This direction will be used when the drone use an automatic circling or when [CIRCLE](#1_0_9) is sent with direction *default*.
 Only available for fixed wings.

Result : The circling direction is set.
 Then, event [DefaultCirclingDirection](#1_6_12) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|enum|The circling direction|
Enums/Symbols (fancy way of saying possible values) for value :

|value value|value name|value description|
|-----|----|-----------|
|0|CW|Circling ClockWise|
|1|CCW|Circling Counter ClockWise|

Example sending the ` CirclingDirection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the CirclingDirection command message
const CirclingDirectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.CirclingDirection
);

//send the CirclingDirection command message
drone.message.send(CirclingDirectionMessage);

```


## projects.ardrone3.PilotingSettings.CirclingRadius

Set circling radius

Set circling radius.
 Only available for fixed wings.

Result : The circling radius is set.
 Then, event [CirclingRadius](#1_6_13) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|u16|The circling radius in meter|

Example sending the ` CirclingRadius ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the CirclingRadius command message
const CirclingRadiusMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.CirclingRadius
);

//send the CirclingRadius command message
drone.message.send(CirclingRadiusMessage);

```


## projects.ardrone3.PilotingSettings.CirclingAltitude

Set min circling altitude

Set min circling altitude (not used during take off).
 Only available for fixed wings.

Result : The circling altitude is set.
 Then, event [CirclingAltitude](#1_6_14) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|u16|The circling altitude in meter|

Example sending the ` CirclingAltitude ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the CirclingAltitude command message
const CirclingAltitudeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.CirclingAltitude
);

//send the CirclingAltitude command message
drone.message.send(CirclingAltitudeMessage);

```


## projects.ardrone3.PilotingSettings.PitchMode

Set pitch mode

Set pitch mode.
 Only available for fixed wings.

Result : The pitch mode is set.
 Then, event [PitchMode](#1_6_15) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|enum|The Pitch mode|
Enums/Symbols (fancy way of saying possible values) for value :

|value value|value name|value description|
|-----|----|-----------|
|0|NORMAL|Positive pitch values will make the drone lower its nose. Negative pitch values will make the drone raise its nose.|
|1|INVERTED|Pitch commands are inverted. Positive pitch values will make the drone raise its nose. Negative pitch values will make the drone lower its nose.|

Example sending the ` PitchMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the PitchMode command message
const PitchModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.PitchMode
);

//send the PitchMode command message
drone.message.send(PitchModeMessage);

```


# projects.ardrone3.MediaRecordEvent
-----
### Events of media recording

The MediaRecordEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureEventChanged](#projectsardrone3mediarecordeventpictureeventchanged)|0|0x0|Picture taken|
|[VideoEventChanged](#projectsardrone3mediarecordeventvideoeventchanged)|1|0x1|Video record notification|
## projects.ardrone3.MediaRecordEvent.PictureEventChanged

Picture taken

Picture taken.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : after a [TakePicture](#1_7_2), when the picture has been taken (or it has failed).

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


## projects.ardrone3.MediaRecordEvent.VideoEventChanged

Video record notification

Video record notification.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : by [RecordVideo](#1_7_3) or a change in the video state.

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


# projects.ardrone3.PilotingState
-----
### State from drone

The PilotingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[FlatTrimChanged](#projectsardrone3pilotingstateflattrimchanged)|0|0x0|Flat trim changed|
|[FlyingStateChanged](#projectsardrone3pilotingstateflyingstatechanged)|1|0x1|Flying state|
|[AlertStateChanged](#projectsardrone3pilotingstatealertstatechanged)|2|0x2|Alert state|
|[NavigateHomeStateChanged](#projectsardrone3pilotingstatenavigatehomestatechanged)|3|0x3|Return home state|
|[PositionChanged](#projectsardrone3pilotingstatepositionchanged)|4|0x4|Drone's position changed|
|[SpeedChanged](#projectsardrone3pilotingstatespeedchanged)|5|0x5|Drone's speed changed|
|[AttitudeChanged](#projectsardrone3pilotingstateattitudechanged)|6|0x6|Drone's attitude changed|
|[AutoTakeOffModeChanged](#projectsardrone3pilotingstateautotakeoffmodechanged)|7|0x7|Auto takeoff mode|
|[AltitudeChanged](#projectsardrone3pilotingstatealtitudechanged)|8|0x8|Drone's altitude changed|
|[GpsLocationChanged](#projectsardrone3pilotingstategpslocationchanged)|9|0x9|Drone's location changed|
|[LandingStateChanged](#projectsardrone3pilotingstatelandingstatechanged)|10|0xa|Landing state|
|[AirSpeedChanged](#projectsardrone3pilotingstateairspeedchanged)|11|0xb|Drone's air speed changed|
## projects.ardrone3.PilotingState.FlatTrimChanged

Flat trim changed

Drone acknowledges that flat trim was correctly processed.

Triggered : by [FlatTrim](#1_0_0).

|argument|type|description|
|--------|----|-----------|


Example binding to listen for the ` FlatTrimChanged ` event from the drone :

```javascript

drone.on(
  'FlatTrimChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.FlyingStateChanged

Flying state

Flying state.

Triggered : when the flying state changes.

|argument|type|description|
|--------|----|-----------|
|state|enum|Drone flying state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|landed|Landed state|
|1|takingoff|Taking off state|
|2|hovering|Hovering / Circling (for fixed wings) state|
|3|flying|Flying state|
|4|landing|Landing state|
|5|emergency|Emergency state|
|6|usertakeoff|User take off state. Waiting for user action to take off.|
|7|motor_ramping|Motor ramping state (for fixed wings).|
|8|emergency_landing|Emergency landing state. Drone autopilot has detected defective sensor(s). Only Yaw argument in PCMD is taken into account. All others flying commands are ignored.|


Example binding to listen for the ` FlyingStateChanged ` event from the drone :

```javascript

drone.on(
  'FlyingStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.AlertStateChanged

Alert state

Alert state.

Triggered : when an alert happens on the drone.

|argument|type|description|
|--------|----|-----------|
|state|enum|Drone alert state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|none|No alert|
|1|user|User emergency alert|
|2|cut_out|Cut out alert|
|3|critical_battery|Critical battery alert|
|4|low_battery|Low battery alert|
|5|too_much_angle|The angle of the drone is too high|


Example binding to listen for the ` AlertStateChanged ` event from the drone :

```javascript

drone.on(
  'AlertStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.NavigateHomeStateChanged

Return home state

Return home state.
 Availability is related to gps fix, magnetometer calibration.

Triggered : by [ReturnHome](#1_0_5) or when the state of the return home changes.

|argument|type|description|
|--------|----|-----------|
|state|enum|State of navigate home|
|reason|enum|Reason of the state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|available|Navigate home is available|
|1|inProgress|Navigate home is in progress|
|2|unavailable|Navigate home is not available|
|3|pending|Navigate home has been received, but its process is pending|
Enums/Symbols (fancy way of saying possible values) for reason :

|reason value|reason name|reason description|
|-----|----|-----------|
|0|userRequest|User requested a navigate home (available_>inProgress)|
|1|connectionLost|Connection between controller and product lost (available_>inProgress)|
|2|lowBattery|Low battery occurred (available_>inProgress)|
|3|finished|Navigate home is finished (inProgress_>available)|
|4|stopped|Navigate home has been stopped (inProgress_>available)|
|5|disabled|Navigate home disabled by product (inProgress_>unavailable or available_>unavailable)|
|6|enabled|Navigate home enabled by product (unavailable_>available)|


Example binding to listen for the ` NavigateHomeStateChanged ` event from the drone :

```javascript

drone.on(
  'NavigateHomeStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.PositionChanged

Drone's position changed

Drone's position changed.

Triggered : regularly.

|argument|type|description|
|--------|----|-----------|
|latitude|double|Latitude position in decimal degrees (500.0 if not available)|
|longitude|double|Longitude position in decimal degrees (500.0 if not available)|
|altitude|double|Altitude in meters (from GPS)|


Example binding to listen for the ` PositionChanged ` event from the drone :

```javascript

drone.on(
  'PositionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.SpeedChanged

Drone's speed changed

Drone's speed changed.
 Expressed in the NED referential (North_East_Down).

Triggered : regularly.

|argument|type|description|
|--------|----|-----------|
|speedX|float|Speed relative to the North (when drone moves to the north, speed is > 0) (in m/s)|
|speedY|float|Speed relative to the East (when drone moves to the east, speed is > 0) (in m/s)|
|speedZ|float|Speed on the z axis (when drone moves down, speed is > 0) (in m/s)|


Example binding to listen for the ` SpeedChanged ` event from the drone :

```javascript

drone.on(
  'SpeedChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.AttitudeChanged

Drone's attitude changed

Drone's attitude changed.

Triggered : regularly.

|argument|type|description|
|--------|----|-----------|
|roll|float|roll value (in radian)|
|pitch|float|Pitch value (in radian)|
|yaw|float|Yaw value (in radian)|


Example binding to listen for the ` AttitudeChanged ` event from the drone :

```javascript

drone.on(
  'AttitudeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.AutoTakeOffModeChanged

Auto takeoff mode

Auto takeoff mode

Result : undefined

|argument|type|description|
|--------|----|-----------|
|state|u8|State of automatic take off mode (1 if enabled)|


Example binding to listen for the ` AutoTakeOffModeChanged ` event from the drone :

```javascript

drone.on(
  'AutoTakeOffModeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.AltitudeChanged

Drone's altitude changed

Drone's altitude changed.
 The altitude reported is the altitude above the take off point.
 To get the altitude above sea level, see [PositionChanged](#1_4_4).

Triggered : regularly.

|argument|type|description|
|--------|----|-----------|
|altitude|double|Altitude in meters|


Example binding to listen for the ` AltitudeChanged ` event from the drone :

```javascript

drone.on(
  'AltitudeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.GpsLocationChanged

Drone's location changed

Drone's location changed.
 This event is meant to replace [PositionChanged](#1_4_4).

Triggered : regularly.

|argument|type|description|
|--------|----|-----------|
|latitude|double|Latitude location in decimal degrees (500.0 if not available)|
|longitude|double|Longitude location in decimal degrees (500.0 if not available)|
|altitude|double|Altitude location in meters.|
|latitude_accuracy|i8|Latitude location error in meters (1 sigma/standard deviation) _1 if not available.|
|longitude_accuracy|i8|Longitude location error in meters (1 sigma/standard deviation) _1 if not available.|
|altitude_accuracy|i8|Altitude location error in meters (1 sigma/standard deviation) _1 if not available.|


Example binding to listen for the ` GpsLocationChanged ` event from the drone :

```javascript

drone.on(
  'GpsLocationChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.LandingStateChanged

Landing state

Landing state.
 Only available for fixed wings (which have two landing modes).

Triggered : when the landing state changes.

|argument|type|description|
|--------|----|-----------|
|state|enum|Drone landing state|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|linear|Linear landing|
|1|spiral|Spiral landing|


Example binding to listen for the ` LandingStateChanged ` event from the drone :

```javascript

drone.on(
  'LandingStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingState.AirSpeedChanged

Drone's air speed changed

Drone's air speed changed
 Expressed in the drone's referential.

Triggered : regularly.

|argument|type|description|
|--------|----|-----------|
|airSpeed|float|Speed relative to air on x axis (speed is always > 0) (in m/s)|


Example binding to listen for the ` AirSpeedChanged ` event from the drone :

```javascript

drone.on(
  'AirSpeedChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.Animations
-----
### Animation commands

The Animations Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Flip](#projectsardrone3animationsflip)|0|0x0|Make a flip|
## projects.ardrone3.Animations.Flip

Make a flip

Make a flip.

Result : The drone will make a flip if it has enough battery.

|argument|type|description|
|--------|----|-----------|
|direction|enum|Direction for the flip|
Enums/Symbols (fancy way of saying possible values) for direction :

|direction value|direction name|direction description|
|-----|----|-----------|
|0|front|Flip direction front|
|1|back|Flip direction back|
|2|right|Flip direction right|
|3|left|Flip direction left|

Example sending the ` Flip ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Animations;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Flip command message
const FlipMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Flip
);

//send the Flip command message
drone.message.send(FlipMessage);

```


# projects.ardrone3.PilotingSettingsState
-----
### Piloting Settings state from product

The PilotingSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxAltitudeChanged](#projectsardrone3pilotingsettingsstatemaxaltitudechanged)|0|0x0|Max altitude|
|[MaxTiltChanged](#projectsardrone3pilotingsettingsstatemaxtiltchanged)|1|0x1|Max pitch/roll|
|[AbsolutControlChanged](#projectsardrone3pilotingsettingsstateabsolutcontrolchanged)|2|0x2|Absolut control|
|[MaxDistanceChanged](#projectsardrone3pilotingsettingsstatemaxdistancechanged)|3|0x3|Max distance|
|[NoFlyOverMaxDistanceChanged](#projectsardrone3pilotingsettingsstatenoflyovermaxdistancechanged)|4|0x4|Geofencing|
|[AutonomousFlightMaxHorizontalSpeed](#projectsardrone3pilotingsettingsstateautonomousflightmaxhorizontalspeed)|5|0x5|Autonomous flight max horizontal speed|
|[AutonomousFlightMaxVerticalSpeed](#projectsardrone3pilotingsettingsstateautonomousflightmaxverticalspeed)|6|0x6|Autonomous flight max vertical speed|
|[AutonomousFlightMaxHorizontalAcceleration](#projectsardrone3pilotingsettingsstateautonomousflightmaxhorizontalacceleration)|7|0x7|Autonomous flight max horizontal acceleration|
|[AutonomousFlightMaxVerticalAcceleration](#projectsardrone3pilotingsettingsstateautonomousflightmaxverticalacceleration)|8|0x8|Autonomous flight max vertical acceleration|
|[AutonomousFlightMaxRotationSpeed](#projectsardrone3pilotingsettingsstateautonomousflightmaxrotationspeed)|9|0x9|Autonomous flight max rotation speed|
|[BankedTurnChanged](#projectsardrone3pilotingsettingsstatebankedturnchanged)|10|0xa|Banked Turn mode|
|[MinAltitudeChanged](#projectsardrone3pilotingsettingsstateminaltitudechanged)|11|0xb|Min altitude|
|[CirclingDirectionChanged](#projectsardrone3pilotingsettingsstatecirclingdirectionchanged)|12|0xc|Circling direction|
|[CirclingRadiusChanged](#projectsardrone3pilotingsettingsstatecirclingradiuschanged)|13|0xd|Circling radius|
|[CirclingAltitudeChanged](#projectsardrone3pilotingsettingsstatecirclingaltitudechanged)|14|0xe|Circling altitude|
|[PitchModeChanged](#projectsardrone3pilotingsettingsstatepitchmodechanged)|15|0xf|Pitch mode|
## projects.ardrone3.PilotingSettingsState.MaxAltitudeChanged

Max altitude

Max altitude.
 The drone will not fly higher than this altitude (above take off point).

Triggered : by [SetMaxAltitude](#1_2_0).

|argument|type|description|
|--------|----|-----------|
|current|float|Current altitude max|
|min|float|Range min of altitude|
|max|float|Range max of altitude|


Example binding to listen for the ` MaxAltitudeChanged ` event from the drone :

```javascript

drone.on(
  'MaxAltitudeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.MaxTiltChanged

Max pitch/roll

Max pitch/roll.
 The drone will not fly higher than this altitude (above take off point).

Triggered : by [SetMaxAltitude](#1_2_0).

|argument|type|description|
|--------|----|-----------|
|current|float|Current max tilt|
|min|float|Range min of tilt|
|max|float|Range max of tilt|


Example binding to listen for the ` MaxTiltChanged ` event from the drone :

```javascript

drone.on(
  'MaxTiltChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AbsolutControlChanged

Absolut control

Absolut control.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|on|u8|1 if enabled, 0 if disabled|


Example binding to listen for the ` AbsolutControlChanged ` event from the drone :

```javascript

drone.on(
  'AbsolutControlChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.MaxDistanceChanged

Max distance

Max distance.

Triggered : by [SetMaxDistance](#1_2_3).

|argument|type|description|
|--------|----|-----------|
|current|float|Current max distance in meter|
|min|float|Minimal possible max distance|
|max|float|Maximal possible max distance|


Example binding to listen for the ` MaxDistanceChanged ` event from the drone :

```javascript

drone.on(
  'MaxDistanceChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.NoFlyOverMaxDistanceChanged

Geofencing

Geofencing.
 If set, the drone won't fly over the [MaxDistance](#1_6_3).

Triggered : by [EnableGeofence](#1_2_4).

|argument|type|description|
|--------|----|-----------|
|shouldNotFlyOver|u8|1 if the drone won't fly further than max distance, 0 if no limitation on the drone will be done|


Example binding to listen for the ` NoFlyOverMaxDistanceChanged ` event from the drone :

```javascript

drone.on(
  'NoFlyOverMaxDistanceChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxHorizontalSpeed

Autonomous flight max horizontal speed

Autonomous flight max horizontal speed.

Triggered : by [SetAutonomousFlightMaxHorizontalSpeed](#1_2_5).

|argument|type|description|
|--------|----|-----------|
|value|float|maximum horizontal speed [m/s]|


Example binding to listen for the ` AutonomousFlightMaxHorizontalSpeed ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxHorizontalSpeed',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxVerticalSpeed

Autonomous flight max vertical speed

Autonomous flight max vertical speed.

Triggered : by [SetAutonomousFlightMaxVerticalSpeed](#1_2_6).

|argument|type|description|
|--------|----|-----------|
|value|float|maximum vertical speed [m/s]|


Example binding to listen for the ` AutonomousFlightMaxVerticalSpeed ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxVerticalSpeed',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxHorizontalAcceleration

Autonomous flight max horizontal acceleration

Autonomous flight max horizontal acceleration.

Triggered : by [SetAutonomousFlightMaxHorizontalAcceleration](#1_2_7).

|argument|type|description|
|--------|----|-----------|
|value|float|maximum horizontal acceleration [m/s2]|


Example binding to listen for the ` AutonomousFlightMaxHorizontalAcceleration ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxHorizontalAcceleration',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxVerticalAcceleration

Autonomous flight max vertical acceleration

Autonomous flight max vertical acceleration.

Triggered : by [SetAutonomousFlightMaxVerticalAcceleration](#1_2_8).

|argument|type|description|
|--------|----|-----------|
|value|float|maximum vertical acceleration [m/s2]|


Example binding to listen for the ` AutonomousFlightMaxVerticalAcceleration ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxVerticalAcceleration',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxRotationSpeed

Autonomous flight max rotation speed

Autonomous flight max rotation speed.

Triggered : by [SetAutonomousFlightMaxRotationSpeed](#1_2_9).

|argument|type|description|
|--------|----|-----------|
|value|float|maximum yaw rotation speed [deg/s]|


Example binding to listen for the ` AutonomousFlightMaxRotationSpeed ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxRotationSpeed',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.BankedTurnChanged

Banked Turn mode

Banked Turn mode.
 If banked turn mode is enabled, the drone will use yaw values from the piloting command to infer with roll and pitch on the drone when its horizontal speed is not null.

Triggered : by [SetBankedTurnMode](#1_2_10).

|argument|type|description|
|--------|----|-----------|
|state|u8|1 if enabled, 0 if disabled|


Example binding to listen for the ` BankedTurnChanged ` event from the drone :

```javascript

drone.on(
  'BankedTurnChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.MinAltitudeChanged

Min altitude

Min altitude.
 Only sent by fixed wings.

Triggered : by [SetMinAltitude](#1_2_11).

|argument|type|description|
|--------|----|-----------|
|current|float|Current altitude min|
|min|float|Range min of altitude min|
|max|float|Range max of altitude min|


Example binding to listen for the ` MinAltitudeChanged ` event from the drone :

```javascript

drone.on(
  'MinAltitudeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.CirclingDirectionChanged

Circling direction

Circling direction.
 Only sent by fixed wings.

Triggered : by [SetCirclingDirection](#1_2_12).

|argument|type|description|
|--------|----|-----------|
|value|enum|The circling direction|
Enums/Symbols (fancy way of saying possible values) for value :

|value value|value name|value description|
|-----|----|-----------|
|0|CW|Circling ClockWise|
|1|CCW|Circling Counter ClockWise|


Example binding to listen for the ` CirclingDirectionChanged ` event from the drone :

```javascript

drone.on(
  'CirclingDirectionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.CirclingRadiusChanged

Circling radius

Circling radius.
 Only sent by fixed wings.

Triggered : by [SetCirclingRadius](#1_2_13).

|argument|type|description|
|--------|----|-----------|
|current|u16|The current circling radius in meter|
|min|u16|Range min of circling radius in meter|
|max|u16|Range max of circling radius in meter|


Example binding to listen for the ` CirclingRadiusChanged ` event from the drone :

```javascript

drone.on(
  'CirclingRadiusChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.CirclingAltitudeChanged

Circling altitude

Circling altitude.
 Bounds will be automatically adjusted according to the [MaxAltitude](#1_6_0).
 Only sent by fixed wings.

Triggered : by [SetCirclingRadius](#1_2_14) or when bounds change due to [SetMaxAltitude](#1_2_0).

|argument|type|description|
|--------|----|-----------|
|current|u16|The current circling altitude in meter|
|min|u16|Range min of circling altitude in meter|
|max|u16|Range max of circling altitude in meter|


Example binding to listen for the ` CirclingAltitudeChanged ` event from the drone :

```javascript

drone.on(
  'CirclingAltitudeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PilotingSettingsState.PitchModeChanged

Pitch mode

Pitch mode.

Triggered : by [SetPitchMode](#1_2_15).

|argument|type|description|
|--------|----|-----------|
|value|enum|The Pitch mode|
Enums/Symbols (fancy way of saying possible values) for value :

|value value|value name|value description|
|-----|----|-----------|
|0|NORMAL|Positive pitch values will make the drone lower its nose. Negative pitch values will make the drone raise its nose.|
|1|INVERTED|Pitch commands are inverted. Positive pitch values will make the drone raise its nose. Negative pitch values will make the drone lower its nose.|


Example binding to listen for the ` PitchModeChanged ` event from the drone :

```javascript

drone.on(
  'PitchModeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.MediaRecord
-----
### Media recording management

The MediaRecord Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Picture](#projectsardrone3mediarecordpicture)|0|0x0|Take a picture|
|[Video](#projectsardrone3mediarecordvideo)|1|0x1|Record a video|
|[PictureV2](#projectsardrone3mediarecordpicturev2)|2|0x2|Take a picture|
|[VideoV2](#projectsardrone3mediarecordvideov2)|3|0x3|Record a video|
## projects.ardrone3.MediaRecord.Picture

Take a picture

Take a picture.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|mass_storage_id|u8|Mass storage id to take picture|

Example sending the ` Picture ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Picture command message
const PictureMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Picture
);

//send the Picture command message
drone.message.send(PictureMessage);

```


## projects.ardrone3.MediaRecord.Video

Record a video

Record a video.

Result : undefined

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

const project=drone.projects.ardrone3;
const commandClass=project.MediaRecord;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Video command message
const VideoMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Video
);

//send the Video command message
drone.message.send(VideoMessage);

```


## projects.ardrone3.MediaRecord.PictureV2

Take a picture

Take a picture.
 The type of picture taken is related to the picture setting.
 You can set the picture format by sending the command [SetPictureFormat](#1_19_0). You can also get the current picture format with [PictureFormat](#1_20_0).
 Please note that the time required to take the picture is highly related to this format.

 You can check if the picture taking is available with [PictureState](#1_8_2).
 Also, please note that if your picture format is different from snapshot, picture taking will stop video recording (it will restart after that the picture has been taken).

Result : Event [PictureState](#1_8_2) will be triggered with a state busy.
 The drone will take a picture.\n Then, when picture has been taken, notification [PictureEvent](#1_3_0) is triggered.\n And normally [PictureState](#1_8_2) will be triggered with a state ready.

|argument|type|description|
|--------|----|-----------|

Example sending the ` PictureV2 ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
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


## projects.ardrone3.MediaRecord.VideoV2

Record a video

Record a video (or start timelapse).
 You can check if the video recording is available with [VideoState](#1_8_3).
 This command can start a video (obvious huh?), but also a timelapse if the timelapse mode is set. You can check if the timelapse mode is set with the event [TimelapseMode](#1_20_4).
 Also, please note that if your picture format is different from snapshot, picture taking will stop video recording (it will restart after the picture has been taken).

Result : The drone will begin or stop to record the video (or timelapse).
 Then, event [VideoState](#1_8_3) will be triggered. Also, notification [VideoEvent](#1_3_1) is triggered.

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

const project=drone.projects.ardrone3;
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


# projects.ardrone3.MediaRecordState
-----
### State of media recording

The MediaRecordState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureStateChanged](#projectsardrone3mediarecordstatepicturestatechanged)|0|0x0|Picture state|
|[VideoStateChanged](#projectsardrone3mediarecordstatevideostatechanged)|1|0x1|Video record state|
|[PictureStateChangedV2](#projectsardrone3mediarecordstatepicturestatechangedv2)|2|0x2|Picture state|
|[VideoStateChangedV2](#projectsardrone3mediarecordstatevideostatechangedv2)|3|0x3|Video record state|
|[VideoResolutionState](#projectsardrone3mediarecordstatevideoresolutionstate)|4|0x4|Video resolution|
## projects.ardrone3.MediaRecordState.PictureStateChanged

Picture state

Picture state.

Result : undefined

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


## projects.ardrone3.MediaRecordState.VideoStateChanged

Video record state

Picture record state.

Result : undefined

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
|3|autostopped|Video was auto stopped|


Example binding to listen for the ` VideoStateChanged ` event from the drone :

```javascript

drone.on(
  'VideoStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.MediaRecordState.PictureStateChangedV2

Picture state

Picture state.

Triggered : by [TakePicture](#1_7_2) or by a change in the picture state

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


## projects.ardrone3.MediaRecordState.VideoStateChangedV2

Video record state

Video record state.

Triggered : by [RecordVideo](#1_7_3) or by a change in the video state

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


## projects.ardrone3.MediaRecordState.VideoResolutionState

Video resolution

Video resolution.
 Informs about streaming and recording video resolutions.
 Note that this is only an indication about what the resolution should be. To know the real resolution, you should get it from the frame.

Triggered : when the resolution changes.

|argument|type|description|
|--------|----|-----------|
|streaming|enum|Streaming resolution|
|recording|enum|Recording resolution|
Enums/Symbols (fancy way of saying possible values) for streaming :

|streaming value|streaming name|streaming description|
|-----|----|-----------|
|0|res360p|360p resolution.|
|1|res480p|480p resolution.|
|2|res720p|720p resolution.|
|3|res1080p|1080p resolution.|
Enums/Symbols (fancy way of saying possible values) for recording :

|recording value|recording name|recording description|
|-----|----|-----------|
|0|res360p|360p resolution.|
|1|res480p|480p resolution.|
|2|res720p|720p resolution.|
|3|res1080p|1080p resolution.|


Example binding to listen for the ` VideoResolutionState ` event from the drone :

```javascript

drone.on(
  'VideoResolutionState',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.NetworkSettings
-----
### Network settings commands

The NetworkSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiSelection](#projectsardrone3networksettingswifiselection)|0|0x0|Select Wifi|
|[wifiSecurity](#projectsardrone3networksettingswifisecurity)|1|0x1|Set wifi security type|
## projects.ardrone3.NetworkSettings.WifiSelection

Select Wifi

Select or auto_select channel of choosen band.

Result : The wifi channel changes according to given parameters. Watch out, a disconnection might appear.
 Then, event [WifiSelection](#1_10_0) is triggered.

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

const project=drone.projects.ardrone3;
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


## projects.ardrone3.NetworkSettings.wifiSecurity

Set wifi security type

Set wifi security type.
 The security will be changed on the next restart

Result : The wifi security is set (but not applied until next restart).
 Then, event [WifiSecurityType](#1_10_2) is triggered.

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of wifi security (open, wpa2)|
|key|string|The key to secure the network (empty if type is open)|
|keyType|enum|Type of the key|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|open|Wifi is not protected by any security (default)|
|1|wpa2|Wifi is protected by wpa2|
Enums/Symbols (fancy way of saying possible values) for keyType :

|keyType value|keyType name|keyType description|
|-----|----|-----------|
|0|plain|Key is plain text, not encrypted|

Example sending the ` wifiSecurity ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.NetworkSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the wifiSecurity command message
const wifiSecurityMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.wifiSecurity
);

//send the wifiSecurity command message
drone.message.send(wifiSecurityMessage);

```


# projects.ardrone3.NetworkSettingsState
-----
### Network settings state from product

The NetworkSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiSelectionChanged](#projectsardrone3networksettingsstatewifiselectionchanged)|0|0x0|Wifi selection|
|[wifiSecurityChanged](#projectsardrone3networksettingsstatewifisecuritychanged)|1|0x1|Wifi security type|
|[wifiSecurity](#projectsardrone3networksettingsstatewifisecurity)|2|0x2|Wifi security type|
## projects.ardrone3.NetworkSettingsState.WifiSelectionChanged

Wifi selection

Wifi selection.

Triggered : by [SelectWifi](#1_9_0).

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


## projects.ardrone3.NetworkSettingsState.wifiSecurityChanged

Wifi security type

Wifi security type.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of wifi security (open, wpa2)|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|open|Wifi is not protected by any security (default)|
|1|wpa2|Wifi is protected by wpa2|


Example binding to listen for the ` wifiSecurityChanged ` event from the drone :

```javascript

drone.on(
  'wifiSecurityChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.NetworkSettingsState.wifiSecurity

Wifi security type

Wifi security type.

Triggered : by [SetWifiSecurityType](#1_9_1).

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of wifi security (open, wpa2)|
|key|string|The key used to secure the network (empty if type is open)|
|keyType|enum|Type of the key|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|open|Wifi is not protected by any security (default)|
|1|wpa2|Wifi is protected by wpa2|
Enums/Symbols (fancy way of saying possible values) for keyType :

|keyType value|keyType name|keyType description|
|-----|----|-----------|
|0|plain|Key is plain text, not encrypted|


Example binding to listen for the ` wifiSecurity ` event from the drone :

```javascript

drone.on(
  'wifiSecurity',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.SpeedSettings
-----
### Speed Settings commands

The SpeedSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxVerticalSpeed](#projectsardrone3speedsettingsmaxverticalspeed)|0|0x0|Set max vertical speed|
|[MaxRotationSpeed](#projectsardrone3speedsettingsmaxrotationspeed)|1|0x1|Set max rotation speed|
|[HullProtection](#projectsardrone3speedsettingshullprotection)|2|0x2|Set the presence of hull protection|
|[Outdoor](#projectsardrone3speedsettingsoutdoor)|3|0x3|Set outdoor mode|
|[MaxPitchRollRotationSpeed](#projectsardrone3speedsettingsmaxpitchrollrotationspeed)|4|0x4|Set max pitch/roll rotation speed|
## projects.ardrone3.SpeedSettings.MaxVerticalSpeed

Set max vertical speed

Set max vertical speed.

Result : The max vertical speed is set.
 Then, event [MaxVerticalSpeed](#1_12_0) is triggered.

|argument|type|description|
|--------|----|-----------|
|current|float|Current max vertical speed in m/s|

Example sending the ` MaxVerticalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MaxVerticalSpeed command message
const MaxVerticalSpeedMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MaxVerticalSpeed
);

//send the MaxVerticalSpeed command message
drone.message.send(MaxVerticalSpeedMessage);

```


## projects.ardrone3.SpeedSettings.MaxRotationSpeed

Set max rotation speed

Set max rotation speed.

Result : The max rotation speed is set.
 Then, event [MaxRotationSpeed](#1_12_1) is triggered.

|argument|type|description|
|--------|----|-----------|
|current|float|Current max yaw rotation speed in degree/s|

Example sending the ` MaxRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MaxRotationSpeed command message
const MaxRotationSpeedMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MaxRotationSpeed
);

//send the MaxRotationSpeed command message
drone.message.send(MaxRotationSpeedMessage);

```


## projects.ardrone3.SpeedSettings.HullProtection

Set the presence of hull protection

Set the presence of hull protection.

Result : The drone knows that it has a hull protection.
 Then, event [HullProtection](#1_12_2) is triggered.

|argument|type|description|
|--------|----|-----------|
|present|u8|1 if present, 0 if not present|

Example sending the ` HullProtection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the HullProtection command message
const HullProtectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.HullProtection
);

//send the HullProtection command message
drone.message.send(HullProtectionMessage);

```


## projects.ardrone3.SpeedSettings.Outdoor

Set outdoor mode

Set outdoor mode.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|outdoor|u8|1 if outdoor flight, 0 if indoor flight|

Example sending the ` Outdoor ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Outdoor command message
const OutdoorMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Outdoor
);

//send the Outdoor command message
drone.message.send(OutdoorMessage);

```


## projects.ardrone3.SpeedSettings.MaxPitchRollRotationSpeed

Set max pitch/roll rotation speed

Set max pitch/roll rotation speed.

Result : The max pitch/roll rotation speed is set.
 Then, event [MaxPitchRollRotationSpeed](#1_12_4) is triggered.

|argument|type|description|
|--------|----|-----------|
|current|float|Current max pitch/roll rotation speed in degree/s|

Example sending the ` MaxPitchRollRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the MaxPitchRollRotationSpeed command message
const MaxPitchRollRotationSpeedMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.MaxPitchRollRotationSpeed
);

//send the MaxPitchRollRotationSpeed command message
drone.message.send(MaxPitchRollRotationSpeedMessage);

```


# projects.ardrone3.SpeedSettingsState
-----
### Speed Settings state from product

The SpeedSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxVerticalSpeedChanged](#projectsardrone3speedsettingsstatemaxverticalspeedchanged)|0|0x0|Max vertical speed|
|[MaxRotationSpeedChanged](#projectsardrone3speedsettingsstatemaxrotationspeedchanged)|1|0x1|Max rotation speed|
|[HullProtectionChanged](#projectsardrone3speedsettingsstatehullprotectionchanged)|2|0x2|Presence of hull protection|
|[OutdoorChanged](#projectsardrone3speedsettingsstateoutdoorchanged)|3|0x3|Outdoor mode|
|[MaxPitchRollRotationSpeedChanged](#projectsardrone3speedsettingsstatemaxpitchrollrotationspeedchanged)|4|0x4|Max pitch/roll rotation speed|
## projects.ardrone3.SpeedSettingsState.MaxVerticalSpeedChanged

Max vertical speed

Max vertical speed.

Triggered : by [SetMaxVerticalSpeed](#1_11_0).

|argument|type|description|
|--------|----|-----------|
|current|float|Current max vertical speed in m/s|
|min|float|Range min of vertical speed|
|max|float|Range max of vertical speed|


Example binding to listen for the ` MaxVerticalSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxVerticalSpeedChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SpeedSettingsState.MaxRotationSpeedChanged

Max rotation speed

Max rotation speed.

Triggered : by [SetMaxRotationSpeed](#1_11_1).

|argument|type|description|
|--------|----|-----------|
|current|float|Current max yaw rotation speed in degree/s|
|min|float|Range min of yaw rotation speed|
|max|float|Range max of yaw rotation speed|


Example binding to listen for the ` MaxRotationSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxRotationSpeedChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SpeedSettingsState.HullProtectionChanged

Presence of hull protection

Presence of hull protection.

Triggered : by [SetHullProtectionPresence](#1_11_2).

|argument|type|description|
|--------|----|-----------|
|present|u8|1 if present, 0 if not present|


Example binding to listen for the ` HullProtectionChanged ` event from the drone :

```javascript

drone.on(
  'HullProtectionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SpeedSettingsState.OutdoorChanged

Outdoor mode

Outdoor mode.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|outdoor|u8|1 if outdoor flight, 0 if indoor flight|


Example binding to listen for the ` OutdoorChanged ` event from the drone :

```javascript

drone.on(
  'OutdoorChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SpeedSettingsState.MaxPitchRollRotationSpeedChanged

Max pitch/roll rotation speed

Max pitch/roll rotation speed.

Triggered : by [SetMaxPitchRollRotationSpeed](#1_11_4).

|argument|type|description|
|--------|----|-----------|
|current|float|Current max pitch/roll rotation speed in degree/s|
|min|float|Range min of pitch/roll rotation speed|
|max|float|Range max of pitch/roll rotation speed|


Example binding to listen for the ` MaxPitchRollRotationSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxPitchRollRotationSpeedChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.Network
-----
### Network related commands

The Network Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiScan](#projectsardrone3networkwifiscan)|0|0x0|Scan wifi network|
|[WifiAuthChannel](#projectsardrone3networkwifiauthchannel)|1|0x1|Ask for available wifi channels|
## projects.ardrone3.Network.WifiScan

Scan wifi network

Scan wifi network to get a list of all networks found by the drone

Result : Event [WifiScanResults](#1_14_0) is triggered with all networks found.
 When all networks have been sent, event [WifiScanEnded](#1_14_1) is triggered.

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

const project=drone.projects.ardrone3;
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


## projects.ardrone3.Network.WifiAuthChannel

Ask for available wifi channels

Ask for available wifi channels.
 The list of available Wifi channels is related to the country of the drone. You can get this country from the event [CountryChanged](#0_3_6).

Result : Event [AvailableWifiChannels](#1_14_2) is triggered with all available channels. When all channels have been sent, event [AvailableWifiChannelsCompleted](#1_14_3) is triggered.

|argument|type|description|
|--------|----|-----------|

Example sending the ` WifiAuthChannel ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
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


# projects.ardrone3.NetworkState
-----
### Network state from Product

The NetworkState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[WifiScanListChanged](#projectsardrone3networkstatewifiscanlistchanged)|0|0x0|Wifi scan results|
|[AllWifiScanChanged](#projectsardrone3networkstateallwifiscanchanged)|1|0x1|Wifi scan ended|
|[WifiAuthChannelListChanged](#projectsardrone3networkstatewifiauthchannellistchanged)|2|0x2|Available wifi channels|
|[AllWifiAuthChannelChanged](#projectsardrone3networkstateallwifiauthchannelchanged)|3|0x3|Available wifi channels completed|
## projects.ardrone3.NetworkState.WifiScanListChanged

Wifi scan results

Wifi scan results.
 Please note that the list is not complete until you receive the event [WifiScanEnded](#1_14_1).

Triggered : for each wifi network scanned after a [ScanWifi](#1_13_0)

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


## projects.ardrone3.NetworkState.AllWifiScanChanged

Wifi scan ended

Wifi scan ended.
 When receiving this event, the list of [WifiScanResults](#1_14_0) is complete.

Triggered : after the last [WifiScanResult](#1_14_0) has been sent.

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


## projects.ardrone3.NetworkState.WifiAuthChannelListChanged

Available wifi channels

Available wifi channels.
 Please note that the list is not complete until you receive the event [AvailableWifiChannelsCompleted](#1_14_3).

Triggered : for each available channel after a [GetAvailableWifiChannels](#1_13_1).

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


## projects.ardrone3.NetworkState.AllWifiAuthChannelChanged

Available wifi channels completed

Available wifi channels completed.
 When receiving this event, the list of [AvailableWifiChannels](#1_14_2) is complete.

Triggered : after the last [AvailableWifiChannel](#1_14_2) has been sent.

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


# projects.ardrone3.SettingsState
-----
### Settings state from product

The SettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ProductMotorVersionListChanged](#projectsardrone3settingsstateproductmotorversionlistchanged)|0|0x0|Motor version|
|[ProductGPSVersionChanged](#projectsardrone3settingsstateproductgpsversionchanged)|1|0x1|GPS version|
|[MotorErrorStateChanged](#projectsardrone3settingsstatemotorerrorstatechanged)|2|0x2|Motor error|
|[MotorSoftwareVersionChanged](#projectsardrone3settingsstatemotorsoftwareversionchanged)|3|0x3|Motor version|
|[MotorFlightsStatusChanged](#projectsardrone3settingsstatemotorflightsstatuschanged)|4|0x4|Motor flight status|
|[MotorErrorLastErrorChanged](#projectsardrone3settingsstatemotorerrorlasterrorchanged)|5|0x5|Last motor error|
|[P7ID](#projectsardrone3settingsstatep7id)|6|0x6|P7ID|
|[CPUID](#projectsardrone3settingsstatecpuid)|7|0x7|Product main cpu id|
## projects.ardrone3.SettingsState.ProductMotorVersionListChanged

Motor version

Motor version.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|motor_number|u8|Product Motor number|
|type|string|Product Motor type|
|software|string|Product Motors software version|
|hardware|string|Product Motors hardware version|


Example binding to listen for the ` ProductMotorVersionListChanged ` event from the drone :

```javascript

drone.on(
  'ProductMotorVersionListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SettingsState.ProductGPSVersionChanged

GPS version

GPS version.

Triggered : at connection.

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


## projects.ardrone3.SettingsState.MotorErrorStateChanged

Motor error

Motor error.
 This event is sent back to *noError* as soon as the motor error disappear. To get the last motor error, see [LastMotorError](#1_16_5)

Triggered : when a motor error occurs.

|argument|type|description|
|--------|----|-----------|
|motorIds|u8|Bit field for concerned motor. If bit 0 = 1, motor 1 is affected by this error. Same with bit 1, 2 and 3. Motor 1: front left Motor 2: front right Motor 3: back right Motor 4: back left|
|motorError|enum|Enumeration of the motor error|
Enums/Symbols (fancy way of saying possible values) for motorError :

|motorError value|motorError name|motorError description|
|-----|----|-----------|
|0|noError|No error detected|
|1|errorEEPRom|EEPROM access failure|
|2|errorMotorStalled|Motor stalled|
|3|errorPropellerSecurity|Propeller cutout security triggered|
|4|errorCommLost|Communication with motor failed by timeout|
|5|errorRCEmergencyStop|RC emergency stop|
|6|errorRealTime|Motor controler scheduler real_time out of bounds|
|7|errorMotorSetting|One or several incorrect values in motor settings|
|8|errorTemperature|Too hot or too cold Cypress temperature|
|9|errorBatteryVoltage|Battery voltage out of bounds|
|10|errorLipoCells|Incorrect number of LIPO cells|
|11|errorMOSFET|Defectuous MOSFET or broken motor phases|
|12|errorBootloader|Not use for BLDC but useful for HAL|
|13|errorAssert|Error Made by BLDC_ASSERT()|


Example binding to listen for the ` MotorErrorStateChanged ` event from the drone :

```javascript

drone.on(
  'MotorErrorStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SettingsState.MotorSoftwareVersionChanged

Motor version

Motor version.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|version|string|name of the version : dot separated fields (major version _ minor version _ firmware type _ nb motors handled). Firmware types : Release, Debug, Alpha, Test_bench|


Example binding to listen for the ` MotorSoftwareVersionChanged ` event from the drone :

```javascript

drone.on(
  'MotorSoftwareVersionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SettingsState.MotorFlightsStatusChanged

Motor flight status

Motor flight status.

Triggered : at connection.

|argument|type|description|
|--------|----|-----------|
|nbFlights|u16|total number of flights|
|lastFlightDuration|u16|Duration of the last flight (in seconds)|
|totalFlightDuration|u32|Duration of all flights (in seconds)|


Example binding to listen for the ` MotorFlightsStatusChanged ` event from the drone :

```javascript

drone.on(
  'MotorFlightsStatusChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SettingsState.MotorErrorLastErrorChanged

Last motor error

Last motor error.
 This is a reminder of the last error. To know if a motor error is currently happening, see [MotorError](#1_16_2).

Triggered : at connection and when an error occurs.

|argument|type|description|
|--------|----|-----------|
|motorError|enum|Enumeration of the motor error|
Enums/Symbols (fancy way of saying possible values) for motorError :

|motorError value|motorError name|motorError description|
|-----|----|-----------|
|0|noError|No error detected|
|1|errorEEPRom|EEPROM access failure|
|2|errorMotorStalled|Motor stalled|
|3|errorPropellerSecurity|Propeller cutout security triggered|
|4|errorCommLost|Communication with motor failed by timeout|
|5|errorRCEmergencyStop|RC emergency stop|
|6|errorRealTime|Motor controler scheduler real_time out of bounds|
|7|errorMotorSetting|One or several incorrect values in motor settings|
|8|errorBatteryVoltage|Battery voltage out of bounds|
|9|errorLipoCells|Incorrect number of LIPO cells|
|10|errorMOSFET|Defectuous MOSFET or broken motor phases|
|11|errorTemperature|Too hot or too cold Cypress temperature|
|12|errorBootloader|Not use for BLDC but useful for HAL|
|13|errorAssert|Error Made by BLDC_ASSERT()|


Example binding to listen for the ` MotorErrorLastErrorChanged ` event from the drone :

```javascript

drone.on(
  'MotorErrorLastErrorChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.SettingsState.P7ID

P7ID

P7ID.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|serialID|string|Product P7ID|

Example sending the ` P7ID ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SettingsState;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the P7ID command message
const P7IDMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.P7ID
);

//send the P7ID command message
drone.message.send(P7IDMessage);

```


## projects.ardrone3.SettingsState.CPUID

Product main cpu id





|argument|type|description|
|--------|----|-----------|
|id|string|Product main cpu id|

Example sending the ` CPUID ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SettingsState;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the CPUID command message
const CPUIDMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.CPUID
);

//send the CPUID command message
drone.message.send(CPUIDMessage);

```


# projects.ardrone3.PictureSettings
-----
### Photo settings chosen by the user

The PictureSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureFormatSelection](#projectsardrone3picturesettingspictureformatselection)|0|0x0|Set picture format|
|[AutoWhiteBalanceSelection](#projectsardrone3picturesettingsautowhitebalanceselection)|1|0x1|Set White Balance mode|
|[ExpositionSelection](#projectsardrone3picturesettingsexpositionselection)|2|0x2|Set image exposure|
|[SaturationSelection](#projectsardrone3picturesettingssaturationselection)|3|0x3|Set image saturation|
|[TimelapseSelection](#projectsardrone3picturesettingstimelapseselection)|4|0x4|Set timelapse mode|
|[VideoAutorecordSelection](#projectsardrone3picturesettingsvideoautorecordselection)|5|0x5|Set video autorecord mode|
|[VideoStabilizationMode](#projectsardrone3picturesettingsvideostabilizationmode)|6|0x6|Set video stabilization mode|
|[VideoRecordingMode](#projectsardrone3picturesettingsvideorecordingmode)|7|0x7|Set video recording mode|
|[VideoFramerate](#projectsardrone3picturesettingsvideoframerate)|8|0x8|Set video framerate|
|[VideoResolutions](#projectsardrone3picturesettingsvideoresolutions)|9|0x9|Set video resolutions|
## projects.ardrone3.PictureSettings.PictureFormatSelection

Set picture format

Set picture format.
 Please note that the time required to take the picture is highly related to this format.
 Also, please note that if your picture format is different from snapshot, picture taking will stop video recording (it will restart after the picture has been taken).

Result : The picture format is set.
 Then, event [PictureFormat](#1_20_0) is triggered.

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of photo format|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|raw|Take raw image|
|1|jpeg|Take a 4_3 jpeg photo|
|2|snapshot|Take a 16_9 snapshot from camera|
|3|jpeg_fisheye|Take jpeg fisheye image only|

Example sending the ` PictureFormatSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the PictureFormatSelection command message
const PictureFormatSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.PictureFormatSelection
);

//send the PictureFormatSelection command message
drone.message.send(PictureFormatSelectionMessage);

```


## projects.ardrone3.PictureSettings.AutoWhiteBalanceSelection

Set White Balance mode

Set White Balance mode.

Result : The white balance mode is set.
 Then, event [WhiteBalanceMode](#1_20_1) is triggered.

|argument|type|description|
|--------|----|-----------|
|type|enum|The type auto white balance|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|auto|Auto guess of best white balance params|
|1|tungsten|Tungsten white balance|
|2|daylight|Daylight white balance|
|3|cloudy|Cloudy white balance|
|4|cool_white|White balance for a flash|

Example sending the ` AutoWhiteBalanceSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the AutoWhiteBalanceSelection command message
const AutoWhiteBalanceSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.AutoWhiteBalanceSelection
);

//send the AutoWhiteBalanceSelection command message
drone.message.send(AutoWhiteBalanceSelectionMessage);

```


## projects.ardrone3.PictureSettings.ExpositionSelection

Set image exposure

Set image exposure.

Result : The exposure is set.
 Then, event [ImageExposure](#1_20_2) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|Exposition value (bounds given by ExpositionChanged arg min and max, by default [_3_3])|

Example sending the ` ExpositionSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the ExpositionSelection command message
const ExpositionSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.ExpositionSelection
);

//send the ExpositionSelection command message
drone.message.send(ExpositionSelectionMessage);

```


## projects.ardrone3.PictureSettings.SaturationSelection

Set image saturation

Set image saturation.

Result : The saturation is set.
 Then, event [ImageSaturation](#1_20_3) is triggered.

|argument|type|description|
|--------|----|-----------|
|value|float|Saturation value (bounds given by SaturationChanged arg min and max, by default [_100_100])|

Example sending the ` SaturationSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the SaturationSelection command message
const SaturationSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.SaturationSelection
);

//send the SaturationSelection command message
drone.message.send(SaturationSelectionMessage);

```


## projects.ardrone3.PictureSettings.TimelapseSelection

Set timelapse mode

Set timelapse mode.
 If timelapse mode is set, instead of taking a video, the drone will take picture regularly.
 Watch out, this command only configure the timelapse mode. Once it is configured, you can start/stop the timelapse with the [RecordVideo](#1_7_3) command.

Result : The timelapse mode is set (but not started).
 Then, event [TimelapseMode](#1_20_4) is triggered.

|argument|type|description|
|--------|----|-----------|
|enabled|u8|1 if timelapse is enabled, 0 otherwise|
|interval|float|interval in seconds for taking pictures|

Example sending the ` TimelapseSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the TimelapseSelection command message
const TimelapseSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.TimelapseSelection
);

//send the TimelapseSelection command message
drone.message.send(TimelapseSelectionMessage);

```


## projects.ardrone3.PictureSettings.VideoAutorecordSelection

Set video autorecord mode

Set video autorecord mode.
 If autorecord is set, video record will be automatically started when the drone takes off and stopped slightly after landing.

Result : The autorecord mode is set.
 Then, event [AutorecordMode](#1_20_5) is triggered.

|argument|type|description|
|--------|----|-----------|
|enabled|u8|1 if video autorecord is enabled, 0 otherwise|
|mass_storage_id|u8|Mass storage id to take video|

Example sending the ` VideoAutorecordSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoAutorecordSelection command message
const VideoAutorecordSelectionMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoAutorecordSelection
);

//send the VideoAutorecordSelection command message
drone.message.send(VideoAutorecordSelectionMessage);

```


## projects.ardrone3.PictureSettings.VideoStabilizationMode

Set video stabilization mode

Set video stabilization mode.

Result : The video stabilization mode is set.
 Then, event [VideoStabilizationMode](#1_20_6) is triggered.

|argument|type|description|
|--------|----|-----------|
|mode|enum|Video stabilization mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|roll_pitch|Video flat on roll and pitch|
|1|pitch|Video flat on pitch only|
|2|roll|Video flat on roll only|
|3|none|Video follows drone angles|

Example sending the ` VideoStabilizationMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoStabilizationMode command message
const VideoStabilizationModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoStabilizationMode
);

//send the VideoStabilizationMode command message
drone.message.send(VideoStabilizationModeMessage);

```


## projects.ardrone3.PictureSettings.VideoRecordingMode

Set video recording mode

Set video recording mode.

Result : The video recording mode is set.
 Then, event [VideoRecordingMode](#1_20_7) is triggered.

|argument|type|description|
|--------|----|-----------|
|mode|enum|Video recording mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|quality|Maximize recording quality.|
|1|time|Maximize recording time.|

Example sending the ` VideoRecordingMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoRecordingMode command message
const VideoRecordingModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoRecordingMode
);

//send the VideoRecordingMode command message
drone.message.send(VideoRecordingModeMessage);

```


## projects.ardrone3.PictureSettings.VideoFramerate

Set video framerate

Set video framerate.

Result : The video framerate is set.
 Then, event [VideoFramerate](#1_20_8) is triggered.

|argument|type|description|
|--------|----|-----------|
|framerate|enum|Video framerate|
Enums/Symbols (fancy way of saying possible values) for framerate :

|framerate value|framerate name|framerate description|
|-----|----|-----------|
|0|_24_FPS|23.976 frames per second.|
|1|_25_FPS|25 frames per second.|
|2|_30_FPS|29.97 frames per second.|

Example sending the ` VideoFramerate ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoFramerate command message
const VideoFramerateMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoFramerate
);

//send the VideoFramerate command message
drone.message.send(VideoFramerateMessage);

```


## projects.ardrone3.PictureSettings.VideoResolutions

Set video resolutions

Set video streaming and recording resolutions.

Result : The video resolutions is set.
 Then, event [VideoResolutions](#1_20_9) is triggered.

|argument|type|description|
|--------|----|-----------|
|type|enum|Video streaming and recording resolutions|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|rec1080_stream480|1080p recording, 480p streaming.|
|1|rec720_stream720|720p recording, 720p streaming.|

Example sending the ` VideoResolutions ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoResolutions command message
const VideoResolutionsMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoResolutions
);

//send the VideoResolutions command message
drone.message.send(VideoResolutionsMessage);

```


# projects.ardrone3.PictureSettingsState
-----
### Photo settings state from product

The PictureSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[PictureFormatChanged](#projectsardrone3picturesettingsstatepictureformatchanged)|0|0x0|Picture format|
|[AutoWhiteBalanceChanged](#projectsardrone3picturesettingsstateautowhitebalancechanged)|1|0x1|White balance mode|
|[ExpositionChanged](#projectsardrone3picturesettingsstateexpositionchanged)|2|0x2|Image exposure|
|[SaturationChanged](#projectsardrone3picturesettingsstatesaturationchanged)|3|0x3|Image saturation|
|[TimelapseChanged](#projectsardrone3picturesettingsstatetimelapsechanged)|4|0x4|Timelapse mode|
|[VideoAutorecordChanged](#projectsardrone3picturesettingsstatevideoautorecordchanged)|5|0x5|Video Autorecord mode|
|[VideoStabilizationModeChanged](#projectsardrone3picturesettingsstatevideostabilizationmodechanged)|6|0x6|Video stabilization mode|
|[VideoRecordingModeChanged](#projectsardrone3picturesettingsstatevideorecordingmodechanged)|7|0x7|Video recording mode|
|[VideoFramerateChanged](#projectsardrone3picturesettingsstatevideoframeratechanged)|8|0x8|Video framerate|
|[VideoResolutionsChanged](#projectsardrone3picturesettingsstatevideoresolutionschanged)|9|0x9|Video resolutions|
## projects.ardrone3.PictureSettingsState.PictureFormatChanged

Picture format

Picture format.

Triggered : by [SetPictureFormat](#1_19_0).

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of photo format|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|raw|Take raw image|
|1|jpeg|Take a 4_3 jpeg photo|
|2|snapshot|Take a 16_9 snapshot from camera|
|3|jpeg_fisheye|Take jpeg fisheye image only|


Example binding to listen for the ` PictureFormatChanged ` event from the drone :

```javascript

drone.on(
  'PictureFormatChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.AutoWhiteBalanceChanged

White balance mode

White balance mode.

Triggered : by [SetWhiteBalanceMode](#1_19_1).

|argument|type|description|
|--------|----|-----------|
|type|enum|The type auto white balance|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|auto|Auto guess of best white balance params|
|1|tungsten|Tungsten white balance|
|2|daylight|Daylight white balance|
|3|cloudy|Cloudy white balance|
|4|cool_white|White balance for a flash|


Example binding to listen for the ` AutoWhiteBalanceChanged ` event from the drone :

```javascript

drone.on(
  'AutoWhiteBalanceChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.ExpositionChanged

Image exposure

Image exposure.

Triggered : by [SetImageExposure](#1_19_2).

|argument|type|description|
|--------|----|-----------|
|value|float|Exposure value|
|min|float|Min exposure value|
|max|float|Max exposure value|


Example binding to listen for the ` ExpositionChanged ` event from the drone :

```javascript

drone.on(
  'ExpositionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.SaturationChanged

Image saturation

Image saturation.

Triggered : by [SetImageSaturation](#1_19_3).

|argument|type|description|
|--------|----|-----------|
|value|float|Saturation value|
|min|float|Min saturation value|
|max|float|Max saturation value|


Example binding to listen for the ` SaturationChanged ` event from the drone :

```javascript

drone.on(
  'SaturationChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.TimelapseChanged

Timelapse mode

Timelapse mode.

Triggered : by [SetTimelapseMode](#1_19_4).

|argument|type|description|
|--------|----|-----------|
|enabled|u8|1 if timelapse is enabled, 0 otherwise|
|interval|float|interval in seconds for taking pictures|
|minInterval|float|Minimal interval for taking pictures|
|maxInterval|float|Maximal interval for taking pictures|


Example binding to listen for the ` TimelapseChanged ` event from the drone :

```javascript

drone.on(
  'TimelapseChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoAutorecordChanged

Video Autorecord mode

Video Autorecord mode.

Triggered : by [SetVideoAutorecordMode](#1_19_5).

|argument|type|description|
|--------|----|-----------|
|enabled|u8|1 if video autorecord is enabled, 0 otherwise|
|mass_storage_id|u8|Mass storage id for the taken video|


Example binding to listen for the ` VideoAutorecordChanged ` event from the drone :

```javascript

drone.on(
  'VideoAutorecordChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoStabilizationModeChanged

Video stabilization mode

Video stabilization mode.

Triggered : by [SetVideoStabilizationMode](#1_19_6).

|argument|type|description|
|--------|----|-----------|
|mode|enum|Video stabilization mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|roll_pitch|Video flat on roll and pitch|
|1|pitch|Video flat on pitch only|
|2|roll|Video flat on roll only|
|3|none|Video follows drone angles|


Example binding to listen for the ` VideoStabilizationModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoStabilizationModeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoRecordingModeChanged

Video recording mode

Video recording mode.

Triggered : by [SetVideoRecordingMode](#1_19_7).

|argument|type|description|
|--------|----|-----------|
|mode|enum|Video recording mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|quality|Maximize recording quality.|
|1|time|Maximize recording time.|


Example binding to listen for the ` VideoRecordingModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoRecordingModeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoFramerateChanged

Video framerate

Video framerate.

Triggered : by [SetVideoFramerateMode](#1_19_8).

|argument|type|description|
|--------|----|-----------|
|framerate|enum|Video framerate|
Enums/Symbols (fancy way of saying possible values) for framerate :

|framerate value|framerate name|framerate description|
|-----|----|-----------|
|0|_24_FPS|23.976 frames per second.|
|1|_25_FPS|25 frames per second.|
|2|_30_FPS|29.97 frames per second.|


Example binding to listen for the ` VideoFramerateChanged ` event from the drone :

```javascript

drone.on(
  'VideoFramerateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoResolutionsChanged

Video resolutions

Video resolutions.
 This event informs about the recording AND streaming resolutions.

Triggered : by [SetVideResolutions](#1_19_9).

|argument|type|description|
|--------|----|-----------|
|type|enum|Video resolution type.|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|rec1080_stream480|1080p recording, 480p streaming.|
|1|rec720_stream720|720p recording, 720p streaming.|


Example binding to listen for the ` VideoResolutionsChanged ` event from the drone :

```javascript

drone.on(
  'VideoResolutionsChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.MediaStreaming
-----
### Control media streaming behavior.

The MediaStreaming Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[VideoEnable](#projectsardrone3mediastreamingvideoenable)|0|0x0|Enable/disable video streaming|
|[VideoStreamMode](#projectsardrone3mediastreamingvideostreammode)|1|0x1|Video stream mode|
## projects.ardrone3.MediaStreaming.VideoEnable

Enable/disable video streaming

Enable/disable video streaming.

Result : The video stream is started or stopped.
 Then, event [VideoStreamState](#1_22_0) is triggered.

|argument|type|description|
|--------|----|-----------|
|enable|u8|1 to enable, 0 to disable.|

Example sending the ` VideoEnable ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
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


## projects.ardrone3.MediaStreaming.VideoStreamMode

Video stream mode





|argument|type|description|
|--------|----|-----------|
|mode|enum|stream mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|low_latency|Minimize latency with average reliability (best for piloting).|
|1|high_reliability|Maximize the reliability with an average latency (best when streaming quality is important but not the latency).|
|2|high_reliability_low_framerate|Maximize the reliability using a framerate decimation with an average latency (best when streaming quality is important but not the latency).|

Example sending the ` VideoStreamMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaStreaming;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the VideoStreamMode command message
const VideoStreamModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.VideoStreamMode
);

//send the VideoStreamMode command message
drone.message.send(VideoStreamModeMessage);

```


# projects.ardrone3.MediaStreamingState
-----
### Media streaming status.

The MediaStreamingState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[VideoEnableChanged](#projectsardrone3mediastreamingstatevideoenablechanged)|0|0x0|Video stream state|
|[VideoStreamModeChanged](#projectsardrone3mediastreamingstatevideostreammodechanged)|1|0x1|Video stream mode state|
## projects.ardrone3.MediaStreamingState.VideoEnableChanged

Video stream state

Video stream state.

Triggered : by [EnableOrDisableVideoStream](#1_21_0).

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


## projects.ardrone3.MediaStreamingState.VideoStreamModeChanged

Video stream mode state





|argument|type|description|
|--------|----|-----------|
|mode|enum|stream mode|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|low_latency|Minimize latency with average reliability (best for piloting).|
|1|high_reliability|Maximize the reliability with an average latency (best when streaming quality is important but not the latency).|
|2|high_reliability_low_framerate|Maximize the reliability using a framerate decimation with an average latency (best when streaming quality is important but not the latency).|


Example binding to listen for the ` VideoStreamModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoStreamModeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.GPSSettings
-----
### GPS settings

The GPSSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SetHome](#projectsardrone3gpssettingssethome)|0|0x0|Set home position|
|[ResetHome](#projectsardrone3gpssettingsresethome)|1|0x1|Reset home position|
|[SendControllerGPS](#projectsardrone3gpssettingssendcontrollergps)|2|0x2|Set controller gps location|
|[HomeType](#projectsardrone3gpssettingshometype)|3|0x3|Set the preferred home type|
|[ReturnHomeDelay](#projectsardrone3gpssettingsreturnhomedelay)|4|0x4|Set the return home delay|
## projects.ardrone3.GPSSettings.SetHome

Set home position

Set home position.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|latitude|double|Home latitude in decimal degrees|
|longitude|double|Home longitude in decimal degrees|
|altitude|double|Home altitude in meters|

Example sending the ` SetHome ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the SetHome command message
const SetHomeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.SetHome
);

//send the SetHome command message
drone.message.send(SetHomeMessage);

```


## projects.ardrone3.GPSSettings.ResetHome

Reset home position

Reset home position.

Result : The home position is reset.
 Then, event [HomeLocationReset](#1_24_1) is triggered.

|argument|type|description|
|--------|----|-----------|

Example sending the ` ResetHome ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the ResetHome command message
const ResetHomeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.ResetHome
);

//send the ResetHome command message
drone.message.send(ResetHomeMessage);

```


## projects.ardrone3.GPSSettings.SendControllerGPS

Set controller gps location

Set controller gps location.
 The user location might be used in case of return home, according to the home type and the accuracy of the given position. You can get the current home type with the event [HomeType](#1_24_4).

Result : The controller position is known by the drone.
 Then, event [HomeLocation](#1_24_2) is triggered.

|argument|type|description|
|--------|----|-----------|
|latitude|double|GPS latitude in decimal degrees|
|longitude|double|GPS longitude in decimal degrees|
|altitude|double|GPS altitude in meters|
|horizontalAccuracy|double|Horizontal Accuracy in meter ; equal _1 if no horizontal Accuracy|
|verticalAccuracy|double|Vertical Accuracy in meter ; equal _1 if no vertical Accuracy|

Example sending the ` SendControllerGPS ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the SendControllerGPS command message
const SendControllerGPSMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.SendControllerGPS
);

//send the SendControllerGPS command message
drone.message.send(SendControllerGPSMessage);

```


## projects.ardrone3.GPSSettings.HomeType

Set the preferred home type

Set the preferred home type.
 Please note that this is only a preference. The actual type chosen is given by the event [HomeType](#1_31_2).
 You can get the currently available types with the event [HomeTypeAvailability](#1_31_1).

Result : The user choice is known by the drone.
 Then, event [PreferredHomeType](#1_24_4) is triggered.

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of the home position|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|TAKEOFF|The drone will try to return to the take off position|
|1|PILOT|The drone will try to return to the pilot position|
|2|FOLLOWEE|The drone will try to return to the target of the current (or last) follow me|

Example sending the ` HomeType ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the HomeType command message
const HomeTypeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.HomeType
);

//send the HomeType command message
drone.message.send(HomeTypeMessage);

```


## projects.ardrone3.GPSSettings.ReturnHomeDelay

Set the return home delay

Set the delay after which the drone will automatically try to return home after a disconnection.

Result : The delay of the return home is set.
 Then, event [ReturnHomeDelay](#1_24_5) is triggered.

|argument|type|description|
|--------|----|-----------|
|delay|u16|Delay in second|

Example sending the ` ReturnHomeDelay ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the ReturnHomeDelay command message
const ReturnHomeDelayMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.ReturnHomeDelay
);

//send the ReturnHomeDelay command message
drone.message.send(ReturnHomeDelayMessage);

```


# projects.ardrone3.GPSSettingsState
-----
### GPS settings state

The GPSSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[HomeChanged](#projectsardrone3gpssettingsstatehomechanged)|0|0x0|Home location|
|[ResetHomeChanged](#projectsardrone3gpssettingsstateresethomechanged)|1|0x1|Home location has been reset|
|[GPSFixStateChanged](#projectsardrone3gpssettingsstategpsfixstatechanged)|2|0x2|Gps fix info|
|[GPSUpdateStateChanged](#projectsardrone3gpssettingsstategpsupdatestatechanged)|3|0x3|Gps update state|
|[HomeTypeChanged](#projectsardrone3gpssettingsstatehometypechanged)|4|0x4|Preferred home type|
|[ReturnHomeDelayChanged](#projectsardrone3gpssettingsstatereturnhomedelaychanged)|5|0x5|Return home delay|
## projects.ardrone3.GPSSettingsState.HomeChanged

Home location

Home location.

Triggered : when [HomeType](#1_31_2) changes. Or by [SetHomeLocation](#1_23_2) when [HomeType](#1_31_2) is Pilot. Or regularly after [SetControllerGPS](#140_1) when [HomeType](#1_31_2) is FollowMeTarget. Or at take off [HomeType](#1_31_2) is Takeoff. Or when the first fix occurs and the [HomeType](#1_31_2) is FirstFix.

|argument|type|description|
|--------|----|-----------|
|latitude|double|Home latitude in decimal degrees|
|longitude|double|Home longitude in decimal degrees|
|altitude|double|Home altitude in meters|


Example binding to listen for the ` HomeChanged ` event from the drone :

```javascript

drone.on(
  'HomeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.GPSSettingsState.ResetHomeChanged

Home location has been reset

Home location has been reset.

Triggered : by [ResetHomeLocation](#1_23_1).

|argument|type|description|
|--------|----|-----------|
|latitude|double|Home latitude in decimal degrees|
|longitude|double|Home longitude in decimal degrees|
|altitude|double|Home altitude in meters|


Example binding to listen for the ` ResetHomeChanged ` event from the drone :

```javascript

drone.on(
  'ResetHomeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.GPSSettingsState.GPSFixStateChanged

Gps fix info

Gps fix info.

Triggered : on change.

|argument|type|description|
|--------|----|-----------|
|fixed|u8|1 if gps on drone is fixed, 0 otherwise|


Example binding to listen for the ` GPSFixStateChanged ` event from the drone :

```javascript

drone.on(
  'GPSFixStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.GPSSettingsState.GPSUpdateStateChanged

Gps update state

Gps update state.

Triggered : on change.

|argument|type|description|
|--------|----|-----------|
|state|enum|The state of the gps update|
Enums/Symbols (fancy way of saying possible values) for state :

|state value|state name|state description|
|-----|----|-----------|
|0|updated|Drone GPS update succeed|
|1|inProgress|Drone GPS update In progress|
|2|failed|Drone GPS update failed|


Example binding to listen for the ` GPSUpdateStateChanged ` event from the drone :

```javascript

drone.on(
  'GPSUpdateStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.GPSSettingsState.HomeTypeChanged

Preferred home type

User preference for the home type.
 See [HomeType](#1_31_2) to get the drone actual home type.

Triggered : by [SetPreferredHomeType](#1_23_3).

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of the home position|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|TAKEOFF|The drone will try to return to the take off position|
|1|PILOT|The drone will try to return to the pilot position|
|2|FOLLOWEE|The drone will try to return to the target of the current (or last) follow me|


Example binding to listen for the ` HomeTypeChanged ` event from the drone :

```javascript

drone.on(
  'HomeTypeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.GPSSettingsState.ReturnHomeDelayChanged

Return home delay

Return home trigger delay. This delay represents the time after which the return home is automatically triggered after a disconnection.

Triggered : by [SetReturnHomeDelay](#1_23_4).

|argument|type|description|
|--------|----|-----------|
|delay|u16|Delay in second|


Example binding to listen for the ` ReturnHomeDelayChanged ` event from the drone :

```javascript

drone.on(
  'ReturnHomeDelayChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.CameraState
-----
### Camera state

The CameraState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Orientation](#projectsardrone3camerastateorientation)|0|0x0|Camera orientation|
|[defaultCameraOrientation](#projectsardrone3camerastatedefaultcameraorientation)|1|0x1|Orientation of the camera center|
|[OrientationV2](#projectsardrone3camerastateorientationv2)|2|0x2|Camera orientation|
|[defaultCameraOrientationV2](#projectsardrone3camerastatedefaultcameraorientationv2)|3|0x3|Orientation of the camera center|
|[VelocityRange](#projectsardrone3camerastatevelocityrange)|4|0x4|Camera velocity range|
## projects.ardrone3.CameraState.Orientation

Camera orientation

Camera orientation.

Triggered : by [SetCameraOrientation](#1_1_0).

|argument|type|description|
|--------|----|-----------|
|tilt|i8|Tilt camera consign for the drone [_100;100]|
|pan|i8|Pan camera consign for the drone [_100;100]|


Example binding to listen for the ` Orientation ` event from the drone :

```javascript

drone.on(
  'Orientation',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.CameraState.defaultCameraOrientation

Orientation of the camera center

Orientation of the center of the camera.
 This is the value to send when you want to center the camera.

Triggered : at connection.

|argument|type|description|
|--------|----|-----------|
|tilt|i8|Tilt value (in degree)|
|pan|i8|Pan value (in degree)|


Example binding to listen for the ` defaultCameraOrientation ` event from the drone :

```javascript

drone.on(
  'defaultCameraOrientation',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.CameraState.OrientationV2

Camera orientation

Camera orientation with float arguments.

Triggered : by [SetCameraOrientationV2](#1_1_1)

|argument|type|description|
|--------|----|-----------|
|tilt|float|Tilt camera consign for the drone [deg]|
|pan|float|Pan camera consign for the drone [deg]|


Example binding to listen for the ` OrientationV2 ` event from the drone :

```javascript

drone.on(
  'OrientationV2',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.CameraState.defaultCameraOrientationV2

Orientation of the camera center

Orientation of the center of the camera.
 This is the value to send when you want to center the camera.

Triggered : at connection.

|argument|type|description|
|--------|----|-----------|
|tilt|float|Tilt value [deg]|
|pan|float|Pan value [deg]|


Example binding to listen for the ` defaultCameraOrientationV2 ` event from the drone :

```javascript

drone.on(
  'defaultCameraOrientationV2',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.CameraState.VelocityRange

Camera velocity range

Camera Orientation velocity limits.

Triggered : at connection.

|argument|type|description|
|--------|----|-----------|
|max_tilt|float|Absolute max tilt velocity [deg/s]|
|max_pan|float|Absolute max pan velocity [deg/s]|


Example binding to listen for the ` VelocityRange ` event from the drone :

```javascript

drone.on(
  'VelocityRange',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.Antiflickering
-----
### Anti_flickering related commands

The Antiflickering Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[electricFrequency](#projectsardrone3antiflickeringelectricfrequency)|0|0x0|Set the electric frequency|
|[setMode](#projectsardrone3antiflickeringsetmode)|1|0x1|Set the antiflickering mode|
## projects.ardrone3.Antiflickering.electricFrequency

Set the electric frequency

Set the electric frequency of the surrounding lights.
 This is used to avoid the video flickering in auto mode. You can get the current antiflickering mode with the event [AntiflickeringModeChanged](#1_30_1).

Result : The electric frequency is set.
 Then, event [ElectricFrequency](#1_30_0) is triggered.

|argument|type|description|
|--------|----|-----------|
|frequency|enum|Type of the electric frequency|
Enums/Symbols (fancy way of saying possible values) for frequency :

|frequency value|frequency name|frequency description|
|-----|----|-----------|
|0|fiftyHertz|Electric frequency of the country is 50hz|
|1|sixtyHertz|Electric frequency of the country is 60hz|

Example sending the ` electricFrequency ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Antiflickering;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the electricFrequency command message
const electricFrequencyMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.electricFrequency
);

//send the electricFrequency command message
drone.message.send(electricFrequencyMessage);

```


## projects.ardrone3.Antiflickering.setMode

Set the antiflickering mode

Set the antiflickering mode.
 If auto, the drone will detect when flickers appears on the video and trigger the antiflickering.
 In this case, this electric frequency it will use will be the one specified in the event [ElectricFrequency](#1_29_0).
 Forcing the antiflickering (FixedFiftyHertz or FixedFiftyHertz) can reduce luminosity of the video.

Result : The antiflickering mode is set.
 Then, event [AntiflickeringMode](#1_30_1) is triggered.

|argument|type|description|
|--------|----|-----------|
|mode|enum|Mode of the anti flickering functionnality|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|auto|Anti flickering based on the electric frequency previously sent|
|1|FixedFiftyHertz|Anti flickering based on a fixed frequency of 50Hz|
|2|FixedSixtyHertz|Anti flickering based on a fixed frequency of 60Hz|

Example sending the ` setMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Antiflickering;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the setMode command message
const setModeMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.setMode
);

//send the setMode command message
drone.message.send(setModeMessage);

```


# projects.ardrone3.AntiflickeringState
-----
### Anti_flickering related states

The AntiflickeringState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[electricFrequencyChanged](#projectsardrone3antiflickeringstateelectricfrequencychanged)|0|0x0|Electric frequency|
|[modeChanged](#projectsardrone3antiflickeringstatemodechanged)|1|0x1|Antiflickering mode|
## projects.ardrone3.AntiflickeringState.electricFrequencyChanged

Electric frequency

Electric frequency.
 This piece of information is used for the antiflickering when the [AntiflickeringMode](#1_30_1) is set to *auto*.

Triggered : by [SetElectricFrequency](#1_29_0).

|argument|type|description|
|--------|----|-----------|
|frequency|enum|Type of the electric frequency|
Enums/Symbols (fancy way of saying possible values) for frequency :

|frequency value|frequency name|frequency description|
|-----|----|-----------|
|0|fiftyHertz|Electric frequency of the country is 50hz|
|1|sixtyHertz|Electric frequency of the country is 60hz|


Example binding to listen for the ` electricFrequencyChanged ` event from the drone :

```javascript

drone.on(
  'electricFrequencyChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.AntiflickeringState.modeChanged

Antiflickering mode

Antiflickering mode.

Triggered : by [SetAntiflickeringMode](#1_29_1).

|argument|type|description|
|--------|----|-----------|
|mode|enum|Mode of the anti flickering functionnality|
Enums/Symbols (fancy way of saying possible values) for mode :

|mode value|mode name|mode description|
|-----|----|-----------|
|0|auto|Anti flickering based on the electric frequency previously sent|
|1|FixedFiftyHertz|Anti flickering based on a fixed frequency of 50Hz|
|2|FixedSixtyHertz|Anti flickering based on a fixed frequency of 60Hz|


Example binding to listen for the ` modeChanged ` event from the drone :

```javascript

drone.on(
  'modeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.GPSState
-----
### GPS related States

The GPSState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[NumberOfSatelliteChanged](#projectsardrone3gpsstatenumberofsatellitechanged)|0|0x0|Number of GPS satellites|
|[HomeTypeAvailabilityChanged](#projectsardrone3gpsstatehometypeavailabilitychanged)|1|0x1|Home type availability|
|[HomeTypeChosenChanged](#projectsardrone3gpsstatehometypechosenchanged)|2|0x2|Home type|
## projects.ardrone3.GPSState.NumberOfSatelliteChanged

Number of GPS satellites

Number of GPS satellites.

Triggered : on change.

|argument|type|description|
|--------|----|-----------|
|numberOfSatellite|u8|The number of satellite|


Example binding to listen for the ` NumberOfSatelliteChanged ` event from the drone :

```javascript

drone.on(
  'NumberOfSatelliteChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.GPSState.HomeTypeAvailabilityChanged

Home type availability

Home type availability.

Triggered : when the availability of, at least, one type changes.
 This might be due to controller position availability, gps fix before take off or other reason.

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of the return home|
|available|u8|1 if this type is available, 0 otherwise|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|TAKEOFF|The drone has enough information to return to the take off position|
|1|PILOT|The drone has enough information to return to the pilot position|
|2|FIRST_FIX|The drone has not enough information, it will return to the first GPS fix|
|3|FOLLOWEE|The drone has enough information to return to the target of the current (or last) follow me|


Example binding to listen for the ` HomeTypeAvailabilityChanged ` event from the drone :

```javascript

drone.on(
  'HomeTypeAvailabilityChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.ardrone3.GPSState.HomeTypeChosenChanged

Home type

Home type.
 This choice is made by the drone, according to the [PreferredHomeType](#1_24_4) and the [HomeTypeAvailability](#1_31_1). The drone will choose the type matching with the user preference only if this type is available. If not, it will chose a type in this order_
 FOLLOWEE ; TAKEOFF ; PILOT ; FIRST_FIX

Triggered : when the return home type chosen by the drone changes.
 This might be produced by a user preference triggered by [SetPreferedHomeType](#1_23_3) or by a change in the [HomeTypesAvailabilityChanged](#1_31_1).

|argument|type|description|
|--------|----|-----------|
|type|enum|The type of the return home chosen|
Enums/Symbols (fancy way of saying possible values) for type :

|type value|type name|type description|
|-----|----|-----------|
|0|TAKEOFF|The drone will return to the take off position|
|1|PILOT|The drone will return to the pilot position In this case, the drone will use the position given by ARDrone3_SendControllerGPS|
|2|FIRST_FIX|The drone has not enough information, it will return to the first GPS fix|
|3|FOLLOWEE|The drone will return to the target of the current (or last) follow me In this case, the drone will use the position of the target of the followMe (given by ControllerInfo_GPS)|


Example binding to listen for the ` HomeTypeChosenChanged ` event from the drone :

```javascript

drone.on(
  'HomeTypeChosenChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


# projects.ardrone3.PROState
-----
### Pro features enabled on the Bebop

The PROState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Features](#projectsardrone3prostatefeatures)|0|0x0|Pro features|
## projects.ardrone3.PROState.Features

Pro features

Pro features.

Result : undefined

|argument|type|description|
|--------|----|-----------|
|features|u64|Bitfield representing enabled features.|

Example sending the ` Features ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PROState;

//change the value of the args you want to change if applicable
commandClass.${argName}.value=1;

//build the Features command message
const FeaturesMessage=drone.message.build(
  project.info.id,
  commandClass.info.id,
  commandClass.Features
);

//send the Features command message
drone.message.send(FeaturesMessage);

```


# projects.ardrone3.PilotingEvent
-----
### Events of Piloting

The PilotingEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[moveByEnd](#projectsardrone3pilotingeventmovebyend)|0|0x0|Relative move ended|
## projects.ardrone3.PilotingEvent.moveByEnd

Relative move ended

Relative move ended.
 Informs about the move that the drone managed to do and why it stopped.

Triggered : when the landing state changes.

|argument|type|description|
|--------|----|-----------|
|dX|float|Distance traveled along the front axis [m]|
|dY|float|Distance traveled along the right axis [m]|
|dZ|float|Distance traveled along the down axis [m]|
|dPsi|float|Applied angle on heading [rad]|
|error|enum|Error to explain the event|
Enums/Symbols (fancy way of saying possible values) for error :

|error value|error name|error description|
|-----|----|-----------|
|0|ok|No Error ; The relative displacement|
|1|unknown|Unknown generic error|
|2|busy|The Device is busy ; command moveBy ignored|
|3|notAvailable|Command moveBy is not available ; command moveBy ignored|
|4|interrupted|Command moveBy interrupted|


Example binding to listen for the ` moveByEnd ` event from the drone :

```javascript

drone.on(
  'moveByEnd',
  function(commandObject){
    console.log(commandObject);
  }
)

```

