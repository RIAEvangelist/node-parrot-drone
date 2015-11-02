var ipc=require('node-ipc');
var constants=require('./lib/sharedARConstants.js');
var os=require('os');

ipc.config={
    appspace        : 'mini-drone.',
    socketRoot      : '/tmp/',
    id              : os.hostname(),
    networkHost     : '0.0.0.0', //will listen for external messages
    networkPort     : 7778,
    encoding        : 'utf8',
    rawBuffer       : true,
    silent          : false,
    maxConnections  : 100,
    retry           : 1000,
    maxRetries      : Infinity,
    stopRetrying    : false
}

var defaultConfig={
    droneName:undefined,
    droneIp:undefined,
    discoveryPort:undefined,

    //client sends message to drone port
    c2d_port:undefined,
    //drone sends message to client port
    d2c_port:undefined,

    //client sends update to drone
    c2d_update_port:undefined,
    //client connects to drone (telnet)
    c2d_user_port:undefined,

    arstream_fragment_size:undefined,
    arstream_fragment_maximum_number:undefined,
    arstream_max_ack_interval:undefined,

    controller_type:'tablet',
    controller_name:'node-mini-drone',
    device_id:undefined,

    skycontroller_version:undefined,
    status:undefined,

    constants:constants
}

function MiniDrone(){
    Object.defineProperties(
        this,
        {
            config:{
                value:Object.assign(
                    {},
                    defaultConfig
                ),
                writable  :true,
                enumerable:true
            },
            connect:{
                writable  :false,
                enumerable:true,
                value:connect.bind(this)
            },
            ipc:{
                value:ipc,
                writeable:false,
                enumerable:true
            }
        }
    );
    Object.seal(this);
}

function connect(){
    this.ipc.connectToNet(
        this.config.droneName,
        this.config.droneIp,
        this.config.discoveryPort
    );

    this.ipc.of[this.config.droneName].on(
        'connect',
        connectedToDrone.bind(this)
    );
}

function connectedToDrone(){
    var message={
      'controller_type': this.config.controller_type,
      'controller_name': this.config.controller_name,
      'd2c_port': this.config.d2c_port
    }

    this.ipc.of[this.config.droneName].on(
        'data',
        configureDrone.bind(this)
    );

    this.ipc.of[this.config.droneName].emit(
        JSON.stringify(message)
    );
}

function configureDrone(data){
    var data=data.toString().replace(/\0/g,'');

    try{
        data=JSON.parse(data);
    }catch(err){
        console.log(err);
        return;
    }

    this.config=Object.assign(
        this.config,
        data
    );

    this.ipc.disconnect(this.config.droneName);

    this.ipc.serveNet(
        this.config.d2c_port,
        'udp4',
        initDrone.bind(this)
    );
}

function initDrone(){
    var message=new Message();
    message.data=new Buffer(4);

    message.data.writeUInt8(constants.ARCOMMANDS_ID_PROJECT_COMMON, 0);
    message.data.writeUInt8(constants.ARCOMMANDS_ID_COMMON_CLASS_COMMON, 1);
    message.data.writeUInt16LE(constants.ARCOMMANDS_ID_COMMON_COMMON_CMD_ALLSTATES, 2);

    this.ipc.server.on(
        'message',
        gotResponse
    );

    console.log(message);

    this.ipc.server.emit(
        {
            address : this.config.droneIp,
            port    : this.config.c2d_port
        },
        message
    );
}

function gotResponse(data){
    response=new Response();
    response.load(data);
    console.log(response);
}

function Message() {
    //
    // ARNETWORKAL_Frame_t
    //
    // uint8  type  - frame type ARNETWORK_FRAME_TYPE
    // uint8  id      - identifier of the buffer sending the frame
    // uint8  seq   - sequence number of the frame
    // uint32 size  - size of the frame
    //
    Object.defineProperties(
        this,
        {
            type:{
                value:constants.ARNETWORKAL_FRAME_TYPE_DATA,
                writable:true,
                enumerable:true
            },
            id:{
                value:constants.BD_NET_CD_NONACK_ID,
                writable:true,
                enumerable:true
            },
            index:{
                get:getIndex,
                set:null
            },
            data:{
                value:new Buffer(),
                writable:true,
                enumerable:true
            },
            send:{
                value:sendMessage,
                writable:false,
                enumerable:true
            }
        }
    );

    var messageIndex = [];
    var headerLength = 7 // size of ARNETWORKAL_Frame_t header
    var header = new Buffer(hlen);

    function getIndex(){
        return messageIndex[this.id];
    }

    function sendMessage() {
        if (!messageIndex[this.id]) {
            messageIndex[this.id] = 0;
        }

        messageIndex[this.id]++;

        if (messageIndex[this.id] > 255) {
            messageIndex[this.id] = 0;
        }

        header.writeUInt8(this.type, 0);
        header.writeUInt8(this.id, 1);
        header.writeUInt8(messageIndex[id], 2);
        header.writeUInt32LE(this.data.length + headerLength, 3);

        var message=Buffer.concat(
            [
                header,
                data
            ]
        );
    };
}

function Response() {
    Object.defineProperties(
        this,
        {
            load:{
                value:parseMessage,
                writable:false,
                enumerable:true
            },
            raw:{
                get:getRaw,
                set:null
            },
            type:{
                get:getType,
                set:null
            },
            id:{
                get:getId,
                set:null
            },
            data:{
                get:getData,
                set:null
            },
            messageIndex:{
                get:getIndex,
                set:null
            },
            size:{
                get:getSize,
                set:null
            }
        }
    )

    var message={};

    function getRaw(){
        return message.raw;
    }

    function getType(){
        return message.type;
    }

    function getId(){
        return message.id;
    }

    function getData(){
        return message.data;
    }

    function getIndex(){
        return message.index;
    }

    function getSize(){
        return message.size;
    }


    function parseMessage(data){
        message.raw     = data;
        message.type    = buf.readUInt8(0),
        message.id      = buf.readUInt8(1),
        message.index   = buf.readUInt8(2),
        message.size    = buf.readUInt32LE(3)

        if (message.size > 7) {
            message.data = Buffer.concat(
                [
                    data.slice(7)
                ]
            );
        }
    }
}

module.exports.MiniDrone=MiniDrone;

// working on sumo
// function Sumo(){
//     Object.assign(this,new MiniDrone);
//     this.config.ip='192.168.2.1';
//     this.config.toDronePort=54321;
//     this.config.fromDronePort=43210;
//     this.config.connectPort=44444;
//
//     Object.defineProperties(
//         this,
//         {
//             animate:{
//                 writable  :false,
//                 enumerable:true,
//                 value:{
//                     jump:{
//                         long:jumpLong,
//                         high:jumpHigh
//                         spin:jumpSpin
//                     },
//                     posture:{
//                         spinToStand:spinStand
//                     }
//                     stop:stopAnimation,
//                     spin:spin,
//                     spiral:spiral,
//                     tap:tap,
//                     slowShake:shake,
//                     metronome:metronome,
//                     ondulation:ondulate,
//                     slalom:slalom
//                 }
//             },
//             posture:{
//                 writable  :false,
//                 enumerable:true,
//                 value:{
//                     stand:postureStand,
//                     jump:postureJump,
//                     kick:postureKick
//                 }
//             },
//             go:{
//                 writable  :false,
//                 enumerable:true,
//                 value:{
//                     forward:goForward,
//                     backward:goBackward,
//                     left:goLeft,
//                     right:goRight,
//                     stop:stop
//                 }
//             }
//         }
//     }
//     Object.seal(this);
// }
