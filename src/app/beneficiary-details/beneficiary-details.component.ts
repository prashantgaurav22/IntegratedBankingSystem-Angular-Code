import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../model/beneficiary';
import { BeneficiaryService } from '../service/beneficiary.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-beneficiary-details',
  templateUrl: './beneficiary-details.component.html',
  styleUrls: ['./beneficiary-details.component.css']
})
export class BeneficiaryDetailsComponent implements OnInit {


  beneficiarys: Beneficiary[];
  errMsg: string;


  constructor(private beneficiaryService: BeneficiaryService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let obr = this.beneficiaryService.getAll();

    obr.subscribe(
      (data) => { this.beneficiarys = data; },
      (err) => {
        this.errMsg = "unable to fetch data";
        console.log(JSON.stringify(err));
      }
    );
  }


  delete(account_Number: number) {
    let obr = this.beneficiaryService.delete(account_Number);
    obr.subscribe(
      () => { this.loadData(); },
      (err) => {
        this.errMsg = `unable to delete ! please try after some sometime.
        If priblem persists contact Admin`;
        console.log(JSON.stringify(err));
      }
    );
  }
  details(account_Number: number) {
    this.router.navigateByUrl(`/home/${account_Number}`)
  }
}