import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim="Your Banking Partner"
  accnum="";
  pswd="";
  usrname="";
  registerForm=this.fb.group({
    usrname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accnum:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  reg(){
    var accno=this.registerForm.value.accnum;
    var password=this.registerForm.value.pswd;
    var name=this.registerForm.value.usrname;
     //console.log(this.registerForm);
    if(this.registerForm.valid){
      var result=this.ds.reg(name,accno,password);
      if(result){
        alert("Registration Succesfull")
        this.router.navigateByUrl("")
      }
      else{
        alert("user already exist");
      }
 
    }
    else{
      alert("invalid form")
    }
   
   
  }

  }



