import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { faHome, faAddressCard, faCreditCard, faQuestion, faEnvelope, faCog, faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  brand: string;
  links: any[];
  constructor(private router: Router,private authService: AuthService) {


    this.brand = environment.logo;
    this.links = [
      { icon: faHome, path: '/home', linkText: 'Home' },
     



    ];

  }
  ngOnInit(): void {

  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/signin");
  }

}
