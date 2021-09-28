import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payutilitybills',
  templateUrl: './payutilitybills.component.html',
  styleUrls: ['./payutilitybills.component.css']
})
export class PayutilitybillsComponent implements OnInit {
  selectedValue: any;

  constructor() { }

  ngOnInit(): void {
  }


  public selectedType(val) {
    this.selectedValue = val.target.value;
    console.log(this.selectedValue);
  }

}
