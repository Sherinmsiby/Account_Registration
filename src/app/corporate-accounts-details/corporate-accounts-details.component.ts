import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'IPS-corporate-accounts-details',
  templateUrl: './corporate-accounts-details.component.html',
  styleUrls: ['./corporate-accounts-details.component.scss']
})
export class CorporateAccountsDetailsComponent implements OnInit {

  constructor() { }


  companyOfficersTotalCount: [];
  updatedCompanyOfficersTotalCount: [];
  companyOfficersType: string = "companyOfficers";
  @Input()
  corporateAccountForm = FormGroup;
  @Input() completeData:any;
  selectedCompanyOfficersCount: number;


  ngOnInit() {
    this.companyOfficersTotalCount = this.updateCompanyOfficersDetails(6);
  }
  displayCompanyOfficersDetails() {

      return this.selectedCompanyOfficersCount > 0
  }
  updateCompanyOfficersDetails(selectedindividualCount) {

    return Array.apply(null, { length: selectedindividualCount }).map(function (value, index) {
      return index + 1;
    });
    console.log(this.companyOfficersTotalCount);
  }
  updateCompanyOfficersCount(count) {
   
    this.selectedCompanyOfficersCount = count;
    this.updatedCompanyOfficersTotalCount = this.updateCompanyOfficersDetails(count);
    console.log("updatedCompanyOfficersTotalCount", this.updatedCompanyOfficersTotalCount);
  }
}
