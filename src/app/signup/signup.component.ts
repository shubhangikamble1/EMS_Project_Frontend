import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../model/employee';
import { Registration } from '../model/registration';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  registerForm!: FormGroup;
  
  registration=new Registration();
  loading = false;
  submitted = false;
  constructor( private formBuilder: FormBuilder,
    private router: Router,private regservice:RegistrationService){

  }
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
    
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }
 onSubmit(){
  this.submitted = true;
  this.loading=true;
  this.regservice.addregistration(this.registration).subscribe(
    
    (data:any)=>{

      this.submitted = true;
  this.loading=true;
      
      alert("Data inserted");
      Swal.fire("Register sucessfully","welcome","success");
      console.log(this.registration.password)
  this.router.navigateByUrl("/login");
     
    },
    (Error:any)=>{
      this.router.navigateByUrl("/login");
    }

  )
 
}
}
