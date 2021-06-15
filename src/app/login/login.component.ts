import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner";
  accountnumber = "ac no is 1000";
  password = "testone";
  accnum = "";
  pswd = "";
  
 

  loginForm=this.fb.group({
    accnum:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

 
  constructor(private router: Router, private ds:DataService,private fb:FormBuilder ) { }


  ngOnInit(): void {
  
  }
  // accnoChange(event: any) {
  //   this.accnum = event.target.value
  //   console.log(this.accnum);
  // }
  // pwdChange(event: any) {
  //   this.pswd = event.target.value
  //   console.log(this.pswd)
  // }

  
  Login( ) {
    
    
    // alert("login clicked");
    var acno = this.loginForm.value.accnum;
    var pwd = this.loginForm.value.pswd;
    const result=this.ds.login(acno,pwd)
    if(this.loginForm.valid){

      if(result){
        
        this.router.navigateByUrl("dashboard");
      }
    }
    else{
      alert("Invalid Form")
    }

     

  }
     

    register(){
      this.router.navigateByUrl("register")
    }
  
    
}
