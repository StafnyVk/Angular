import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component ({
selector:'app-server',
templateUrl:'./server.component.html',
styles:[`
.online {
    color:white;
}
`]
})
export class ServerComponent {
serverid: number =10;
serverstatus:string='offline';

getserverstatus(){
    return this.serverstatus=Math.random() > 0.5 ? 'offline' : 'online' ;
}

getColor() {
   return this.serverstatus==='offline' ? 'red' :'green';
}
}