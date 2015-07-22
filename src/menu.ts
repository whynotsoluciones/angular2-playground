import {
  Component, 
  View,
} from 'angular2/angular2';

import {DmpRtPanel} from 'src/panel';

@Component ({
  selector: 'dmp-rt-menu',
  directives: [DmpRtPanel]
})

@View ({
  templateUrl: System.baseURL + 'templates/dmp-rt-menu.html'
})

export class DmpRtMenu {
  sections: Array<string>;

    constructor() {
      this.sections = ['hola', 'amigos'];
  }
}
