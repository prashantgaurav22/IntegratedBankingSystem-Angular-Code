import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TransactionService} from '../service/transaction.service';
@Component({
  selector: 'app-tranactions',
  templateUrl: './tranactions.component.html',
  styleUrls: ['./tranactions.component.css']
})
export class TranactionsComponent implements OnInit {

  itemForm: FormGroup;

  isEditing: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,

    private router: Router,
    private formBuilder: FormBuilder,
    private tranService: TransactionService,) {
    this.itemForm = formBuilder.group({
      account_Number: ['', Validators.required],
      cardNumber: ['', Validators.required],
      transactionDate: ['', Validators.required],
      amount: ['', Validators.required]
    });

  }
  get f() {
    return this.itemForm.controls;
  }

  ngOnInit(): void {
    let icode = this.activatedRoute.snapshot.params.id;

    if (icode) {
      this.tranService.getById(icode).subscribe(
        (data) => { this.itemForm.setValue(data); this.isEditing = true; },
        (err) => { console.log(err.message); }
      );
    }

  }

  save() {

    let obr;

    if (this.isEditing) {
      obr = this.tranService.modify(this.itemForm.value); //PUT Req
    } else {
      obr = this.tranService.add(this.itemForm.value); //POST Req
    }

    obr.subscribe(
      (data) => { this.router.navigateByUrl("/tranSuccess"); },
      (err) => { console.log(err.message); }
    );
  }
}