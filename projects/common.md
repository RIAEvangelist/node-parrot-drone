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
## projects.common.Network.Disconnect Command

Signals the remote that the host will disconnect

Signals the remote that the host will disconnect.


Result : None
Example sending the ` Disconnect ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Network;

//build a message requesting all settings
const DisconnectMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Disconnect
);

drone.message.send(DisconnectMessage);

```


# projects.common.NetworkEvent
-----
### Network Event from product

The NetworkEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Disconnection](#projectscommonnetworkeventdisconnection)|0|0x0|Drone will disconnect|
## projects.common.NetworkEvent.Disconnection Event

Drone will disconnect

Drone will disconnect.
 This event is mainly triggered when the user presses on the power button of the product.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : mainly when the user presses the power button of the drone.

Example binding to listen for the ` Disconnection ` event from the drone :

```javascript

drone.on(
  'Disconnection',
  function(data){
    console.log(data);
  }
)

```


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
## projects.common.Settings.AllSettings Command

Ask for all settings

Ask for all settings.

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The product will trigger all settings events (such as [CameraSettings](#0_15_0), or product specific settings as the [MaxAltitude](#1_6_0) for the Bebop).
 Then, it will trigger [AllSettingsEnd](#0_3_0).
Example sending the ` AllSettings ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Settings;

//build a message requesting all settings
const AllSettingsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AllSettings
);

drone.message.send(AllSettingsMessage);

```


## projects.common.Settings.Reset Command

Reset all settings

Reset all settings.

Result : It will trigger [ResetChanged](#0_3_1).
 Then, the product will trigger all settings events (such as [CameraSettings](#0_15_0), or product specific settings as the [MaxAltitude](#1_6_0) for the Bebop) with factory values.
Example sending the ` Reset ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Settings;

//build a message requesting all settings
const ResetMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Reset
);

drone.message.send(ResetMessage);

```


## projects.common.Settings.ProductName Command

Set product name

Set the product name.
 It also sets the name of the SSID for Wifi products and advertisement name for BLE products (changed after a reboot of the product).

Result : Name is changed.
 Then, it will trigger [NameChanged](#0_3_2).
Example sending the ` ProductName ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Settings;

//build a message requesting all settings
const ProductNameMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ProductName
);

drone.message.send(ProductNameMessage);

```


## projects.common.Settings.Country Command

Set the country

Set the country for Wifi products.
 This can modify Wifi band and/or channel.
 **Please note that you might be disconnected from the product after changing the country as it changes Wifi parameters.**

Result : The country is set.
 Then, it will trigger [CountryChanged](#0_3_6).
Example sending the ` Country ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Settings;

//build a message requesting all settings
const CountryMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Country
);

drone.message.send(CountryMessage);

```


## projects.common.Settings.AutoCountry Command

Enable auto_country

Enable auto_country.
 If auto_country is set, the drone will guess its Wifi country by itself by checking other Wifi country around it.
 **Please note that you might be disconnected from the product after changing the country as it changes Wifi parameters.**

Result : The auto_country of the product is changed.
 Then, it will trigger [AutoCountryChanged](#0_3_7) and [CountryChanged](#0_3_6).
Example sending the ` AutoCountry ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Settings;

//build a message requesting all settings
const AutoCountryMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AutoCountry
);

drone.message.send(AutoCountryMessage);

```


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
## projects.common.SettingsState.AllSettingsChanged Event

All settings have been sent

All settings have been sent.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : when all settings values have been sent.

Example binding to listen for the ` AllSettingsChanged ` event from the drone :

```javascript

drone.on(
  'AllSettingsChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.SettingsState.ResetChanged Event

All settings have been reset

All settings have been reset.

Triggered : by [ResetSettings](#0_2_1).

Example binding to listen for the ` ResetChanged ` event from the drone :

```javascript

drone.on(
  'ResetChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.SettingsState.ProductNameChanged Event

Product name changed

Product name changed.

Triggered : by [SetProductName](#0_2_2).

Example binding to listen for the ` ProductNameChanged ` event from the drone :

```javascript

drone.on(
  'ProductNameChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.SettingsState.ProductVersionChanged Event

Product version

Product version.

Triggered : during the connection process.

Example binding to listen for the ` ProductVersionChanged ` event from the drone :

```javascript

drone.on(
  'ProductVersionChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.SettingsState.ProductSerialHighChanged Event

Product serial (1st part)

Product serial (1st part).

Triggered : during the connection process.

Example binding to listen for the ` ProductSerialHighChanged ` event from the drone :

```javascript

drone.on(
  'ProductSerialHighChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.SettingsState.ProductSerialLowChanged Event

Product serial (2nd part)

Product serial (2nd part).

Triggered : during the connection process.

Example binding to listen for the ` ProductSerialLowChanged ` event from the drone :

```javascript

drone.on(
  'ProductSerialLowChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.SettingsState.CountryChanged Event

Country changed

Country changed.

Triggered : by [SetCountry](#0_2_3).

Example binding to listen for the ` CountryChanged ` event from the drone :

```javascript

drone.on(
  'CountryChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.SettingsState.AutoCountryChanged Event

Auto_country changed

Auto_country changed.

Triggered : by [SetAutoCountry](#0_2_4).

Example binding to listen for the ` AutoCountryChanged ` event from the drone :

```javascript

drone.on(
  'AutoCountryChanged',
  function(data){
    console.log(data);
  }
)

```


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
## projects.common.Common.AllStates Command

Ask for all states

Ask for all states.

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The product will trigger all states events (such as [FlyingState](#1_4_1) for the Bebop).
 Then, it will trigger [AllStatesEnd](#0_5_0).
Example sending the ` AllStates ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Common;

//build a message requesting all settings
const AllStatesMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.AllStates
);

drone.message.send(AllStatesMessage);

```


## projects.common.Common.CurrentDate Command

Set the date

Set the date.
 This date is taken by the drone as its own date.
 So medias and other files will be dated from this date

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The date of the product is set.
 Then, it will trigger [DateChanged](#0_5_4).
Example sending the ` CurrentDate ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Common;

//build a message requesting all settings
const CurrentDateMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CurrentDate
);

drone.message.send(CurrentDateMessage);

```


## projects.common.Common.CurrentTime Command

Set the time

Set the time.
 This time is taken by the drone as its own time.
 So medias and other files will be dated from this time

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The time of the product is set.
 Then, it will trigger [TimeChanged](#0_5_5).
Example sending the ` CurrentTime ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Common;

//build a message requesting all settings
const CurrentTimeMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CurrentTime
);

drone.message.send(CurrentTimeMessage);

```


## projects.common.Common.Reboot Command

Reboot

Reboot the product.
 The product will accept this command only if is not flying.

Result : The product will reboot if it can.
Example sending the ` Reboot ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Common;

//build a message requesting all settings
const RebootMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Reboot
);

drone.message.send(RebootMessage);

```


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
## projects.common.CommonState.AllStatesChanged Event

All states have been sent

All states have been sent.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : when all states values have been sent.

Example binding to listen for the ` AllStatesChanged ` event from the drone :

```javascript

drone.on(
  'AllStatesChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.BatteryStateChanged Event

Battery state

Battery state.

Triggered : when the battery level changes.

Example binding to listen for the ` BatteryStateChanged ` event from the drone :

```javascript

drone.on(
  'BatteryStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.MassStorageStateListChanged Event

Mass storage state list

Mass storage state list.

Triggered : when a mass storage is inserted or ejected.

Example binding to listen for the ` MassStorageStateListChanged ` event from the drone :

```javascript

drone.on(
  'MassStorageStateListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.MassStorageInfoStateListChanged Event

Mass storage info state list

Mass storage info state list.

Triggered : when a mass storage info changes.

Example binding to listen for the ` MassStorageInfoStateListChanged ` event from the drone :

```javascript

drone.on(
  'MassStorageInfoStateListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.CurrentDateChanged Event

Date changed

Date changed.
 Corresponds to the latest date set on the drone.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : by [SetDate](#0_4_1).

Example binding to listen for the ` CurrentDateChanged ` event from the drone :

```javascript

drone.on(
  'CurrentDateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.CurrentTimeChanged Event

Time changed

Time changed.
 Corresponds to the latest time set on the drone.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : by [SetTime](#0_4_2).

Example binding to listen for the ` CurrentTimeChanged ` event from the drone :

```javascript

drone.on(
  'CurrentTimeChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.MassStorageInfoRemainingListChanged Command

Mass storage remaining data list

Mass storage remaining data list.

Result : undefined
Example sending the ` MassStorageInfoRemainingListChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.CommonState;

//build a message requesting all settings
const MassStorageInfoRemainingListChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MassStorageInfoRemainingListChanged
);

drone.message.send(MassStorageInfoRemainingListChangedMessage);

```


## projects.common.CommonState.WifiSignalChanged Event

Rssi changed

Rssi (Wifi Signal between controller and product) changed.

Triggered : regularly.

Example binding to listen for the ` WifiSignalChanged ` event from the drone :

```javascript

drone.on(
  'WifiSignalChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.SensorsStatesListChanged Event

Sensors state list

Sensors state list.

Triggered : at connection and when a sensor state changes.

Example binding to listen for the ` SensorsStatesListChanged ` event from the drone :

```javascript

drone.on(
  'SensorsStatesListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.ProductModel Event

Product sub_model

Product sub_model.
 This can be used to customize the UI depending on the product.

Triggered : at connection.

Example binding to listen for the ` ProductModel ` event from the drone :

```javascript

drone.on(
  'ProductModel',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.CountryListKnown Command

Country list

List of countries known by the drone.

Result : undefined
Example sending the ` CountryListKnown ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.CommonState;

//build a message requesting all settings
const CountryListKnownMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CountryListKnown
);

drone.message.send(CountryListKnownMessage);

```


## projects.common.CommonState.DeprecatedMassStorageContentChanged Command

Mass storage content changed

Mass storage content changed.

Result : undefined
Example sending the ` DeprecatedMassStorageContentChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.CommonState;

//build a message requesting all settings
const DeprecatedMassStorageContentChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.DeprecatedMassStorageContentChanged
);

drone.message.send(DeprecatedMassStorageContentChangedMessage);

```


## projects.common.CommonState.MassStorageContent Event

Mass storage content

Mass storage content.

Triggered : when the content of the mass storage changes.

Example binding to listen for the ` MassStorageContent ` event from the drone :

```javascript

drone.on(
  'MassStorageContent',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.MassStorageContentForCurrentRun Event

Mass storage content for current run

Mass storage content for current run.
 Only counts the files related to the current run (see [RunId](#0_30_0))

Triggered : when the content of the mass storage changes and this content is related to the current run.

Example binding to listen for the ` MassStorageContentForCurrentRun ` event from the drone :

```javascript

drone.on(
  'MassStorageContentForCurrentRun',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CommonState.VideoRecordingTimestamp Event

Video recording timestamp

Current or last video recording timestamp.
 Timestamp in milliseconds since 00:00:00 UTC on 1 January 1970.
 **Please note that values don't persist after drone reboot**

Triggered : on video recording start and video recording stop or 
 after that the date/time of the drone changed.

Example binding to listen for the ` VideoRecordingTimestamp ` event from the drone :

```javascript

drone.on(
  'VideoRecordingTimestamp',
  function(data){
    console.log(data);
  }
)

```


# projects.common.OverHeat
-----
### Over heat commands

The OverHeat Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SwitchOff](#projectscommonoverheatswitchoff)|0|0x0|Switch off after an overheat|
|[Ventilate](#projectscommonoverheatventilate)|1|0x1|Ventilate after an overheat|
## projects.common.OverHeat.SwitchOff Command

Switch off after an overheat

Switch off after an overheat.

Result : None
Example sending the ` SwitchOff ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.OverHeat;

//build a message requesting all settings
const SwitchOffMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SwitchOff
);

drone.message.send(SwitchOffMessage);

```


## projects.common.OverHeat.Ventilate Command

Ventilate after an overheat

Ventilate after an overheat.

Result : None
Example sending the ` Ventilate ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.OverHeat;

//build a message requesting all settings
const VentilateMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Ventilate
);

drone.message.send(VentilateMessage);

```


# projects.common.OverHeatState
-----
### Overheat state from product

The OverHeatState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[OverHeatChanged](#projectscommonoverheatstateoverheatchanged)|0|0x0|Overheat|
|[OverHeatRegulationChanged](#projectscommonoverheatstateoverheatregulationchanged)|1|0x1|Overheat regulation type|
## projects.common.OverHeatState.OverHeatChanged Command

Overheat

Overheat temperature reached.

Result : undefined
Example sending the ` OverHeatChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.OverHeatState;

//build a message requesting all settings
const OverHeatChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.OverHeatChanged
);

drone.message.send(OverHeatChangedMessage);

```


## projects.common.OverHeatState.OverHeatRegulationChanged Command

Overheat regulation type

Overheat regulation type.

Result : undefined
Example sending the ` OverHeatRegulationChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.OverHeatState;

//build a message requesting all settings
const OverHeatRegulationChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.OverHeatRegulationChanged
);

drone.message.send(OverHeatRegulationChangedMessage);

```


# projects.common.Controller
-----
### Notify the device about the state of the controller application.

The Controller Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[isPiloting](#projectscommoncontrollerispiloting)|0|0x0|Inform about hud entering|
## projects.common.Controller.isPiloting Command

Inform about hud entering

Inform about hud entering.
 Tell the drone that the controller enters/leaves the piloting hud.
 On a non_flying products it is used to know when a run begins.

Result : If yes, the product will begin a new session (so it should send a new [runId](#0_30_0)).
 Also, on the JumpingSumos, if the video is in autorecord mode, it will start recording.
Example sending the ` isPiloting ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Controller;

//build a message requesting all settings
const isPilotingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.isPiloting
);

drone.message.send(isPilotingMessage);

```


# projects.common.WifiSettings
-----
### Wifi settings commands

The WifiSettings Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[OutdoorSetting](#projectscommonwifisettingsoutdoorsetting)|0|0x0|Set wifi outdoor mode|
## projects.common.WifiSettings.OutdoorSetting Command

Set wifi outdoor mode

Set wifi indoor/outdoor mode.
 **Please note that you might be disconnected from the product after changing the indoor/outdoor setting as it changes Wifi parameters.**

Result : The product change its indoor/outdoor wifi settings.
 Then, it will trigger [WifiOutdoorMode](#0_10_0).
Example sending the ` OutdoorSetting ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.WifiSettings;

//build a message requesting all settings
const OutdoorSettingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.OutdoorSetting
);

drone.message.send(OutdoorSettingMessage);

```


# projects.common.WifiSettingsState
-----
### Wifi settings state from product

The WifiSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[outdoorSettingsChanged](#projectscommonwifisettingsstateoutdoorsettingschanged)|0|0x0|Wifi outdoor mode|
## projects.common.WifiSettingsState.outdoorSettingsChanged Event

Wifi outdoor mode

Wifi outdoor mode.

Triggered : by [SetWifiOutdoorMode](#0_9_0).

Example binding to listen for the ` outdoorSettingsChanged ` event from the drone :

```javascript

drone.on(
  'outdoorSettingsChanged',
  function(data){
    console.log(data);
  }
)

```


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
## projects.common.Mavlink.Start Command

Start a FlightPlan

Start a FlightPlan based on a mavlink file existing on the drone.

 Requirements are:
 * Product is calibrated
 * Product should be in outdoor mode
 * Product has fixed its GPS


Result : If the FlightPlan has been started, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to *playing*.
 Otherwise, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to stopped and event [MavlinkPlayErrorStateChanged](#0_12_1) is triggered with an explanation of the error.
Example sending the ` Start ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Mavlink;

//build a message requesting all settings
const StartMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Start
);

drone.message.send(StartMessage);

```


## projects.common.Mavlink.Pause Command

Pause a FlightPlan

Pause a FlightPlan that was playing.
 To unpause a FlightPlan, see [StartFlightPlan](#0_11_0)


Result : The currently playing FlightPlan will be paused. Then, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to the current state of the FlightPlan (should be *paused* if everything went well).
Example sending the ` Pause ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Mavlink;

//build a message requesting all settings
const PauseMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Pause
);

drone.message.send(PauseMessage);

```


## projects.common.Mavlink.Stop Command

Stop a FlightPlan

Stop a FlightPlan that was playing.


Result : The currently playing FlightPlan will be stopped. Then, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to the current state of the FlightPlan (should be *stopped* if everything went well).
Example sending the ` Stop ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Mavlink;

//build a message requesting all settings
const StopMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Stop
);

drone.message.send(StopMessage);

```


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
## projects.common.MavlinkState.MavlinkFilePlayingStateChanged Event

Playing state of a FlightPlan

Playing state of a FlightPlan.

Triggered : by [StartFlightPlan](#0_11_0), [PauseFlightPlan](#0_11_1) or [StopFlightPlan](#0_11_2).

Example binding to listen for the ` MavlinkFilePlayingStateChanged ` event from the drone :

```javascript

drone.on(
  'MavlinkFilePlayingStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.MavlinkState.MavlinkPlayErrorStateChanged Event

FlightPlan error

FlightPlan error.

Triggered : by [StartFlightPlan](#0_11_0) if an error occurs.

Example binding to listen for the ` MavlinkPlayErrorStateChanged ` event from the drone :

```javascript

drone.on(
  'MavlinkPlayErrorStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.MavlinkState.MissonItemExecuted Event

Mission item executed

Mission item has been executed.

Triggered : when a mission item has been executed during a flight plan.

Example binding to listen for the ` MissonItemExecuted ` event from the drone :

```javascript

drone.on(
  'MissonItemExecuted',
  function(data){
    console.log(data);
  }
)

```


# projects.common.Calibration
-----
### Calibration commands

The Calibration Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[MagnetoCalibration](#projectscommoncalibrationmagnetocalibration)|0|0x0|Start/Abort magnetometer calibration|
|[PitotCalibration](#projectscommoncalibrationpitotcalibration)|1|0x1|Sent when a calibration of the pitot is asked or is aborted|
## projects.common.Calibration.MagnetoCalibration Command

Start/Abort magnetometer calibration

Start or abort magnetometer calibration process.


Result : The magnetometer calibration process is started or aborted. Then, event [MagnetoCalibrationStartedChanged](#0_14_3) is triggered.
 If started, event [MagnetoCalibrationStateChanged](#0_14_3) is triggered with the current calibration state: a list of all axis and their calibration states.\n It will also trigger [MagnetoCalibrationAxisToCalibrateChanged](#0_14_2), that will inform the controller about the current axis to calibrate.
Example sending the ` MagnetoCalibration ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Calibration;

//build a message requesting all settings
const MagnetoCalibrationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MagnetoCalibration
);

drone.message.send(MagnetoCalibrationMessage);

```


## projects.common.Calibration.PitotCalibration 

Sent when a calibration of the pitot is asked or is aborted




Example sending the ` PitotCalibration ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Calibration;

//build a message requesting all settings
const PitotCalibrationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PitotCalibration
);

drone.message.send(PitotCalibrationMessage);

```


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
## projects.common.CalibrationState.MagnetoCalibrationStateChanged Event

Magneto calib process axis state

Magneto calib process axis state.

Triggered : when the calibration process is started with [StartOrAbortMagnetoCalib](#0_13_0) and each time an axis calibration state changes.

Example binding to listen for the ` MagnetoCalibrationStateChanged ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CalibrationState.MagnetoCalibrationRequiredState Event

Calibration required

Calibration required.

Triggered : when the calibration requirement changes.

Example binding to listen for the ` MagnetoCalibrationRequiredState ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationRequiredState',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CalibrationState.MagnetoCalibrationAxisToCalibrateChanged Event

Axis to calibrate during calibration process

Axis to calibrate during calibration process.

Triggered : during the calibration process when the axis to calibrate changes.

Example binding to listen for the ` MagnetoCalibrationAxisToCalibrateChanged ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationAxisToCalibrateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CalibrationState.MagnetoCalibrationStartedChanged Event

Calibration process state

Calibration process state.

Triggered : by [StartOrAbortMagnetoCalib](#0_13_0) or when the process ends because it succeeded.

Example binding to listen for the ` MagnetoCalibrationStartedChanged ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationStartedChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.CalibrationState.PitotCalibrationStateChanged 

Sent when the state of the pitot calibration has changed




Example sending the ` PitotCalibrationStateChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.CalibrationState;

//build a message requesting all settings
const PitotCalibrationStateChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.PitotCalibrationStateChanged
);

drone.message.send(PitotCalibrationStateChangedMessage);

```


# projects.common.CameraSettingsState
-----
### Status of the camera settings

The CameraSettingsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[CameraSettingsChanged](#projectscommoncamerasettingsstatecamerasettingschanged)|0|0x0|Camera info|
## projects.common.CameraSettingsState.CameraSettingsChanged Event

Camera info

Camera info.

Triggered : at connection.

Example binding to listen for the ` CameraSettingsChanged ` event from the drone :

```javascript

drone.on(
  'CameraSettingsChanged',
  function(data){
    console.log(data);
  }
)

```


# projects.common.GPS
-----
### GPS related commands

The GPS Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerPositionForRun](#projectscommongpscontrollerpositionforrun)|0|0x0|Set the position of a run|
## projects.common.GPS.ControllerPositionForRun Command

Set the position of a run

Set the position of a run.
 This will let the product know the controller location for the flight/run. The location is typically used to geotag medias.
 Only used on products that have no gps.
 Watch out, this command is not used by BLE products.

Result : The position is set.
Example sending the ` ControllerPositionForRun ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.GPS;

//build a message requesting all settings
const ControllerPositionForRunMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ControllerPositionForRun
);

drone.message.send(ControllerPositionForRunMessage);

```


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
## projects.common.FlightPlanState.AvailabilityStateChanged Event

FlightPlan availability

FlightPlan availability.
 Availability is linked to GPS fix, magnetometer calibration, sensor states...

Triggered : on change.

Example binding to listen for the ` AvailabilityStateChanged ` event from the drone :

```javascript

drone.on(
  'AvailabilityStateChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.FlightPlanState.ComponentStateListChanged Event

FlightPlan components state list

FlightPlan components state list.

Triggered : when the state of required components changes.

Example binding to listen for the ` ComponentStateListChanged ` event from the drone :

```javascript

drone.on(
  'ComponentStateListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.FlightPlanState.LockStateChanged Event

FlightPlan lock state

FlightPlan lock state.
 Represents the fact that the controller is able or not to stop or pause a playing FlightPlan

Triggered : when the lock changes.

Example binding to listen for the ` LockStateChanged ` event from the drone :

```javascript

drone.on(
  'LockStateChanged',
  function(data){
    console.log(data);
  }
)

```


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




Example sending the ` ControllerLibARCommandsVersion ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.ARLibsVersionsState;

//build a message requesting all settings
const ControllerLibARCommandsVersionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ControllerLibARCommandsVersion
);

drone.message.send(ControllerLibARCommandsVersionMessage);

```


## projects.common.ARLibsVersionsState.SkyControllerLibARCommandsVersion 

SkyController libARCommands version




Example sending the ` SkyControllerLibARCommandsVersion ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.ARLibsVersionsState;

//build a message requesting all settings
const SkyControllerLibARCommandsVersionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SkyControllerLibARCommandsVersion
);

drone.message.send(SkyControllerLibARCommandsVersionMessage);

```


## projects.common.ARLibsVersionsState.DeviceLibARCommandsVersion 

Device libARCommands version




Example sending the ` DeviceLibARCommandsVersion ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.ARLibsVersionsState;

//build a message requesting all settings
const DeviceLibARCommandsVersionMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.DeviceLibARCommandsVersion
);

drone.message.send(DeviceLibARCommandsVersionMessage);

```


# projects.common.FlightPlanEvent
-----
### FlightPlan Event commands

The FlightPlanEvent Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[StartingErrorEvent](#projectscommonflightplaneventstartingerrorevent)|0|0x0|FlightPlan start error|
|[SpeedBridleEvent](#projectscommonflightplaneventspeedbridleevent)|1|0x1|FlightPlan speed clamping|
## projects.common.FlightPlanEvent.StartingErrorEvent Event

FlightPlan start error

FlightPlan start error.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : on an error after a [StartFlightPlan](#0_11_0).

Example binding to listen for the ` StartingErrorEvent ` event from the drone :

```javascript

drone.on(
  'StartingErrorEvent',
  function(data){
    console.log(data);
  }
)

```


## projects.common.FlightPlanEvent.SpeedBridleEvent Event

FlightPlan speed clamping

FlightPlan speed clamping.
 Sent when a speed specified in the FlightPlan file is considered too high by the drone.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : on an speed related clamping after a [StartFlightPlan](#0_11_0).

Example binding to listen for the ` SpeedBridleEvent ` event from the drone :

```javascript

drone.on(
  'SpeedBridleEvent',
  function(data){
    console.log(data);
  }
)

```


# projects.common.Audio
-----
### Audio_related commands.

The Audio Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[ControllerReadyForStreaming](#projectscommonaudiocontrollerreadyforstreaming)|0|0x0|Set audio stream direction|
## projects.common.Audio.ControllerReadyForStreaming Command

Set audio stream direction

Set audio stream direction.

Result : The audio stream direction is set.
 Then, event [AudioStreamDirection](#0_21_0) is triggered.
Example sending the ` ControllerReadyForStreaming ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Audio;

//build a message requesting all settings
const ControllerReadyForStreamingMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.ControllerReadyForStreaming
);

drone.message.send(ControllerReadyForStreamingMessage);

```


# projects.common.AudioState
-----
### Audio_related state updates.

The AudioState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[AudioStreamingRunning](#projectscommonaudiostateaudiostreamingrunning)|0|0x0|Audio stream direction|
## projects.common.AudioState.AudioStreamingRunning Event

Audio stream direction

Audio stream direction.

Triggered : by [SetAudioStreamDirection](#0_20_0).

Example binding to listen for the ` AudioStreamingRunning ` event from the drone :

```javascript

drone.on(
  'AudioStreamingRunning',
  function(data){
    console.log(data);
  }
)

```


# projects.common.Headlights
-----
### Controls the headlight LEDs of the Evo variants.

The Headlights Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[intensity](#projectscommonheadlightsintensity)|0|0x0|Set LEDs intensity|
## projects.common.Headlights.intensity Command

Set LEDs intensity

Set lighting LEDs intensity.

Result : The intensity of the LEDs is changed.
 Then, event [LedIntensity](#0_23_0) is triggered.
Example sending the ` intensity ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Headlights;

//build a message requesting all settings
const intensityMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.intensity
);

drone.message.send(intensityMessage);

```


# projects.common.HeadlightsState
-----
### Get information about the state of the Evo variants' LEDs.

The HeadlightsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[intensityChanged](#projectscommonheadlightsstateintensitychanged)|0|0x0|LEDs intensity|
## projects.common.HeadlightsState.intensityChanged Event

LEDs intensity

Lighting LEDs intensity.

Triggered : by [SetLedsIntensity](#0_22_0).

Example binding to listen for the ` intensityChanged ` event from the drone :

```javascript

drone.on(
  'intensityChanged',
  function(data){
    console.log(data);
  }
)

```


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
## projects.common.Animations.StartAnimation Command

Start an animation

Start a paramaterless animation.
 List of available animations can be retrieved from [AnimationsStateList](#0_25_0).

Result : If possible, the product starts the requested animation. Then, event [AnimationsStateList](#0_25_0) is triggered.
Example sending the ` StartAnimation ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Animations;

//build a message requesting all settings
const StartAnimationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.StartAnimation
);

drone.message.send(StartAnimationMessage);

```


## projects.common.Animations.StopAnimation Command

Stop an animation

Stop a paramaterless animation.
 List of running animations can be retrieved from [AnimationsStateList](#0_25_0).

Result : If the requested animation was running, it will be stopped.
 Then, event [AnimationsStateList](#0_25_0) is triggered.
Example sending the ` StopAnimation ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Animations;

//build a message requesting all settings
const StopAnimationMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.StopAnimation
);

drone.message.send(StopAnimationMessage);

```


## projects.common.Animations.StopAllAnimations Command

Stop all animations

Stop all running paramaterless animations.
 List of running animations can be retrieved from [AnimationsStateList](#0_25_0).

Result : All running animations are stopped.
 Then, event [AnimationsStateList](#0_25_0) is triggered.
Example sending the ` StopAllAnimations ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Animations;

//build a message requesting all settings
const StopAllAnimationsMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.StopAllAnimations
);

drone.message.send(StopAllAnimationsMessage);

```


# projects.common.AnimationsState
-----
### Animations_related notification/feedback commands.

The AnimationsState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[List](#projectscommonanimationsstatelist)|0|0x0|Animation state list|
## projects.common.AnimationsState.List Event

Animation state list

Paramaterless animations state list.

Triggered : when the list of available animations changes and also when an animation state changes (can be triggered by [StartAnim](#0_24_0), [StopAnim](#0_24_1) or [StopAllAnims](#0_24_2).

Example binding to listen for the ` List ` event from the drone :

```javascript

drone.on(
  'List',
  function(data){
    console.log(data);
  }
)

```


# projects.common.Accessory
-----
### Accessories_related commands.

The Accessory Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[Config](#projectscommonaccessoryconfig)|0|0x0|Declare an accessory|
## projects.common.Accessory.Config Command

Declare an accessory

Declare an accessory.
 You can choose the accessory between all accessible for this product.
 You can get this list through event [SupportedAccessories](#0_27_0).

 You can only set the accessory when the modification is enabled.
 You can know if it possible with the event [AccessoryDeclarationAvailability](#0_27_2).

Result : The product knows which accessory it is wearing.
 Then, event [AccessoryConfigChanged](#0_27_1) is triggered.
Example sending the ` Config ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Accessory;

//build a message requesting all settings
const ConfigMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.Config
);

drone.message.send(ConfigMessage);

```


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
## projects.common.AccessoryState.SupportedAccessoriesListChanged Event

Supported accessories list

Supported accessories list.

Triggered : at connection.

Example binding to listen for the ` SupportedAccessoriesListChanged ` event from the drone :

```javascript

drone.on(
  'SupportedAccessoriesListChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.AccessoryState.AccessoryConfigChanged Event

Accessory config

Accessory config.

Triggered : by [DeclareAccessory](#0_26_0).

Example binding to listen for the ` AccessoryConfigChanged ` event from the drone :

```javascript

drone.on(
  'AccessoryConfigChanged',
  function(data){
    console.log(data);
  }
)

```


## projects.common.AccessoryState.AccessoryConfigModificationEnabled Event

Accessory declaration availability

Availability to declare or not an accessory.

Triggered : when the availability changes.

Example binding to listen for the ` AccessoryConfigModificationEnabled ` event from the drone :

```javascript

drone.on(
  'AccessoryConfigModificationEnabled',
  function(data){
    console.log(data);
  }
)

```


# projects.common.Charger
-----
### Commands sent by the controller to set charger parameters.

The Charger Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[SetMaxChargeRate](#projectscommonchargersetmaxchargerate)|0|0x0|Set max charge rate|
## projects.common.Charger.SetMaxChargeRate Command

Set max charge rate

The product will inform itself the controller about its charging type (see [ChargingInfoChanged](#0_29_3)).

Result : None.
Example sending the ` SetMaxChargeRate ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.Charger;

//build a message requesting all settings
const SetMaxChargeRateMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.SetMaxChargeRate
);

drone.message.send(SetMaxChargeRateMessage);

```


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
## projects.common.ChargerState.MaxChargeRateChanged Command

Max charge rate

Max charge rate.

Result : undefined
Example sending the ` MaxChargeRateChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.ChargerState;

//build a message requesting all settings
const MaxChargeRateChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.MaxChargeRateChanged
);

drone.message.send(MaxChargeRateChangedMessage);

```


## projects.common.ChargerState.CurrentChargeStateChanged Command

Current charge state

Current charge state.

Result : undefined
Example sending the ` CurrentChargeStateChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.ChargerState;

//build a message requesting all settings
const CurrentChargeStateChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.CurrentChargeStateChanged
);

drone.message.send(CurrentChargeStateChangedMessage);

```


## projects.common.ChargerState.LastChargeRateChanged Command

Last charge rate

Last charge rate.

Result : undefined
Example sending the ` LastChargeRateChanged ` command to your parrot drone :

```javascript

const project=drone.projects.common;
const commandClass=project.ChargerState;

//build a message requesting all settings
const LastChargeRateChangedMessage=drone.message.build(
  project.id,
  commandClass.id,
  commandClass.LastChargeRateChanged
);

drone.message.send(LastChargeRateChangedMessage);

```


## projects.common.ChargerState.ChargingInfo Event

Charging information

Charging information.

Triggered : when the product is charging or when the charging state changes.

Example binding to listen for the ` ChargingInfo ` event from the drone :

```javascript

drone.on(
  'ChargingInfo',
  function(data){
    console.log(data);
  }
)

```


# projects.common.RunState
-----
### Commands sent by the drone to inform about the run or flight state

The RunState Class contains the following commands.
All hex IDs are included as well incase you need them for debugging or extending the module.

| Command Name | ID | Hex ID | Description |
|--------------|----|--------|-------------|
|[RunIdChanged](#projectscommonrunstaterunidchanged)|0|0x0|Current run id|
## projects.common.RunState.RunIdChanged Event

Current run id

Current run id.
 A run id is uniquely identifying a run or a flight.
 For each run is generated on the drone a file which can be used by Academy to sum up the run.
 Also, each medias taken during a run has a filename containing the run id.

Triggered : when the drone generates a new run id (generally right after a take off).

Example binding to listen for the ` RunIdChanged ` event from the drone :

```javascript

drone.on(
  'RunIdChanged',
  function(data){
    console.log(data);
  }
)

```

