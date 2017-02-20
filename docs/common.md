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

Signals the remote that the host will disconnect.


Result : None

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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
## projects.common.NetworkEvent.Disconnection

Drone will disconnect

Drone will disconnect.
 This event is mainly triggered when the user presses on the power button of the product.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : mainly when the user presses the power button of the drone.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||cause|true|enum|Cause of the disconnection of the product|
Enums/Symbols (fancy way of saying possible values) for cause :

|value|name|description|
|-----|----|-----------|
|0|off_button|The button off has been pressed|
|1|unknown|Unknown generic cause|


Example binding to listen for the ` Disconnection ` event from the drone :

```javascript

drone.on(
  'Disconnection',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Settings.AllSettings

Ask for all settings

Ask for all settings.

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The product will trigger all settings events (such as [CameraSettings](#0_15_0), or product specific settings as the [MaxAltitude](#1_6_0) for the Bebop).
 Then, it will trigger [AllSettingsEnd](#0_3_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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


## projects.common.Settings.Reset

Reset all settings

Reset all settings.

Result : It will trigger [ResetChanged](#0_3_1).
 Then, the product will trigger all settings events (such as [CameraSettings](#0_15_0), or product specific settings as the [MaxAltitude](#1_6_0) for the Bebop) with factory values.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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


## projects.common.Settings.ProductName

Set product name

Set the product name.
 It also sets the name of the SSID for Wifi products and advertisement name for BLE products (changed after a reboot of the product).

Result : Name is changed.
 Then, it will trigger [NameChanged](#0_3_2).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||name|false|string|Product name|

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


## projects.common.Settings.Country

Set the country

Set the country for Wifi products.
 This can modify Wifi band and/or channel.
 **Please note that you might be disconnected from the product after changing the country as it changes Wifi parameters.**

Result : The country is set.
 Then, it will trigger [CountryChanged](#0_3_6).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||code|false|string|Country code with ISO 3166 format|

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


## projects.common.Settings.AutoCountry

Enable auto_country

Enable auto_country.
 If auto_country is set, the drone will guess its Wifi country by itself by checking other Wifi country around it.
 **Please note that you might be disconnected from the product after changing the country as it changes Wifi parameters.**

Result : The auto_country of the product is changed.
 Then, it will trigger [AutoCountryChanged](#0_3_7) and [CountryChanged](#0_3_6).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||automatic|false|u8|Boolean : 0 : Manual / 1 : Auto|

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
## projects.common.SettingsState.AllSettingsChanged

All settings have been sent

All settings have been sent.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : when all settings values have been sent.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|

Example binding to listen for the ` AllSettingsChanged ` event from the drone :

```javascript

