import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'IPS-associated-individuals',
  templateUrl: './associated-individuals.component.html',
  styleUrls: ['./associated-individuals.component.scss']
})
export class AssociatedIndividualsComponent implements OnInit {

  @Input() selectedAccountType: String;
  @Input() index: number;
 // @Input('group') dummyGroup: FormGroup;
  constructor() { }

  ngOnInit() {
    console.log("s================",this.selectedAccountType);
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
  selectedEntry;

  onSelectionChange(entry) {
      this.selectedEntry = entry;
  }
}
