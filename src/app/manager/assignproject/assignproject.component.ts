import { Component, OnInit } from '@angular/core';
import { ManagerserviceService } from '../managerservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/class/project';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignproject',
  templateUrl: './assignproject.component.html',
  styleUrls: ['./assignproject.component.css']
})
export class AssignprojectComponent implements OnInit {

  constructor(private managerservice:ManagerserviceService,private fb:FormBuilder,private router:Router) { }
  projectList:Project[];
  developerList:User[];
  testerList:User[];

  
  ngOnInit() {
    this.managerservice.getProjectList().subscribe(data=>{this.projectList=data });
    this.managerservice.getDeveloperList().subscribe(data=>this.developerList=data);
    this.managerservice.getTesterList().subscribe(data=>this.testerList=data);
  }
  projectAllocationForm=this.fb.group({
    project:[this.projectList,Validators.required],
    developer:[this.developerList,Validators.required],
    tester:[this.testerList,Validators.required]
  });
  onSubmitform(){
      let proObj=new Project();
      proObj.p_Id=this.projectAllocationForm.get('project').value;
      proObj.user=this.projectAllocationForm.get('tester').value;
      for(let userObj of this.projectAllocationForm.get('developer').value){
        proObj.user.push(userObj);
      }

      console.log(proObj);
        this.managerservice.addProjectList(proObj).subscribe
        (
           data=>{
           alert("Project Allocated successfully!!");
           this.router.navigate(['./assignproject']);
         },
    
       error=>{
         alert("Project Already Allocated!!");
         this.router.navigate(['./assignproject']);
       });
    
  
  
  }

}
