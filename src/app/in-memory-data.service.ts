import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // const foods = [
    //   { id: 0, name: "Tuna", fat: 1, carbohydrates: 0, protein: 23 },
    //   { id: 1, name: "Orange", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 2, name: "Banana", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 3, name: "Pineapple", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 4, name: "Kiwi", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 5, name: "Mango", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 6, name: "Strawberry", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 7, name: "Blueberry", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 8, name: "Raspberry", fat: 5, carbohydrates: 5, protein: 5 },
    //   { id: 9, name: "Watermelon", fat: 5, carbohydrates: 5, protein: 5 },
    // ];

    const todayGoal = { fat: 50, carbohydrates: 75, protein: 85 };

    return { todayGoal };
  }

  todayFoods: Food[] = [];

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
