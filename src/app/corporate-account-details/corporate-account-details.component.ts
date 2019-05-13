import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'IPS-corporate-account-details',
  templateUrl: './corporate-account-details.component.html',
  styleUrls: ['./corporate-account-details.component.scss']
})
export class CorporateAccountDetailsComponent implements OnInit {

  companyOfficersTotalCount: [];
  updatedCompanyOfficersTotalCount: [];
  companyOfficersType:string="companyOfficers";
  constructor() { }

  ngOnInit() {
    this.companyOfficersTotalCount = this.updateAssociatedIndividualDetails(6);
  }

  updateAssociatedIndividualDetails(selectedindividualCount) {

    return Array.apply(null, { length: selectedindividualCount }).map(function (value, index) {
      return index + 1;
    });
    console.log(this.companyOfficersTotalCount);
  }
  updateCompanyOfficersCountChange(count) {console.log("////",count);
    this.updatedCompanyOfficersTotalCount = this.updateAssociatedIndividualDetails(count);
    console.log("updatedCompanyOfficersTotalCount",this.updatedCompanyOfficersTotalCount);
  }  
}
