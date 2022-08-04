import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diet-dashboard';

  date = "Loading Date...";
  setinterval = setInterval(() => {
    var newDate = new Date(Date.now());
    this.date = newDate.toDateString() + " " + newDate.toLocaleTimeString();
  }, 1000);
}
