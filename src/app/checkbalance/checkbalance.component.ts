import { Component, OnInit, Input } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { Account } from '../model/account';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css']
})



export class CheckbalanceComponent implements OnInit {
  balance: number;
  msg: string;



  constructor() {
    this.balance = 0;


  }

  ngOnInit(): void {
  }
}
