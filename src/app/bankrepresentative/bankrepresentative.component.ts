import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import { CustomersService } from '../service/customers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bankrepresentative',
  templateUrl: './bankrepresentative.component.html',
  styleUrls: ['./bankrepresentative.component.css']
})
export class BankrepresentativeComponent implements OnInit {


  customers:Customer[];
errMsg : string;


  constructor(private customerService:CustomersService,private router:Router ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    let obr = this.customerService.getAll();
    
    obr.subscribe(
      (data)=>{this.customers=data;},
      (err)=>{
        this.errMsg="unable to fetch data";
      console.log(JSON.stringify(err));
      }
      );
    }
 
  
  delete(customerId:number){
    let obr = this.customerService.delete(customerId);
    obr.subscribe(
      ()=>{this.loadData();},
      (err)=>{
        this.errMsg=`unable to delete ! please try after some sometime.
        If priblem persists contact Admin`;
        console.log(JSON.stringify(err));
      }
    );
  }
details(customerId:number){
  this.router.navigateByUrl(`/home/${customerId}`)
}
}