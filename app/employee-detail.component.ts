import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-employee-detail',
  templateUrl: 'resource/employee-detail.component.html',
  styleUrls: ['assets/employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;
  
  constructor(
  	private employeeService: EmployeeService,
  	private route: ActivatedRoute) {
  	
	}
  ngOnInit(): void {
  	this.route.params.forEach((params: Params) => {
    	let id = +params['id'];
    	this.employeeService.getEmployee(id)
      	.then(employee => this.employee = employee);
  		});
	}
  goBack(): void {
  	window.history.back();
  }
}
