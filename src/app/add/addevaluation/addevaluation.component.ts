import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Evaluation } from 'src/app/model/evaluation';
import { Skills } from 'src/app/model/skills';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-addevaluation',
  templateUrl: './addevaluation.component.html',
  styleUrls: ['./addevaluation.component.css']
})
export class AddevaluationComponent implements OnInit {
  employee=new Employee();
  evaluation=new Evaluation();
  skill=new Skills();
  empId:number;
  empName:string;
  constructor(private _router:Router,private empservice:EmployeeserviceService, 
    private route: ActivatedRoute) { }
 
  ngOnInit(): void {
  
    this.empId= this.route.snapshot.params['employeeId'];
    this.empName= this.route.snapshot.params['employeeName'];
    console.log(this.empId);
    this.empservice.fetchByIdAndName(this.empId,this.empName).subscribe(data => {
      
      this.employee = data;
      console.log(this.employee);
    }, error => console.log(error));

   

   // this.evalForm();


   
  }
/*
  evalForm()
  {
    this.empservice.fetchByIdAndName
    (1,'Rahul').subscribe(k=>{
      var id=this.employee.employeeId;
      var name=this.employee.employeeName;
      console.log("ngonint",id);
      console.log("name=",this.employee.employeeName);
      console.log(k);
      console.log(this.employee.employeeName);
      this.employee=k;
     // this._router.navigateByUrl("/dashboard/add-evaluation");
     this._router.navigate(["/dashboard/add-evaluation",id,name])
    })}*/

    addEval()
    {
  
    }
   eval()
    {
      this.empId= this.route.snapshot.params['employeeId'];
      this.empservice.addEval(this.empId,this.evaluation).subscribe( data =>{
        console.log(data);
        this.goToEvaluationList();
      }
        , error => console.log(error));
    }

    editEval()
    {
      this.empId= this.route.snapshot.params['employeeId'];

      this.empservice.addEval(this.empId, this.evaluation).subscribe( data =>{
        console.log(data);
        this.goToEvaluationList();
        }
        , error => console.log(error));
      }
      
    goToEvaluationList(){
    this._router.navigate(['/dashboard/evaluationlist']);
    }
    deleteEval()
    {

    }

    selectedTeam = '';
    onSelected(value:string): void {
      this.selectedTeam = value;
    }
  
}
