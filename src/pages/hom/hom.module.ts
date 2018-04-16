import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomPage } from './hom';

@NgModule({
  declarations: [
    HomPage,
  ],
  imports: [
    IonicPageModule.forChild(HomPage),
  ],
})
export class HomPageModule {}
