import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _dataService: DataService) {

  }

  @ViewChild('heading') header: ElementRef;
  childValue;
  products = {};
  // dummyData;
  ngOnInit(): void {
    this._dataService.getData().subscribe(dummyData => this.products = dummyData);
  }
  
  go() {
    this.childValue = this.header.nativeElement.value;
  }

  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onIntervalFired(event: number) {
    console.log(event);
  }

}

