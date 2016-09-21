import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { EmployeesComponent }  from './employees.component';
import { DashboardComponent }  from './dashboard.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { EmployeeService }  from './employee.service';
import { routing }        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    DashboardComponent,
    EmployeeDetailComponent
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
