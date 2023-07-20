import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewsubmitPage } from './reviewsubmit.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewsubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsubmitPageRoutingModule {}
