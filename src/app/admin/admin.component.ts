import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  itemForm: FormGroup;
  isEditing: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private router: Router,
    private formBuilder: FormBuilder) {

    this.itemForm = formBuilder.group({
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
    return this.itemForm.controls;
  }

  ngOnInit(): void {
    let icode = this.activatedRoute.snapshot.params.id;

    if (icode) {
      this.adminService.getById(icode).subscribe(
        (data) => { this.itemForm.setValue(data); this.isEditing = true; },
        (err) => { console.log(err.message); }
      );
    }

  }

  save() {

    let obr;

    if (this.isEditing) {
      obr = this.adminService.modify(this.itemForm.value); //PUT Req
    } else {
      obr = this.adminService.add(this.itemForm.value); //POST Req
    }

    obr.subscribe(
      (data) => { this.router.navigateByUrl("/login"); },
      (err) => { console.log(err.message); }
    );
  }
}
