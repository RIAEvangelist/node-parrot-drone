'use strict';

class Collection{
  constructor(){
      this.lookup={};
  }

  push(...entries){
    for(let id in entries){
      if(entries[id].id){
        id=entries[id].id;
        entries[id]=entries[id].name;
      }

      const entry=entries[id];
      entry.id=id;

      this.lookup[id]=entry;

      this[entry]=id;
    }
  }
}

module.exports=Collection;
