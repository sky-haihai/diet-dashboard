import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  todayFoods: Food[] = [];
  selectedFood?: Food;

  totalFat(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.fat);
    return total;
  }
  totalCarbohydrates(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.carbohydrates);
    return total;
  }
  totalProtein(): number {
    var total = 0;
    this.todayFoods.forEach(f => total += f.protein);
    return total;
  }

  constructor(private foodSvc: FoodService) { }

  ngOnInit(): void {
    this.getTodayFoods();
  }

  getTodayFoods(): void {
    this.todayFoods = this.foodSvc.getTodayFoods();
  }

  onSelected(food: Food): void {
    this.selectedFood = food;
  }

  deleteTodayFood(food: Food): void {
    this.todayFoods = this.todayFoods.filter(f => f !== food);
    this.selectedFood = undefined;
  }
}
