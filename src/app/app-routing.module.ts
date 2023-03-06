import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './add/addemployee/addemployee.component';
import { AddevaluationComponent } from './add/addevaluation/addevaluation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmplComponent } from './details/empl/empl.component';
import { EmployeedetailsComponent } from './details/employeedetails/employeedetails.component';
import { EvaluationlistComponent } from './details/evaluationlist/evaluationlist.component';
import { EvaluationsdetailsComponent } from './details/evaluationsdetails/evaluationsdetails.component';
import { RatingdescriptionComponent } from './details/ratingdescription/ratingdescription.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateEmployeeDetailsComponent } from './update/update-employee-details/update-employee-details.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"not",component:PageNotFoundComponent},
  {path:"dashboard",component:DashboardComponent, 
  children:[
        {
          path:"employeedetails",component:EmployeedetailsComponent
        },
        {
          path:"employeedet",component:EmplComponent
        }, 
        {
          path:"onboard",component:AddemployeeComponent
        },
        {
          path:"evaluation-details",component:EvaluationsdetailsComponent
        },
        {
          path:"add-evaluation/:employeeId/:employeeName",component:AddevaluationComponent
        },
        {
          path:"evaluation",component:EvaluationComponent
        },
        {
          path:"evaluationlist",component:EvaluationlistComponent
        },
        {
          path:"updateEmployeeById/:employeeId",component:UpdateEmployeeDetailsComponent
        },
        {
          path:"getEmployeeById/:employeeId",component:EmplComponent

        },
        {
          path:"rating-description",component:RatingdescriptionComponent
        }
          ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
