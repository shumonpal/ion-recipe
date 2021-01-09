import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const MEALDB_API = {
  ROOT: "https://www.themealdb.com/api/json/v1/1/",
  get FILTER(){
    return this.ROOT + 'filter.php';
  }
};


@Injectable({
  providedIn: 'root'
})
export class MealDBService {

  constructor(    
    private http: HttpClient
  ) { }

  mealByCategory(category: String){
    return this.http.get(MEALDB_API.FILTER+'?c='+category).pipe(map((res: any) => res.meals));
  }

  allCategories(){
    return this.http.get(`${MEALDB_API.ROOT}categories.php`).pipe(map((res: any) => res.categories));
  }

  mealById(id){
    return this.http.get(`${MEALDB_API.ROOT}lookup.php?i=${id}`).pipe(map((res: any) => res.meals));
  }
}
