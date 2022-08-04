import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';
import { Goal } from '../goal';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  todayFoods: Food[] = [];
  todayNutrition: Goal = {
    fat: 0,
    carbohydrates: 0,
    protein: 0
  }

  todayGoal: Goal = {
    fat: -1,
    carbohydrates: -1,
    protein: -1
  }
  selectedFood?: Food;

  totalFat(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.fat);
    this.todayNutrition.fat = total;

    return total;
  }
  totalCarbohydrates(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.carbohydrates);
    this.todayNutrition.carbohydrates = total;

    return total;
  }
  totalProtein(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.protein);
    this.todayNutrition.protein = total;

    return total;
  }

  constructor(private foodSvc: FoodService) { }

  ngOnInit(): void {
    this.getTodayGoal();
    this.getTodayFoods();
  }

  getTodayFoods(): void {
    this.todayFoods = this.foodSvc.getTodayFoods();
  }

  getTodayGoal(): void {
    this.foodSvc.getGoal()
      .subscribe(goal => this.todayGoal = goal);
  }

  getTodayFat(): string {
    return this.todayGoal.fat >= 0 ? this.todayGoal.fat.toString() + '(±5)' : "loading...";
  }

  getTodayCarbon(): string {
    return this.todayGoal.carbohydrates >= 0 ? this.todayGoal.carbohydrates.toString() + '(±5)' : "loading...";
  }

  getTodayProtein(): string {
    return this.todayGoal.protein >= 0 ? this.todayGoal.protein.toString() + '(±5)' : "loading...";
  }

  onSelected(food: Food): void {
    this.selectedFood = food;
  }

  deleteTodayFood(food: Food): void {
    this.foodSvc.removeTodayFood(food);
    this.getTodayFoods();
  }

  isFulfilled(): boolean {
    var fulfilled =
      Math.abs(this.totalFat() - this.todayGoal.fat) < 5
      &&
      Math.abs(this.totalCarbohydrates() - this.todayGoal.carbohydrates) < 5
      &&
      Math.abs(this.totalProtein() - this.todayGoal.protein) < 5;

    var initialized = this.todayGoal.fat >= 0 &&
      this.todayGoal.carbohydrates >= 0 &&
      this.todayGoal.protein >= 0;

    return initialized && fulfilled;
  }
}
