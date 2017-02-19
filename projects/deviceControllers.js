'use strict';


const droneRefs={
  "_declaration": {
    "info": {
      "version": "1.0",
      "encoding": "UTF-8"
    }
  },
  "_comment": "Copyright (C) 2014 Parrot SA\n\n    Redistribution and use in source and binary forms, with or without\n    modification, are permitted provided that the following conditions\n    are met:\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n    * Redistributions in binary form must reproduce the above copyright\n      notice, this list of conditions and the following disclaimer in\n      the documentation and/or other materials provided with the \n      distribution.\n    * Neither the name of Parrot nor the names\n      of its contributors may be used to endorse or promote products\n      derived from this software without specific prior written\n      permission.\n\n    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n    \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS\n    FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE\n    COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,\n    INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,\n    BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS\n    OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED \n    AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,\n    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT\n    OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF\n    SUCH DAMAGE.",
  "deviceControllers": {
    "details": "list of all ARController_Device",
    "ARController_Device": [
      {
        "info": {
          "name": "BebopDrone",
          "product": "ARDRONE",
          "flags": "can_be_extension"
        },
        "details": "Bebop Drone project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "ardrone3"
            }
          },
          {
            "info": {
              "name": "generic"
            }
          }
        ]
      },
      {
        "info": {
          "name": "JumpingSumo",
          "product": "JS"
        },
        "details": "Jumping Sumo project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "jpsumo"
            }
          }
        ]
      },
      {
        "info": {
          "name": "JumpingSumoEvoLight",
          "product": "JS_EVO_LIGHT"
        },
        "details": "Jumping Sumo Evo light project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "jpsumo"
            }
          }
        ]
      },
      {
        "info": {
          "name": "JumpingSumoEvoRace",
          "product": "JS_EVO_RACE"
        },
        "details": "Jumping Sumo Evo race project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "jpsumo"
            }
          }
        ]
      },
      {
        "info": {
          "name": "RollingSpider",
          "product": "MINIDRONE"
        },
        "details": "Rolling Spider project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "minidrone"
            }
          }
        ]
      },
      {
        "info": {
          "name": "AirborneNight",
          "product": "MINIDRONE_EVO_LIGHT"
        },
        "details": "Airborne night project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "minidrone"
            }
          }
        ]
      },
      {
        "info": {
          "name": "AirborneCargo",
          "product": "MINIDRONE_EVO_BRICK"
        },
        "details": "Airborne brick project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "minidrone"
            }
          }
        ]
      },
      {
        "info": {
          "name": "Swing",
          "product": "MINIDRONE_WINGX"
        },
        "details": "WingX project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "minidrone"
            }
          }
        ]
      },
      {
        "info": {
          "name": "Mambo",
          "product": "MINIDRONE_DELOS3"
        },
        "details": "Delos3 project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "minidrone"
            }
          }
        ]
      },
      {
        "info": {
          "name": "Hydrofoil",
          "product": "MINIDRONE_EVO_HYDROFOIL"
        },
        "details": "Hydrofoil project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "minidrone"
            }
          }
        ]
      },
      {
        "info": {
          "name": "SkyController",
          "product": "SKYCONTROLLER",
          "flags": "can_have_extension"
        },
        "details": "Sky Controller project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "skyctrl"
            }
          }
        ]
      },
      {
        "info": {
          "name": "SkyController2",
          "product": "SKYCONTROLLER_2",
          "flags": "can_have_extension"
        },
        "details": "Sky Controller 2 project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "skyctrl"
            }
          },
          {
            "info": {
              "name": "mapper"
            }
          },
          {
            "info": {
              "name": "drone_manager"
            }
          }
        ]
      },
      {
        "info": {
          "name": "PowerUP",
          "product": "POWER_UP"
        },
        "details": "Power Up project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "powerup"
            }
          }
        ]
      },
      {
        "info": {
          "name": "Bebop2",
          "product": "BEBOP_2",
          "flags": "can_be_extension"
        },
        "details": "Bebop 2 project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "ardrone3"
            }
          },
          {
            "info": {
              "name": "generic"
            }
          },
          {
            "info": {
              "name": "follow_me"
            }
          },
          {
            "info": {
              "name": "controller_info"
            }
          }
        ]
      },
      {
        "info": {
          "name": "Disco",
          "product": "EVINRUDE",
          "flags": "can_be_extension"
        },
        "details": "Disco project",
        "feature": [
          {
            "info": {
              "name": "common"
            }
          },
          {
            "info": {
              "name": "ardrone3"
            }
          },
          {
            "info": {
              "name": "rc"
            }
          }
        ]
      }
    ]
  }
}
