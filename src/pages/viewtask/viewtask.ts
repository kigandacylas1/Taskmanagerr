import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { hmPage } from '../hm/hm';
/**
 * Generated class for the ViewtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewtask',
  templateUrl: 'viewtask.html',
})
export class ViewtaskPage {
  taskname: string;
  issuedate: Date;
  deadline: Date;
  description: string;
  tasksi=[];

  constructor(public navCtrl: NavController, public app: App,public navParams: NavParams,private storage: Storage) {
this.loadData();

  }
  

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ViewtaskPage');
  }
 // ionViewWillEnter(){
    
 // }

  loadData(){
    this.tasksi=[];
  this.storage.forEach((value,key,index) =>{
    this.taskname=value[0];
    this.issuedate =value[1];
    this.deadline =value[2];
    this.description=value[3];
          
this.tasksi.push([this.taskname,this.issuedate,this.deadline,this.description]);
         
  })

  

}


deleteData(){
  
this.storage.remove(this.taskname);



}


addtask(){
 
  
  this.navCtrl.push(HomePage, {}, {animate: false});
  
}

viewtask(){
 
  
  this.navCtrl.push(hmPage, {}, {animate: false});
  
}


deadlin(){
 
  
  this.navCtrl.push(ContactPage, {}, {animate: false});
  
}

about(){
 
  
  this.navCtrl.push(AboutPage, {}, {animate: false});
  
}
  logout(){
    // Remove API token 
    const root = this.app.getRootNav();
    root.popToRoot();
  }


}
