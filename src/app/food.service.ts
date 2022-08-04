import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from './food';
import { FOODS } from './mock-food';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodCandidates: Food[] = [];
  todayFoods: Food[] = [];

  // private foodsUrl = 'api/foods';  // URL to web api
  private goalUrl = 'api/todayGoal';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.initFoodCandidates();
  }

  getFood(name: string) {
    return this.foodCandidates.find(f => f.name == name);
  }

  initFoodCandidates(): void {
    //this.getFoods().subscribe(foods => this.foodCandidates = foods);
    this.foodCandidates = FOODS;
  }

  // getFoods(): Observable<Food[]> {
  //   const foods = this.http.get<Food[]>(this.foodsUrl);
  //   return foods;
  // }

  getFoodCandidates(): Food[] {
    return this.foodCandidates;
  }

  getGoal(): Observable<Goal> {
    const goal = this.http.get<Goal>(this.goalUrl);
    return goal;
  }

  getTodayFoods(): Food[] {
    return this.todayFoods;
  }

  addTodayFood(food: Food): void {
    if (this.todayFoods.find(f => f.id == food.id)) {
      return;
    }

    this.todayFoods.push(food);
    this.foodCandidates = this.foodCandidates.filter(f => f.id !== food.id);
  }

  removeTodayFood(food: Food): void {
    if (!this.todayFoods.find(f => f.id == food.id)) {
      return;
    }

    this.foodCandidates.push(food);
    this.todayFoods = this.todayFoods.filter(f => f.id !== food.id);
  }

  getTotalNutrients(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.fat + f.carbohydrates + f.protein);
    return total;
  }

  getTodayFatPercentage(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.fat);
    return Math.round(total / this.getTotalNutrients() * 100 * 100) / 100;
  }

  getTodayCarbonPercentage(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.carbohydrates);
    return Math.round(total / this.getTotalNutrients() * 100 * 100) / 100;
  }

  getTodayProteinPercentage(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.protein);
    return Math.round(total / this.getTotalNutrients() * 100 * 100) / 100;
  }
}
