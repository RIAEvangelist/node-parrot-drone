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
Example sending the ` FlatTrim ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const FlatTrimMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.FlatTrim
);

drone.message.send(FlatTrimMessage);

```


## projects.ardrone3.Piloting.TakeOff

Take off

Ask the drone to take off.
 On the fixed wings (such as Disco): not used except to cancel a land.

Result : On the quadcopters: the drone takes off if its [FlyingState](#1_4_1) was landed.
 On the fixed wings, the landing process is aborted if the [FlyingState](#1_4_1) was landing.\n Then, event [FlyingState](#1_4_1) is triggered.
Example sending the ` TakeOff ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const TakeOffMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.TakeOff
);

drone.message.send(TakeOffMessage);

```


## projects.ardrone3.Piloting.PCMD

Move the drone

Move the drone.
 The libARController is sending the command each 50ms.

 **Please note that you should call setPilotingPCMD and not sendPilotingPCMD because the libARController is handling the periodicity and the buffer on which it is sent.**

Result : The drone moves! Yaaaaay!
 Event [SpeedChanged](#1_4_5), [AttitudeChanged](#1_4_6) and [PositionChanged](#1_4_4) (only if gps of the drone has fixed) are triggered.
Example sending the ` PCMD ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const PCMDMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PCMD
);

drone.message.send(PCMDMessage);

```


## projects.ardrone3.Piloting.Landing

Land

Land.
 Please note that on copters, if you put some positive gaz (in the [PilotingCommand](#1_0_2)) during the landing, it will cancel it.

Result : On the copters, the drone lands if its [FlyingState](#1_4_1) was taking off, hovering or flying.
 On the fixed wings, the drone lands if its [FlyingState](#1_4_1) was hovering or flying.\n Then, event [FlyingState](#1_4_1) is triggered.
Example sending the ` Landing ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const LandingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Landing
);

drone.message.send(LandingMessage);

```


## projects.ardrone3.Piloting.Emergency

Cut out the motors

Cut out the motors.
 This cuts immediatly the motors. The drone will fall.
 This command is sent on a dedicated high priority buffer which will infinitely retry to send it if the command is not delivered.

Result : The drone immediatly cuts off its motors.
 Then, event [FlyingState](#1_4_1) is triggered.
Example sending the ` Emergency ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const EmergencyMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Emergency
);

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
Example sending the ` NavigateHome ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const NavigateHomeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.NavigateHome
);

drone.message.send(NavigateHomeMessage);

```


## projects.ardrone3.Piloting.AutoTakeOffMode

Auto take off mode

Auto take off mode.

Result : undefined
Example sending the ` AutoTakeOffMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const AutoTakeOffModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AutoTakeOffMode
);

drone.message.send(AutoTakeOffModeMessage);

```


## projects.ardrone3.Piloting.moveBy

Move the drone to a relative position

Move the drone to a relative position and rotate heading by a given angle.
 Moves are relative to the current drone orientation, (drone's reference).
 Also note that the given rotation will not modify the move (i.e. moves are always rectilinear).

Result : The drone will move of the given offsets.
 Then, event [RelativeMoveEnded](#1_34_0) is triggered.\n If you send a second relative move command, the drone will trigger a [RelativeMoveEnded](#1_34_0) with the offsets it managed to do before this new command and the value of error set to interrupted.
Example sending the ` moveBy ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const moveByMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.moveBy
);

drone.message.send(moveByMessage);

```


## projects.ardrone3.Piloting.UserTakeOff

Prepare the drone to take off

Prepare the drone to take off.
 This is the command that initiates the take off process on the fixed wings.
 Setting the state to 0 will cancel the preparation. You can cancel it before that the drone takes off.

Result : The drone will arm its motors if not already armed.
 Then, event [FlyingState](#1_4_1) is triggered with state set at motor ramping.\n Then, event [FlyingState](#1_4_1) is triggered with state set at userTakeOff.\n Then user can throw the drone to make it take off.
Example sending the ` UserTakeOff ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const UserTakeOffMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.UserTakeOff
);

drone.message.send(UserTakeOffMessage);

```


## projects.ardrone3.Piloting.Circle

Circle

Make the fixed wing circle.
 The circle will use the [CirclingAltitude](#1_6_14) and the [CirclingRadius](#1_6_13)

Result : The fixed wing will circle in the given direction.
 Then, event [FlyingState](#1_4_1) is triggered with state set at hovering.
Example sending the ` Circle ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Piloting;

//build a message requesting all settings
const CircleMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Circle
);

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
Example sending the ` Orientation ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Camera;

//build a message requesting all settings
const OrientationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Orientation
);

drone.message.send(OrientationMessage);

```


## projects.ardrone3.Camera.OrientationV2

Move the camera

Move the camera.
 You can get min and max values for tilt and pan using [CameraInfo](#0_15_0).

Result : The drone moves its camera.
 Then, event [CameraOrientationV2](#1_25_2) is triggered.
Example sending the ` OrientationV2 ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Camera;

//build a message requesting all settings
const OrientationV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.OrientationV2
);

drone.message.send(OrientationV2Message);

```


## projects.ardrone3.Camera.Velocity

Move the camera using velocity

Move the camera given velocity consign.
 You can get min and max values for tilt and pan using [CameraVelocityRange](#1_25_4).

Result : The drone moves its camera.
 Then, event [CameraOrientationV2](#1_25_2) is triggered.
Example sending the ` Velocity ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Camera;

//build a message requesting all settings
const VelocityMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Velocity
);

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
Example sending the ` MaxAltitude ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const MaxAltitudeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxAltitude
);

drone.message.send(MaxAltitudeMessage);

```


## projects.ardrone3.PilotingSettings.MaxTilt

Set max pitch/roll

Set max pitch/roll.
 This represent the max inclination allowed by the drone.
 You can get the bounds with the commands [MaxPitchRoll](#1_6_1).

Result : The max pitch/roll is set.
 Then, event [MaxPitchRoll](#1_6_1) is triggered.
Example sending the ` MaxTilt ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const MaxTiltMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxTilt
);

drone.message.send(MaxTiltMessage);

```


## projects.ardrone3.PilotingSettings.AbsolutControl

Set absolut control

Set absolut control.

Result : undefined
Example sending the ` AbsolutControl ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const AbsolutControlMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AbsolutControl
);

drone.message.send(AbsolutControlMessage);

```


## projects.ardrone3.PilotingSettings.MaxDistance

Set max distance

Set max distance.
 You can get the bounds from the event [MaxDistance](#1_6_3).

 If [Geofence](#1_6_4) is activated, the drone won't fly over the given max distance.

Result : The max distance is set.
 Then, event [MaxDistance](#1_6_3) is triggered.
Example sending the ` MaxDistance ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const MaxDistanceMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxDistance
);

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
Example sending the ` NoFlyOverMaxDistance ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const NoFlyOverMaxDistanceMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.NoFlyOverMaxDistance
);

drone.message.send(NoFlyOverMaxDistanceMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxHorizontalSpeed

Set autonomous flight max horizontal speed

Set autonomous flight max horizontal speed.
 This will only be used during autonomous flights such as moveBy.

Result : The max horizontal speed is set.
 Then, event [AutonomousFlightMaxHorizontalSpeed](#1_6_5) is triggered.
Example sending the ` setAutonomousFlightMaxHorizontalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const setAutonomousFlightMaxHorizontalSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setAutonomousFlightMaxHorizontalSpeed
);

drone.message.send(setAutonomousFlightMaxHorizontalSpeedMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxVerticalSpeed

Set autonomous flight max vertical speed

Set autonomous flight max vertical speed.
 This will only be used during autonomous flights such as moveBy.

Result : The max vertical speed is set.
 Then, event [AutonomousFlightMaxVerticalSpeed](#1_6_6) is triggered.
Example sending the ` setAutonomousFlightMaxVerticalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const setAutonomousFlightMaxVerticalSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setAutonomousFlightMaxVerticalSpeed
);

drone.message.send(setAutonomousFlightMaxVerticalSpeedMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxHorizontalAcceleration

Set autonomous flight max horizontal acceleration

Set autonomous flight max horizontal acceleration.
 This will only be used during autonomous flights such as moveBy.

Result : The max horizontal acceleration is set.
 Then, event [AutonomousFlightMaxHorizontalAcceleration](#1_6_7) is triggered.
Example sending the ` setAutonomousFlightMaxHorizontalAcceleration ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const setAutonomousFlightMaxHorizontalAccelerationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setAutonomousFlightMaxHorizontalAcceleration
);

drone.message.send(setAutonomousFlightMaxHorizontalAccelerationMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxVerticalAcceleration

Set autonomous flight max vertical acceleration

Set autonomous flight max vertical acceleration.
 This will only be used during autonomous flights such as moveBy.

Result : The max vertical acceleration is set.
 Then, event [AutonomousFlightMaxVerticalAcceleration](#1_6_8) is triggered.
Example sending the ` setAutonomousFlightMaxVerticalAcceleration ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const setAutonomousFlightMaxVerticalAccelerationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setAutonomousFlightMaxVerticalAcceleration
);

drone.message.send(setAutonomousFlightMaxVerticalAccelerationMessage);

```


## projects.ardrone3.PilotingSettings.setAutonomousFlightMaxRotationSpeed

Set autonomous flight max rotation speed

Set autonomous flight max rotation speed.
 This will only be used during autonomous flights such as moveBy.

Result : The max rotation speed is set.
 Then, event [AutonomousFlightMaxRotationSpeed](#1_6_9) is triggered.
Example sending the ` setAutonomousFlightMaxRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const setAutonomousFlightMaxRotationSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setAutonomousFlightMaxRotationSpeed
);

drone.message.send(setAutonomousFlightMaxRotationSpeedMessage);

```


## projects.ardrone3.PilotingSettings.BankedTurn

Set banked turn mode

Set banked turn mode.
 When banked turn mode is enabled, the drone will use yaw values from the piloting command to infer with roll and pitch on the drone when its horizontal speed is not null.

Result : The banked turn mode is enabled or disabled.
 Then, event [BankedTurnMode](#1_6_10) is triggered.
Example sending the ` BankedTurn ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const BankedTurnMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.BankedTurn
);

drone.message.send(BankedTurnMessage);

```


## projects.ardrone3.PilotingSettings.MinAltitude

Set minimum altitude

Set minimum altitude.
 Only available for fixed wings.

Result : The minimum altitude is set.
 Then, event [MinimumAltitude](#1_6_11) is triggered.
Example sending the ` MinAltitude ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const MinAltitudeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MinAltitude
);

drone.message.send(MinAltitudeMessage);

```


## projects.ardrone3.PilotingSettings.CirclingDirection

Set default circling direction

Set default circling direction. This direction will be used when the drone use an automatic circling or when [CIRCLE](#1_0_9) is sent with direction *default*.
 Only available for fixed wings.

Result : The circling direction is set.
 Then, event [DefaultCirclingDirection](#1_6_12) is triggered.
Example sending the ` CirclingDirection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const CirclingDirectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CirclingDirection
);

drone.message.send(CirclingDirectionMessage);

```


## projects.ardrone3.PilotingSettings.CirclingRadius

Set circling radius

Set circling radius.
 Only available for fixed wings.

Result : The circling radius is set.
 Then, event [CirclingRadius](#1_6_13) is triggered.
Example sending the ` CirclingRadius ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const CirclingRadiusMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CirclingRadius
);

drone.message.send(CirclingRadiusMessage);

```


## projects.ardrone3.PilotingSettings.CirclingAltitude

Set min circling altitude

Set min circling altitude (not used during take off).
 Only available for fixed wings.

Result : The circling altitude is set.
 Then, event [CirclingAltitude](#1_6_14) is triggered.
Example sending the ` CirclingAltitude ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const CirclingAltitudeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CirclingAltitude
);

drone.message.send(CirclingAltitudeMessage);

```


## projects.ardrone3.PilotingSettings.PitchMode

Set pitch mode

Set pitch mode.
 Only available for fixed wings.

Result : The pitch mode is set.
 Then, event [PitchMode](#1_6_15) is triggered.
Example sending the ` PitchMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PilotingSettings;

//build a message requesting all settings
const PitchModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PitchMode
);

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

Example binding to listen for the ` PictureEventChanged ` event from the drone :

```javascript

drone.on(
  'PictureEventChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.MediaRecordEvent.VideoEventChanged

Video record notification

Video record notification.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : by [RecordVideo](#1_7_3) or a change in the video state.

Example binding to listen for the ` VideoEventChanged ` event from the drone :

```javascript

drone.on(
  'VideoEventChanged',
  function(data){
    console.log(data);
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

Example binding to listen for the ` FlatTrimChanged ` event from the drone :

```javascript

drone.on(
  'FlatTrimChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.FlyingStateChanged

Flying state

Flying state.

Triggered : when the flying state changes.

Example binding to listen for the ` FlyingStateChanged ` event from the drone :

```javascript

drone.on(
  'FlyingStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.AlertStateChanged

Alert state

Alert state.

Triggered : when an alert happens on the drone.

Example binding to listen for the ` AlertStateChanged ` event from the drone :

```javascript

drone.on(
  'AlertStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.NavigateHomeStateChanged

Return home state

Return home state.
 Availability is related to gps fix, magnetometer calibration.

Triggered : by [ReturnHome](#1_0_5) or when the state of the return home changes.

Example binding to listen for the ` NavigateHomeStateChanged ` event from the drone :

```javascript

drone.on(
  'NavigateHomeStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.PositionChanged

Drone's position changed

Drone's position changed.

Triggered : regularly.

Example binding to listen for the ` PositionChanged ` event from the drone :

```javascript

drone.on(
  'PositionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.SpeedChanged

Drone's speed changed

Drone's speed changed.
 Expressed in the NED referential (North_East_Down).

Triggered : regularly.

Example binding to listen for the ` SpeedChanged ` event from the drone :

```javascript

drone.on(
  'SpeedChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.AttitudeChanged

Drone's attitude changed

Drone's attitude changed.

Triggered : regularly.

Example binding to listen for the ` AttitudeChanged ` event from the drone :

```javascript

drone.on(
  'AttitudeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.AutoTakeOffModeChanged

Auto takeoff mode

Auto takeoff mode

Result : undefined

Example binding to listen for the ` AutoTakeOffModeChanged ` event from the drone :

```javascript

drone.on(
  'AutoTakeOffModeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.AltitudeChanged

Drone's altitude changed

Drone's altitude changed.
 The altitude reported is the altitude above the take off point.
 To get the altitude above sea level, see [PositionChanged](#1_4_4).

Triggered : regularly.

Example binding to listen for the ` AltitudeChanged ` event from the drone :

```javascript

drone.on(
  'AltitudeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.GpsLocationChanged

Drone's location changed

Drone's location changed.
 This event is meant to replace [PositionChanged](#1_4_4).

Triggered : regularly.

Example binding to listen for the ` GpsLocationChanged ` event from the drone :

```javascript

drone.on(
  'GpsLocationChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.LandingStateChanged

Landing state

Landing state.
 Only available for fixed wings (which have two landing modes).

Triggered : when the landing state changes.

Example binding to listen for the ` LandingStateChanged ` event from the drone :

```javascript

drone.on(
  'LandingStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingState.AirSpeedChanged

Drone's air speed changed

Drone's air speed changed
 Expressed in the drone's referential.

Triggered : regularly.

Example binding to listen for the ` AirSpeedChanged ` event from the drone :

```javascript

drone.on(
  'AirSpeedChanged',
  function(data){
    console.log(data);
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
Example sending the ` Flip ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Animations;

//build a message requesting all settings
const FlipMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Flip
);

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

Example binding to listen for the ` MaxAltitudeChanged ` event from the drone :

```javascript

drone.on(
  'MaxAltitudeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.MaxTiltChanged

Max pitch/roll

Max pitch/roll.
 The drone will not fly higher than this altitude (above take off point).

Triggered : by [SetMaxAltitude](#1_2_0).

Example binding to listen for the ` MaxTiltChanged ` event from the drone :

```javascript

drone.on(
  'MaxTiltChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AbsolutControlChanged

Absolut control

Absolut control.

Result : undefined

Example binding to listen for the ` AbsolutControlChanged ` event from the drone :

```javascript

drone.on(
  'AbsolutControlChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.MaxDistanceChanged

Max distance

Max distance.

Triggered : by [SetMaxDistance](#1_2_3).

Example binding to listen for the ` MaxDistanceChanged ` event from the drone :

```javascript

drone.on(
  'MaxDistanceChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.NoFlyOverMaxDistanceChanged

Geofencing

Geofencing.
 If set, the drone won't fly over the [MaxDistance](#1_6_3).

Triggered : by [EnableGeofence](#1_2_4).

Example binding to listen for the ` NoFlyOverMaxDistanceChanged ` event from the drone :

```javascript

drone.on(
  'NoFlyOverMaxDistanceChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxHorizontalSpeed

Autonomous flight max horizontal speed

Autonomous flight max horizontal speed.

Triggered : by [SetAutonomousFlightMaxHorizontalSpeed](#1_2_5).

Example binding to listen for the ` AutonomousFlightMaxHorizontalSpeed ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxHorizontalSpeed',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxVerticalSpeed

Autonomous flight max vertical speed

Autonomous flight max vertical speed.

Triggered : by [SetAutonomousFlightMaxVerticalSpeed](#1_2_6).

Example binding to listen for the ` AutonomousFlightMaxVerticalSpeed ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxVerticalSpeed',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxHorizontalAcceleration

Autonomous flight max horizontal acceleration

Autonomous flight max horizontal acceleration.

Triggered : by [SetAutonomousFlightMaxHorizontalAcceleration](#1_2_7).

Example binding to listen for the ` AutonomousFlightMaxHorizontalAcceleration ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxHorizontalAcceleration',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxVerticalAcceleration

Autonomous flight max vertical acceleration

Autonomous flight max vertical acceleration.

Triggered : by [SetAutonomousFlightMaxVerticalAcceleration](#1_2_8).

Example binding to listen for the ` AutonomousFlightMaxVerticalAcceleration ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxVerticalAcceleration',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.AutonomousFlightMaxRotationSpeed

Autonomous flight max rotation speed

Autonomous flight max rotation speed.

Triggered : by [SetAutonomousFlightMaxRotationSpeed](#1_2_9).

Example binding to listen for the ` AutonomousFlightMaxRotationSpeed ` event from the drone :

```javascript

drone.on(
  'AutonomousFlightMaxRotationSpeed',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.BankedTurnChanged

Banked Turn mode

Banked Turn mode.
 If banked turn mode is enabled, the drone will use yaw values from the piloting command to infer with roll and pitch on the drone when its horizontal speed is not null.

Triggered : by [SetBankedTurnMode](#1_2_10).

Example binding to listen for the ` BankedTurnChanged ` event from the drone :

```javascript

drone.on(
  'BankedTurnChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.MinAltitudeChanged

Min altitude

Min altitude.
 Only sent by fixed wings.

Triggered : by [SetMinAltitude](#1_2_11).

Example binding to listen for the ` MinAltitudeChanged ` event from the drone :

```javascript

drone.on(
  'MinAltitudeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.CirclingDirectionChanged

Circling direction

Circling direction.
 Only sent by fixed wings.

Triggered : by [SetCirclingDirection](#1_2_12).

Example binding to listen for the ` CirclingDirectionChanged ` event from the drone :

```javascript

drone.on(
  'CirclingDirectionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.CirclingRadiusChanged

Circling radius

Circling radius.
 Only sent by fixed wings.

Triggered : by [SetCirclingRadius](#1_2_13).

Example binding to listen for the ` CirclingRadiusChanged ` event from the drone :

```javascript

drone.on(
  'CirclingRadiusChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.CirclingAltitudeChanged

Circling altitude

Circling altitude.
 Bounds will be automatically adjusted according to the [MaxAltitude](#1_6_0).
 Only sent by fixed wings.

Triggered : by [SetCirclingRadius](#1_2_14) or when bounds change due to [SetMaxAltitude](#1_2_0).

Example binding to listen for the ` CirclingAltitudeChanged ` event from the drone :

```javascript

drone.on(
  'CirclingAltitudeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PilotingSettingsState.PitchModeChanged

Pitch mode

Pitch mode.

Triggered : by [SetPitchMode](#1_2_15).

Example binding to listen for the ` PitchModeChanged ` event from the drone :

```javascript

drone.on(
  'PitchModeChanged',
  function(data){
    console.log(data);
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
Example sending the ` Picture ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const PictureMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Picture
);

drone.message.send(PictureMessage);

```


## projects.ardrone3.MediaRecord.Video

Record a video

Record a video.

Result : undefined
Example sending the ` Video ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const VideoMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Video
);

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
Example sending the ` PictureV2 ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const PictureV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PictureV2
);

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
Example sending the ` VideoV2 ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaRecord;

//build a message requesting all settings
const VideoV2Message=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoV2
);

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

Example binding to listen for the ` PictureStateChanged ` event from the drone :

```javascript

drone.on(
  'PictureStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.MediaRecordState.VideoStateChanged

Video record state

Picture record state.

Result : undefined

Example binding to listen for the ` VideoStateChanged ` event from the drone :

```javascript

drone.on(
  'VideoStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.MediaRecordState.PictureStateChangedV2

Picture state

Picture state.

Triggered : by [TakePicture](#1_7_2) or by a change in the picture state

Example binding to listen for the ` PictureStateChangedV2 ` event from the drone :

```javascript

drone.on(
  'PictureStateChangedV2',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.MediaRecordState.VideoStateChangedV2

Video record state

Video record state.

Triggered : by [RecordVideo](#1_7_3) or by a change in the video state

Example binding to listen for the ` VideoStateChangedV2 ` event from the drone :

```javascript

drone.on(
  'VideoStateChangedV2',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.MediaRecordState.VideoResolutionState

Video resolution

Video resolution.
 Informs about streaming and recording video resolutions.
 Note that this is only an indication about what the resolution should be. To know the real resolution, you should get it from the frame.

Triggered : when the resolution changes.

Example binding to listen for the ` VideoResolutionState ` event from the drone :

```javascript

drone.on(
  'VideoResolutionState',
  function(data){
    console.log(data);
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
Example sending the ` WifiSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.NetworkSettings;

//build a message requesting all settings
const WifiSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiSelection
);

drone.message.send(WifiSelectionMessage);

```


## projects.ardrone3.NetworkSettings.wifiSecurity

Set wifi security type

Set wifi security type.
 The security will be changed on the next restart

Result : The wifi security is set (but not applied until next restart).
 Then, event [WifiSecurityType](#1_10_2) is triggered.
Example sending the ` wifiSecurity ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.NetworkSettings;

//build a message requesting all settings
const wifiSecurityMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.wifiSecurity
);

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

Example binding to listen for the ` WifiSelectionChanged ` event from the drone :

```javascript

drone.on(
  'WifiSelectionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.NetworkSettingsState.wifiSecurityChanged

Wifi security type

Wifi security type.

Result : undefined

Example binding to listen for the ` wifiSecurityChanged ` event from the drone :

```javascript

drone.on(
  'wifiSecurityChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.NetworkSettingsState.wifiSecurity

Wifi security type

Wifi security type.

Triggered : by [SetWifiSecurityType](#1_9_1).

Example binding to listen for the ` wifiSecurity ` event from the drone :

```javascript

drone.on(
  'wifiSecurity',
  function(data){
    console.log(data);
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
Example sending the ` MaxVerticalSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const MaxVerticalSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxVerticalSpeed
);

drone.message.send(MaxVerticalSpeedMessage);

```


## projects.ardrone3.SpeedSettings.MaxRotationSpeed

Set max rotation speed

Set max rotation speed.

Result : The max rotation speed is set.
 Then, event [MaxRotationSpeed](#1_12_1) is triggered.
Example sending the ` MaxRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const MaxRotationSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxRotationSpeed
);

drone.message.send(MaxRotationSpeedMessage);

```


## projects.ardrone3.SpeedSettings.HullProtection

Set the presence of hull protection

Set the presence of hull protection.

Result : The drone knows that it has a hull protection.
 Then, event [HullProtection](#1_12_2) is triggered.
Example sending the ` HullProtection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const HullProtectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.HullProtection
);

drone.message.send(HullProtectionMessage);

```


## projects.ardrone3.SpeedSettings.Outdoor

Set outdoor mode

Set outdoor mode.

Result : undefined
Example sending the ` Outdoor ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const OutdoorMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Outdoor
);

drone.message.send(OutdoorMessage);

```


## projects.ardrone3.SpeedSettings.MaxPitchRollRotationSpeed

Set max pitch/roll rotation speed

Set max pitch/roll rotation speed.

Result : The max pitch/roll rotation speed is set.
 Then, event [MaxPitchRollRotationSpeed](#1_12_4) is triggered.
Example sending the ` MaxPitchRollRotationSpeed ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SpeedSettings;

//build a message requesting all settings
const MaxPitchRollRotationSpeedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxPitchRollRotationSpeed
);

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

Example binding to listen for the ` MaxVerticalSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxVerticalSpeedChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SpeedSettingsState.MaxRotationSpeedChanged

Max rotation speed

Max rotation speed.

Triggered : by [SetMaxRotationSpeed](#1_11_1).

Example binding to listen for the ` MaxRotationSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxRotationSpeedChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SpeedSettingsState.HullProtectionChanged

Presence of hull protection

Presence of hull protection.

Triggered : by [SetHullProtectionPresence](#1_11_2).

Example binding to listen for the ` HullProtectionChanged ` event from the drone :

```javascript

drone.on(
  'HullProtectionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SpeedSettingsState.OutdoorChanged

Outdoor mode

Outdoor mode.

Result : undefined

Example binding to listen for the ` OutdoorChanged ` event from the drone :

```javascript

drone.on(
  'OutdoorChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SpeedSettingsState.MaxPitchRollRotationSpeedChanged

Max pitch/roll rotation speed

Max pitch/roll rotation speed.

Triggered : by [SetMaxPitchRollRotationSpeed](#1_11_4).

Example binding to listen for the ` MaxPitchRollRotationSpeedChanged ` event from the drone :

```javascript

drone.on(
  'MaxPitchRollRotationSpeedChanged',
  function(data){
    console.log(data);
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
Example sending the ` WifiScan ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Network;

//build a message requesting all settings
const WifiScanMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiScan
);

drone.message.send(WifiScanMessage);

```


## projects.ardrone3.Network.WifiAuthChannel

Ask for available wifi channels

Ask for available wifi channels.
 The list of available Wifi channels is related to the country of the drone. You can get this country from the event [CountryChanged](#0_3_6).

Result : Event [AvailableWifiChannels](#1_14_2) is triggered with all available channels. When all channels have been sent, event [AvailableWifiChannelsCompleted](#1_14_3) is triggered.
Example sending the ` WifiAuthChannel ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Network;

//build a message requesting all settings
const WifiAuthChannelMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.WifiAuthChannel
);

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

Example binding to listen for the ` WifiScanListChanged ` event from the drone :

```javascript

drone.on(
  'WifiScanListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.NetworkState.AllWifiScanChanged

Wifi scan ended

Wifi scan ended.
 When receiving this event, the list of [WifiScanResults](#1_14_0) is complete.

Triggered : after the last [WifiScanResult](#1_14_0) has been sent.

Example binding to listen for the ` AllWifiScanChanged ` event from the drone :

```javascript

drone.on(
  'AllWifiScanChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.NetworkState.WifiAuthChannelListChanged

Available wifi channels

Available wifi channels.
 Please note that the list is not complete until you receive the event [AvailableWifiChannelsCompleted](#1_14_3).

Triggered : for each available channel after a [GetAvailableWifiChannels](#1_13_1).

Example binding to listen for the ` WifiAuthChannelListChanged ` event from the drone :

```javascript

drone.on(
  'WifiAuthChannelListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.NetworkState.AllWifiAuthChannelChanged

Available wifi channels completed

Available wifi channels completed.
 When receiving this event, the list of [AvailableWifiChannels](#1_14_2) is complete.

Triggered : after the last [AvailableWifiChannel](#1_14_2) has been sent.

Example binding to listen for the ` AllWifiAuthChannelChanged ` event from the drone :

```javascript

drone.on(
  'AllWifiAuthChannelChanged',
  function(data){
    console.log(data);
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

Example binding to listen for the ` ProductMotorVersionListChanged ` event from the drone :

```javascript

drone.on(
  'ProductMotorVersionListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SettingsState.ProductGPSVersionChanged

GPS version

GPS version.

Triggered : at connection.

Example binding to listen for the ` ProductGPSVersionChanged ` event from the drone :

```javascript

drone.on(
  'ProductGPSVersionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SettingsState.MotorErrorStateChanged

Motor error

Motor error.
 This event is sent back to *noError* as soon as the motor error disappear. To get the last motor error, see [LastMotorError](#1_16_5)

Triggered : when a motor error occurs.

Example binding to listen for the ` MotorErrorStateChanged ` event from the drone :

```javascript

drone.on(
  'MotorErrorStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SettingsState.MotorSoftwareVersionChanged

Motor version

Motor version.

Result : undefined

Example binding to listen for the ` MotorSoftwareVersionChanged ` event from the drone :

```javascript

drone.on(
  'MotorSoftwareVersionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SettingsState.MotorFlightsStatusChanged

Motor flight status

Motor flight status.

Triggered : at connection.

Example binding to listen for the ` MotorFlightsStatusChanged ` event from the drone :

```javascript

drone.on(
  'MotorFlightsStatusChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SettingsState.MotorErrorLastErrorChanged

Last motor error

Last motor error.
 This is a reminder of the last error. To know if a motor error is currently happening, see [MotorError](#1_16_2).

Triggered : at connection and when an error occurs.

Example binding to listen for the ` MotorErrorLastErrorChanged ` event from the drone :

```javascript

drone.on(
  'MotorErrorLastErrorChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.SettingsState.P7ID

P7ID

P7ID.

Result : undefined
Example sending the ` P7ID ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SettingsState;

//build a message requesting all settings
const P7IDMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.P7ID
);

drone.message.send(P7IDMessage);

```


## projects.ardrone3.SettingsState.CPUID

Product main cpu id




Example sending the ` CPUID ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.SettingsState;

//build a message requesting all settings
const CPUIDMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CPUID
);

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
Example sending the ` PictureFormatSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const PictureFormatSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PictureFormatSelection
);

drone.message.send(PictureFormatSelectionMessage);

```


## projects.ardrone3.PictureSettings.AutoWhiteBalanceSelection

Set White Balance mode

Set White Balance mode.

Result : The white balance mode is set.
 Then, event [WhiteBalanceMode](#1_20_1) is triggered.
Example sending the ` AutoWhiteBalanceSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const AutoWhiteBalanceSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AutoWhiteBalanceSelection
);

drone.message.send(AutoWhiteBalanceSelectionMessage);

```


## projects.ardrone3.PictureSettings.ExpositionSelection

Set image exposure

Set image exposure.

Result : The exposure is set.
 Then, event [ImageExposure](#1_20_2) is triggered.
Example sending the ` ExpositionSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const ExpositionSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ExpositionSelection
);

drone.message.send(ExpositionSelectionMessage);

```


## projects.ardrone3.PictureSettings.SaturationSelection

Set image saturation

Set image saturation.

Result : The saturation is set.
 Then, event [ImageSaturation](#1_20_3) is triggered.
Example sending the ` SaturationSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const SaturationSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SaturationSelection
);

drone.message.send(SaturationSelectionMessage);

```


## projects.ardrone3.PictureSettings.TimelapseSelection

Set timelapse mode

Set timelapse mode.
 If timelapse mode is set, instead of taking a video, the drone will take picture regularly.
 Watch out, this command only configure the timelapse mode. Once it is configured, you can start/stop the timelapse with the [RecordVideo](#1_7_3) command.

Result : The timelapse mode is set (but not started).
 Then, event [TimelapseMode](#1_20_4) is triggered.
Example sending the ` TimelapseSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const TimelapseSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.TimelapseSelection
);

drone.message.send(TimelapseSelectionMessage);

```


## projects.ardrone3.PictureSettings.VideoAutorecordSelection

Set video autorecord mode

Set video autorecord mode.
 If autorecord is set, video record will be automatically started when the drone takes off and stopped slightly after landing.

Result : The autorecord mode is set.
 Then, event [AutorecordMode](#1_20_5) is triggered.
Example sending the ` VideoAutorecordSelection ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const VideoAutorecordSelectionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoAutorecordSelection
);

drone.message.send(VideoAutorecordSelectionMessage);

```


## projects.ardrone3.PictureSettings.VideoStabilizationMode

Set video stabilization mode

Set video stabilization mode.

Result : The video stabilization mode is set.
 Then, event [VideoStabilizationMode](#1_20_6) is triggered.
Example sending the ` VideoStabilizationMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const VideoStabilizationModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoStabilizationMode
);

drone.message.send(VideoStabilizationModeMessage);

```


## projects.ardrone3.PictureSettings.VideoRecordingMode

Set video recording mode

Set video recording mode.

Result : The video recording mode is set.
 Then, event [VideoRecordingMode](#1_20_7) is triggered.
Example sending the ` VideoRecordingMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const VideoRecordingModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoRecordingMode
);

drone.message.send(VideoRecordingModeMessage);

```


## projects.ardrone3.PictureSettings.VideoFramerate

Set video framerate

Set video framerate.

Result : The video framerate is set.
 Then, event [VideoFramerate](#1_20_8) is triggered.
Example sending the ` VideoFramerate ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const VideoFramerateMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoFramerate
);

drone.message.send(VideoFramerateMessage);

```


## projects.ardrone3.PictureSettings.VideoResolutions

Set video resolutions

Set video streaming and recording resolutions.

Result : The video resolutions is set.
 Then, event [VideoResolutions](#1_20_9) is triggered.
Example sending the ` VideoResolutions ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PictureSettings;

//build a message requesting all settings
const VideoResolutionsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoResolutions
);

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

Example binding to listen for the ` PictureFormatChanged ` event from the drone :

```javascript

drone.on(
  'PictureFormatChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.AutoWhiteBalanceChanged

White balance mode

White balance mode.

Triggered : by [SetWhiteBalanceMode](#1_19_1).

Example binding to listen for the ` AutoWhiteBalanceChanged ` event from the drone :

```javascript

drone.on(
  'AutoWhiteBalanceChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.ExpositionChanged

Image exposure

Image exposure.

Triggered : by [SetImageExposure](#1_19_2).

Example binding to listen for the ` ExpositionChanged ` event from the drone :

```javascript

drone.on(
  'ExpositionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.SaturationChanged

Image saturation

Image saturation.

Triggered : by [SetImageSaturation](#1_19_3).

Example binding to listen for the ` SaturationChanged ` event from the drone :

```javascript

drone.on(
  'SaturationChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.TimelapseChanged

Timelapse mode

Timelapse mode.

Triggered : by [SetTimelapseMode](#1_19_4).

Example binding to listen for the ` TimelapseChanged ` event from the drone :

```javascript

drone.on(
  'TimelapseChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoAutorecordChanged

Video Autorecord mode

Video Autorecord mode.

Triggered : by [SetVideoAutorecordMode](#1_19_5).

Example binding to listen for the ` VideoAutorecordChanged ` event from the drone :

```javascript

drone.on(
  'VideoAutorecordChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoStabilizationModeChanged

Video stabilization mode

Video stabilization mode.

Triggered : by [SetVideoStabilizationMode](#1_19_6).

Example binding to listen for the ` VideoStabilizationModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoStabilizationModeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoRecordingModeChanged

Video recording mode

Video recording mode.

Triggered : by [SetVideoRecordingMode](#1_19_7).

Example binding to listen for the ` VideoRecordingModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoRecordingModeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoFramerateChanged

Video framerate

Video framerate.

Triggered : by [SetVideoFramerateMode](#1_19_8).

Example binding to listen for the ` VideoFramerateChanged ` event from the drone :

```javascript

drone.on(
  'VideoFramerateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.PictureSettingsState.VideoResolutionsChanged

Video resolutions

Video resolutions.
 This event informs about the recording AND streaming resolutions.

Triggered : by [SetVideResolutions](#1_19_9).

Example binding to listen for the ` VideoResolutionsChanged ` event from the drone :

```javascript

drone.on(
  'VideoResolutionsChanged',
  function(data){
    console.log(data);
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
Example sending the ` VideoEnable ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaStreaming;

//build a message requesting all settings
const VideoEnableMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoEnable
);

drone.message.send(VideoEnableMessage);

```


## projects.ardrone3.MediaStreaming.VideoStreamMode

Video stream mode




Example sending the ` VideoStreamMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.MediaStreaming;

//build a message requesting all settings
const VideoStreamModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.VideoStreamMode
);

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

Example binding to listen for the ` VideoEnableChanged ` event from the drone :

```javascript

drone.on(
  'VideoEnableChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.MediaStreamingState.VideoStreamModeChanged

Video stream mode state





Example binding to listen for the ` VideoStreamModeChanged ` event from the drone :

```javascript

drone.on(
  'VideoStreamModeChanged',
  function(data){
    console.log(data);
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
Example sending the ` SetHome ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//build a message requesting all settings
const SetHomeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SetHome
);

drone.message.send(SetHomeMessage);

```


## projects.ardrone3.GPSSettings.ResetHome

Reset home position

Reset home position.

Result : The home position is reset.
 Then, event [HomeLocationReset](#1_24_1) is triggered.
Example sending the ` ResetHome ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//build a message requesting all settings
const ResetHomeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ResetHome
);

drone.message.send(ResetHomeMessage);

```


## projects.ardrone3.GPSSettings.SendControllerGPS

Set controller gps location

Set controller gps location.
 The user location might be used in case of return home, according to the home type and the accuracy of the given position. You can get the current home type with the event [HomeType](#1_24_4).

Result : The controller position is known by the drone.
 Then, event [HomeLocation](#1_24_2) is triggered.
Example sending the ` SendControllerGPS ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//build a message requesting all settings
const SendControllerGPSMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SendControllerGPS
);

drone.message.send(SendControllerGPSMessage);

```


## projects.ardrone3.GPSSettings.HomeType

Set the preferred home type

Set the preferred home type.
 Please note that this is only a preference. The actual type chosen is given by the event [HomeType](#1_31_2).
 You can get the currently available types with the event [HomeTypeAvailability](#1_31_1).

Result : The user choice is known by the drone.
 Then, event [PreferredHomeType](#1_24_4) is triggered.
Example sending the ` HomeType ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//build a message requesting all settings
const HomeTypeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.HomeType
);

drone.message.send(HomeTypeMessage);

```


## projects.ardrone3.GPSSettings.ReturnHomeDelay

Set the return home delay

Set the delay after which the drone will automatically try to return home after a disconnection.

Result : The delay of the return home is set.
 Then, event [ReturnHomeDelay](#1_24_5) is triggered.
Example sending the ` ReturnHomeDelay ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.GPSSettings;

//build a message requesting all settings
const ReturnHomeDelayMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ReturnHomeDelay
);

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

Example binding to listen for the ` HomeChanged ` event from the drone :

```javascript

drone.on(
  'HomeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.GPSSettingsState.ResetHomeChanged

Home location has been reset

Home location has been reset.

Triggered : by [ResetHomeLocation](#1_23_1).

Example binding to listen for the ` ResetHomeChanged ` event from the drone :

```javascript

drone.on(
  'ResetHomeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.GPSSettingsState.GPSFixStateChanged

Gps fix info

Gps fix info.

Triggered : on change.

Example binding to listen for the ` GPSFixStateChanged ` event from the drone :

```javascript

drone.on(
  'GPSFixStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.GPSSettingsState.GPSUpdateStateChanged

Gps update state

Gps update state.

Triggered : on change.

Example binding to listen for the ` GPSUpdateStateChanged ` event from the drone :

```javascript

drone.on(
  'GPSUpdateStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.GPSSettingsState.HomeTypeChanged

Preferred home type

User preference for the home type.
 See [HomeType](#1_31_2) to get the drone actual home type.

Triggered : by [SetPreferredHomeType](#1_23_3).

Example binding to listen for the ` HomeTypeChanged ` event from the drone :

```javascript

drone.on(
  'HomeTypeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.GPSSettingsState.ReturnHomeDelayChanged

Return home delay

Return home trigger delay. This delay represents the time after which the return home is automatically triggered after a disconnection.

Triggered : by [SetReturnHomeDelay](#1_23_4).

Example binding to listen for the ` ReturnHomeDelayChanged ` event from the drone :

```javascript

drone.on(
  'ReturnHomeDelayChanged',
  function(data){
    console.log(data);
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

Example binding to listen for the ` Orientation ` event from the drone :

```javascript

drone.on(
  'Orientation',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.CameraState.defaultCameraOrientation

Orientation of the camera center

Orientation of the center of the camera.
 This is the value to send when you want to center the camera.

Triggered : at connection.

Example binding to listen for the ` defaultCameraOrientation ` event from the drone :

```javascript

drone.on(
  'defaultCameraOrientation',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.CameraState.OrientationV2

Camera orientation

Camera orientation with float arguments.

Triggered : by [SetCameraOrientationV2](#1_1_1)

Example binding to listen for the ` OrientationV2 ` event from the drone :

```javascript

drone.on(
  'OrientationV2',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.CameraState.defaultCameraOrientationV2

Orientation of the camera center

Orientation of the center of the camera.
 This is the value to send when you want to center the camera.

Triggered : at connection.

Example binding to listen for the ` defaultCameraOrientationV2 ` event from the drone :

```javascript

drone.on(
  'defaultCameraOrientationV2',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.CameraState.VelocityRange

Camera velocity range

Camera Orientation velocity limits.

Triggered : at connection.

Example binding to listen for the ` VelocityRange ` event from the drone :

```javascript

drone.on(
  'VelocityRange',
  function(data){
    console.log(data);
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
Example sending the ` electricFrequency ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Antiflickering;

//build a message requesting all settings
const electricFrequencyMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.electricFrequency
);

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
Example sending the ` setMode ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.Antiflickering;

//build a message requesting all settings
const setModeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.setMode
);

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

Example binding to listen for the ` electricFrequencyChanged ` event from the drone :

```javascript

drone.on(
  'electricFrequencyChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.AntiflickeringState.modeChanged

Antiflickering mode

Antiflickering mode.

Triggered : by [SetAntiflickeringMode](#1_29_1).

Example binding to listen for the ` modeChanged ` event from the drone :

```javascript

drone.on(
  'modeChanged',
  function(data){
    console.log(data);
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

Example binding to listen for the ` NumberOfSatelliteChanged ` event from the drone :

```javascript

drone.on(
  'NumberOfSatelliteChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.ardrone3.GPSState.HomeTypeAvailabilityChanged

Home type availability

Home type availability.

Triggered : when the availability of, at least, one type changes.
 This might be due to controller position availability, gps fix before take off or other reason.

Example binding to listen for the ` HomeTypeAvailabilityChanged ` event from the drone :

```javascript

drone.on(
  'HomeTypeAvailabilityChanged',
  function(data){
    console.log(data);
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

Example binding to listen for the ` HomeTypeChosenChanged ` event from the drone :

```javascript

drone.on(
  'HomeTypeChosenChanged',
  function(data){
    console.log(data);
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
Example sending the ` Features ` command to your parrot drone :

```javascript

const project=drone.projects.ardrone3;
const commandClass=project.PROState;

//build a message requesting all settings
const FeaturesMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Features
);

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

Example binding to listen for the ` moveByEnd ` event from the drone :

```javascript

drone.on(
  'moveByEnd',
  function(data){
    console.log(data);
  }
)

```

