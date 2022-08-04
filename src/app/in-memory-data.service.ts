import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foods = [
      { name: "Apple", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Orange", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Banana", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Pineapple", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Kiwi", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Mango", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Strawberry", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Blueberry", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Raspberry", fat: 5, carbohydrates: 5, protein: 5 },
      { name: "Watermelon", fat: 5, carbohydrates: 5, protein: 5 },
    ];
    return { foods };
  }

  todayFoods: Food[] = [];

  todayGoal = { fat: 20, carbohydrates: 40, protein: 30 };

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
