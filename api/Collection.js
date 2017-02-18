'use strict';

class Collection{
  constructor(){
      this.lookup={};
  }

  push(...entries){
    for(let id in entries){
      let entry=entries[id];
      if(entry.id==undefined||entry.id==null){
        entry={
          id:id,
          name:entry
        }
      }

      id=entry.id;

      this.lookup[id]=entry;

      this[entry.name]=id;
    }
  }
}

module.exports=Collection;
