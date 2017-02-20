# node-parrot-drone for node

## Control Any Parrot Drone
This is the core module for connecting to and controlling ` any ` Parrot drone with JavaScript! It is designed to be extended with new drone projects, classes and commands as they are created by Parrot.

This module contains the core code for such extensions with all shared information and commands. It is responsible for connecting, receiving and sending messages, automated responses, parsing data and populating drone status as well as dispatching drone events, updates and status changes. All drone modules using this as the core will automatically receive this information once they have updated the ` drone.projects ` object. This should be done by creating new classes and commands extending the ` /api/BaseClasses.js ` class.  

# This module is Beta as of February 2017

**Broken while upgrading to latest SDK v3_11**

## Connecting to a drone

```javascript

    const parrot=require('node-parrot-drone');

    const drone=new parrot.Wifi;

    function connected(){
      console.log('connected');
    }

    //the drone will emit a connected event
    drone.on(
        'connected',
        connected
    );

    //optionally you can pass a callback to the connect method if you prefer
    drone.connect(connected);

```

## Listening for all messages from the drone

There will be a lot of messages, but you can check for the ones you like using the projectID, classID and commandName. This is especially useful when debugging or hacking a new drone.

```javascript

    drone.on(
        'message',
        function(message){
          console.log(message);
        }
    );

```

## Listening for changes on specific drone argument sets

This is probably the most useful way to monitor your drones state.

```javascript

    //debug or see non automatic messages (pings, pongs, etc. are not bubbled)
    drone.on(
        'message',
        function(message){
          console.log(message);
        }
    );

    drone.on(
        'responseError',
        function(message){
          console.log('The drone sent a malformed message. Probably not important.');
          console.log(message);
        }
    );

    drone.on(
        'messageSent',
        function(data){
          console.log('Debug your messages if needed.');
          console.log(data);
        }
    );

    drone.on(
        '*',
        function(type,data){
          console.log('OMG listening to all events...');
          console.log(type,data);
        }
    );

    function batteryStateChanged(commandRef){
      //commandRef is a reference to the command itself in the project state
      console.log('battery is now at %d percent',commandRef.percent);
    }

    //listen for changes on the command state
    drone.projects.common.BatteryStateChanged.on(
        'change',
        batteryStateChanged
    );

    //or listen for the specific event on the drone
    drone.on(
        'batteryStateChanged',
        batteryStateChanged
    );

```

## Sending commands or updating values on your drone

```javascript

    const project=drone.projects.common;

    //build a message requesting all settings
    const getSettingsState=drone.message.build(
      project.id,
      project.settings.id,
      project.settings.allSettings
    );

    //build a message requesting all common states, like battery percent :)
    const getCommonState=drone.message.build(
      project.id,
      project.common.id,
      project.common.allStates
    );

    //update the magnetoCalibration value on the project state
    drone.message.command=project.calibration.magnetoCalibration;

    //build a message with the updated value
    const calibrate=drone.message.build(
      project.id,
      project.calibration.id,
      project.calibration.magnetoCalibration
    );

    //send all the commands to the drone
    drone.message.send(getSettingsState);
    drone.message.send(getCommonState);
    drone.message.send(calibrate);

```

## Really verbose logging about messages and drone connectivity

Put these lines in before connecting to see detailed TCP and UDP info.

```javascript

    drone.discovery.config.silent=false;
    drone.d2c.config.silent=false;

```

## License

DBAD
