import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealsDetailsPageRoutingModule } from './meals-details-routing.module';

import { MealsDetailsPage } from './meals-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealsDetailsPageRoutingModule
  ],
  declarations: [MealsDetailsPage]
})
export class MealsDetailsPageModule {}
