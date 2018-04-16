import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewtaskPage } from '../viewtask/viewtask';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  
  taskname: string;
  issuedate: Date;
  deadline: Date;
  description: string;
  tasks=[];
  tasksi=[];
  constructor(public navCtrl: NavController, public app: App,private storage: Storage) {

  }

submit(){
  this.tasks.push(this.taskname,this.issuedate,this.deadline,this.description);
  this.storage.set(this.taskname,this.tasks);
  this.taskname="";
  this.issuedate;
  this.deadline ;
  this.description="";
window.alert("Task added Succesfully...");
  
  }
  
loadData(){
    this.tasksi=[];
  this.storage.forEach((value,key,index) =>{
    
    this.taskname=value[0];
    this.issuedate =value[1];
    this.deadline =value[2];
    this.description=value[3];
   
          
this.tasksi.push([this.taskname,this.issuedate,this.deadline,this.description]);
         
  })

  this.navCtrl.push(ViewtaskPage, {}, {animate: false});

}


logout(){
  // Remove API token 
  const root = this.app.getRootNav();
  root.popToRoot();
}

}



