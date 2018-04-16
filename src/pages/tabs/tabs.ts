import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { ViewtaskPage } from '../viewtask/viewtask';
//import { HomePage } from '../home/home';
//import { hmPage } from '../hm/hm';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 tab1Root = ViewtaskPage;
 // tab2Root = hmPage;
 // tab3Root = HomePage;

  constructor() {

  }
}
