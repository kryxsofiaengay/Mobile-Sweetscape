import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsubmitPageRoutingModule } from './bookingsubmit-routing.module';

import { BookingsubmitPage } from './bookingsubmit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsubmitPageRoutingModule
  ],
  declarations: [BookingsubmitPage]
})
export class BookingsubmitPageModule {}
