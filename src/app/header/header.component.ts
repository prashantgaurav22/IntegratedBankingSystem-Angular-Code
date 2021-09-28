import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { faHome, faAddressCard, faCreditCard, faQuestion, faEnvelope, faCog, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  brand: string;
  links: any[];
  isLoggedIn: boolean;
  username: string;
  
  constructor(private router: Router,private authService: AuthService) {


    this.brand = environment.logo;
    this.links = [
      { icon: faHome, path: '/home', linkText: 'Home' },
     



    ];

  }
  ngOnInit(): void {
    //this.isLoggedIn =  this.authService.isLoggedIn();  
    this.authService.loginStatus.subscribe(
      (status) => {
        this.isLoggedIn = status;
        if (this.isLoggedIn) {
          this.username = sessionStorage.getItem('username');
        }
      }
    );  
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
