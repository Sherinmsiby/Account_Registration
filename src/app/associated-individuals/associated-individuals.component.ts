import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'IPS-associated-individuals',
  templateUrl: './associated-individuals.component.html',
  styleUrls: ['./associated-individuals.component.scss']
})
export class AssociatedIndividualsComponent implements OnInit {

  @Input() selectedAccountType: String;
  @Input() index: number;
  @Input() ageForm = FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() { this.createForm() }

  createForm() {
  //  const control=new FormControl(null,Validators.required);
    //  (<FormArray>this.ageForm.get('associatedIndividualsDetails')).push(control);
   // this.ageForm.addControl("age", new FormControl('', Validators.required));
  }
  // titles = [
  //   {
  //     id: 1,
  //     description: 'Mr'
  //   },
  //   {
  //     id: 2,
  //     description: 'Mrs'
  //   },
  //   {
  //     id: 3,
  //     description: 'Miss'
  //   },
  //   {
  //     id: 4,
  //     description: 'Ms'
  //   }
  // ]
  // selectedEntry;

  // onSelectionChange(entry) {
  //     this.selectedEntry = entry;
  // }
}
