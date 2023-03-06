import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  employee=new Employee();

  constructor(private employeeService:EmployeeserviceService,private _router:Router) { }

  msg="";
  ngOnInit(): void {
   /* this.employeeService.getByIdAndName
    (this.employee.employeeId,this.employee.employeeName).subscribe(k=>{
      console.log(k);
      console.log(this.employee.employeeName);
      this.employee=k;
      this._router.navigateByUrl("/dashboard/evaluationform");
    }
    )*/
    
  }
  startEval(employeeId:number,employeeName:string)
  {
    employeeId=this.employee.employeeId;
    employeeName=this.employee.employeeName;
    this.employeeService.fetchByIdAndName
    (employeeId,employeeName).subscribe(k=>{
      console.log(k);
      console.log(this.employee.employeeName);
      this.employee=k;
   //  this._router.navigateByUrl("/dashboard/add-evaluation",employeeId,employeeName);
     this._router.navigate(["/dashboard/add-evaluation",employeeId,employeeName])
      
      // if(k!="")
      // {
      //   Swal.fire("Login sucessfully","welcome","success");
      //   this._router.navigateByUrl("/dashboard/evaluationform");
      // }
      // else{
      //   Swal.fire("Sorry");
      // }
    })
  
  
  }
}
