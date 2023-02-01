import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  fetchEmployeeDetailsByRemote():Observable<any>{
    return this.http.get("http://localhost:7079/ems/employee/get-all-onboard-employees-details");
  }
  addOnboardEmployeeDetailsByRemote(employee:any){
    return this.http.post("http://localhost:7079/ems/employee/onboard-new-employee",employee)
    
  }

}
