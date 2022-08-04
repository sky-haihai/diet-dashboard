import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  selectedFood?: Food;

  foods: Food[] = [];

  constructor(private foodSvc: FoodService) { }

  ngOnInit(): void {
    this.getFoodCandidates();
  }

  onSelected(food: Food): void {
    this.selectedFood = food;
  }

  getFoodCandidates(): void {
    this.foods = this.foodSvc.getFoodCandidates();
  }

  addTodayFood(food: Food): void {
    this.foodSvc.addTodayFood(food);
    this.getFoodCandidates();
    //alert("Added " + food.name + " to today's food list.");
  }
}
