import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent  implements OnInit{
  employee: Employee[];
 
  t=new Employee();
  constructor(private router:Router,private empService:EmployeeserviceService){

  }
  
  ngOnInit(): void {
    this.empService.fetchEmployeeDetailsByRemote().subscribe(
      data=>{
        console.log(data);
        this.employee=data;
        console.log(this.t)
        console.log("response recived");
      },error=>{
        console.log("exception occured");
      }

  )

 // this.updateEmployee();


 
}

  add(){
    console.log("ONBOARD")
    this.router.navigateByUrl("/dashboard/onboard");
  }

  

  updateEmployee(employeeId:number){
    console.log("update by ID",employeeId);
    this.router.navigate(['/dashboard/updateEmployeeById',employeeId]);
  }



  deleteEmployee(employeeId:number){
    if(confirm("are you sure deleted "))
    this.empService.deleteEmplyeeByRemote(employeeId).subscribe(
     res=>{
       alert("Record deleted successfully!");
       this.ngOnInit();
     })

  }

}
