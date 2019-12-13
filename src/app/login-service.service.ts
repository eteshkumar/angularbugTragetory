import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

private insertUrl:string="http://localhost:8081/AngularFrontend";
  constructor(private http:HttpClient) { }
  validate(userid,password):Observable<any>{
    return this.http.post<any>("http://localhost:8081/AngularBug_Trajectory_Frontend/login?userid="+userid+"&&password="+password,
    null);
    

  }
}
