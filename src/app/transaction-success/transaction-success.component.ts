import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../service/transaction.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction-success',
  templateUrl: './transaction-success.component.html',
  styleUrls: ['./transaction-success.component.css']
})
export class TransactionSuccessComponent implements OnInit {


  transactions: Transaction[];
  errMsg: string;


  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let obr = this.transactionService.getAll();





    obr.subscribe(
      (data) => { this.transactions = data; },
      (err) => {
        this.errMsg = "unable to fetch data";
        console.log(JSON.stringify(err));
      }
    );
  }


  delete(account_Number: number) {
    let obr = this.transactionService.delete(account_Number);
    obr.subscribe(
      () => { this.loadData(); },
      (err) => {
        this.errMsg = `unable to delete ! please try after some sometime.
        If priblem persists contact Admin`;
        console.log(JSON.stringify(err));
      }
    );
  }

  getByDate(fromDate: Date, toDate: Date) {
    let obr = this.transactionService.getByDate(fromDate, toDate);
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
