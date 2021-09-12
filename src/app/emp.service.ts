import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './emp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private apiServerUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient ) { }

  public getEmployees(): Observable<Employee[]>{
    console.log("Below API URL from env");
    console.log(this.apiServerUrl);
    console.log("Below complete URL for employees");
    console.log(this.apiServerUrl+"/employee/all");
    console.log("Below complete URL with variable for employees");
    console.log('${environment.apiBaseUrl}/employee/all');
    return this.http.get<Employee[]>(this.apiServerUrl+"/employee/all");

  }
  public addEmployees(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiServerUrl+"/employee/add", employee);

  }
  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.apiServerUrl+"/employee/update", employee);

  }
  public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>(this.apiServerUrl+"/employee/delete/${employeeId}");

  }
}
