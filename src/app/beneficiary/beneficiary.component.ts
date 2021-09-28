
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeneficiaryService } from '../service/beneficiary.service';
@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  itemForm: FormGroup;
  isEditing: boolean = false;
 

  constructor(private activatedRoute: ActivatedRoute,
    private benefService: BeneficiaryService,

    private router: Router,
    private formBuilder: FormBuilder) {
    this.itemForm = formBuilder.group({
      account_Number: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      ifsc: ['', Validators.required],
      transfer_Type: ['', Validators.required],

    });
  }
  get f() {
    return this.itemForm.controls;
  }

  ngOnInit(): void {
    let icode = this.activatedRoute.snapshot.params.id;

    if (icode) {
      this.benefService.getById(icode).subscribe(
        (data) => { this.itemForm.setValue(data); this.isEditing = true; },
        (err) => { console.log(err.message); }
      );
    }

  }

  save() {

    let obr;

    if (this.isEditing) {
      obr = this.benefService.modify(this.itemForm.value); //PUT Req
    } else {
      obr = this.benefService.add(this.itemForm.value); //POST Req
    }

    obr.subscribe(
      (data) => { this.router.navigateByUrl("/benefDetails"); },
      (err) => { console.log(err.message); }
    );
  }
}

