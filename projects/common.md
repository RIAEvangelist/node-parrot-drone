# projects.common
-----
### All common commands shared between all projects

Below is a table of all the common Project command classes.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Class Name | ID | Hex ID | Description |
|------------|----|--------|-------------|
|[Network](#projectscommonnetwork)|0|0x0|Network related commands|
|[NetworkEvent](#projectscommonnetworkevent)|1|0x1|Network Event from product|
|[Settings](#projectscommonsettings)|2|0x2|Settings commands|
|[SettingsState](#projectscommonsettingsstate)|3|0x3|Settings state from product|
|[Common](#projectscommoncommon)|4|0x4|Common commands|
|[CommonState](#projectscommoncommonstate)|5|0x5|Common state from product|
|[OverHeat](#projectscommonoverheat)|6|0x6|Over heat commands|
|[OverHeatState](#projectscommonoverheatstate)|7|0x7|Overheat state from product|
|[Controller](#projectscommoncontroller)|8|0x8|Notify the device about the state of the controller application.|
|[WifiSettings](#projectscommonwifisettings)|9|0x9|Wifi settings commands|
|[WifiSettingsState](#projectscommonwifisettingsstate)|10|0xa|Wifi settings state from product|
|[Mavlink](#projectscommonmavlink)|11|0xb|Mavlink flight plans commands|
|[MavlinkState](#projectscommonmavlinkstate)|12|0xc|Mavlink flight plans states commands|
|[Calibration](#projectscommoncalibration)|13|0xd|Calibration commands|
|[CalibrationState](#projectscommoncalibrationstate)|14|0xe|Status of the calibration|
|[CameraSettingsState](#projectscommoncamerasettingsstate)|15|0xf|Status of the camera settings|
|[GPS](#projectscommongps)|16|0x10|GPS related commands|
|[FlightPlanState](#projectscommonflightplanstate)|17|0x11|FlightPlan state commands|
|[ARLibsVersionsState](#projectscommonarlibsversionsstate)|18|0x12|ARlibs Versions Commands|
|[FlightPlanEvent](#projectscommonflightplanevent)|19|0x13|FlightPlan Event commands|
|[Audio](#projectscommonaudio)|20|0x14|Audio_related commands.|
|[AudioState](#projectscommonaudiostate)|21|0x15|Audio_related state updates.|
|[Headlights](#projectscommonheadlights)|22|0x16|Controls the headlight LEDs of the Evo variants.|
|[HeadlightsState](#projectscommonheadlightsstate)|23|0x17|Get information about the state of the Evo variants' LEDs.|
|[Animations](#projectscommonanimations)|24|0x18|Animations_related commands.|
|[AnimationsState](#projectscommonanimationsstate)|25|0x19|Animations_related notification/feedback commands.|
|[Accessory](#projectscommonaccessory)|26|0x1a|Accessories_related commands.|
|[AccessoryState](#projectscommonaccessorystate)|27|0x1b|Accessories_related commands.|
|[Charger](#projectscommoncharger)|28|0x1c|Commands sent by the controller to set charger parameters.|
|[ChargerState](#projectscommonchargerstate)|29|0x1d|Commands sent by the firmware to advertise the charger status.|
|[RunState](#projectscommonrunstate)|30|0x1e|Commands sent by the drone to inform about the run or flight state|
# projects.common.Network
-----
### Network related commands

The Network Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Disconnect](#projectscommonnetworkdisconnect)|0|0x0|Signals the remote that the host will disconnect|
# projects.common.NetworkEvent
-----
### Network Event from product

The NetworkEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Disconnection](#projectscommonnetworkeventdisconnection)|0|0x0|Drone will disconnect|
# projects.common.Settings
-----
### Settings commands

The Settings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllSettings](#projectscommonsettingsallsettings)|0|0x0|Ask for all settings|
|[Reset](#projectscommonsettingsreset)|1|0x1|Reset all settings|
|[ProductName](#projectscommonsettingsproductname)|2|0x2|Set product name|
|[Country](#projectscommonsettingscountry)|3|0x3|Set the country|
|[AutoCountry](#projectscommonsettingsautocountry)|4|0x4|Enable auto_country|
# projects.common.SettingsState
-----
### Settings state from product

The SettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllSettingsChanged](#projectscommonsettingsstateallsettingschanged)|0|0x0|All settings have been sent|
|[ResetChanged](#projectscommonsettingsstateresetchanged)|1|0x1|All settings have been reset|
|[ProductNameChanged](#projectscommonsettingsstateproductnamechanged)|2|0x2|Product name changed|
|[ProductVersionChanged](#projectscommonsettingsstateproductversionchanged)|3|0x3|Product version|
|[ProductSerialHighChanged](#projectscommonsettingsstateproductserialhighchanged)|4|0x4|Product serial (1st part)|
|[ProductSerialLowChanged](#projectscommonsettingsstateproductseriallowchanged)|5|0x5|Product serial (2nd part)|
|[CountryChanged](#projectscommonsettingsstatecountrychanged)|6|0x6|Country changed|
|[AutoCountryChanged](#projectscommonsettingsstateautocountrychanged)|7|0x7|Auto_country changed|
# projects.common.Common
-----
### Common commands

The Common Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllStates](#projectscommoncommonallstates)|0|0x0|Ask for all states|
|[CurrentDate](#projectscommoncommoncurrentdate)|1|0x1|Set the date|
|[CurrentTime](#projectscommoncommoncurrenttime)|2|0x2|Set the time|
|[Reboot](#projectscommoncommonreboot)|3|0x3|Reboot|
# projects.common.CommonState
-----
### Common state from product

The CommonState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AllStatesChanged](#projectscommoncommonstateallstateschanged)|0|0x0|All states have been sent|
|[BatteryStateChanged](#projectscommoncommonstatebatterystatechanged)|1|0x1|Battery state|
|[MassStorageStateListChanged](#projectscommoncommonstatemassstoragestatelistchanged)|2|0x2|Mass storage state list|
|[MassStorageInfoStateListChanged](#projectscommoncommonstatemassstorageinfostatelistchanged)|3|0x3|Mass storage info state list|
|[CurrentDateChanged](#projectscommoncommonstatecurrentdatechanged)|4|0x4|Date changed|
|[CurrentTimeChanged](#projectscommoncommonstatecurrenttimechanged)|5|0x5|Time changed|
|[MassStorageInfoRemainingListChanged](#projectscommoncommonstatemassstorageinforemaininglistchanged)|6|0x6|Mass storage remaining data list|
|[WifiSignalChanged](#projectscommoncommonstatewifisignalchanged)|7|0x7|Rssi changed|
|[SensorsStatesListChanged](#projectscommoncommonstatesensorsstateslistchanged)|8|0x8|Sensors state list|
|[ProductModel](#projectscommoncommonstateproductmodel)|9|0x9|Product sub_model|
|[CountryListKnown](#projectscommoncommonstatecountrylistknown)|10|0xa|Country list|
|[DeprecatedMassStorageContentChanged](#projectscommoncommonstatedeprecatedmassstoragecontentchanged)|11|0xb|Mass storage content changed|
|[MassStorageContent](#projectscommoncommonstatemassstoragecontent)|12|0xc|Mass storage content|
|[MassStorageContentForCurrentRun](#projectscommoncommonstatemassstoragecontentforcurrentrun)|13|0xd|Mass storage content for current run|
|[VideoRecordingTimestamp](#projectscommoncommonstatevideorecordingtimestamp)|14|0xe|Video recording timestamp|
# projects.common.OverHeat
-----
### Over heat commands

The OverHeat Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SwitchOff](#projectscommonoverheatswitchoff)|0|0x0|Switch off after an overheat|
|[Ventilate](#projectscommonoverheatventilate)|1|0x1|Ventilate after an overheat|
# projects.common.OverHeatState
-----
### Overheat state from product

The OverHeatState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[OverHeatChanged](#projectscommonoverheatstateoverheatchanged)|0|0x0|Overheat|
|[OverHeatRegulationChanged](#projectscommonoverheatstateoverheatregulationchanged)|1|0x1|Overheat regulation type|
# projects.common.Controller
-----
### Notify the device about the state of the controller application.

The Controller Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[isPiloting](#projectscommoncontrollerispiloting)|0|0x0|Inform about hud entering|
# projects.common.WifiSettings
-----
### Wifi settings commands

The WifiSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[OutdoorSetting](#projectscommonwifisettingsoutdoorsetting)|0|0x0|Set wifi outdoor mode|
# projects.common.WifiSettingsState
-----
### Wifi settings state from product

The WifiSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[outdoorSettingsChanged](#projectscommonwifisettingsstateoutdoorsettingschanged)|0|0x0|Wifi outdoor mode|
# projects.common.Mavlink
-----
### Mavlink flight plans commands

The Mavlink Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Start](#projectscommonmavlinkstart)|0|0x0|Start a FlightPlan|
|[Pause](#projectscommonmavlinkpause)|1|0x1|Pause a FlightPlan|
|[Stop](#projectscommonmavlinkstop)|2|0x2|Stop a FlightPlan|
# projects.common.MavlinkState
-----
### Mavlink flight plans states commands

The MavlinkState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MavlinkFilePlayingStateChanged](#projectscommonmavlinkstatemavlinkfileplayingstatechanged)|0|0x0|Playing state of a FlightPlan|
|[MavlinkPlayErrorStateChanged](#projectscommonmavlinkstatemavlinkplayerrorstatechanged)|1|0x1|FlightPlan error|
|[MissonItemExecuted](#projectscommonmavlinkstatemissonitemexecuted)|2|0x2|Mission item executed|
# projects.common.Calibration
-----
### Calibration commands

The Calibration Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MagnetoCalibration](#projectscommoncalibrationmagnetocalibration)|0|0x0|Start/Abort magnetometer calibration|
|[PitotCalibration](#projectscommoncalibrationpitotcalibration)|1|0x1|Sent when a calibration of the pitot is asked or is aborted|
# projects.common.CalibrationState
-----
### Status of the calibration

The CalibrationState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MagnetoCalibrationStateChanged](#projectscommoncalibrationstatemagnetocalibrationstatechanged)|0|0x0|Magneto calib process axis state|
|[MagnetoCalibrationRequiredState](#projectscommoncalibrationstatemagnetocalibrationrequiredstate)|1|0x1|Calibration required|
|[MagnetoCalibrationAxisToCalibrateChanged](#projectscommoncalibrationstatemagnetocalibrationaxistocalibratechanged)|2|0x2|Axis to calibrate during calibration process|
|[MagnetoCalibrationStartedChanged](#projectscommoncalibrationstatemagnetocalibrationstartedchanged)|3|0x3|Calibration process state|
|[PitotCalibrationStateChanged](#projectscommoncalibrationstatepitotcalibrationstatechanged)|4|0x4|Sent when the state of the pitot calibration has changed|
# projects.common.CameraSettingsState
-----
### Status of the camera settings

The CameraSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[CameraSettingsChanged](#projectscommoncamerasettingsstatecamerasettingschanged)|0|0x0|Camera info|
# projects.common.GPS
-----
### GPS related commands

The GPS Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerPositionForRun](#projectscommongpscontrollerpositionforrun)|0|0x0|Set the position of a run|
# projects.common.FlightPlanState
-----
### FlightPlan state commands

The FlightPlanState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AvailabilityStateChanged](#projectscommonflightplanstateavailabilitystatechanged)|0|0x0|FlightPlan availability|
|[ComponentStateListChanged](#projectscommonflightplanstatecomponentstatelistchanged)|1|0x1|FlightPlan components state list|
|[LockStateChanged](#projectscommonflightplanstatelockstatechanged)|2|0x2|FlightPlan lock state|
# projects.common.ARLibsVersionsState
-----
### ARlibs Versions Commands

The ARLibsVersionsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerLibARCommandsVersion](#projectscommonarlibsversionsstatecontrollerlibarcommandsversion)|0|0x0|Controller libARCommands version|
|[SkyControllerLibARCommandsVersion](#projectscommonarlibsversionsstateskycontrollerlibarcommandsversion)|1|0x1|SkyController libARCommands version|
|[DeviceLibARCommandsVersion](#projectscommonarlibsversionsstatedevicelibarcommandsversion)|2|0x2|Device libARCommands version|
# projects.common.FlightPlanEvent
-----
### FlightPlan Event commands

The FlightPlanEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[StartingErrorEvent](#projectscommonflightplaneventstartingerrorevent)|0|0x0|FlightPlan start error|
|[SpeedBridleEvent](#projectscommonflightplaneventspeedbridleevent)|1|0x1|FlightPlan speed clamping|
# projects.common.Audio
-----
### Audio_related commands.

The Audio Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerReadyForStreaming](#projectscommonaudiocontrollerreadyforstreaming)|0|0x0|Set audio stream direction|
# projects.common.AudioState
-----
### Audio_related state updates.

The AudioState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AudioStreamingRunning](#projectscommonaudiostateaudiostreamingrunning)|0|0x0|Audio stream direction|
# projects.common.Headlights
-----
### Controls the headlight LEDs of the Evo variants.

The Headlights Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[intensity](#projectscommonheadlightsintensity)|0|0x0|Set LEDs intensity|
# projects.common.HeadlightsState
-----
### Get information about the state of the Evo variants' LEDs.

The HeadlightsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[intensityChanged](#projectscommonheadlightsstateintensitychanged)|0|0x0|LEDs intensity|
# projects.common.Animations
-----
### Animations_related commands.

The Animations Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[StartAnimation](#projectscommonanimationsstartanimation)|0|0x0|Start an animation|
|[StopAnimation](#projectscommonanimationsstopanimation)|1|0x1|Stop an animation|
|[StopAllAnimations](#projectscommonanimationsstopallanimations)|2|0x2|Stop all animations|
# projects.common.AnimationsState
-----
### Animations_related notification/feedback commands.

The AnimationsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[List](#projectscommonanimationsstatelist)|0|0x0|Animation state list|
# projects.common.Accessory
-----
### Accessories_related commands.

The Accessory Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Config](#projectscommonaccessoryconfig)|0|0x0|Declare an accessory|
# projects.common.AccessoryState
-----
### Accessories_related commands.

The AccessoryState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SupportedAccessoriesListChanged](#projectscommonaccessorystatesupportedaccessorieslistchanged)|0|0x0|Supported accessories list|
|[AccessoryConfigChanged](#projectscommonaccessorystateaccessoryconfigchanged)|1|0x1|Accessory config|
|[AccessoryConfigModificationEnabled](#projectscommonaccessorystateaccessoryconfigmodificationenabled)|2|0x2|Accessory declaration availability|
# projects.common.Charger
-----
### Commands sent by the controller to set charger parameters.

The Charger Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SetMaxChargeRate](#projectscommonchargersetmaxchargerate)|0|0x0|Set max charge rate|
# projects.common.ChargerState
-----
### Commands sent by the firmware to advertise the charger status.

The ChargerState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MaxChargeRateChanged](#projectscommonchargerstatemaxchargeratechanged)|0|0x0|Max charge rate|
|[CurrentChargeStateChanged](#projectscommonchargerstatecurrentchargestatechanged)|1|0x1|Current charge state|
|[LastChargeRateChanged](#projectscommonchargerstatelastchargeratechanged)|2|0x2|Last charge rate|
|[ChargingInfo](#projectscommonchargerstatecharginginfo)|3|0x3|Charging information|
# projects.common.RunState
-----
### Commands sent by the drone to inform about the run or flight state

The RunState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[RunIdChanged](#projectscommonrunstaterunidchanged)|0|0x0|Current run id|