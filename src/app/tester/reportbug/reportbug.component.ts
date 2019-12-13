import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TesterserviceService } from '../testerservice.service';
import { Project } from 'src/app/class/project';
import { Bugseverity } from 'src/app/class/bugseverity';
import { Bugtype } from 'src/app/class/bugtype';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Bugstatus } from 'src/app/class/bugstatus';

@Component({
  selector: 'app-reportbug',
  templateUrl: './reportbug.component.html',
  styleUrls: ['./reportbug.component.css']
})
export class ReportbugComponent implements OnInit {
  

  constructor(private activateRoute:ActivatedRoute,private testerservice:TesterserviceService,private fb:FormBuilder) { }
  projectObj:Project;
  severityList:Bugseverity[];
  bugTypeList:Bugtype[];
  bugStatusList:Bugstatus[];
  bugAllocationtTesterForm:FormGroup;
  ngOnInit() {
    
    let projectId=this.activateRoute.snapshot.paramMap.get('p_Id');
    console.log("project id is"+projectId);

    this.bugAllocationtTesterForm=this.fb.group({
      projectId:[projectId,this.projectObj],
      bugSeverity:[,Validators.required],
      bugType:[,Validators.required],
      Description:['',Validators.required]
    });

    this.testerservice.getSeverityList().subscribe(data=>{
      this.severityList=data
      console.log(this.severityList);
     
      
    });
    this.testerservice.getBugTypeList().subscribe(data=>{
      this.bugTypeList=data
      console.log(this.bugTypeList);
    });
    this.testerservice.getBugStatus().subscribe(data=>{
      this.bugStatusList=data
      console.log(this.bugStatusList);
    });
    this.testerservice.getProjectById(projectId).subscribe(data=>{
      console.log(data)
      this.projectObj=data;
    });


  }
 
  onSubmitForm(){
    console.log(this.bugAllocationtTesterForm.value);
    let projectid=this.bugAllocationtTesterForm.get('projectId').value;
    let bugSeverity=this.bugAllocationtTesterForm.get('bugSeverity').value;
    let bugType=this.bugAllocationtTesterForm.get('bugType').value;
    let Description=this.bugAllocationtTesterForm.get('Description').value;
    let uObj=JSON.parse(sessionStorage.getItem("uObj"));
    let userid=uObj.userid

    
    this.testerservice.bugAllocated(projectid,bugSeverity,bugType,Description,userid).subscribe(data=>{
      console.log(data);
    })


  
  }

}
