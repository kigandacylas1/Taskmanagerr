import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ViewtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewtask',
  templateUrl: 'hm.html',
})
export class hmPage {
  taskname: string;
  issuedate: Date;
  deadline;
  description: string;
  tasksi=[];
  currentdate=new Date();
  timeleft;
  timelefti;
  timeleftii;
  yr:number=this.currentdate.getFullYear();
  month=this.currentdate.getMonth();
  
  day:number=this.currentdate.getDate();
  dmon:number;
  dday:number;
  //dmon:number;
  //dmon:number=this.deadline.getMonth() ;
  //dday:number=this.deadline.getDay() ;

  constructor(public navCtrl: NavController, public app: App,public navParams: NavParams,private storage: Storage) {
this.loadData();

  }
  

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad ViewtaskPage');
  }
  ionViewWillEnter(){
    
  }

  loadData(){
    this.tasksi=[];
    
    this.month=this.month+1;
   
    this.storage.forEach((value,key,index) =>{
    //this.storage.remove(key);
    this.taskname=value[0];
    this.issuedate =value[1];
   this.deadline =(value[2]);
    this.description=value[3];
   this.dmon=(value[2]).slice(5,7);
    this.dmon =Number(this.dmon);

    this.dday=(value[2]).slice(8,10);
    this.dday =Number(this.dday);
    //this.timeleft=this.dmon;
    if( this.month!=this.dmon){
    
      this.timeleft=(this.dmon-this.month).toString() + "   MONTHS";
      
     //this.timeleft=(this.dday-this.day).toString() + "Days";
  
    }
    else if ((this.dday-this.day)>=0){
     
      this.timeleft=(this.dday-this.day).toString() + "   Dayz";
    }
    else{
      this.timeleft=(this.dday-this.day).toString() + "   Days OVERDUE";
      this.timeleft= this.timeleft.slice(1)
    }

          
this.tasksi.push([this.taskname,this.issuedate,this.deadline,this.description,this.timeleft]);

         
  })
}


deleteData(x,index){
  this.storage.remove(x);
  this.tasksi.splice(index,1);
  
//this.splice(index,1);

}



  logout(){
    // Remove API token 
    const root = this.app.getRootNav();
    root.popToRoot();
  }


}
