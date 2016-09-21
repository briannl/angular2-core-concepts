import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-employees',
  templateUrl: 'resource/employees.component.html',
  styleUrls:  ['assets/employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;
 
  constructor(
    private router: Router,
    private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEmployee.id]);
  }
}
