import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'IPS-corporate-account-details',
  templateUrl: './corporate-account-details.component.html',
  styleUrls: ['./corporate-account-details.component.scss']
})
export class CorporateAccountDetailsComponent implements OnInit {

  companyOfficersTotalCount: [];
  updatedCompanyOfficersTotalCount: [];
  companyOfficersType: string = "companyOfficers";
  @Input()
  corporateAccountForm = FormGroup;
  selectedCompanyOfficersCount: number;


  constructor() { }

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
  }
  updateCompanyOfficersCount(officerCount: number) {

    this.selectedCompanyOfficersCount = officerCount;
    this.updatedCompanyOfficersTotalCount = this.updateCompanyOfficersDetails(officerCount);
    console.log("updatedCompanyOfficersTotalCount", this.updatedCompanyOfficersTotalCount);
  }
}
