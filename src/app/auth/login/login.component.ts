import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { LoginServiceService } from 'src/app/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private loginService:LoginServiceService,private router:Router){}
  loginForm=this.fb.group({
  userid:['',[Validators.required]],
  password:['',[Validators.required,Validators.minLength(4)]]
 
  
  
  }
  )

  ngOnInit() {
  }
  loginFormSubmit(){
    console.log(this.loginForm.value);
    this.loginService.validate(this.loginForm.value.userid,this.loginForm.value.password).subscribe(
      data=>{
        let userObj=data;
        sessionStorage.setItem("uObj",JSON.stringify(userObj));
        if(userObj.designation=="Manager"){
        this.router.navigateByUrl("/manager");
      }
      else if(userObj.designation=="Tester"){
        this.router.navigateByUrl("/tester");
      }
      else if(userObj.designation=="Developer"){
        this.router.navigateByUrl("/developer");
      }
    },
     error=>{
     
      
        alert("UserId or password is incorrect!!");
      }
    

    );
  }
}
