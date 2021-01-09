import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealsDetailsPage } from './meals-details.page';

const routes: Routes = [
  {
    path: '',
    component: MealsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsDetailsPageRoutingModule {}
