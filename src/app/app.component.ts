import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

@Component({
templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
   rootPage:any = LoginPage; // Replace tabsPage with Welcome
   pages: Array<{title: string, component: any}>;

   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    public menu: MenuController) {
   platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
   });

   this.pages = [
    { title: 'Home', component:LoginPage },
    { title: 'Addtask', component: LoginPage },
    { title: 'Viewtask', component: LoginPage },
    { title: 'My First List', component: LoginPage },
    { title: 'LogOuut', component: LoginPage }
  ];

    }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

 
}