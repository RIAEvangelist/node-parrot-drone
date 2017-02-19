'use strict';
/*************************************************\
generated from arsdk-xml/xml/*.xml
generated by utils/convertSDK.js
generated on : 2/19/2017, 7:41:17 AM
\**************************************************/
const projects={"powerup":{"info":{"tagType":"project","name":"powerup","id":8},"details":"All commands specific to the Power Up.","Piloting":{"info":{"tagType":"class","name":"Piloting","id":0},"details":"All commands related to piloting the PowerUp","PCMD":{"info":{"tagType":"cmd","name":"PCMD","id":0,"buffer":"NON_ACK"},"details":"Ask the Power Up speed and turn ratio.","flag":{"info":{"tagType":"arg","name":"flag","type":"u8","id":0,"bytes":1},"details":"Boolean for \"touch screen\".","lookup":{},"value":null},"throttle":{"info":{"tagType":"arg","name":"throttle","type":"u8","id":1,"bytes":1},"details":"Throttle value [0_100].","lookup":{},"value":null},"roll":{"info":{"tagType":"arg","name":"roll","type":"i8","id":2,"bytes":1},"details":"Yaw_roll value. [_100_100]","lookup":{},"value":null},"lookup":{"0":"flag","1":"throttle","2":"roll"}},"UserTakeOff":{"info":{"tagType":"cmd","name":"UserTakeOff","id":1},"details":"Set drone in user take off state","state":{"info":{"tagType":"arg","name":"state","type":"u8","id":0,"bytes":1},"details":"State of user take off mode _ 1 to enter in user take off. _ 0 to exit from user take off.","lookup":{},"value":null},"lookup":{"0":"state"}},"MotorMode":{"info":{"tagType":"cmd","name":"MotorMode","id":2},"details":"Motor mode","mode":{"info":{"tagType":"arg","name":"mode","type":"enum","id":0,"bytes":1},"normal":{"info":{"tagType":"enum","name":"normal"},"details":"The motors will only start on user action after being in state user take off"},"forced":{"info":{"tagType":"enum","name":"forced"},"details":"Motors will use the current pcmd values without considering the flying state"},"lookup":{},"value":null},"lookup":{"0":"mode"}},"lookup":{"0":"PCMD","1":"UserTakeOff","2":"MotorMode"}},"PilotingState":{"info":{"tagType":"class","name":"PilotingState","id":1},"details":"Piloting state from Power Up.","AlertStateChanged":{"info":{"tagType":"cmd","name":"AlertStateChanged","id":0},"details":"JS alert state changed","state":{"info":{"tagType":"arg","name":"state","type":"enum","id":0,"bytes":1},"details":"JS alert state","none":{"info":{"tagType":"enum","name":"none"},"details":"No alert"},"critical_battery":{"info":{"tagType":"enum","name":"critical_battery"},"details":"Critical battery alert"},"low_battery":{"info":{"tagType":"enum","name":"low_battery"},"details":"Low battery alert"},"lookup":{},"value":null},"lookup":{"0":"state"}},"FlyingStateChanged":{"info":{"tagType":"cmd","name":"FlyingStateChanged","id":1},"details":"Drone flying state changed","state":{"info":{"tagType":"arg","name":"state","type":"enum","id":0,"bytes":1},"details":"Drone flying state","landed":{"info":{"tagType":"enum","name":"landed"},"details":"Landed state"},"takingoff":{"info":{"tagType":"enum","name":"takingoff"},"details":"Taking off state"},"flying":{"info":{"tagType":"enum","name":"flying"},"details":"Flying state"},"recovery":{"info":{"tagType":"enum","name":"recovery"},"details":"Recovery state"},"emergency":{"info":{"tagType":"enum","name":"emergency"},"details":"Emergency state"},"usertakeoff":{"info":{"tagType":"enum","name":"usertakeoff"},"details":"User take off state. Waiting for user action to take off."},"init":{"info":{"tagType":"enum","name":"init"},"details":"Initializing state (user should let the drone steady for a while)"},"lookup":{},"value":null},"lookup":{"0":"state"}},"MotorModeChanged":{"info":{"tagType":"cmd","name":"MotorModeChanged","id":2},"details":"Motor mode changed","mode":{"info":{"tagType":"arg","name":"mode","type":"enum","id":0,"bytes":1},"normal":{"info":{"tagType":"enum","name":"normal"},"details":"The motors will only start on user action after being in state user take off"},"forced":{"info":{"tagType":"enum","name":"forced"},"details":"Motors will use the current pcmd values without considering the flying state"},"lookup":{},"value":null},"lookup":{"0":"mode"}},"AttitudeChanged":{"info":{"tagType":"cmd","name":"AttitudeChanged","id":3},"details":"Drone attitude changed","roll":{"info":{"tagType":"arg","name":"roll","type":"float","id":0,"bytes":4},"details":"roll value (in radian) (relative to horizontal)","lookup":{},"value":null},"pitch":{"info":{"tagType":"arg","name":"pitch","type":"float","id":1,"bytes":4},"details":"Pitch value (in radian) (relative to horizontal)","lookup":{},"value":null},"yaw":{"info":{"tagType":"arg","name":"yaw","type":"float","id":2,"bytes":4},"details":"Yaw value (in radian) (relative to North)","lookup":{},"value":null},"lookup":{"0":"roll","1":"pitch","2":"yaw"}},"AltitudeChanged":{"info":{"tagType":"cmd","name":"AltitudeChanged","id":4},"details":"Drone altitude changed","altitude":{"info":{"tagType":"arg","name":"altitude","type":"float","id":0,"bytes":4},"details":"Altitude in meters relative to take off altitude","lookup":{},"value":null},"lookup":{"0":"altitude"}},"lookup":{"0":"AlertStateChanged","1":"FlyingStateChanged","2":"MotorModeChanged","3":"AttitudeChanged","4":"AltitudeChanged"}},"PilotingSettings":{"info":{"tagType":"class","name":"PilotingSettings","id":2},"details":"Piloting settings","set":{"info":{"tagType":"cmd","name":"set","id":0},"details":"Set the given setting","setting":{"info":{"tagType":"arg","name":"setting","type":"enum","id":0,"bytes":1},"details":"Variety of setting that can be customized","MAX_ROLL":{"info":{"tagType":"enum","name":"MAX_ROLL"},"details":"Max roll value. In degree."},"ROLL_KP":{"info":{"tagType":"enum","name":"ROLL_KP"},"details":"How fast the plane reaches the desired roll angle. No unit."},"ROLL_RATE_KP":{"info":{"tagType":"enum","name":"ROLL_RATE_KP"},"details":"How fast the plane reaches the desired roll rate. No unit."},"MAX_PITCH":{"info":{"tagType":"enum","name":"MAX_PITCH"},"details":"Max pitch value. In degree."},"MIN_PITCH":{"info":{"tagType":"enum","name":"MIN_PITCH"},"details":"Min pitch value. In degree."},"PITCH_KP":{"info":{"tagType":"enum","name":"PITCH_KP"},"details":"How fast the plane reaches the desired pitch angle. No unit."},"PITCH_RATE_KP":{"info":{"tagType":"enum","name":"PITCH_RATE_KP"},"details":"How fast the plane reaches the desired pitch rate. No unit."},"YAW_KP":{"info":{"tagType":"enum","name":"YAW_KP"},"details":"How fast the plane reaches the desired yaw angle. No unit."},"YAW_RATE_KP":{"info":{"tagType":"enum","name":"YAW_RATE_KP"},"details":"How fast the plane reaches the desired yaw rate. No unit."},"ROLL_TO_THROTTLE_RATE":{"info":{"tagType":"enum","name":"ROLL_TO_THROTTLE_RATE"},"details":"Portion of thrust that is added to motors according to the roll/yaw command to compensate a dive during turn. No unit."},"ANGLE_OF_ATTACK":{"info":{"tagType":"enum","name":"ANGLE_OF_ATTACK"},"details":"Angle of attack of a plane needed horizontal flight."},"ALT_HOLD":{"info":{"tagType":"enum","name":"ALT_HOLD"},"details":"Altitude hold during autopilot. 0 for false, other value for true."},"ALT_HOLD_THROTTLE":{"info":{"tagType":"enum","name":"ALT_HOLD_THROTTLE"},"details":"Altitude hold throttle. Expressed in percentage divided by 100 (from 0 to 1)."},"DR_RSSI_EDGE":{"info":{"tagType":"enum","name":"DR_RSSI_EDGE"},"details":"Rssi value that indicates that the airplane is close to the pilot."},"RECOVERY_DURATION_LIMIT":{"info":{"tagType":"enum","name":"RECOVERY_DURATION_LIMIT"},"details":"Limit time for return home duration. In seconds."},"WIND_SPEED":{"info":{"tagType":"enum","name":"WIND_SPEED"},"details":"Wind speed in m/s. Should be sent before flight."},"PLANE_SPEED":{"info":{"tagType":"enum","name":"PLANE_SPEED"},"details":"Target plane speed in m/s. Should be sent before flight."},"lookup":{},"value":null},"value":{"info":{"tagType":"arg","name":"value","type":"float","id":1,"bytes":4},"details":"value of the given setting","lookup":{},"value":null},"lookup":{"0":"setting","1":"value"}},"lookup":{"0":"set"}},"PilotingSettingsState":{"info":{"tagType":"class","name":"PilotingSettingsState","id":3},"details":"Piloting settings","settingChanged":{"info":{"tagType":"cmd","name":"settingChanged","id":0,"type":"MAP_ITEM"},"details":"Fired when a setting has changed","setting":{"info":{"tagType":"arg","name":"setting","type":"enum","id":0,"bytes":1},"details":"Variety of setting that can be customized","MAX_ROLL":{"info":{"tagType":"enum","name":"MAX_ROLL"},"details":"Max roll value. In degree."},"ROLL_KP":{"info":{"tagType":"enum","name":"ROLL_KP"},"details":"How fast the plane reaches the desired roll angle. No unit."},"ROLL_RATE_KP":{"info":{"tagType":"enum","name":"ROLL_RATE_KP"},"details":"How fast the plane reaches the desired roll rate. No unit."},"MAX_PITCH":{"info":{"tagType":"enum","name":"MAX_PITCH"},"details":"Max pitch value. In degree."},"MIN_PITCH":{"info":{"tagType":"enum","name":"MIN_PITCH"},"details":"Min pitch value. In degree."},"PITCH_KP":{"info":{"tagType":"enum","name":"PITCH_KP"},"details":"How fast the plane reaches the desired pitch angle. No unit."},"PITCH_RATE_KP":{"info":{"tagType":"enum","name":"PITCH_RATE_KP"},"details":"How fast the plane reaches the desired pitch rate. No unit."},"YAW_KP":{"info":{"tagType":"enum","name":"YAW_KP"},"details":"How fast the plane reaches the desired yaw angle. No unit."},"YAW_RATE_KP":{"info":{"tagType":"enum","name":"YAW_RATE_KP"},"details":"How fast the plane reaches the desired yaw rate. No unit."},"ROLL_TO_THROTTLE_RATE":{"info":{"tagType":"enum","name":"ROLL_TO_THROTTLE_RATE"},"details":"Portion of thrust that is added to motors according to the roll/yaw command to compensate a dive during turn. No unit."},"ANGLE_OF_ATTACK":{"info":{"tagType":"enum","name":"ANGLE_OF_ATTACK"},"details":"Angle of attack of a plane needed horizontal flight."},"ALT_HOLD":{"info":{"tagType":"enum","name":"ALT_HOLD"},"details":"Altitude hold during autopilot. 0 for false, other value for true."},"ALT_HOLD_THROTTLE":{"info":{"tagType":"enum","name":"ALT_HOLD_THROTTLE"},"details":"Altitude hold throttle. Expressed in percentage divided by 100 (from 0 to 1)."},"DR_RSSI_EDGE":{"info":{"tagType":"enum","name":"DR_RSSI_EDGE"},"details":"Rssi value that indicates that the airplane is close to the pilot."},"RECOVERY_DURATION_LIMIT":{"info":{"tagType":"enum","name":"RECOVERY_DURATION_LIMIT"},"details":"Limit time for return home duration. In seconds."},"WIND_SPEED":{"info":{"tagType":"enum","name":"WIND_SPEED"},"details":"Wind speed in m/s."},"PLANE_SPEED":{"info":{"tagType":"enum","name":"PLANE_SPEED"},"details":"Target plane speed in m/s."},"lookup":{},"value":null},"current":{"info":{"tagType":"arg","name":"current","type":"float","id":1,"bytes":4},"details":"Current value of the given setting","lookup":{},"value":null},"min":{"info":{"tagType":"arg","name":"min","type":"float","id":2,"bytes":4},"details":"Minimal value of the given setting","lookup":{},"value":null},"max":{"info":{"tagType":"arg","name":"max","type":"float","id":3,"bytes":4},"details":"Max value of the given setting","lookup":{},"value":null},"list_flags":{"info":{"tagType":"arg","name":"list_flags","type":"u8","id":4,"bytes":1},"details":"List entry attribute Bitfield. 0x01: First: indicate it's the first element of the list. 0x02: Last: indicate it's the last element of the list. 0x04: Empty: indicate the list is empty (implies First/Last). All other arguments should be ignored. 0x08: Remove: This value should be removed from the existing list.","lookup":{},"value":null},"lookup":{"0":"setting","1":"current","2":"min","3":"max","4":"list_flags"}},"lookup":{"0":"settingChanged"}},"MediaRecord":{"info":{"tagType":"class","name":"MediaRecord","id":4},"details":"Media recording management","PictureV2":{"info":{"tagType":"cmd","name":"PictureV2","id":0},"details":"Take picture","lookup":{}},"VideoV2":{"info":{"tagType":"cmd","name":"VideoV2","id":1},"details":"Video record","record":{"info":{"tagType":"arg","name":"record","type":"enum","id":0,"bytes":1},"details":"Command to record video","stop":{"info":{"tagType":"enum","name":"stop"},"details":"Stop the video recording"},"start":{"info":{"tagType":"enum","name":"start"},"details":"Start the video recording"},"lookup":{},"value":null},"lookup":{"0":"record"}},"lookup":{"0":"PictureV2","1":"VideoV2"}},"MediaRecordState":{"info":{"tagType":"class","name":"MediaRecordState","id":5},"details":"State of media recording","PictureStateChangedV2":{"info":{"tagType":"cmd","name":"PictureStateChangedV2","id":0},"details":"State of device picture recording changed","state":{"info":{"tagType":"arg","name":"state","type":"enum","id":0,"bytes":1},"details":"State of device picture recording","ready":{"info":{"tagType":"enum","name":"ready"},"details":"The picture recording is ready"},"busy":{"info":{"tagType":"enum","name":"busy"},"details":"The picture recording is busy"},"notAvailable":{"info":{"tagType":"enum","name":"notAvailable"},"details":"The picture recording is not available"},"lookup":{},"value":null},"error":{"info":{"tagType":"arg","name":"error","type":"enum","id":1,"bytes":1},"details":"Error to explain the state","ok":{"info":{"tagType":"enum","name":"ok"},"details":"No Error"},"unknown":{"info":{"tagType":"enum","name":"unknown"},"details":"Unknown generic error"},"camera_ko":{"info":{"tagType":"enum","name":"camera_ko"},"details":"Picture camera is out of order"},"memoryFull":{"info":{"tagType":"enum","name":"memoryFull"},"details":"Memory full ; cannot save one additional picture"},"lowBattery":{"info":{"tagType":"enum","name":"lowBattery"},"details":"Battery is too low to start/keep recording."},"lookup":{},"value":null},"lookup":{"0":"state","1":"error"}},"VideoStateChangedV2":{"info":{"tagType":"cmd","name":"VideoStateChangedV2","id":1},"details":"State of device video recording changed","state":{"info":{"tagType":"arg","name":"state","type":"enum","id":0,"bytes":1},"details":"State of device video recording","stopped":{"info":{"tagType":"enum","name":"stopped"},"details":"Video is stopped"},"started":{"info":{"tagType":"enum","name":"started"},"details":"Video is started"},"notAvailable":{"info":{"tagType":"enum","name":"notAvailable"},"details":"The video recording is not available"},"lookup":{},"value":null},"error":{"info":{"tagType":"arg","name":"error","type":"enum","id":1,"bytes":1},"details":"Error to explain the state","ok":{"info":{"tagType":"enum","name":"ok"},"details":"No Error"},"unknown":{"info":{"tagType":"enum","name":"unknown"},"details":"Unknown generic error"},"camera_ko":{"info":{"tagType":"enum","name":"camera_ko"},"details":"Video camera is out of order"},"memoryFull":{"info":{"tagType":"enum","name":"memoryFull"},"details":"Memory full ; cannot save one additional video"},"lowBattery":{"info":{"tagType":"enum","name":"lowBattery"},"details":"Battery is too low to start/keep recording."},"lookup":{},"value":null},"lookup":{"0":"state","1":"error"}},"lookup":{"0":"PictureStateChangedV2","1":"VideoStateChangedV2"}},"MediaRecordEvent":{"info":{"tagType":"class","name":"MediaRecordEvent","id":6},"details":"Events of media recording","PictureEventChanged":{"info":{"tagType":"cmd","name":"PictureEventChanged","id":0,"content":"NOTIFICATION"},"details":"Event of picture recording","event":{"info":{"tagType":"arg","name":"event","type":"enum","id":0,"bytes":1},"details":"Last event of picture recording","taken":{"info":{"tagType":"enum","name":"taken"},"details":"Picture taken and saved"},"failed":{"info":{"tagType":"enum","name":"failed"},"details":"Picture failed"},"lookup":{},"value":null},"error":{"info":{"tagType":"arg","name":"error","type":"enum","id":1,"bytes":1},"details":"Error to explain the event","ok":{"info":{"tagType":"enum","name":"ok"},"details":"No Error"},"unknown":{"info":{"tagType":"enum","name":"unknown"},"details":"Unknown generic error ; only when state is failed"},"busy":{"info":{"tagType":"enum","name":"busy"},"details":"Picture recording is busy ; only when state is failed"},"notAvailable":{"info":{"tagType":"enum","name":"notAvailable"},"details":"Picture recording not available ; only when state is failed"},"memoryFull":{"info":{"tagType":"enum","name":"memoryFull"},"details":"Memory full ; only when state is failed"},"lowBattery":{"info":{"tagType":"enum","name":"lowBattery"},"details":"Battery is too low to record."},"lookup":{},"value":null},"lookup":{"0":"event","1":"error"}},"VideoEventChanged":{"info":{"tagType":"cmd","name":"VideoEventChanged","id":1,"content":"NOTIFICATION"},"details":"Event of video recording","event":{"info":{"tagType":"arg","name":"event","type":"enum","id":0,"bytes":1},"details":"Event of video recording","start":{"info":{"tagType":"enum","name":"start"},"details":"Video start"},"stop":{"info":{"tagType":"enum","name":"stop"},"details":"Video stop and saved"},"failed":{"info":{"tagType":"enum","name":"failed"},"details":"Video failed"},"lookup":{},"value":null},"error":{"info":{"tagType":"arg","name":"error","type":"enum","id":1,"bytes":1},"details":"Error to explain the event","ok":{"info":{"tagType":"enum","name":"ok"},"details":"No Error"},"unknown":{"info":{"tagType":"enum","name":"unknown"},"details":"Unknown generic error ; only when state is failed"},"busy":{"info":{"tagType":"enum","name":"busy"},"details":"Video recording is busy ; only when state is failed"},"notAvailable":{"info":{"tagType":"enum","name":"notAvailable"},"details":"Video recording not available ; only when state is failed"},"memoryFull":{"info":{"tagType":"enum","name":"memoryFull"},"details":"Memory full"},"lowBattery":{"info":{"tagType":"enum","name":"lowBattery"},"details":"Battery is too low to record."},"autoStopped":{"info":{"tagType":"enum","name":"autoStopped"},"details":"Video was auto stopped"},"lookup":{},"value":null},"lookup":{"0":"event","1":"error"}},"lookup":{"0":"PictureEventChanged","1":"VideoEventChanged"}},"NetworkSettings":{"info":{"tagType":"class","name":"NetworkSettings","id":7},"details":"Network settings commands","WifiSelection":{"info":{"tagType":"cmd","name":"WifiSelection","id":0},"details":"Auto_select channel of choosen band","type":{"info":{"tagType":"arg","name":"type","type":"enum","id":0,"bytes":1},"details":"The type of wifi selection (auto, manual)","auto":{"info":{"tagType":"enum","name":"auto"},"details":"Auto selection"},"manual":{"info":{"tagType":"enum","name":"manual"},"details":"Manual selection"},"lookup":{},"value":null},"band":{"info":{"tagType":"arg","name":"band","type":"enum","id":1,"bytes":1},"details":"The allowed band(s) : 2.4 Ghz, 5 Ghz, or all","_2_4ghz":{"info":{"tagType":"enum","name":"_2_4ghz"},"details":"2.4 GHz band"},"_5ghz":{"info":{"tagType":"enum","name":"_5ghz"},"details":"5 GHz band"},"all":{"info":{"tagType":"enum","name":"all"},"details":"Both 2.4 and 5 GHz bands"},"lookup":{},"value":null},"channel":{"info":{"tagType":"arg","name":"channel","type":"u8","id":2,"bytes":1},"details":"The channel (not used in auto mode)","lookup":{},"value":null},"lookup":{"0":"type","1":"band","2":"channel"}},"lookup":{"0":"WifiSelection"}},"NetworkSettingsState":{"info":{"tagType":"class","name":"NetworkSettingsState","id":8},"details":"Network settings state from product","WifiSelectionChanged":{"info":{"tagType":"cmd","name":"WifiSelectionChanged","id":0},"details":"Wifi selection from product","type":{"info":{"tagType":"arg","name":"type","type":"enum","id":0,"bytes":1},"details":"The type of wifi selection settings","auto_all":{"info":{"tagType":"enum","name":"auto_all"},"details":"Auto selection"},"auto__2_4ghz":{"info":{"tagType":"enum","name":"auto__2_4ghz"},"details":"Auto selection 2.4ghz"},"auto__5ghz":{"info":{"tagType":"enum","name":"auto__5ghz"},"details":"Auto selection 5 ghz"},"manual":{"info":{"tagType":"enum","name":"manual"},"details":"Manual selection"},"lookup":{},"value":null},"band":{"info":{"tagType":"arg","name":"band","type":"enum","id":1,"bytes":1},"details":"The actual wifi band state","_2_4ghz":{"info":{"tagType":"enum","name":"_2_4ghz"},"details":"2.4 GHz band"},"_5ghz":{"info":{"tagType":"enum","name":"_5ghz"},"details":"5 GHz band"},"all":{"info":{"tagType":"enum","name":"all"},"details":"Both 2.4 and 5 GHz bands"},"lookup":{},"value":null},"channel":{"info":{"tagType":"arg","name":"channel","type":"u8","id":2,"bytes":1},"details":"The channel (depends of the band)","lookup":{},"value":null},"lookup":{"0":"type","1":"band","2":"channel"}},"lookup":{"0":"WifiSelectionChanged"}},"Network":{"info":{"tagType":"class","name":"Network","id":9},"details":"Network related commands","WifiScan":{"info":{"tagType":"cmd","name":"WifiScan","id":0},"details":"Launches wifi network scan","band":{"info":{"tagType":"arg","name":"band","type":"enum","id":0,"bytes":1},"details":"The band(s) : 2.4 Ghz, 5 Ghz, or both","_2_4ghz":{"info":{"tagType":"enum","name":"_2_4ghz"},"details":"2.4 GHz band"},"_5ghz":{"info":{"tagType":"enum","name":"_5ghz"},"details":"5 GHz band"},"all":{"info":{"tagType":"enum","name":"all"},"details":"Both 2.4 and 5 GHz bands"},"lookup":{},"value":null},"lookup":{"0":"band"}},"WifiAuthChannel":{"info":{"tagType":"cmd","name":"WifiAuthChannel","id":1},"details":"Controller inquire the list of authorized wifi channels.","lookup":{}},"lookup":{"0":"WifiScan","1":"WifiAuthChannel"}},"NetworkState":{"info":{"tagType":"class","name":"NetworkState","id":10},"details":"Network state from Product","WifiScanListChanged":{"info":{"tagType":"cmd","name":"WifiScanListChanged","id":0,"type":"MAP_ITEM"},"details":"One scanning result found","ssid":{"info":{"tagType":"arg","name":"ssid","type":"string","id":0,"bytes":1},"details":"SSID of the AP","lookup":{},"value":null},"rssi":{"info":{"tagType":"arg","name":"rssi","type":"i16","id":1,"bytes":2},"details":"RSSI of the AP in dbm (negative value)","lookup":{},"value":null},"band":{"info":{"tagType":"arg","name":"band","type":"enum","id":2,"bytes":1},"details":"The band : 2.4 GHz or 5 GHz","_2_4ghz":{"info":{"tagType":"enum","name":"_2_4ghz"},"details":"2.4 GHz band"},"_5ghz":{"info":{"tagType":"enum","name":"_5ghz"},"details":"5 GHz band"},"lookup":{},"value":null},"channel":{"info":{"tagType":"arg","name":"channel","type":"u8","id":3,"bytes":1},"details":"Channel of the AP","lookup":{},"value":null},"lookup":{"0":"ssid","1":"rssi","2":"band","3":"channel"}},"AllWifiScanChanged":{"info":{"tagType":"cmd","name":"AllWifiScanChanged","id":1},"details":"State sent when all scanning result sent","lookup":{}},"WifiAuthChannelListChanged":{"info":{"tagType":"cmd","name":"WifiAuthChannelListChanged","id":2,"type":"LIST_ITEM"},"details":"Notify of an Authorized Channel.","band":{"info":{"tagType":"arg","name":"band","type":"enum","id":0,"bytes":1},"details":"The band of this channel : 2.4 GHz or 5 GHz","_2_4ghz":{"info":{"tagType":"enum","name":"_2_4ghz"},"details":"2.4 GHz band"},"_5ghz":{"info":{"tagType":"enum","name":"_5ghz"},"details":"5 GHz band"},"lookup":{},"value":null},"channel":{"info":{"tagType":"arg","name":"channel","type":"u8","id":1,"bytes":1},"details":"The authorized channel.","lookup":{},"value":null},"in_or_out":{"info":{"tagType":"arg","name":"in_or_out","type":"u8","id":2,"bytes":1},"details":"Bit 0 is 1 if channel is authorized outside (0 otherwise) ; Bit 1 is 1 if channel is authorized inside (0 otherwise)","lookup":{},"value":null},"lookup":{"0":"band","1":"channel","2":"in_or_out"}},"AllWifiAuthChannelChanged":{"info":{"tagType":"cmd","name":"AllWifiAuthChannelChanged","id":3},"details":"Notify the end of the list of Authorized wifi Channel.","lookup":{}},"LinkQualityChanged":{"info":{"tagType":"cmd","name":"LinkQualityChanged","id":4},"details":"Notification sent by the firmware to give an indication of the WiFi link quality.","quality":{"info":{"tagType":"arg","name":"quality","type":"u8","id":0,"bytes":1},"details":"The WiFi link quality in range 0_6, the higher the value, the higher the link quality.","lookup":{},"value":null},"lookup":{"0":"quality"}},"lookup":{"0":"WifiScanListChanged","1":"AllWifiScanChanged","2":"WifiAuthChannelListChanged","3":"AllWifiAuthChannelChanged","4":"LinkQualityChanged"}},"MediaStreaming":{"info":{"tagType":"class","name":"MediaStreaming","id":11},"details":"Control media streaming behavior.","VideoEnable":{"info":{"tagType":"cmd","name":"VideoEnable","id":0},"details":"Enable/disable video streaming.","enable":{"info":{"tagType":"arg","name":"enable","type":"u8","id":0,"bytes":1},"details":"1 to enable, 0 to disable.","lookup":{},"value":null},"lookup":{"0":"enable"}},"lookup":{"0":"VideoEnable"}},"MediaStreamingState":{"info":{"tagType":"class","name":"MediaStreamingState","id":12},"details":"Media streaming status.","VideoEnableChanged":{"info":{"tagType":"cmd","name":"VideoEnableChanged","id":0},"details":"Return video streaming status.","enabled":{"info":{"tagType":"arg","name":"enabled","type":"enum","id":0,"bytes":1},"details":"Current video streaming status.","enabled":{"info":{"tagType":"enum","name":"enabled"},"details":"Video streaming is enabled."},"disabled":{"info":{"tagType":"enum","name":"disabled"},"details":"Video streaming is disabled."},"error":{"info":{"tagType":"enum","name":"error"},"details":"Video streaming failed to start."},"lookup":{},"value":null},"lookup":{"0":"enabled"}},"lookup":{"0":"VideoEnableChanged"}},"VideoSettings":{"info":{"tagType":"class","name":"VideoSettings","id":13},"details":"Video settings.","Autorecord":{"info":{"tagType":"cmd","name":"Autorecord","id":0},"details":"Set video automatic recording state.","enable":{"info":{"tagType":"arg","name":"enable","type":"u8","id":0,"bytes":1},"details":"0: Disabled 1: Enabled.","lookup":{},"value":null},"lookup":{"0":"enable"}},"VideoMode":{"info":{"tagType":"cmd","name":"VideoMode","id":1},"details":"Set video mode","mode":{"info":{"tagType":"arg","name":"mode","type":"enum","id":0,"bytes":1},"details":"Video mode","quality":{"info":{"tagType":"enum","name":"quality"},"details":"Maximize video quality (VGA 30fps)."},"performance":{"info":{"tagType":"enum","name":"performance"},"details":"Maximize video performance (QVGA 24fps)."},"lookup":{},"value":null},"lookup":{"0":"mode"}},"lookup":{"0":"Autorecord","1":"VideoMode"}},"VideoSettingsState":{"info":{"tagType":"class","name":"VideoSettingsState","id":14},"details":"Video settings state.","AutorecordChanged":{"info":{"tagType":"cmd","name":"AutorecordChanged","id":0},"details":"Get video automatic recording status.","enabled":{"info":{"tagType":"arg","name":"enabled","type":"u8","id":0,"bytes":1},"details":"0: Disabled 1: Enabled.","lookup":{},"value":null},"lookup":{"0":"enabled"}},"VideoModeChanged":{"info":{"tagType":"cmd","name":"VideoModeChanged","id":1},"details":"Video mode","mode":{"info":{"tagType":"arg","name":"mode","type":"enum","id":0,"bytes":1},"details":"Video mode","quality":{"info":{"tagType":"enum","name":"quality"},"details":"Maximize video quality (VGA 30fps)."},"performance":{"info":{"tagType":"enum","name":"performance"},"details":"Maximize video performance (QVGA 24fps)."},"lookup":{},"value":null},"lookup":{"0":"mode"}},"lookup":{"0":"AutorecordChanged","1":"VideoModeChanged"}},"Sounds":{"info":{"tagType":"class","name":"Sounds","id":15},"details":"Sounds related commands.","buzz":{"info":{"tagType":"cmd","name":"buzz","id":0},"details":"Enable/disable the buzzer sound","enable":{"info":{"tagType":"arg","name":"enable","type":"u8","id":0,"bytes":1},"details":"0: Disabled 1: Enabled.","lookup":{},"value":null},"lookup":{"0":"enable"}},"lookup":{"0":"buzz"}},"SoundsState":{"info":{"tagType":"class","name":"SoundsState","id":16},"details":"Sound related events.","buzzChanged":{"info":{"tagType":"cmd","name":"buzzChanged","id":0},"details":"State of the buzzer","enabled":{"info":{"tagType":"arg","name":"enabled","type":"u8","id":0,"bytes":1},"details":"0: Disabled 1: Enabled.","lookup":{},"value":null},"lookup":{"0":"enabled"}},"lookup":{"0":"buzzChanged"}},"lookup":{"0":"Piloting","1":"PilotingState","2":"PilotingSettings","3":"PilotingSettingsState","4":"MediaRecord","5":"MediaRecordState","6":"MediaRecordEvent","7":"NetworkSettings","8":"NetworkSettingsState","9":"Network","10":"NetworkState","11":"MediaStreaming","12":"MediaStreamingState","13":"VideoSettings","14":"VideoSettingsState","15":"Sounds","16":"SoundsState"}},"lookup":{"8":"powerup"}}

module.exports=projects;
              