import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl:string="http://localhost:8080/api/";
  constructor(private http:HttpClient) { }
  getAllEmployee(){
   return (this.http.get(`${this.baseUrl}getAllEmployee`));
  }

  getEmployeeById(id:any){
    return (this.http.get(`${this.baseUrl}getEmployeeById/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getAllCountry`));
  }
  addEmpRecord(obj:any){
  return  (this.http.post(`${this.baseUrl}addEmployee`,obj,{
      responseType:'text'
    }))
  }

  updateEmployee(obj:any){
    return(this.http.put(`${this.baseUrl}updateEmployee/${obj.id}`,obj,{
      responseType:'text'
    }))
  }
  deleteEmployee(id:any){
   return (this.http.delete(`${this.baseUrl}deleteEmployee/${id}`,{
      responseType:'text'
    }))
  }
}
