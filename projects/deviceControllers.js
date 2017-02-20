'use strict';
const projects={lookup:{}};
const ardrone3=require('./ardrone3.js');

const common=require('./common.js');

const jpsumo=require('./jpsumo.js');

const minidrone=require('./minidrone.js');

const powerup=require('./powerup.js');

const skyctrl=require('./skyctrl.js');
Object.assign(projects,ardrone3,common,jpsumo,minidrone,powerup,skyctrl);
Object.assign(projects.lookup,ardrone3.lookup,common.lookup,jpsumo.lookup,minidrone.lookup,powerup.lookup,skyctrl.lookup);

const droneRefs={
  "deviceControllers": {
    "details": "list of all ARController_Device",
    "ARDrone": {
      "info": {
        "tagType": "ARController_Device",
        "name": "ARDrone",
        "product": "ARDRONE",
        "flags": "can_be_extension"
      },
      "details": "AR Drone project",
      "common": common,
      "ardrone3": ardrone3,
      "generic": {
        "info": {
          "tagType": "feature",
          "name": "generic"
        }
      }
    },
    "BebopDrone": {
      "info": {
        "tagType": "ARController_Device",
        "name": "BebopDrone",
        "product": "ARDRONE",
        "flags": "can_be_extension"
      },
      "details": "Bebop Drone project",
      "common": common,
      "ardrone3": ardrone3,
      "generic": {
        "info": {
          "tagType": "feature",
          "name": "generic"
        }
      }
    },
    "JumpingSumo": {
      "info": {
        "tagType": "ARController_Device",
        "name": "JumpingSumo",
        "product": "JS"
      },
      "details": "Jumping Sumo project",
      "common": common,
      "jpsumo": jpsumo
    },
    "JumpingSumoEvoLight": {
      "info": {
        "tagType": "ARController_Device",
        "name": "JumpingSumoEvoLight",
        "product": "JS_EVO_LIGHT"
      },
      "details": "Jumping Sumo Evo light project",
      "common": common,
      "jpsumo": jpsumo
    },
    "JumpingSumoEvoRace": {
      "info": {
        "tagType": "ARController_Device",
        "name": "JumpingSumoEvoRace",
        "product": "JS_EVO_RACE"
      },
      "details": "Jumping Sumo Evo race project",
      "common": common,
      "jpsumo": jpsumo
    },
    "RollingSpider": {
      "info": {
        "tagType": "ARController_Device",
        "name": "RollingSpider",
        "product": "MINIDRONE"
      },
      "details": "Rolling Spider project",
      "common": common,
      "minidrone": minidrone
    },
    "AirborneNight": {
      "info": {
        "tagType": "ARController_Device",
        "name": "AirborneNight",
        "product": "MINIDRONE_EVO_LIGHT"
      },
      "details": "Airborne night project",
      "common": common,
      "minidrone": minidrone
    },
    "AirborneCargo": {
      "info": {
        "tagType": "ARController_Device",
        "name": "AirborneCargo",
        "product": "MINIDRONE_EVO_BRICK"
      },
      "details": "Airborne brick project",
      "common": common,
      "minidrone": minidrone
    },
    "Swing": {
      "info": {
        "tagType": "ARController_Device",
        "name": "Swing",
        "product": "MINIDRONE_WINGX"
      },
      "details": "WingX project",
      "common": common,
      "minidrone": minidrone
    },
    "Mambo": {
      "info": {
        "tagType": "ARController_Device",
        "name": "Mambo",
        "product": "MINIDRONE_DELOS3"
      },
      "details": "Delos3 project",
      "common": common,
      "minidrone": minidrone
    },
    "Hydrofoil": {
      "info": {
        "tagType": "ARController_Device",
        "name": "Hydrofoil",
        "product": "MINIDRONE_EVO_HYDROFOIL"
      },
      "details": "Hydrofoil project",
      "common": common,
      "minidrone": minidrone
    },
    "SkyController": {
      "info": {
        "tagType": "ARController_Device",
        "name": "SkyController",
        "product": "SKYCONTROLLER",
        "flags": "can_have_extension"
      },
      "details": "Sky Controller project",
      "common": common,
      "skyctrl": skyctrl
    },
    "SkyController2": {
      "info": {
        "tagType": "ARController_Device",
        "name": "SkyController2",
        "product": "SKYCONTROLLER_2",
        "flags": "can_have_extension"
      },
      "details": "Sky Controller 2 project",
      "common": common,
      "skyctrl": skyctrl,
      "mapper": {
        "info": {
          "tagType": "feature",
          "name": "mapper"
        }
      },
      "drone_manager": {
        "info": {
          "tagType": "feature",
          "name": "drone_manager"
        }
      }
    },
    "PowerUP": {
      "info": {
        "tagType": "ARController_Device",
        "name": "PowerUP",
        "product": "POWER_UP"
      },
      "details": "Power Up project",
      "common": common,
      "powerup": powerup
    },
    "Bebop2": {
      "info": {
        "tagType": "ARController_Device",
        "name": "Bebop2",
        "product": "BEBOP_2",
        "flags": "can_be_extension"
      },
      "details": "Bebop 2 project",
      "common": common,
      "ardrone3": ardrone3,
      "generic": {
        "info": {
          "tagType": "feature",
          "name": "generic"
        }
      },
      "follow_me": {
        "info": {
          "tagType": "feature",
          "name": "follow_me"
        }
      },
      "controller_info": {
        "info": {
          "tagType": "feature",
          "name": "controller_info"
        }
      }
    },
    "Disco": {
      "info": {
        "tagType": "ARController_Device",
        "name": "Disco",
        "product": "EVINRUDE",
        "flags": "can_be_extension"
      },
      "details": "Disco project",
      "common": common,
      "ardrone3": ardrone3,
      "rc": {
        "info": {
          "tagType": "feature",
          "name": "rc"
        }
      }
    }
  }
}

module.exports={
  drones:droneRefs,
  projects:projects
};
