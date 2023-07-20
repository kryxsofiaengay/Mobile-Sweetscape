import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewsubmitPageRoutingModule } from './reviewsubmit-routing.module';

import { ReviewsubmitPage } from './reviewsubmit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewsubmitPageRoutingModule
  ],
  declarations: [ReviewsubmitPage]
})
export class ReviewsubmitPageModule {}
