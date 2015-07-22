import {
  Component, 
  View, 
  bootstrap
} from 'angular2/angular2';

import {DmpRtMenu} from 'src/menu';

@Component ({
  selector: 'dmp-app',
  directives: [DmpRtMenu]
})

@View ({
  templateUrl: System.baseURL + 'templates/dmp.html',
})

export class DmpApp {
  name: string;

  constructor() {
    this.name = 'Main dashboard';
  }
}

bootstrap(DmpApp);

