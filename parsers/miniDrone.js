'use strict';
class Response {
    constructor(data){
      this.message={};
      if(data){
        this.parse(data);
      }
    }

    get raw(){
        return message.raw;
    }

    get type(){
        return message.type;
    }

    get id(){
        return message.id;
    }

    get data(){
        return message.data;
    }

    get index(){
        return message.index;
    }

    get size(){
        return message.size;
    }

    parse(data){
      this.message.raw     = data;
      this.message.type    = data.readUInt8(0);
      this.message.id      = data.readUInt8(1);
      this.message.index   = data.readUInt8(2);
      this.message.size    = data.readUInt32LE(3);

      if (this.message.size > 7) {
        this.message.raw = Buffer.concat(
          [
              data.slice(7)
          ]
        );
      }
    }
}

function configure(data){
  data=data.toString().replace(/\0/g,'');

  try{
      data=JSON.parse(data);
  }catch(err){
      console.log(err);
      return;
  }
  return data;
}

module.exports={
  Response,
  configure
};
