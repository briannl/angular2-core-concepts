"use strict";
var router_1 = require('@angular/router');
var employees_component_1 = require('./employees.component');
var dashboard_component_1 = require('./dashboard.component');
var employee_detail_component_1 = require('./employee-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: employee_detail_component_1.EmployeeDetailComponent
    },
    {
        path: 'employees',
        component: employees_component_1.EmployeesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map