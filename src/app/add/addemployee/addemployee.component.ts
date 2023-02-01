import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent  implements OnInit{
  registerForm!: FormGroup;
  employee=new Employee();
  loading = false;
  submitted = false;
  constructor( private formBuilder: FormBuilder,
    private router: Router,private service:EmployeeserviceService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.submitted = true;
    this.loading=true;
    this.service.addOnboardEmployeeDetailsByRemote(this.employee).subscribe(
      
      (data:any)=>{
  
        this.submitted = true;
         this.loading=true;
        
        alert("Data inserted");
        Swal.fire("Register sucessfully","welcome","success");
        
    this.router.navigateByUrl("dashboard/employeedetails");
       
      },
      (Error:any)=>{
        this.router.navigateByUrl("/login");
      }
  
    )

  }

}
