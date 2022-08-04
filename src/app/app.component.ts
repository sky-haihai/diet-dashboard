import { Component } from '@angular/core';
import { RouteHelperService } from './route-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diet-dashboard';

  selectedPage = 0;

  date = "Loading Date...";
  setinterval = setInterval(() => {
    var newDate = new Date(Date.now());
    this.date = newDate.toDateString() + " " + newDate.toLocaleTimeString();
  }, 1000);

  constructor(private routeHelperSvc: RouteHelperService) {

  }

  getRouteUrl(): string {
    return this.routeHelperSvc.getRoute();
  }
}
