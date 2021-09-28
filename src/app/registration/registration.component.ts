import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { CustomValidator } from '../validators/custom-validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm:FormGroup;
  errMsg : string;

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { 
    this.regForm = fb.group({
      userName : ['',Validators.required],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],
    },{
      validators: CustomValidator.mustBeEqual('password','confirmPassword')
    });
  }

  get f(){
    return this.regForm.controls;
  }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.regForm.value).subscribe(
      (data) => {this.router.navigateByUrl("/login")},
      (err)=> {
        this.errMsg="Sorry Unable to register. Retry later!";
        console.log(JSON.stringify(err));
      }
    );
  }
}
