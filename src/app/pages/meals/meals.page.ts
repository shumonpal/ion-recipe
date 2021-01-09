import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealDBService } from 'src/app/services/meal-db.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {

  catId :string = '';
  meals: any = [];

  constructor(
    private acRoute: ActivatedRoute,
    private MDSrvc: MealDBService,
  ) {

     
    acRoute.params.subscribe(param => {
      this.catId = param.id;
      this.getMeals();
    })
   }

  ngOnInit() {
  }

  getMeals(){
    this.MDSrvc.mealByCategory(this.catId).subscribe(meals => {
      this.meals = meals;
      // console.log(meals);
    })
  }


}
