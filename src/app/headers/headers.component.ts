import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
datasetName:any

graphInfo:any = [{
  'title':'1. Dataset Definition',
  'isActive': true,
  'panelName': 'TogglePanelOne'
}, {
  'title':'2. Elements Defintion ',
  'isActive': false,
  'panelName': 'TogglePanelTwo'
},{
'title':'3. Validation',
  'isActive': false,
  'panelName': 'TogglePanelThree'
},{
  'title':'4. Scheduling &\n' + '&\n' + 'Governance',
  'isActive': false,
  'panelName': 'TogglePanelFour'
},{
  'title':'5. Publish',
  'isActive': false,
  'panelName': 'TogglePanelFive'
}]

expand:boolean
  constructor(private myElement: ElementRef, ) { } //private store: Store<any>

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.datasetName = this.DataName();
  }

  expandCurrentTab(index: number){
    // this.store.dispatch(new datasetActions[tab](true));
    const el = document.getElementById('tab' + index)
    el.scrollIntoView({behavior:"smooth"})
  }

  DataSetName(title){
    this.datasetName = title
  }

  DataName(){
    return this.datasetName;
  }

}
