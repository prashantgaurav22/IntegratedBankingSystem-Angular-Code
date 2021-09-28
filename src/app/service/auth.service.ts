import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BankUser } from '../model/bank-user';
import { Observable, BehaviorSubject  } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loginEndPoint: string;
  regEndPoint: string;
  loginStatus: BehaviorSubject<boolean>;

  constructor(private client: HttpClient) {
    this.loginEndPoint=environment.loginEndPoint;
    this.regEndPoint=environment.regEndPoint;
    
    if(sessionStorage.getItem("jwt") && sessionStorage.getItem("username")){
      this.loginStatus = new BehaviorSubject<boolean>(true);
    }else{
      this.loginStatus = new BehaviorSubject<boolean>(false);
    }

  }

  login(user:BankUser) : Observable<string> {
    return this.client.post(this.loginEndPoint,user).pipe(
      map(
        (data:any) => {
          let token = data.jwtToken;
          sessionStorage.setItem("jwt","Bearer "+token);
          sessionStorage.setItem("username",user.userName);
          this.loginStatus.next(true);
          return user.userName;
        }
      )
    );
  }

  logout(){
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("username");
    this.loginStatus.next(false);
  }

  /*isLoggedIn(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }*/

  isLoggedIn(): boolean {
    return (sessionStorage.getItem("jwt") && sessionStorage.getItem("username"))?true:false;
  }

  register(user:BankUser) : Observable<string> {
    return this.client.post(this.regEndPoint,user).pipe(
      map(
        (data:any) => {         
          return data.userName;
        }
      )
    );
  }
  
}
