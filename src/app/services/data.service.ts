import { ɵAnimationGroupPlayer } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentussr="";
  currentacc="";
   accountdetails:any = {
    1000: { name: "Ajay", acno: 1000, password: "testone", balance: 5000 },
    1001: { name: "Jayan", acno: 1001, password: "testtwo", balance: 4000 },
    1002: { name: "Ajith", acno: 1002, password: "testthree", balance: 6000 },
    1003: { name: "Ram", acno: 1003, password: "testfour", balance: 7000 },
  }


  constructor() {
    this.getdetails();
   }

  savedetails(){
    localStorage.setItem("accountdetails",JSON.stringify(this.accountdetails))
    if(this.currentussr){
       localStorage.setItem("currentuser",JSON.stringify(this.currentussr))
    }
    if(this.currentacc){
      localStorage.setItem("currentac",JSON.stringify(this.currentacc))
    }
  }
    getdetails(){
      if(localStorage.getItem("accountdetails")){
       this.accountdetails= JSON.parse(localStorage.getItem("accountdetails")||'')
      }
      if(localStorage.getItem("currentuser")){
        this.currentussr=JSON.parse(localStorage.getItem("currentuser")||'')
      }
      if(localStorage.getItem("currentac")){
        this.currentacc=JSON.parse(localStorage.getItem("currentac")||'')
      }
      
    }
    deletedetails(acno:any){
      if(this.currentacc==acno){
        localStorage.removeItem("currentac")
        this.savedetails();
        return true;
      }
      else{
        return false;
      }
    }
  
  reg(name:any,accno:any,password:any){
    let details = this.accountdetails
    if (accno in details) {
     return false;

      }

    else {
      details[accno]={
        name,accno,password,amount:0
      }
      this.savedetails();
      return true;

    }
    

  }
  login(acno:any,pwd:any){
    let details = this.accountdetails
    
    
    if (acno in details) {
      if (pwd == details[acno]["password"]) {
        alert("login sucess");
        this.currentussr=details[acno]["name"]
        this.currentacc=acno;
        this.savedetails();
        return true;
        
      }
      else {
        alert("password incorrect");
        return false;

      }

    }
    else {
      alert("invalid account number");
      return false;

    }


  }
  deposit(accno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let dataset=this.accountdetails;
    if(accno in dataset){
      if(pswd==dataset[accno]["password"]){
       dataset[accno]["balance"]+=amount;
       this.savedetails();
       return dataset[accno]["balance"];
      }
      else{
       alert ("Incorrect Password");
        return false;
      }
      
    }
    else{
      alert("Invalid Account Number ");
      return false;

 } 


  }
  withdraw(accno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let dataset=this.accountdetails;
    if(accno in dataset){
      if(pswd==dataset[accno]["password"]){
        if(amount<dataset[accno]["balance"]){
          dataset[accno]["balance"]-=amount;
          this.savedetails;
           return dataset[accno]["balance"];

        }
        else{
          alert("Insufficent balance");
          return false;
        }
      }
      else{
        alert("Incorrect Password");
        return false;
      }
    }
  else{
    alert("Invalid Account Number")
    return false;
  }
      }

    }
    
  



  

