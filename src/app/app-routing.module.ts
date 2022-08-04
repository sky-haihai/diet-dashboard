import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  { path: '', redirectTo: '/food-list', pathMatch: 'full' },
  { path: 'food-list', component: FoodListComponent },
  { path: 'today', component: TodayComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
