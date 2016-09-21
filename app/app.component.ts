import { Component } from '@angular/core';

@Component({
  selector: 'employee-app', 
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/employees" routerLinkActive="active">Employees</a>
  </nav>
  <router-outlet></router-outlet>
   `,
  styleUrls: ['assets/app.component.css']
})

export class AppComponent {
  title = 'List of Productive Employees in the Organization';
}
