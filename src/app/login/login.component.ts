import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../model/employee';
import { Registration } from '../model/registration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private _router:Router){}
  reg=new Registration();
  msg="";
  ngOnInit() {
  
  }
loginEms(){
  if(this.reg.username=="ems" )
    {
      console.log("OK");
      //alert("Loging successfully..!!!")
      Swal.fire("Login sucessfully","welcome","success");
      this._router.navigateByUrl("/dashboard");
    }
    else{
      //alert("Sorry")
      Swal.fire("Sorry")
    }
    

}
}
