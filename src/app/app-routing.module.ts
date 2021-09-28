import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AccountsComponent } from './accounts/accounts.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { RequestministatementComponent } from './requestministatement/requestministatement.component';
import { RequestmonannperstatementComponent } from './requestmonannperstatement/requestmonannperstatement.component';
import { TransferfundsComponent } from './transferfunds/transferfunds.component';
import { PayutilitybillsComponent } from './payutilitybills/payutilitybills.component';
import { TranactionsComponent } from './tranactions/tranactions.component';

import { NewregistrationComponent } from './newregistration/newregistration.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { BankrepresentativeComponent } from './bankrepresentative/bankrepresentative.component';
import { BeneficiaryDetailsComponent } from './beneficiary-details/beneficiary-details.component';
import { TransactionSuccessComponent } from './transaction-success/transaction-success.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './service/login.guard';
import { AuthGuard } from './service/auth.guard';
import { AboutComponent } from './about/about.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {RegistrationComponent} from './registration/registration.component';
import {PaysuccessComponent} from './paysuccess/paysuccess.component';





const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'bank', component: BankrepresentativeComponent, canActivate: [AuthGuard] },
  { path: 'benefDetails', component: BeneficiaryDetailsComponent, canActivate: [AuthGuard] },
  { path: 'tranSuccess', component: TransactionSuccessComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'aboutus', component: AboutComponent },
  { path: 'addAcc', component: AccountsComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeUserComponent, canActivate: [AuthGuard] },
  { path: 'enquiry', component: EnquiryComponent, canActivate: [AuthGuard] },
  { path: 'checkbal', component: CheckbalanceComponent, canActivate: [AuthGuard] },
  { path: 'reqministat', component: RequestministatementComponent, canActivate: [AuthGuard] },
  { path: 'reqmon', component: RequestmonannperstatementComponent, canActivate: [AuthGuard] },
  { path: 'transfun', component: BeneficiaryComponent, canActivate: [AuthGuard] },
  { path: 'pay', component: PayutilitybillsComponent, canActivate: [AuthGuard] },
  { path: 'trans', component: TranactionsComponent, canActivate: [AuthGuard] },
  { path: 'newuser', component: NewregistrationComponent},
  { path: 'userdetails', component: UserdetailsComponent, canActivate: [AuthGuard] },
  {path:'reg',component:RegistrationComponent,canActivate: [LoginGuard] },

  { path: 'paysuccess', component: PaysuccessComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


