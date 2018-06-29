import { Injectable } from '@angular/core';

@Injectable()
export class MessageserviceService {

  constructor() { }
  messages:string[]=[];

  add(message:string)
  {
    this.messages.push(message);
  }
  clear():void{
    this.messages=[];
  }

}
