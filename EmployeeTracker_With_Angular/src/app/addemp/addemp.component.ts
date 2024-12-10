import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  addData:any=<Employee>{};
  allCountry:any[]=[];
isUpdate:boolean=false;

  constructor(private service:HttpService,
    private router:Router,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.getCountryDataFromBackend();
  this.getDataFromUrl();
  }
  getCountryDataFromBackend(){
this.service.getAllCountry().subscribe((responce:any)=>{
  console.log(responce);
  this.allCountry=responce;
});
  }

  getDataFromUrl(){
this.route.paramMap.subscribe((param)=>{
  // console.log(param.get("id"));
  this.isUpdate=true;
  this.getEmpRecordFromBackend(param.get("id"));

})
  }
  getEmpRecordFromBackend(id:any){
    this.service.getEmployeeById(id).subscribe((responce:any)=>{
      // console.log(responce);
      this.addData=responce;
    })
  }
  onSubmit(){

    if(this.isUpdate){
      //Update the data
      this.addData.updatedBy='Admin';
      this.addData.updatedDate=Date.now();
      this.service.updateEmployee(this.addData)
      .subscribe((response)=>{
        console.log(response);
        this.router.navigate([""]);
      })
    }else{
      //add the data
      // console.log(this.addData);
      this.addData.createdBy="Admin";
      this.addData.createdDate=Date.now();
      this.addData.updatedBy='Admin';
      this.addData.updatedDate=Date.now();
      // console.log(this.addData);
      this.service.addEmpRecord(this.addData).subscribe((responce)=>{
        console.log(responce);
        this.router.navigate([""]);
      })
  
    }
  }
}
