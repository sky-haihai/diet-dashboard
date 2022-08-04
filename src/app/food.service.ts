import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from './food';
import { FOODS } from './mock-food';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  todayFoods: Food[] = [];

  private foodsUrl = 'api/foods';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getFoods(): Observable<Food[]> {
    const foods = this.http.get<Food[]>(this.foodsUrl);
    return foods;
  }

  getTodayFoods(): Food[] {
    return this.todayFoods;
  }

  addTodayFood(food: Food): void {
    if (!this.todayFoods.includes(food)) {
      this.todayFoods.push(food);
    }
  }
}
