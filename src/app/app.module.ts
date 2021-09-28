import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


import { AccountsComponent } from './accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { SuccessComponent } from './success/success.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { RequestministatementComponent } from './requestministatement/requestministatement.component';
import { RequestmonannperstatementComponent } from './requestmonannperstatement/requestmonannperstatement.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { PayutilitybillsComponent } from './payutilitybills/payutilitybills.component';
import { TranactionsComponent } from './tranactions/tranactions.component';

import { NewregistrationComponent } from './newregistration/newregistration.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { BankrepresentativeComponent } from './bankrepresentative/bankrepresentative.component';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { TransactionSuccessComponent } from './transaction-success/transaction-success.component';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './service/jwt.interceptor';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {RegistrationComponent} from './registration/registration.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
   
    AccountsComponent,
    FooterComponent,
    SuccessComponent,
    EnquiryComponent,
    CheckbalanceComponent,
    RequestministatementComponent,
    RequestmonannperstatementComponent,
    TransferfundsComponent,
    PayutilitybillsComponent,
    TranactionsComponent,
    
    NewregistrationComponent,
    BeneficiaryComponent,
    AdminComponent,
    WelcomeUserComponent,
    BankrepresentativeComponent,
    BeneficiaryDetailsComponent,
    TransactionSuccessComponent,
    RegistrationComponent,
    
    AboutComponent,
    LoginComponent,
    UserdetailsComponent,
    PaysuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
