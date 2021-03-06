'use strict';
/*************************************************\
generated from arsdk-xml/xml/*.xml
generated by utils/convertSDK.js
generated on : 2/20/2017, 8:59:08 PM
\**************************************************/
const projects={
  "feature": {
    "info": {
      "id": "139",
      "name": "debug"
    },
    "details": "All commands/events related to the Wifi",
    "enums": {
      "setting_type": {
        "info": {
          "tagType": "enum",
          "name": "setting_type"
        },
        "details": "Setting type.",
        "BOOL": {
          "info": {
            "tagType": "value",
            "name": "BOOL"
          },
          "details": "Boolean Setting. (ex: 0, 1)"
        },
        "DECIMAL": {
          "info": {
            "tagType": "value",
            "name": "DECIMAL"
          },
          "details": "Decimal Setting. (ex: _3.5, 0, 2, 3.6, 6.5)"
        },
        "TEXT": {
          "info": {
            "tagType": "value",
            "name": "TEXT"
          },
          "details": "Single line text Setting."
        }
      },
      "setting_mode": {
        "info": {
          "tagType": "enum",
          "name": "setting_mode"
        },
        "details": "Setting mode.",
        "READ_ONLY": {
          "info": {
            "tagType": "value",
            "name": "READ_ONLY"
          },
          "details": "Controller can only read setting."
        },
        "READ_WRITE": {
          "info": {
            "tagType": "value",
            "name": "READ_WRITE"
          },
          "details": "Controller can read and write setting."
        }
      }
    },
    "msgs": {
      "get_all_settings": {
        "info": {
          "tagType": "cmd",
          "name": "get_all_settings",
          "id": "0"
        },
        "details": "Cmd sent by controller to get all settings info (generate \"settings_info\" events)."
      },
      "set_setting": {
        "info": {
          "tagType": "cmd",
          "name": "set_setting",
          "id": "1"
        },
        "details": "Change setting value. Cmd sent by controller to change a writable setting.",
        "id": {
          "info": {
            "tagType": "arg",
            "name": "id",
            "type": "u16"
          },
          "details": "Setting Id."
        },
        "value": {
          "info": {
            "tagType": "arg",
            "name": "value",
            "type": "string"
          },
          "details": "New setting value (string encoded)."
        }
      },
      "settings_info": {
        "info": {
          "tagType": "evt",
          "name": "settings_info",
          "type": "LIST_ITEM",
          "id": "2"
        },
        "details": "Sent by the drone as answer to get_settings_info Describe a debug setting and give the current value.",
        "listFlags": {
          "info": {
            "tagType": "arg",
            "name": "listFlags",
            "type": "u8"
          },
          "details": "List entry attribute Bitfield. 0x01: First: indicate it's the first element of the list. 0x02: Last: indicate it's the last element of the list. 0x04: Empty: indicate the list is empty (implies First/Last). All other arguments should be ignored."
        },
        "id": {
          "info": {
            "tagType": "arg",
            "name": "id",
            "type": "u16"
          },
          "details": "Setting Id."
        },
        "label": {
          "info": {
            "tagType": "arg",
            "name": "label",
            "type": "string"
          },
          "details": "Setting displayed label (single line)."
        },
        "type": {
          "info": {
            "tagType": "arg",
            "name": "type",
            "type": "enum_setting_type"
          },
          "details": "Setting type."
        },
        "mode": {
          "info": {
            "tagType": "arg",
            "name": "mode",
            "type": "enum_setting_mode"
          },
          "details": "Setting mode."
        },
        "range_min": {
          "info": {
            "tagType": "arg",
            "name": "range_min",
            "type": "string"
          },
          "details": "Setting range minimal value for decimal type."
        },
        "range_max": {
          "info": {
            "tagType": "arg",
            "name": "range_max",
            "type": "string"
          },
          "details": "Setting range max value for decimal type."
        },
        "range_step": {
          "info": {
            "tagType": "arg",
            "name": "range_step",
            "type": "string"
          },
          "details": "Setting step value for decimal type"
        },
        "value": {
          "info": {
            "tagType": "arg",
            "name": "value",
            "type": "string"
          },
          "details": "Current Setting value (string encoded)."
        }
      },
      "settings_list": {
        "info": {
          "tagType": "evt",
          "name": "settings_list",
          "id": "3"
        },
        "details": "Setting value changed. Cmd sent by drone when setting changed occurred.",
        "id": {
          "info": {
            "tagType": "arg",
            "name": "id",
            "type": "u16"
          },
          "details": "Setting Id."
        },
        "value": {
          "info": {
            "tagType": "arg",
            "name": "value",
            "type": "string"
          },
          "details": "New setting value (string encoded)."
        }
      }
    }
  },
  "lookup": {}
}

module.exports=projects;
              