import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accno="";
  pswd="";
  amount="";
  waccno="";
  wpswd="";
  wamount="";
  user=this.ds.currentussr;
  acno="";
  ldate: Date =new Date();
  
  depositForm=this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })


  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  
 
 withdraw(){
   var accno=this.waccno;
   var pswd=this.wpswd;
   var amount=this.wamount;
   const result=this.ds.withdraw(accno,pswd,amount)
   if(result){
     alert("Rupess of :" +amount +  "debited sucessfully and balance is : "+ result )
   }

 }
 deposit(){
   var accno=this.depositForm.value.accno;
   var pswd=this.pswd;
   var amount=this.amount;
   const result=this.ds.deposit(accno,pswd,amount)
   if(result){
     alert("Rupees of : " +amount + "has deposited sucessfully and the balance is :" +result)

   }
   
   

 }

deleteAc(){
  this.acno=this.ds.currentacc;
}
ondelete(event:any){
//  alert("from paent" +event);
  const result=this.ds.deletedetails(event)
  if(result){
    alert("Account Deleted Sucessfully");
    this.router.navigateByUrl("");
  }
  else{
    alert("Operation Denied")
  }
}
onCancel(){
this.acno=""
}
}
