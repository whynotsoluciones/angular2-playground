import {
  Component, 
  View
} from 'angular2/angular2';

@Component ({
  selector: 'dmp-rt-panel',
  properties: ['title']
})

@View ({
  templateUrl: System.baseURL + 'templates/dmp-rt-panel.html' 
})

export class DmpRtPanel {
  title: string;
  numberLeft: number;
  legendLeft: string;
  numberRight: number;
  legendRight: string;

  constructor() {
    this.title = "DmpPanelRt";
    this.numberLeft = 1;
    this.numberRight = 2;
    this.legendLeft = "Left";
    this.legendRight = "Right";
  }
}

