import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../service/customers.service';
import { AuthService } from '../service/auth.service';




@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
export class NewregistrationComponent implements OnInit {

  isEditing: boolean = false;

  customerForm: FormGroup;
  errMsg: string;


  constructor(private activatedRoute: ActivatedRoute,private authService:AuthService,
    private custService: CustomersService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.customerForm = formBuilder.group({
      aadharNumber: ['', Validators.required],
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      dataOfBirth: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      panCard: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      accountType: ['', [Validators.required]],
    });

  }

  get f() {
    return this.customerForm.controls;
  }

  ngOnInit(): void {
    let icode = this.activatedRoute.snapshot.params.id;

    if (icode) {
      this.custService.getById(icode).subscribe(
        (data) => { this.customerForm.setValue(data); this.isEditing = true; },
        (err) => { console.log(err.message); }
      );
    }

  }

 
  save() {

    let obr;

    if (this.isEditing) {
      obr = this.custService.modify(this.customerForm.value); //PUT Req
    } else {
      obr = this.custService.add(this.customerForm.value); //POST Req
    }

    obr.subscribe(
      (data) => { this.router.navigateByUrl("/home"); },
      (err) => { console.log(err.message); }
    );
  }
}

