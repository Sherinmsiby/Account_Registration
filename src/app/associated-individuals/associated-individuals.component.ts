import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'IPS-associated-individuals',
  templateUrl: './associated-individuals.component.html',
  styleUrls: ['./associated-individuals.component.scss']
})
export class AssociatedIndividualsComponent implements OnInit {

  @Input() accounts: String;

  constructor() { }

  ngOnInit() {
    console.log(this.accounts);
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
