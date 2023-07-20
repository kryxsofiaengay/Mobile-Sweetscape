import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingsubmitPage } from './bookingsubmit.page';

const routes: Routes = [
  {
    path: '',
    component: BookingsubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsubmitPageRoutingModule {}
