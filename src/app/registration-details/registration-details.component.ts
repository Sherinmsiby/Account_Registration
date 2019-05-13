import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'IPS-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    availableAssociatedAccounts=[];
    constructor() { }
    selectedAccountType:String="";
    selectedindividualCount:Number;

    accountTypes = ['Personal', 'Corporate'];
    individualsCount =[1,2,3,4,5,6];
    ngOnInit() {
        
    }
    displayAssociatedIndividuals(){
        console.log(this.selectedindividualCount && this.selectedAccountType);
        return true;//this.selectedindividualCount && this.selectedAccountType;
    }
    updateIndividualCountChange(count)
    {
        this.updateAssociatedIndividualDetails(count);
    }
    updateAssociatedIndividualDetails(selectedindividualCount)
    {

        this.availableAssociatedAccounts =Array.apply(null, {length: selectedindividualCount}).map(function(value, index){
            return index + 1;
          });
          console.log(this.availableAssociatedAccounts);
    }
    // convenience getter for easy access to form fields
   

}
