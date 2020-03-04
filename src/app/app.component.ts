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
  this.panelOneExpanded=this.panelOneExpanded=true
  this.panelTwoExpanded=this.panelTwoExpanded=false
  this.panelThreeExpanded=this.panelThreeExpanded=false
  this.panelFourExpanded=this.panelFourExpanded=false
  this.panelFiveExpanded=this.panelFiveExpanded=false

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
