import { Component, OnInit } from '@angular/core';
import { ManagerserviceService } from '../managerservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allocatebug',
  templateUrl: './allocatebug.component.html',
  styleUrls: ['./allocatebug.component.css']
})
export class AllocatebugComponent implements OnInit {

  
  bugDetails:any;
   deveList:any;
  developer:any;
  userId:number;
  createdDate:any;
  endDate:any;
  developerList: import("e:/Angular/BugTrajectory-Frontend/src/app/class/user").User[];
  bugDet: any;


  constructor(private managerservice:ManagerserviceService,private fb:FormBuilder,private router:Router) { }
AssignBug:FormGroup;
  ngOnInit() {
    this.bugDetails=this.managerservice.getBugDetails();
    this.bugDet=this.bugDetails;
    let bugAllocationId=this.bugDetails.bugAllocationId;
    console.log(bugAllocationId);
    
    this.managerservice.getDeveloperList().subscribe(data=>this.developerList=data);

  }
  onSubmit(){
    this.managerservice.bugAllocate(this.bugDetails.bugAllocateId,this.bugDetails.projObj.projId,
      this.bugDetails.bugTypeObj.bId,this.bugDetails.description,this.userId,this.endDate,this.createdDate).subscribe(data=>{
       this.router.navigate(['./viewbug']);
       alert("Bug Sucessfully Allocated");})
      }

  }


