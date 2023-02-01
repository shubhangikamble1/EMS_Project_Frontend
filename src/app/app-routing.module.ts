import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './add/addemployee/addemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmplComponent } from './details/empl/empl.component';
import { EmployeedetailsComponent } from './details/employeedetails/employeedetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent, children:[
        {path:"employeedetails",component:EmployeedetailsComponent},
        {path:"employeedet",component:EmplComponent},
        {path:"onboard",component:AddemployeeComponent}
           ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
