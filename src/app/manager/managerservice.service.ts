import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../class/project';
import { User } from '../class/user';
import { Bugallocationdetail } from '../class/bugallocationdetail';

@Injectable({
  providedIn: 'root'
})
export class ManagerserviceService {
  bugDetailObj:any;

  constructor(private http:HttpClient) { }
  private projectUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/getProjectList";
  private developerUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/getDeveloperList";
  private testerUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/getTesterList";
  private insertUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/allocateProject";
  private getBugDetailUrl:string="http://localhost:8081/AngularBug_Trajectory_Frontend/getBugDetailList";

  getProjectList():Observable<Project[]>{
    return this.http.get<Project[]>(this.projectUrl);
  }
  getDeveloperList():Observable<User[]>{
    return this.http.get<User[]>(this.developerUrl);
  }
  getTesterList():Observable<User[]>{
    return this.http.get<User[]>(this.testerUrl);
  }
  addProjectList(allocateProject:any):Observable<boolean>{
    return this.http.post<any>(this.insertUrl,allocateProject,{responseType: 'text' as 'json'});
  }
  getBugDetailList():Observable<Bugallocationdetail[]>{
    return this.http.get<Bugallocationdetail[]>(this.getBugDetailUrl);
  }
  setBugDetails(b:any){
    this.bugDetailObj=b;

  }
  getBugDetails(){
    console.log('bugdetail : '+this.bugDetailObj);
    return this.bugDetailObj;
  }
  bugAllocate(bugAllocateId:number,projectId:number,bugType:string,description:string,userId:number,endDate:Date,createdDate:Date):Observable<string>{
    return this.http.get<string>("http://localhost:8081/AngularBug_Trajectory_Frontend/bugAllocation?bugType="+bugType+"&&bugAllocateId="+bugAllocateId+"&&description="+description+"&&projectId="+projectId+"&&userId="+userId+"&&endDate="+endDate+"&&createdDate="+createdDate,{responseType: 'text' as 'json'});
  }
 
  }
    
  


