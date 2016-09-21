import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'resource/dashboard.component.html',
  styleUrls: ['assets/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(
  private router: Router,
  private employeeService: EmployeeService) {
  
  }
  employees: Employee[] = [];
  
  ngOnInit(): void {
    this.employeeService.getEmployees()
      .then(employees => this.employees = employees.slice(1, 5));
  }
  
  gotoDetail(employee: Employee): void {
  	let link = ['/detail', employee.id];
  	this.router.navigate(link);
  }
}

