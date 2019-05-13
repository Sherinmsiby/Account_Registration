import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'IPS-personal-account-details',
  templateUrl: './personal-account-details.component.html',
  styleUrls: ['./personal-account-details.component.scss']
})
export class PersonalAccountDetailsComponent implements OnInit {

  model:any={};
  @Input() accountType: string
  @Input() personAccountForm = FormGroup;
  constructor() { }

  ngOnInit() {
    console.log(this.accountType)  ;
  }

}
