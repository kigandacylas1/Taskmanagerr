import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { hmPage } from './hm';

@NgModule({
  declarations: [
    hmPage,
  ],
  imports: [
    IonicPageModule.forChild(hmPage),
  ],
})
export class hmPageModule {}
