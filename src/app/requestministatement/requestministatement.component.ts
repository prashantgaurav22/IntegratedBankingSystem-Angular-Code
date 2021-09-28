import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service'

@Component({
  selector: 'app-requestministatement',
  templateUrl: './requestministatement.component.html',
  styleUrls: ['./requestministatement.component.css']
})
export class RequestministatementComponent implements OnInit {

  firstDate = Date;
  lastDate = Date;
  errMsg: any;



  constructor(private trans: TransactionService) {



  }

  ngOnInit(): void {
  }
  save(firstDate: Date, lastDate: Date) {


    let obr = this.trans.getByDate(firstDate, lastDate);
    obr.subscribe(
      () => { this.loadData(); },
      (err) => {
        this.errMsg = `unable to delete !please try after some sometime.
        If priblem persists contact Admin`;
        console.log(JSON.stringify(err));
      }
    );
  } loadData() {
    throw new Error("Method not implemented.");
  }
}
