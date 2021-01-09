
import { Component } from '@angular/core';
import { MealDBService } from '../services/meal-db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  meals:any = [];
  categories:any = [];
  showSpinner = true;
  // meals$ = this.mealDB.mealByCategory('Seafood');

  constructor(
    private mealDB: MealDBService
  ) {
    this.getAllCat();
    // this.getMealByCat();
  }

  getAllCat(){
    this.mealDB.allCategories().subscribe(cat => {
      this.categories = cat;
      // console.log(cat)
      this.showSpinner = false;
    })
  }
  // getMealByCat(){
  //   this.mealDB.mealByCategory("Seafood").subscribe(meals => {
  //     this.meals = meals;
  //     this.showSpinner = false;
  //   })
  // }

  
}
