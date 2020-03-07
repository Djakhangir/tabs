import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'tabs';

sub:Subscription;
panelOneExpanded: boolean;
panelTwoExpanded: boolean;
panelThreeExpanded: boolean;
panelFourExpanded: boolean;
panelFiveExpanded: boolean;

constructor() {}

ngOnInit() {
  this.panelOneExpanded=true
  this.panelTwoExpanded=false
  this.panelThreeExpanded=true
  this.panelFourExpanded=true
  this.panelFiveExpanded=true

}

makePanelOneExpanded() {
  this.panelOneExpanded = !this.panelOneExpanded
}

makePanelTwoExpanded() {
  this.panelTwoExpanded = !this.panelTwoExpanded
}

makePanelThreeExpanded() {
  this.panelThreeExpanded = !this.panelThreeExpanded
}

makePanelFourExpanded() {
  this.panelFourExpanded = !this.panelFourExpanded
}

makePanelFiveExpanded() {
  this.panelFiveExpanded = !this.panelFiveExpanded
}
}
