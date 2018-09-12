import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipantdetailPage } from './participantdetail';

@NgModule({
  declarations: [
    ParticipantdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticipantdetailPage),
  ],
})
export class ParticipantdetailPageModule {}
