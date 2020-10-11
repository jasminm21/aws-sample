import { Component, OnInit, Input, Output, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated  //None, Native
})
export class ServerElementComponent implements OnInit,OnChanges {

  constructor(){
    console.log("I am contructor");
  }
  ngOnChanges(): void {
    console.log("I am ngOnChanges method");
  }
  ngOnInit(): void {
    console.log("I am onInit method");
  }

  @Input('srvElement') element:{type:string, name:string, content:string};

}
