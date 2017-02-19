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
## projects.common.Network.Disconnect

Signals the remote that the host will disconnect

Signals the remote that the host will disconnect.\n

Triggered : undefined


# projects.common.NetworkEvent
-----
### Network Event from product

The NetworkEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Disconnection](#projectscommonnetworkeventdisconnection)|0|0x0|Drone will disconnect|
## projects.common.NetworkEvent.Disconnection

Drone will disconnect

Drone will disconnect.\n This event is mainly triggered when the user presses on the power button of the product.\n\n **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : mainly when the user presses the power button of the drone.


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
## projects.common.Settings.AllSettings

Ask for all settings

Ask for all settings.\n\n **Please note that you should not send this command if you are using the\n libARController API as this library is handling the connection process for you.**

Triggered : undefined


## projects.common.Settings.Reset

Reset all settings

Reset all settings.

Triggered : undefined


## projects.common.Settings.ProductName

Set product name

Set the product name.\n It also sets the name of the SSID for Wifi products and advertisement name for BLE products (changed after a reboot of the product).

Triggered : undefined


## projects.common.Settings.Country

Set the country

Set the country for Wifi products.\n This can modify Wifi band and/or channel.\n **Please note that you might be disconnected from the product after changing the country as it changes Wifi parameters.**

Triggered : undefined


## projects.common.Settings.AutoCountry

Enable auto_country

Enable auto_country.\n If auto_country is set, the drone will guess its Wifi country by itself by checking other Wifi country around it.\n **Please note that you might be disconnected from the product after changing the country as it changes Wifi parameters.**

Triggered : undefined


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
## projects.common.SettingsState.AllSettingsChanged

All settings have been sent

All settings have been sent.\n\n **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : when all settings values have been sent.


## projects.common.SettingsState.ResetChanged

All settings have been reset

All settings have been reset.

Triggered : by [ResetSettings](#0_2_1).


## projects.common.SettingsState.ProductNameChanged

Product name changed

Product name changed.

Triggered : by [SetProductName](#0_2_2).


## projects.common.SettingsState.ProductVersionChanged

Product version

Product version.

Triggered : during the connection process.


## projects.common.SettingsState.ProductSerialHighChanged

Product serial (1st part)

Product serial (1st part).

Triggered : during the connection process.


## projects.common.SettingsState.ProductSerialLowChanged

Product serial (2nd part)

Product serial (2nd part).

Triggered : during the connection process.


## projects.common.SettingsState.CountryChanged

Country changed

Country changed.

Triggered : by [SetCountry](#0_2_3).


## projects.common.SettingsState.AutoCountryChanged

Auto_country changed

Auto_country changed.

Triggered : by [SetAutoCountry](#0_2_4).


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
## projects.common.Common.AllStates

Ask for all states

Ask for all states.\n\n **Please note that you should not send this command if you are using the\n libARController API as this library is handling the connection process for you.**

Triggered : undefined


## projects.common.Common.CurrentDate

Set the date

Set the date.\n This date is taken by the drone as its own date.\n So medias and other files will be dated from this date\n\n **Please note that you should not send this command if you are using the\n libARController API as this library is handling the connection process for you.**

Triggered : undefined


## projects.common.Common.CurrentTime

Set the time

Set the time.\n This time is taken by the drone as its own time.\n So medias and other files will be dated from this time\n\n **Please note that you should not send this command if you are using the\n libARController API as this library is handling the connection process for you.**

Triggered : undefined


## projects.common.Common.Reboot

Reboot

Reboot the product.\n The product will accept this command only if is not flying.

Triggered : undefined


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
## projects.common.CommonState.AllStatesChanged

All states have been sent

All states have been sent.\n\n **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : when all states values have been sent.


## projects.common.CommonState.BatteryStateChanged

Battery state

Battery state.

Triggered : when the battery level changes.


## projects.common.CommonState.MassStorageStateListChanged

Mass storage state list

Mass storage state list.

Triggered : when a mass storage is inserted or ejected.


## projects.common.CommonState.MassStorageInfoStateListChanged

Mass storage info state list

Mass storage info state list.

Triggered : when a mass storage info changes.


## projects.common.CommonState.CurrentDateChanged

Date changed

Date changed.\n Corresponds to the latest date set on the drone.\n\n **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : by [SetDate](#0_4_1).


## projects.common.CommonState.CurrentTimeChanged

Time changed

Time changed.\n Corresponds to the latest time set on the drone.\n\n **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : by [SetTime](#0_4_2).


## projects.common.CommonState.MassStorageInfoRemainingListChanged

Mass storage remaining data list

Mass storage remaining data list.

Triggered : undefined


## projects.common.CommonState.WifiSignalChanged

Rssi changed

Rssi (Wifi Signal between controller and product) changed.

Triggered : regularly.


## projects.common.CommonState.SensorsStatesListChanged

Sensors state list

Sensors state list.

Triggered : at connection and when a sensor state changes.


## projects.common.CommonState.ProductModel

Product sub_model

Product sub_model.\n This can be used to customize the UI depending on the product.

Triggered : at connection.


## projects.common.CommonState.CountryListKnown

Country list

List of countries known by the drone.

Triggered : undefined


## projects.common.CommonState.DeprecatedMassStorageContentChanged

Mass storage content changed

Mass storage content changed.

Triggered : undefined


## projects.common.CommonState.MassStorageContent

Mass storage content

Mass storage content.

Triggered : when the content of the mass storage changes.


## projects.common.CommonState.MassStorageContentForCurrentRun

Mass storage content for current run

Mass storage content for current run.\n Only counts the files related to the current run (see [RunId](#0_30_0))

Triggered : when the content of the mass storage changes and this content is related to the current run.


## projects.common.CommonState.VideoRecordingTimestamp

Video recording timestamp

Current or last video recording timestamp.\n Timestamp in milliseconds since 00:00:00 UTC on 1 January 1970.\n **Please note that values don't persist after drone reboot**

Triggered : on video recording start and video recording stop or \n after that the date/time of the drone changed.


# projects.common.OverHeat
-----
### Over heat commands

The OverHeat Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SwitchOff](#projectscommonoverheatswitchoff)|0|0x0|Switch off after an overheat|
|[Ventilate](#projectscommonoverheatventilate)|1|0x1|Ventilate after an overheat|
## projects.common.OverHeat.SwitchOff

Switch off after an overheat

Switch off after an overheat.

Triggered : undefined


## projects.common.OverHeat.Ventilate

Ventilate after an overheat

Ventilate after an overheat.

Triggered : undefined


# projects.common.OverHeatState
-----
### Overheat state from product

The OverHeatState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[OverHeatChanged](#projectscommonoverheatstateoverheatchanged)|0|0x0|Overheat|
|[OverHeatRegulationChanged](#projectscommonoverheatstateoverheatregulationchanged)|1|0x1|Overheat regulation type|
## projects.common.OverHeatState.OverHeatChanged

Overheat

Overheat temperature reached.

Triggered : undefined


## projects.common.OverHeatState.OverHeatRegulationChanged

Overheat regulation type

Overheat regulation type.

Triggered : undefined


# projects.common.Controller
-----
### Notify the device about the state of the controller application.

The Controller Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[isPiloting](#projectscommoncontrollerispiloting)|0|0x0|Inform about hud entering|
## projects.common.Controller.isPiloting

Inform about hud entering

Inform about hud entering.\n Tell the drone that the controller enters/leaves the piloting hud.\n On a non_flying products it is used to know when a run begins.

Triggered : undefined


# projects.common.WifiSettings
-----
### Wifi settings commands

The WifiSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[OutdoorSetting](#projectscommonwifisettingsoutdoorsetting)|0|0x0|Set wifi outdoor mode|
## projects.common.WifiSettings.OutdoorSetting

Set wifi outdoor mode

Set wifi indoor/outdoor mode.\n **Please note that you might be disconnected from the product after changing the indoor/outdoor setting as it changes Wifi parameters.**

Triggered : undefined


# projects.common.WifiSettingsState
-----
### Wifi settings state from product

The WifiSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[outdoorSettingsChanged](#projectscommonwifisettingsstateoutdoorsettingschanged)|0|0x0|Wifi outdoor mode|
## projects.common.WifiSettingsState.outdoorSettingsChanged

Wifi outdoor mode

Wifi outdoor mode.

Triggered : by [SetWifiOutdoorMode](#0_9_0).


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
## projects.common.Mavlink.Start

Start a FlightPlan

Start a FlightPlan based on a mavlink file existing on the drone.\n\n Requirements are:\n * Product is calibrated\n * Product should be in outdoor mode\n * Product has fixed its GPS\n

Triggered : undefined


## projects.common.Mavlink.Pause

Pause a FlightPlan

Pause a FlightPlan that was playing.\n To unpause a FlightPlan, see [StartFlightPlan](#0_11_0)\n

Triggered : undefined


## projects.common.Mavlink.Stop

Stop a FlightPlan

Stop a FlightPlan that was playing.\n

Triggered : undefined


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
## projects.common.MavlinkState.MavlinkFilePlayingStateChanged

Playing state of a FlightPlan

Playing state of a FlightPlan.

Triggered : by [StartFlightPlan](#0_11_0), [PauseFlightPlan](#0_11_1) or [StopFlightPlan](#0_11_2).


## projects.common.MavlinkState.MavlinkPlayErrorStateChanged

FlightPlan error

FlightPlan error.

Triggered : by [StartFlightPlan](#0_11_0) if an error occurs.


## projects.common.MavlinkState.MissonItemExecuted

Mission item executed

Mission item has been executed.

Triggered : when a mission item has been executed during a flight plan.


# projects.common.Calibration
-----
### Calibration commands

The Calibration Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MagnetoCalibration](#projectscommoncalibrationmagnetocalibration)|0|0x0|Start/Abort magnetometer calibration|
|[PitotCalibration](#projectscommoncalibrationpitotcalibration)|1|0x1|Sent when a calibration of the pitot is asked or is aborted|
## projects.common.Calibration.MagnetoCalibration

Start/Abort magnetometer calibration

Start or abort magnetometer calibration process.\n

Triggered : undefined


## projects.common.Calibration.PitotCalibration

Sent when a calibration of the pitot is asked or is aborted






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
## projects.common.CalibrationState.MagnetoCalibrationStateChanged

Magneto calib process axis state

Magneto calib process axis state.

Triggered : when the calibration process is started with [StartOrAbortMagnetoCalib](#0_13_0) and each time an axis calibration state changes.


## projects.common.CalibrationState.MagnetoCalibrationRequiredState

Calibration required

Calibration required.

Triggered : when the calibration requirement changes.


## projects.common.CalibrationState.MagnetoCalibrationAxisToCalibrateChanged

Axis to calibrate during calibration process

Axis to calibrate during calibration process.

Triggered : during the calibration process when the axis to calibrate changes.


## projects.common.CalibrationState.MagnetoCalibrationStartedChanged

Calibration process state

Calibration process state.

Triggered : by [StartOrAbortMagnetoCalib](#0_13_0) or when the process ends because it succeeded.


## projects.common.CalibrationState.PitotCalibrationStateChanged

Sent when the state of the pitot calibration has changed






# projects.common.CameraSettingsState
-----
### Status of the camera settings

The CameraSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[CameraSettingsChanged](#projectscommoncamerasettingsstatecamerasettingschanged)|0|0x0|Camera info|
## projects.common.CameraSettingsState.CameraSettingsChanged

Camera info

Camera info.

Triggered : at connection.


# projects.common.GPS
-----
### GPS related commands

The GPS Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerPositionForRun](#projectscommongpscontrollerpositionforrun)|0|0x0|Set the position of a run|
## projects.common.GPS.ControllerPositionForRun

Set the position of a run

Set the position of a run.\n This will let the product know the controller location for the flight/run. The location is typically used to geotag medias.\n Only used on products that have no gps.\n Watch out, this command is not used by BLE products.

Triggered : undefined


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
## projects.common.FlightPlanState.AvailabilityStateChanged

FlightPlan availability

FlightPlan availability.\n Availability is linked to GPS fix, magnetometer calibration, sensor states...

Triggered : on change.


## projects.common.FlightPlanState.ComponentStateListChanged

FlightPlan components state list

FlightPlan components state list.

Triggered : when the state of required components changes.


## projects.common.FlightPlanState.LockStateChanged

FlightPlan lock state

FlightPlan lock state.\n Represents the fact that the controller is able or not to stop or pause a playing FlightPlan

Triggered : when the lock changes.


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
## projects.common.ARLibsVersionsState.ControllerLibARCommandsVersion

Controller libARCommands version






## projects.common.ARLibsVersionsState.SkyControllerLibARCommandsVersion

SkyController libARCommands version






## projects.common.ARLibsVersionsState.DeviceLibARCommandsVersion

Device libARCommands version






# projects.common.FlightPlanEvent
-----
### FlightPlan Event commands

The FlightPlanEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[StartingErrorEvent](#projectscommonflightplaneventstartingerrorevent)|0|0x0|FlightPlan start error|
|[SpeedBridleEvent](#projectscommonflightplaneventspeedbridleevent)|1|0x1|FlightPlan speed clamping|
## projects.common.FlightPlanEvent.StartingErrorEvent

FlightPlan start error

FlightPlan start error.\n\n **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : on an error after a [StartFlightPlan](#0_11_0).


## projects.common.FlightPlanEvent.SpeedBridleEvent

FlightPlan speed clamping

FlightPlan speed clamping.\n Sent when a speed specified in the FlightPlan file is considered too high by the drone.\n\n **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : on an speed related clamping after a [StartFlightPlan](#0_11_0).


# projects.common.Audio
-----
### Audio_related commands.

The Audio Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerReadyForStreaming](#projectscommonaudiocontrollerreadyforstreaming)|0|0x0|Set audio stream direction|
## projects.common.Audio.ControllerReadyForStreaming

Set audio stream direction

Set audio stream direction.

Triggered : undefined


# projects.common.AudioState
-----
### Audio_related state updates.

The AudioState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AudioStreamingRunning](#projectscommonaudiostateaudiostreamingrunning)|0|0x0|Audio stream direction|
## projects.common.AudioState.AudioStreamingRunning

Audio stream direction

Audio stream direction.

Triggered : by [SetAudioStreamDirection](#0_20_0).


# projects.common.Headlights
-----
### Controls the headlight LEDs of the Evo variants.

The Headlights Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[intensity](#projectscommonheadlightsintensity)|0|0x0|Set LEDs intensity|
## projects.common.Headlights.intensity

Set LEDs intensity

Set lighting LEDs intensity.

Triggered : undefined


# projects.common.HeadlightsState
-----
### Get information about the state of the Evo variants' LEDs.

The HeadlightsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[intensityChanged](#projectscommonheadlightsstateintensitychanged)|0|0x0|LEDs intensity|
## projects.common.HeadlightsState.intensityChanged

LEDs intensity

Lighting LEDs intensity.

Triggered : by [SetLedsIntensity](#0_22_0).


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
## projects.common.Animations.StartAnimation

Start an animation

Start a paramaterless animation.\n List of available animations can be retrieved from [AnimationsStateList](#0_25_0).

Triggered : undefined


## projects.common.Animations.StopAnimation

Stop an animation

Stop a paramaterless animation.\n List of running animations can be retrieved from [AnimationsStateList](#0_25_0).

Triggered : undefined


## projects.common.Animations.StopAllAnimations

Stop all animations

Stop all running paramaterless animations.\n List of running animations can be retrieved from [AnimationsStateList](#0_25_0).

Triggered : undefined


# projects.common.AnimationsState
-----
### Animations_related notification/feedback commands.

The AnimationsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[List](#projectscommonanimationsstatelist)|0|0x0|Animation state list|
## projects.common.AnimationsState.List

Animation state list

Paramaterless animations state list.

Triggered : when the list of available animations changes and also when an animation state changes (can be triggered by [StartAnim](#0_24_0), [StopAnim](#0_24_1) or [StopAllAnims](#0_24_2).


# projects.common.Accessory
-----
### Accessories_related commands.

The Accessory Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Config](#projectscommonaccessoryconfig)|0|0x0|Declare an accessory|
## projects.common.Accessory.Config

Declare an accessory

Declare an accessory.\n You can choose the accessory between all accessible for this product.\n You can get this list through event [SupportedAccessories](#0_27_0).\n\n You can only set the accessory when the modification is enabled.\n You can know if it possible with the event [AccessoryDeclarationAvailability](#0_27_2).

Triggered : undefined


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
## projects.common.AccessoryState.SupportedAccessoriesListChanged

Supported accessories list

Supported accessories list.

Triggered : at connection.


## projects.common.AccessoryState.AccessoryConfigChanged

Accessory config

Accessory config.

Triggered : by [DeclareAccessory](#0_26_0).


## projects.common.AccessoryState.AccessoryConfigModificationEnabled

Accessory declaration availability

Availability to declare or not an accessory.

Triggered : when the availability changes.


# projects.common.Charger
-----
### Commands sent by the controller to set charger parameters.

The Charger Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SetMaxChargeRate](#projectscommonchargersetmaxchargerate)|0|0x0|Set max charge rate|
## projects.common.Charger.SetMaxChargeRate

Set max charge rate

The product will inform itself the controller about its charging type (see [ChargingInfoChanged](#0_29_3)).

Triggered : undefined


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
## projects.common.ChargerState.MaxChargeRateChanged

Max charge rate

Max charge rate.

Triggered : undefined


## projects.common.ChargerState.CurrentChargeStateChanged

Current charge state

Current charge state.

Triggered : undefined


## projects.common.ChargerState.LastChargeRateChanged

Last charge rate

Last charge rate.

Triggered : undefined


## projects.common.ChargerState.ChargingInfo

Charging information

Charging information.

Triggered : when the product is charging or when the charging state changes.


# projects.common.RunState
-----
### Commands sent by the drone to inform about the run or flight state

The RunState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[RunIdChanged](#projectscommonrunstaterunidchanged)|0|0x0|Current run id|
## projects.common.RunState.RunIdChanged

Current run id

Current run id.\n A run id is uniquely identifying a run or a flight.\n For each run is generated on the drone a file which can be used by Academy to sum up the run.\n Also, each medias taken during a run has a filename containing the run id.

Triggered : when the drone generates a new run id (generally right after a take off).

