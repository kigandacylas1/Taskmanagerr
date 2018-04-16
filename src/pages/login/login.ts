import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//import { Signup } from '../signup/signup';
//import { SignupPageModule } from '../signup/signup.module';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username : string ="";
  password : string="";

  constructor(public navCtrl: NavController,public app:App) {

  }

  login(){
    // Your app login API web service call triggers 
    if(this.username=="a" && this.password=="a"){
    this.navCtrl.push(TabsPage, {}, {animate: false});
    
  }
  else{
   window.alert("Error! check your credentials please...")
  }
  }


//sign(){
//  this.navCtrl.push(Signup, {}, {animate: false});
//}

  logout(){
    // Remove API token 
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}