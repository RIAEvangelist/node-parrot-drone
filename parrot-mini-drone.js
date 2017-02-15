const MiniDrone=require('./abstract/MiniDrone.js');

module.exports={
  MiniDrone
};

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
