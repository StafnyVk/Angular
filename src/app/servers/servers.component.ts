import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewserver=false;
serverStatus="No server was created";
serverName='freger';
  constructor() { 
    setTimeout(() => {
      this.allowNewserver=true;
      
    }, 2000);
  }

  ngOnInit(): void {
  }
onCreateServer(){
  this.serverStatus="Server was created and the server name is:"+ this.serverName;
}
onUpdateServerName( event:Event ){
  this.serverName=(<HTMLInputElement>event.target).value
  
}
}
