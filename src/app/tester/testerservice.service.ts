import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../class/project';
import { Bugseverity } from '../class/bugseverity';
import { Bugtype } from '../class/bugtype';
import { Bugstatus } from '../class/bugstatus';


@Injectable({
  providedIn: 'root'
})
export class TesterserviceService {
  projName: any;

  constructor(private http:HttpClient) { }
  private projectListUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/projectList/";
  private severityListUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/severityList/";
  private bugTypeListUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/bugList/";
  private bugStatusUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/bugStatus/"
  getProjectList(userid:any):Observable<Project[]>{
    return this.http.get<Project[]>(this.projectListUrl+userid,{responseType: 'text' as 'json'});
    
  }
    getSeverityList():Observable<Bugseverity[]>{
      return this.http.get<Bugseverity[]>(this.severityListUrl);
    }
    getBugTypeList():Observable<Bugtype[]>{
      return this.http.get<Bugtype[]>(this.bugTypeListUrl);
    }
    getBugStatus():Observable<Bugstatus[]>{
      return this.http.get<Bugstatus[]>(this.bugStatusUrl);
    }

    getProjectById(projectId:string):Observable<Project>{
      return this.http.get<Project>("http://localhost:8081/AngularBug_Trajectory_Frontend/getPoject/"+projectId);
    }
    
  bugAllocated(projectId:number,bugType:string,bugSeverity:string,
  Description:string,userid:number):Observable<string>{
    return this.http.get<string>("http://localhost:8081/AngularBug_Trajectory_Frontend/BugSuccessfullyAllocated?bugType="+bugSeverity+"&&bugSeverity="+bugType+"&&Description="+Description+"&&projectId="+projectId+"&&userid="+userid,{responseType: 'text' as 'json'});
  }
  
}
