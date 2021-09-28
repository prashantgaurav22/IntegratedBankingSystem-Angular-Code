import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankUser } from '../model/bank-user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMsg:string;

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {
    this.loginForm = fb.group({
      userName: ['',Validators.required],
      password:['',Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }
  
  ngOnInit(): void {
  }

  login(){
    let user:BankUser = this.loginForm.value;
    this.authService.login(user).subscribe(
      (data) => {this.router.navigateByUrl("/home")},
      (err) => {
        this.errMsg="Login Denied";
        console.log(JSON.stringify(err));
      }
    );
  }

}