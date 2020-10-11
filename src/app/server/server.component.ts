import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverStatus:string="offline";
  servers=["test1","test2","test3","test4"];
  toggleBtn:boolean=false;
btnArr=[];
  constructor(){
    this.serverStatus=Math.random()>0.5?"online":"offline";
  }
  // serverStatus:string="offline";
  ngOnInit(): void {
  }
  getColor(){
    return this.serverStatus === "online"? "Green" : "red";
  }
  
  i:number=0;
  toggleMe(){
    this.toggleBtn=!this.toggleBtn;
    this.btnArr.push(this.i+1);
    this.i++;
  }
  
}
