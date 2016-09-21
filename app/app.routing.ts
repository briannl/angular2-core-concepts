import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent }      from './employees.component';
import { DashboardComponent }   from './dashboard.component';
import { EmployeeDetailComponent }  from './employee-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: EmployeeDetailComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
