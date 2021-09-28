import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  itemForm: FormGroup;
  accountOperations:string[];
  isEditing: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
  
    private router: Router,
    private formBuilder : FormBuilder) {
      this.itemForm = formBuilder.group({
        account: ['',Validators.required],
        customerId: ['',Validators.required],
        password: ['',Validators.required]
       
      });
  this.accountOperations=["Balance Check","Request Mini Statement","Request for Monthly or Annual or Periodic Statements","Transfer Funds","Pay utility bills from IBS recognized service providers"]
    }
    get f(){
      return this.itemForm.controls;
    }
     

  ngOnInit(): void {
  }

}
