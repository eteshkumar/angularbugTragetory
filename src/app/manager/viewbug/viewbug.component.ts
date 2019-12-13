import { Component, OnInit } from '@angular/core';
import { ManagerserviceService } from '../managerservice.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Bugallocationdetail } from 'src/app/class/bugallocationdetail';

@Component({
  selector: 'app-viewbug',
  templateUrl: './viewbug.component.html',
  styleUrls: ['./viewbug.component.css']
})
export class ViewbugComponent implements OnInit {

  constructor(private managerservice:ManagerserviceService,private fb:FormBuilder,private router:Router) { }
  bugDetailList:Bugallocationdetail[];

  ngOnInit() {
    this.managerservice.getBugDetailList().subscribe(data=>this.bugDetailList=data);
  }
  onClick(b:any){
    console.log('Object : '+JSON.stringify(b)); 
   this.managerservice.setBugDetails(b);
 }
 

}
