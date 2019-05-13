import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'IPS-personal-account-details',
  templateUrl: './personal-account-details.component.html',
  styleUrls: ['./personal-account-details.component.scss']
})
export class PersonalAccountDetailsComponent implements OnInit {

  model:any={};
  @Input() accountType: string
  constructor() { }

  ngOnInit() {
    console.log(this.accountType)  ;
  }

}
