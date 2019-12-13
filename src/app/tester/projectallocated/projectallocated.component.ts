import { Component, OnInit } from '@angular/core';
import { TesterserviceService } from '../testerservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projectallocated',
  templateUrl: './projectallocated.component.html',
  styleUrls: ['./projectallocated.component.css']
})
export class ProjectallocatedComponent implements OnInit {

  constructor(private testerservice:TesterserviceService,private fb:FormBuilder,private router:Router) { }
  projectList:any;
  project:any;
  user:any;

  ngOnInit() {
    var obj=JSON.parse(sessionStorage.getItem("uObj"));
    this.user=obj;
    console.log("ojectlist"+obj);
    let userId:Number=obj.userid;
    this.testerservice.getProjectList(userId).subscribe(data=>{this.projectList=(data),this.project=(JSON.parse(this.projectList))});
    console.log("ojectlist"+obj);
  }
  projectAllocatedForm=this.fb.group({
    project:[this.projectList,[Validators.required]]
  });
  onSubmitform(){
    let projectid=this.projectAllocatedForm.get('project').value;
    this.router.navigate(["/bugRepoting",projectid]);
  }
}
