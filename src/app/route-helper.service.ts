import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteHelperService {

  currentRouteUrl: string = this.getRoute();

  constructor() { }

  getRoute(): string {
    return window.location.pathname;
  }
}
