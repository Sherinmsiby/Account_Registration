import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, FormArrayName } from '@angular/forms';

@Component({
  selector: 'IPS-associated-individuals',
  templateUrl: './associated-individuals.component.html',
  styleUrls: ['./associated-individuals.component.scss']
})
export class AssociatedIndividualsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() detail: any;
  @Input() detailIndex: number;
  @Input() selectedAccountType;

  formArrayName: String;
  ngOnInit() {
   
    if (this.selectedAccountType === 'Corporate') {
      this.formArrayName = 'associatedIndividualDetailsCorporate';
    }else if (this.selectedAccountType === 'Personal') {
    this.formArrayName = 'associatedIndividualDetailsPersonal';
    }else{
      this.formArrayName = 'projectOfficersDetails';
    }
  }
  hideForCompanyOfficers()
  {
   
    return this.selectedAccountType !== "companyOfficer";
  }

  titles = [
    {
      id: 1,
      description: 'Mr'
    },
    {
      id: 2,
      description: 'Mrs'
    },
    {
      id: 3,
      description: 'Miss'
    },
    {
      id: 4,
      description: 'Ms'
    }
  ]

}
