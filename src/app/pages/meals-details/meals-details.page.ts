import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealDBService } from 'src/app/services/meal-db.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-meals-details',
  templateUrl: './meals-details.page.html',
  styleUrls: ['./meals-details.page.scss'],
})
export class MealsDetailsPage implements OnInit {

  mealId: string = '';
  meal: any = '';
  mealIngredients: any = [];
  showSpinner:boolean = true;

  constructor(
    private actRouter: ActivatedRoute,
    private MealDB: MealDBService,
    private sanitaze: DomSanitizer,
  ) { 
    actRouter.params.subscribe(params => {
     this.mealId = params.id;
      this.getMealsById();
    });
   }

  ngOnInit() {
  }

  getMealsById(){
    this.MealDB.mealById(this.mealId).subscribe(meal => {
      this.meal = meal[0];
      this.showSpinner = false;
      this.getMealIngredients(this.meal);
      this.youTubeURL(this.meal);
    });
  }

  getMealIngredients(meal){
    const ingred = [];
    for (let i = 0; i <= 20; i++) {
      if (meal['strIngredient'+i]) {        
        ingred.push([ meal['strIngredient'+i], meal['strMeasure'+i]]);
      }
      
    }
    this.mealIngredients = ingred;
     //console.log(this.mealIngredients);
  }

  youTubeURL(meal){
    const id = this.meal.strYoutube.split('=')[1];
    return this.sanitaze.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'+id+'?enablejsapi=1&origin=http://example.com')
  }

 

}