drone.on(
  'AllSettingsChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.SettingsState.ResetChanged

All settings have been reset

All settings have been reset.

Triggered : by [ResetSettings](#0_2_1).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|

Example binding to listen for the ` ResetChanged ` event from the drone :

```javascript

drone.on(
  'ResetChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.SettingsState.ProductNameChanged

Product name changed

Product name changed.

Triggered : by [SetProductName](#0_2_2).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||name|false|string|Product name|


Example binding to listen for the ` ProductNameChanged ` event from the drone :

```javascript

drone.on(
  'ProductNameChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.SettingsState.ProductVersionChanged

Product version

Product version.

Triggered : during the connection process.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||software|false|string|Product software version|
|hardware|false|string|Product hardware version|


Example binding to listen for the ` ProductVersionChanged ` event from the drone :

```javascript

drone.on(
  'ProductVersionChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.SettingsState.ProductSerialHighChanged

Product serial (1st part)

Product serial (1st part).

Triggered : during the connection process.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||high|false|string|Serial high number (hexadecimal value)|


Example binding to listen for the ` ProductSerialHighChanged ` event from the drone :

```javascript

drone.on(
  'ProductSerialHighChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.SettingsState.ProductSerialLowChanged

Product serial (2nd part)

Product serial (2nd part).

Triggered : during the connection process.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||low|false|string|Serial low number (hexadecimal value)|


Example binding to listen for the ` ProductSerialLowChanged ` event from the drone :

```javascript

drone.on(
  'ProductSerialLowChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.SettingsState.CountryChanged

Country changed

Country changed.

Triggered : by [SetCountry](#0_2_3).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||code|false|string|Country code with ISO 3166 format, empty string means unknown country.|


Example binding to listen for the ` CountryChanged ` event from the drone :

```javascript

drone.on(
  'CountryChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.SettingsState.AutoCountryChanged

Auto_country changed

Auto_country changed.

Triggered : by [SetAutoCountry](#0_2_4).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||automatic|false|u8|Boolean : 0 : Manual / 1 : Auto|


Example binding to listen for the ` AutoCountryChanged ` event from the drone :

```javascript

drone.on(
  'AutoCountryChanged',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Common.AllStates

Ask for all states

Ask for all states.

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The product will trigger all states events (such as [FlyingState](#1_4_1) for the Bebop).
 Then, it will trigger [AllStatesEnd](#0_5_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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


## projects.common.Common.CurrentDate

Set the date

Set the date.
 This date is taken by the drone as its own date.
 So medias and other files will be dated from this date

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The date of the product is set.
 Then, it will trigger [DateChanged](#0_5_4).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||date|false|string|Date with ISO_8601 format|

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


## projects.common.Common.CurrentTime

Set the time

Set the time.
 This time is taken by the drone as its own time.
 So medias and other files will be dated from this time

 **Please note that you should not send this command if you are using the
 libARController API as this library is handling the connection process for you.**

Result : The time of the product is set.
 Then, it will trigger [TimeChanged](#0_5_5).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||time|false|string|Time with ISO_8601 format|

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


## projects.common.Common.Reboot

Reboot

Reboot the product.
 The product will accept this command only if is not flying.

Result : The product will reboot if it can.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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
## projects.common.CommonState.AllStatesChanged

All states have been sent

All states have been sent.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : when all states values have been sent.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|

Example binding to listen for the ` AllStatesChanged ` event from the drone :

```javascript

drone.on(
  'AllStatesChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.BatteryStateChanged

Battery state

Battery state.

Triggered : when the battery level changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||percent|false|u8|Battery percentage|


Example binding to listen for the ` BatteryStateChanged ` event from the drone :

```javascript

drone.on(
  'BatteryStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.MassStorageStateListChanged

Mass storage state list

Mass storage state list.

Triggered : when a mass storage is inserted or ejected.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||mass_storage_id|false|u8|Mass storage id (unique)|
|name|false|string|Mass storage name|


Example binding to listen for the ` MassStorageStateListChanged ` event from the drone :

```javascript

drone.on(
  'MassStorageStateListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.MassStorageInfoStateListChanged

Mass storage info state list

Mass storage info state list.

Triggered : when a mass storage info changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||mass_storage_id|false|u8|Mass storage state id (unique)|
|size|false|u32|Mass storage size in MBytes|
|used_size|false|u32|Mass storage used size in MBytes|
|plugged|false|u8|Mass storage plugged (1 if mass storage is plugged, otherwise 0)|
|full|false|u8|Mass storage full information state (1 if mass storage full, 0 otherwise).|
|internal|false|u8|Mass storage internal type state (1 if mass storage is internal, 0 otherwise)|


Example binding to listen for the ` MassStorageInfoStateListChanged ` event from the drone :

```javascript

drone.on(
  'MassStorageInfoStateListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.CurrentDateChanged

Date changed

Date changed.
 Corresponds to the latest date set on the drone.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : by [SetDate](#0_4_1).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||date|false|string|Date with ISO_8601 format|


Example binding to listen for the ` CurrentDateChanged ` event from the drone :

```javascript

drone.on(
  'CurrentDateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.CurrentTimeChanged

Time changed

Time changed.
 Corresponds to the latest time set on the drone.

 **Please note that you should not care about this event if you are using the libARController API as this library is handling the connection process for you.**

Triggered : by [SetTime](#0_4_2).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||time|false|string|Time with ISO_8601 format|


Example binding to listen for the ` CurrentTimeChanged ` event from the drone :

```javascript

drone.on(
  'CurrentTimeChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.MassStorageInfoRemainingListChanged

Mass storage remaining data list

Mass storage remaining data list.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||free_space|false|u32|Mass storage free space in MBytes|
|rec_time|false|u16|Mass storage record time reamining in minute|
|photo_remaining|false|u32|Mass storage photo remaining|


Example binding to listen for the ` MassStorageInfoRemainingListChanged ` event from the drone :

```javascript

drone.on(
  'MassStorageInfoRemainingListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.WifiSignalChanged

Rssi changed

Rssi (Wifi Signal between controller and product) changed.

Triggered : regularly.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||rssi|false|i16|RSSI of the signal between controller and the product (in dbm)|


Example binding to listen for the ` WifiSignalChanged ` event from the drone :

```javascript

drone.on(
  'WifiSignalChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.SensorsStatesListChanged

Sensors state list

Sensors state list.

Triggered : at connection and when a sensor state changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||sensorName|true|enum|Sensor name|
|sensorState|false|u8|Sensor state (1 if the sensor is OK, 0 if the sensor is NOT OK)|
Enums/Symbols (fancy way of saying possible values) for sensorName :

|value|name|description|
|-----|----|-----------|
|0|IMU|Inertial Measurement Unit sensor|
|1|barometer|Barometer sensor|
|2|ultrasound|Ultrasonic sensor|
|3|GPS|GPS sensor|
|4|magnetometer|Magnetometer sensor|
|5|vertical_camera|Vertical Camera sensor|


Example binding to listen for the ` SensorsStatesListChanged ` event from the drone :

```javascript

drone.on(
  'SensorsStatesListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.ProductModel

Product sub_model

Product sub_model.
 This can be used to customize the UI depending on the product.

Triggered : at connection.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||model|true|enum|The Model of the product.|
Enums/Symbols (fancy way of saying possible values) for model :

|value|name|description|
|-----|----|-----------|
|0|RS_TRAVIS|Travis (RS taxi) model.|
|1|RS_MARS|Mars (RS space) model|
|2|RS_SWAT|SWAT (RS SWAT) model|
|3|RS_MCLANE|Mc Lane (RS police) model|
|4|RS_BLAZE|Blaze (RS fire) model|
|5|RS_ORAK|Orak (RS carbon hydrofoil) model|
|6|RS_NEWZ|New Z (RS wooden hydrofoil) model|
|7|JS_MARSHALL|Marshall (JS fire) model|
|8|JS_DIESEL|Diesel (JS SWAT) model|
|9|JS_BUZZ|Buzz (JS space) model|
|10|JS_MAX|Max (JS F1) model|
|11|JS_JETT|Jett (JS flames) model|
|12|JS_TUKTUK|Tuk_Tuk (JS taxi) model|
|13|SW_BLACK|Swing black model|
|14|SW_WHITE|Swing white model|


Example binding to listen for the ` ProductModel ` event from the drone :

```javascript

drone.on(
  'ProductModel',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.CountryListKnown

Country list

List of countries known by the drone.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||listFlags|false|u8|List entry attribute Bitfield. 0x01: First: indicate it's the first element of the list. 0x02: Last: indicate it's the last element of the list. 0x04: Empty: indicate the list is empty (implies First/Last). All other arguments should be ignored.|
|countryCodes|false|string|Following of country code with ISO 3166 format, separated by ";". Be careful of the command size allowed by the network used. If necessary, split the list in several commands.|

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


## projects.common.CommonState.DeprecatedMassStorageContentChanged

Mass storage content changed

Mass storage content changed.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||mass_storage_id|false|u8|Mass storage id (unique)|
|nbPhotos|false|u16|Number of photos (does not include raw photos)|
|nbVideos|false|u16|Number of videos|
|nbPuds|false|u16|Number of puds|
|nbCrashLogs|false|u16|Number of crash logs|


Example binding to listen for the ` DeprecatedMassStorageContentChanged ` event from the drone :

```javascript

drone.on(
  'DeprecatedMassStorageContentChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.MassStorageContent

Mass storage content

Mass storage content.

Triggered : when the content of the mass storage changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||mass_storage_id|false|u8|Mass storage id (unique)|
|nbPhotos|false|u16|Number of photos (does not include raw photos)|
|nbVideos|false|u16|Number of videos|
|nbPuds|false|u16|Number of puds|
|nbCrashLogs|false|u16|Number of crash logs|
|nbRawPhotos|false|u16|Number of raw photos|


Example binding to listen for the ` MassStorageContent ` event from the drone :

```javascript

drone.on(
  'MassStorageContent',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.MassStorageContentForCurrentRun

Mass storage content for current run

Mass storage content for current run.
 Only counts the files related to the current run (see [RunId](#0_30_0))

Triggered : when the content of the mass storage changes and this content is related to the current run.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||mass_storage_id|false|u8|Mass storage id (unique)|
|nbPhotos|false|u16|Number of photos (does not include raw photos)|
|nbVideos|false|u16|Number of videos|
|nbRawPhotos|false|u16|Number of raw photos|


Example binding to listen for the ` MassStorageContentForCurrentRun ` event from the drone :

```javascript

drone.on(
  'MassStorageContentForCurrentRun',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CommonState.VideoRecordingTimestamp

Video recording timestamp

Current or last video recording timestamp.
 Timestamp in milliseconds since 00_00_00 UTC on 1 January 1970.
 **Please note that values don't persist after drone reboot**

Triggered : on video recording start and video recording stop or 
 after that the date/time of the drone changed.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||startTimestamp|false|u64|Timestamp in milliseconds since 00_00_00 UTC on 1 January 1970.|
|stopTimestamp|false|u64|Timestamp in milliseconds since 00_00_00 UTC on 1 January 1970. 0 mean that video is still recording.|


Example binding to listen for the ` VideoRecordingTimestamp ` event from the drone :

```javascript

drone.on(
  'VideoRecordingTimestamp',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.OverHeat.SwitchOff

Switch off after an overheat

Switch off after an overheat.

Result : None

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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


## projects.common.OverHeat.Ventilate

Ventilate after an overheat

Ventilate after an overheat.

Result : None

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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
## projects.common.OverHeatState.OverHeatChanged

Overheat

Overheat temperature reached.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|

Example binding to listen for the ` OverHeatChanged ` event from the drone :

```javascript

drone.on(
  'OverHeatChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.OverHeatState.OverHeatRegulationChanged

Overheat regulation type

Overheat regulation type.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||regulationType|false|u8|Type of overheat regulation : 0 for ventilation, 1 for switch off|


Example binding to listen for the ` OverHeatRegulationChanged ` event from the drone :

```javascript

drone.on(
  'OverHeatRegulationChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


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

Inform about hud entering.
 Tell the drone that the controller enters/leaves the piloting hud.
 On a non_flying products it is used to know when a run begins.

Result : If yes, the product will begin a new session (so it should send a new [runId](#0_30_0)).
 Also, on the JumpingSumos, if the video is in autorecord mode, it will start recording.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||piloting|false|u8|0 when the application is not in the piloting HUD, 1 when it enters the HUD.|

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
## projects.common.WifiSettings.OutdoorSetting

Set wifi outdoor mode

Set wifi indoor/outdoor mode.
 **Please note that you might be disconnected from the product after changing the indoor/outdoor setting as it changes Wifi parameters.**

Result : The product change its indoor/outdoor wifi settings.
 Then, it will trigger [WifiOutdoorMode](#0_10_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||outdoor|false|u8|1 if it should use outdoor wifi settings, 0 otherwise|

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
## projects.common.WifiSettingsState.outdoorSettingsChanged

Wifi outdoor mode

Wifi outdoor mode.

Triggered : by [SetWifiOutdoorMode](#0_9_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||outdoor|false|u8|1 if it should use outdoor wifi settings, 0 otherwise|


Example binding to listen for the ` outdoorSettingsChanged ` event from the drone :

```javascript

drone.on(
  'outdoorSettingsChanged',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Mavlink.Start

Start a FlightPlan

Start a FlightPlan based on a mavlink file existing on the drone.

 Requirements are_
 * Product is calibrated
 * Product should be in outdoor mode
 * Product has fixed its GPS


Result : If the FlightPlan has been started, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to *playing*.
 Otherwise, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to stopped and event [MavlinkPlayErrorStateChanged](#0_12_1) is triggered with an explanation of the error.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||filepath|false|string|flight plan file path from the mavlink ftp root|
|type|true|enum|type of the played mavlink file|
Enums/Symbols (fancy way of saying possible values) for type :

|value|name|description|
|-----|----|-----------|
|0|flightPlan|Mavlink file for FlightPlan|
|1|mapMyHouse|Mavlink file for MapMyHouse|

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


## projects.common.Mavlink.Pause

Pause a FlightPlan

Pause a FlightPlan that was playing.
 To unpause a FlightPlan, see [StartFlightPlan](#0_11_0)


Result : The currently playing FlightPlan will be paused. Then, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to the current state of the FlightPlan (should be *paused* if everything went well).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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


## projects.common.Mavlink.Stop

Stop a FlightPlan

Stop a FlightPlan that was playing.


Result : The currently playing FlightPlan will be stopped. Then, event [FlightPlanPlayingStateChanged](#0_12_0) is triggered with param state set to the current state of the FlightPlan (should be *stopped* if everything went well).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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
## projects.common.MavlinkState.MavlinkFilePlayingStateChanged

Playing state of a FlightPlan

Playing state of a FlightPlan.

Triggered : by [StartFlightPlan](#0_11_0), [PauseFlightPlan](#0_11_1) or [StopFlightPlan](#0_11_2).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||state|true|enum|State of the mavlink|
|filepath|false|string|flight plan file path from the mavlink ftp root|
|type|true|enum|type of the played mavlink file|
Enums/Symbols (fancy way of saying possible values) for state :

|value|name|description|
|-----|----|-----------|
|0|playing|Mavlink file is playing|
|1|stopped|Mavlink file is stopped (arg filepath and type are useless in this state)|
|2|paused|Mavlink file is paused|
|3|loaded|Mavlink file is loaded (it will be played at take_off)|
Enums/Symbols (fancy way of saying possible values) for type :

|value|name|description|
|-----|----|-----------|
|0|flightPlan|Mavlink file for FlightPlan|
|1|mapMyHouse|Mavlink file for MapMyHouse|


Example binding to listen for the ` MavlinkFilePlayingStateChanged ` event from the drone :

```javascript

drone.on(
  'MavlinkFilePlayingStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.MavlinkState.MavlinkPlayErrorStateChanged

FlightPlan error

FlightPlan error.

Triggered : by [StartFlightPlan](#0_11_0) if an error occurs.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||error|true|enum|State of play error|
Enums/Symbols (fancy way of saying possible values) for error :

|value|name|description|
|-----|----|-----------|
|0|none|There is no error|
|1|notInOutDoorMode|The drone is not in outdoor mode|
|2|gpsNotFixed|The gps is not fixed|
|3|notCalibrated|The magnetometer of the drone is not calibrated|


Example binding to listen for the ` MavlinkPlayErrorStateChanged ` event from the drone :

```javascript

drone.on(
  'MavlinkPlayErrorStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.MavlinkState.MissonItemExecuted

Mission item executed

Mission item has been executed.

Triggered : when a mission item has been executed during a flight plan.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||idx|false|u32|Index of the mission item. This is the place of the mission item in the list of the items of the mission. Begins at 0.|


Example binding to listen for the ` MissonItemExecuted ` event from the drone :

```javascript

drone.on(
  'MissonItemExecuted',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Calibration.MagnetoCalibration

Start/Abort magnetometer calibration

Start or abort magnetometer calibration process.


Result : The magnetometer calibration process is started or aborted. Then, event [MagnetoCalibrationStartedChanged](#0_14_3) is triggered.
 If started, event [MagnetoCalibrationStateChanged](#0_14_3) is triggered with the current calibration state: a list of all axis and their calibration states.\n It will also trigger [MagnetoCalibrationAxisToCalibrateChanged](#0_14_2), that will inform the controller about the current axis to calibrate.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||calibrate|false|u8|1 if the calibration should be started, 0 if it should be aborted|

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





|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||calibrate|false|u8|1 if the calibration should be started, 0 if it should be aborted|

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
## projects.common.CalibrationState.MagnetoCalibrationStateChanged

Magneto calib process axis state

Magneto calib process axis state.

Triggered : when the calibration process is started with [StartOrAbortMagnetoCalib](#0_13_0) and each time an axis calibration state changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||xAxisCalibration|false|u8|State of the x axis (roll) calibration : 1 if calibration is done, 0 otherwise|
|yAxisCalibration|false|u8|State of the y axis (pitch) calibration : 1 if calibration is done, 0 otherwise|
|zAxisCalibration|false|u8|State of the z axis (yaw) calibration : 1 if calibration is done, 0 otherwise|
|calibrationFailed|false|u8|1 if calibration has failed, 0 otherwise. If this arg is 1, consider all previous arg as 0|


Example binding to listen for the ` MagnetoCalibrationStateChanged ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CalibrationState.MagnetoCalibrationRequiredState

Calibration required

Calibration required.

Triggered : when the calibration requirement changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||required|false|u8|1 if calibration is required, 0 if current calibration is still valid|


Example binding to listen for the ` MagnetoCalibrationRequiredState ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationRequiredState',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CalibrationState.MagnetoCalibrationAxisToCalibrateChanged

Axis to calibrate during calibration process

Axis to calibrate during calibration process.

Triggered : during the calibration process when the axis to calibrate changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||axis|true|enum|The axis to calibrate|
Enums/Symbols (fancy way of saying possible values) for axis :

|value|name|description|
|-----|----|-----------|
|0|xAxis|If the current calibration axis should be the x axis|
|1|yAxis|If the current calibration axis should be the y axis|
|2|zAxis|If the current calibration axis should be the z axis|
|3|none|If none of the axis should be calibrated|


Example binding to listen for the ` MagnetoCalibrationAxisToCalibrateChanged ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationAxisToCalibrateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CalibrationState.MagnetoCalibrationStartedChanged

Calibration process state

Calibration process state.

Triggered : by [StartOrAbortMagnetoCalib](#0_13_0) or when the process ends because it succeeded.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||started|false|u8|1 if calibration has started, 0 otherwise|


Example binding to listen for the ` MagnetoCalibrationStartedChanged ` event from the drone :

```javascript

drone.on(
  'MagnetoCalibrationStartedChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.CalibrationState.PitotCalibrationStateChanged

Sent when the state of the pitot calibration has changed





|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||state|true|enum|State of pitot calibration|
|lastError|false|u8|lastError : 1 if an error occured and 0 if not|
Enums/Symbols (fancy way of saying possible values) for state :

|value|name|description|
|-----|----|-----------|
|0|done|Calibration is ok|
|1|ready|Calibration is started, waiting user action|
|2|in_progress|Calibration is in progress|
|3|required|Calibration is required|


Example binding to listen for the ` PitotCalibrationStateChanged ` event from the drone :

```javascript

drone.on(
  'PitotCalibrationStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


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

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||fov|false|float|Value of the camera horizontal fov (in degree)|
|panMax|false|float|Value of max pan (right pan) (in degree)|
|panMin|false|float|Value of min pan (left pan) (in degree)|
|tiltMax|false|float|Value of max tilt (top tilt) (in degree)|
|tiltMin|false|float|Value of min tilt (bottom tilt) (in degree)|


Example binding to listen for the ` CameraSettingsChanged ` event from the drone :

```javascript

drone.on(
  'CameraSettingsChanged',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.GPS.ControllerPositionForRun

Set the position of a run

Set the position of a run.
 This will let the product know the controller location for the flight/run. The location is typically used to geotag medias.
 Only used on products that have no gps.
 Watch out, this command is not used by BLE products.

Result : The position is set.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||latitude|false|double|Controller latitude in decimal degrees|
|longitude|false|double|Controller longitude in decimal degrees|

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
## projects.common.FlightPlanState.AvailabilityStateChanged

FlightPlan availability

FlightPlan availability.
 Availability is linked to GPS fix, magnetometer calibration, sensor states...

Triggered : on change.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||AvailabilityState|false|u8|Running a flightPlan file is available (1 running a flightPlan file is available, otherwise 0)|


Example binding to listen for the ` AvailabilityStateChanged ` event from the drone :

```javascript

drone.on(
  'AvailabilityStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.FlightPlanState.ComponentStateListChanged

FlightPlan components state list

FlightPlan components state list.

Triggered : when the state of required components changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||component|true|enum|Drone FlightPlan component id (unique)|
|State|false|u8|State of the FlightPlan component (1 FlightPlan component OK, otherwise 0)|
Enums/Symbols (fancy way of saying possible values) for component :

|value|name|description|
|-----|----|-----------|
|0|GPS|GPS for Drone FlightPlan|
|1|Calibration|Calibration for Drone FlightPlan|
|2|Mavlink_File|Mavlink file for Drone FlightPlan|
|3|TakeOff|Take off|


Example binding to listen for the ` ComponentStateListChanged ` event from the drone :

```javascript

drone.on(
  'ComponentStateListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.FlightPlanState.LockStateChanged

FlightPlan lock state

FlightPlan lock state.
 Represents the fact that the controller is able or not to stop or pause a playing FlightPlan

Triggered : when the lock changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||LockState|false|u8|1 if FlightPlan is locked: can't pause or stop FlightPlan. 0 if FlightPlan is unlocked: pause or stop available.|


Example binding to listen for the ` LockStateChanged ` event from the drone :

```javascript

drone.on(
  'LockStateChanged',
  function(commandObject){
    console.log(commandObject);
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





|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||version|false|string|version of libARCommands ("1.2.3.4" format)|

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





|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||version|false|string|version of libARCommands ("1.2.3.4" format)|

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





|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||version|false|string|version of libARCommands ("1.2.3.4" format)|

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
## projects.common.FlightPlanEvent.StartingErrorEvent

FlightPlan start error

FlightPlan start error.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : on an error after a [StartFlightPlan](#0_11_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|

Example binding to listen for the ` StartingErrorEvent ` event from the drone :

```javascript

drone.on(
  'StartingErrorEvent',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.FlightPlanEvent.SpeedBridleEvent

FlightPlan speed clamping

FlightPlan speed clamping.
 Sent when a speed specified in the FlightPlan file is considered too high by the drone.

 **This event is a notification, you can't retrieve it in the cache of the device controller.**

Triggered : on an speed related clamping after a [StartFlightPlan](#0_11_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|

Example binding to listen for the ` SpeedBridleEvent ` event from the drone :

```javascript

drone.on(
  'SpeedBridleEvent',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Audio.ControllerReadyForStreaming

Set audio stream direction

Set audio stream direction.

Result : The audio stream direction is set.
 Then, event [AudioStreamDirection](#0_21_0) is triggered.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||ready|false|u8|Bit field for TX and RX ready. bit 0 is 1 if controller is ready and wants to receive sound (Drone TX) bit 1 is 1 if controller is ready and wants to send sound (Drone RX)|

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
## projects.common.AudioState.AudioStreamingRunning

Audio stream direction

Audio stream direction.

Triggered : by [SetAudioStreamDirection](#0_20_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||running|false|u8|Bit field for TX and RX running bit 0 is 1 if Drone TX is running bit 1 is 1 if Drone RX is running|


Example binding to listen for the ` AudioStreamingRunning ` event from the drone :

```javascript

drone.on(
  'AudioStreamingRunning',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Headlights.intensity

Set LEDs intensity

Set lighting LEDs intensity.

Result : The intensity of the LEDs is changed.
 Then, event [LedIntensity](#0_23_0) is triggered.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||left|false|u8|Set the left LED intensity value (0 through 255).|
|right|false|u8|Set the right LED intensity value (0 through 255).|

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
## projects.common.HeadlightsState.intensityChanged

LEDs intensity

Lighting LEDs intensity.

Triggered : by [SetLedsIntensity](#0_22_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||left|false|u8|The intensity value for the left LED (0 through 255).|
|right|false|u8|The intensity value for the right LED (0 through 255).|


Example binding to listen for the ` intensityChanged ` event from the drone :

```javascript

drone.on(
  'intensityChanged',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Animations.StartAnimation

Start an animation

Start a paramaterless animation.
 List of available animations can be retrieved from [AnimationsStateList](#0_25_0).

Result : If possible, the product starts the requested animation. Then, event [AnimationsStateList](#0_25_0) is triggered.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||anim|true|enum|Animation to start.|
Enums/Symbols (fancy way of saying possible values) for anim :

|value|name|description|
|-----|----|-----------|
|0|HEADLIGHTS_FLASH|Flash headlights.|
|1|HEADLIGHTS_BLINK|Blink headlights.|
|2|HEADLIGHTS_OSCILLATION|Oscillating headlights.|
|3|SPIN|Spin animation.|
|4|TAP|Tap animation.|
|5|SLOW_SHAKE|Slow shake animation.|
|6|METRONOME|Metronome animation.|
|7|ONDULATION|Standing dance animation.|
|8|SPIN_JUMP|Spin jump animation.|
|9|SPIN_TO_POSTURE|Spin that end in standing posture, or in jumper if it was standing animation.|
|10|SPIRAL|Spiral animation.|
|11|SLALOM|Slalom animation.|
|12|BOOST|Boost animation.|
|13|LOOPING|Make a looping. (Only for WingX)|
|14|BARREL_ROLL_180_RIGHT|Make a barrel roll of 180 degree turning on right. (Only for WingX)|
|15|BARREL_ROLL_180_LEFT|Make a barrel roll of 180 degree turning on left. (Only for WingX)|
|16|BACKSWAP|Put the drone upside down. (Only for WingX)|

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


## projects.common.Animations.StopAnimation

Stop an animation

Stop a paramaterless animation.
 List of running animations can be retrieved from [AnimationsStateList](#0_25_0).

Result : If the requested animation was running, it will be stopped.
 Then, event [AnimationsStateList](#0_25_0) is triggered.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||anim|true|enum|Animation to stop.|
Enums/Symbols (fancy way of saying possible values) for anim :

|value|name|description|
|-----|----|-----------|
|0|HEADLIGHTS_FLASH|Flash headlights.|
|1|HEADLIGHTS_BLINK|Blink headlights.|
|2|HEADLIGHTS_OSCILLATION|Oscillating headlights.|
|3|SPIN|Spin animation.|
|4|TAP|Tap animation.|
|5|SLOW_SHAKE|Slow shake animation.|
|6|METRONOME|Metronome animation.|
|7|ONDULATION|Standing dance animation.|
|8|SPIN_JUMP|Spin jump animation.|
|9|SPIN_TO_POSTURE|Spin that end in standing posture, or in jumper if it was standing animation.|
|10|SPIRAL|Spiral animation.|
|11|SLALOM|Slalom animation.|
|12|BOOST|Boost animation.|
|13|LOOPING|Make a looping. (Only for WingX)|
|14|BARREL_ROLL_180_RIGHT|Make a barrel roll of 180 degree turning on right. (Only for WingX)|
|15|BARREL_ROLL_180_LEFT|Make a barrel roll of 180 degree turning on left. (Only for WingX)|
|16|BACKSWAP|Put the drone upside down. (Only for WingX)|

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


## projects.common.Animations.StopAllAnimations

Stop all animations

Stop all running paramaterless animations.
 List of running animations can be retrieved from [AnimationsStateList](#0_25_0).

Result : All running animations are stopped.
 Then, event [AnimationsStateList](#0_25_0) is triggered.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------|
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
## projects.common.AnimationsState.List

Animation state list

Paramaterless animations state list.

Triggered : when the list of available animations changes and also when an animation state changes (can be triggered by [StartAnim](#0_24_0), [StopAnim](#0_24_1) or [StopAllAnims](#0_24_2).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||anim|true|enum|Animation type.|
|state|true|enum|State of the animation|
|error|true|enum|Error to explain the state|
Enums/Symbols (fancy way of saying possible values) for anim :

|value|name|description|
|-----|----|-----------|
|0|HEADLIGHTS_FLASH|Flash headlights.|
|1|HEADLIGHTS_BLINK|Blink headlights.|
|2|HEADLIGHTS_OSCILLATION|Oscillating headlights.|
|3|SPIN|Spin animation.|
|4|TAP|Tap animation.|
|5|SLOW_SHAKE|Slow shake animation.|
|6|METRONOME|Metronome animation.|
|7|ONDULATION|Standing dance animation.|
|8|SPIN_JUMP|Spin jump animation.|
|9|SPIN_TO_POSTURE|Spin that end in standing posture, or in jumper if it was standing animation.|
|10|SPIRAL|Spiral animation.|
|11|SLALOM|Slalom animation.|
|12|BOOST|Boost animation.|
|13|LOOPING|Make a looping. (Only for WingX)|
|14|BARREL_ROLL_180_RIGHT|Make a barrel roll of 180 degree turning on right. (Only for WingX)|
|15|BARREL_ROLL_180_LEFT|Make a barrel roll of 180 degree turning on left. (Only for WingX)|
|16|BACKSWAP|Put the drone upside down. (Only for WingX)|
Enums/Symbols (fancy way of saying possible values) for state :

|value|name|description|
|-----|----|-----------|
|0|stopped|animation is stopped|
|1|started|animation is started|
|2|notAvailable|The animation is not available|
Enums/Symbols (fancy way of saying possible values) for error :

|value|name|description|
|-----|----|-----------|
|0|ok|No Error|
|1|unknown|Unknown generic error|


Example binding to listen for the ` List ` event from the drone :

```javascript

drone.on(
  'List',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Accessory.Config

Declare an accessory

Declare an accessory.
 You can choose the accessory between all accessible for this product.
 You can get this list through event [SupportedAccessories](#0_27_0).

 You can only set the accessory when the modification is enabled.
 You can know if it possible with the event [AccessoryDeclarationAvailability](#0_27_2).

Result : The product knows which accessory it is wearing.
 Then, event [AccessoryConfigChanged](#0_27_1) is triggered.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||accessory|true|enum|Accessory configuration to set.|
Enums/Symbols (fancy way of saying possible values) for accessory :

|value|name|description|
|-----|----|-----------|
|0|NO_ACCESSORY|No accessory.|
|1|STD_WHEELS|Standard wheels|
|2|TRUCK_WHEELS|Truck wheels|
|3|HULL|Hull|
|4|HYDROFOIL|Hydrofoil|

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
## projects.common.AccessoryState.SupportedAccessoriesListChanged

Supported accessories list

Supported accessories list.

Triggered : at connection.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||accessory|true|enum|Accessory configurations supported by the product.|
Enums/Symbols (fancy way of saying possible values) for accessory :

|value|name|description|
|-----|----|-----------|
|0|NO_ACCESSORY|No accessory.|
|1|STD_WHEELS|Standard wheels|
|2|TRUCK_WHEELS|Truck wheels|
|3|HULL|Hull|
|4|HYDROFOIL|Hydrofoil|


Example binding to listen for the ` SupportedAccessoriesListChanged ` event from the drone :

```javascript

drone.on(
  'SupportedAccessoriesListChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.AccessoryState.AccessoryConfigChanged

Accessory config

Accessory config.

Triggered : by [DeclareAccessory](#0_26_0).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||newAccessory|true|enum|Accessory configuration reported by firmware.|
|error|true|enum|Error code.|
Enums/Symbols (fancy way of saying possible values) for newAccessory :

|value|name|description|
|-----|----|-----------|
|0|UNCONFIGURED|No accessory configuration set. Controller needs to set one.|
|1|NO_ACCESSORY|No accessory.|
|2|STD_WHEELS|Standard wheels|
|3|TRUCK_WHEELS|Truck wheels|
|4|HULL|Hull|
|5|HYDROFOIL|Hydrofoil|
|6|IN_PROGRESS|Configuration in progress.|
Enums/Symbols (fancy way of saying possible values) for error :

|value|name|description|
|-----|----|-----------|
|0|OK|No error. Accessory config change successful.|
|1|UNKNOWN|Cannot change accessory configuration for some reason.|
|2|FLYING|Cannot change accessory configuration while flying.|


Example binding to listen for the ` AccessoryConfigChanged ` event from the drone :

```javascript

drone.on(
  'AccessoryConfigChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.AccessoryState.AccessoryConfigModificationEnabled

Accessory declaration availability

Availability to declare or not an accessory.

Triggered : when the availability changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||enabled|false|u8|1 if the modification of the accessory Config is enabled, 0 otherwise|


Example binding to listen for the ` AccessoryConfigModificationEnabled ` event from the drone :

```javascript

drone.on(
  'AccessoryConfigModificationEnabled',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.Charger.SetMaxChargeRate

Set max charge rate

The product will inform itself the controller about its charging type (see [ChargingInfoChanged](#0_29_3)).

Result : None.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||rate|true|enum|The new maximum charge rate.|
Enums/Symbols (fancy way of saying possible values) for rate :

|value|name|description|
|-----|----|-----------|
|0|SLOW|Fully charge the battery at a slow rate. Typically limit max charge current to 512 mA.|
|1|MODERATE|Almost fully_charge the battery at moderate rate (> 512mA) but slower than the fastest rate.|
|2|FAST|Almost fully_charge the battery at the highest possible rate supported by the charger.|

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
## projects.common.ChargerState.MaxChargeRateChanged

Max charge rate

Max charge rate.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||rate|true|enum|The current maximum charge rate.|
Enums/Symbols (fancy way of saying possible values) for rate :

|value|name|description|
|-----|----|-----------|
|0|SLOW|Fully charge the battery at a slow rate. Typically limit max charge current to 512 mA.|
|1|MODERATE|Almost fully_charge the battery at moderate rate (> 512 mA) but slower than the fastest rate.|
|2|FAST|Almost fully_charge the battery at the highest possible rate supported by the charger.|


Example binding to listen for the ` MaxChargeRateChanged ` event from the drone :

```javascript

drone.on(
  'MaxChargeRateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.ChargerState.CurrentChargeStateChanged

Current charge state

Current charge state.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||status|true|enum|Charger status.|
|phase|true|enum|The current charging phase.|
Enums/Symbols (fancy way of saying possible values) for status :

|value|name|description|
|-----|----|-----------|
|0|DISCHARGING|The battery is discharging.|
|1|CHARGING_SLOW|The battery is charging at a slow rate about 512 mA.|
|2|CHARGING_MODERATE|The battery is charging at a moderate rate (> 512 mA) but slower than the fastest rate.|
|3|CHARGING_FAST|The battery is charging at a the fastest rate.|
|4|BATTERY_FULL|The charger is plugged and the battery is fully charged.|
Enums/Symbols (fancy way of saying possible values) for phase :

|value|name|description|
|-----|----|-----------|
|0|UNKNOWN|The charge phase is unknown or irrelevant.|
|1|CONSTANT_CURRENT_1|First phase of the charging process. The battery is charging with constant current.|
|2|CONSTANT_CURRENT_2|Second phase of the charging process. The battery is charging with constant current, with a higher voltage than the first phase.|
|3|CONSTANT_VOLTAGE|Last part of the charging process. The battery is charging with a constant voltage.|
|4|CHARGED|The battery is fully charged.|


Example binding to listen for the ` CurrentChargeStateChanged ` event from the drone :

```javascript

drone.on(
  'CurrentChargeStateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.ChargerState.LastChargeRateChanged

Last charge rate

Last charge rate.

Result : undefined

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||rate|true|enum|The charge rate recorded by the firmware for the last charge.|
Enums/Symbols (fancy way of saying possible values) for rate :

|value|name|description|
|-----|----|-----------|
|0|UNKNOWN|The last charge rate is not known.|
|1|SLOW|Slow charge rate.|
|2|MODERATE|Moderate charge rate.|
|3|FAST|Fast charge rate.|


Example binding to listen for the ` LastChargeRateChanged ` event from the drone :

```javascript

drone.on(
  'LastChargeRateChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```


## projects.common.ChargerState.ChargingInfo

Charging information

Charging information.

Triggered : when the product is charging or when the charging state changes.

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||phase|true|enum|The current charging phase.|
|rate|true|enum|The charge rate. If phase is DISCHARGING, refers to the last charge.|
|intensity|false|u8|The charging intensity, in dA. (12dA = 1,2A) ; If phase is DISCHARGING, refers to the last charge. Equals to 0 if not known.|
|fullChargingTime|false|u8|The full charging time estimated, in minute. If phase is DISCHARGING, refers to the last charge. Equals to 0 if not known.|
Enums/Symbols (fancy way of saying possible values) for phase :

|value|name|description|
|-----|----|-----------|
|0|UNKNOWN|The charge phase is unknown or irrelevant.|
|1|CONSTANT_CURRENT_1|First phase of the charging process. The battery is charging with constant current.|
|2|CONSTANT_CURRENT_2|Second phase of the charging process. The battery is charging with constant current, with a higher voltage than the first phase.|
|3|CONSTANT_VOLTAGE|Last part of the charging process. The battery is charging with a constant voltage.|
|4|CHARGED|The battery is fully charged.|
|5|DISCHARGING|The battery is discharging; Other arguments refers to the last charge.|
Enums/Symbols (fancy way of saying possible values) for rate :

|value|name|description|
|-----|----|-----------|
|0|UNKNOWN|The charge rate is not known.|
|1|SLOW|Slow charge rate.|
|2|MODERATE|Moderate charge rate.|
|3|FAST|Fast charge rate.|


Example binding to listen for the ` ChargingInfo ` event from the drone :

```javascript

drone.on(
  'ChargingInfo',
  function(commandObject){
    console.log(commandObject);
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
## projects.common.RunState.RunIdChanged

Current run id

Current run id.
 A run id is uniquely identifying a run or a flight.
 For each run is generated on the drone a file which can be used by Academy to sum up the run.
 Also, each medias taken during a run has a filename containing the run id.

Triggered : when the drone generates a new run id (generally right after a take off).

|argument|type|enum/Symbol|description|
|--------|----|------------|-----------||runId|false|string|Id of the run|


Example binding to listen for the ` RunIdChanged ` event from the drone :

```javascript

drone.on(
  'RunIdChanged',
  function(commandObject){
    console.log(commandObject);
  }
)

```

