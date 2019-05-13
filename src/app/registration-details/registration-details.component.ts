import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'IPS-registration-details',
    templateUrl: './registration-details.component.html',
    styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit {

    genders = ['male', 'female'];
    registrationForm: FormGroup;
    forbiddenUserNames = ['geetha', 'puja'];
    availableAssociatedAccounts: [];
    accountTypes = ['Personal', 'Corporate'];
    individualsCount = [1, 2, 3, 4, 5, 6];
    ngOnInit() {
        //   this.registrationForm = new FormGroup({
        //     // 'userData': new FormGroup({
        //     //     'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        //     //     'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
        //     // }),
        //     'email':new FormControl('',[Validators.required,Validators.email],this.forbiddenEmails),
        //     'accountType':new FormControl(),
        //     'individualCount':new FormControl(),
        //     'gender':new FormControl('female'),
        //     'hobbies':new FormArray([]),
        //     email: new FormControl()
        //   });


        this.registrationForm = new FormGroup({
            // email: new FormControl([Validators.required,Validators.email],this.forbiddenEmails),
            accountType: new FormControl([Validators.required]),
            individualCount: new FormControl(null, [Validators.required]),
            gender: new FormControl(),
            hobbies: new FormArray([]),
            associatedIndividualsDetails: new FormArray([]),
            age: new FormControl([Validators.required]),
            personalAccountDetails: new FormGroup({
                accountName: new FormControl(null, [Validators.required]),
                accountHolderFirstName: new FormControl(null, [Validators.required]),
                accountHolderLastName: new FormControl(null, [Validators.required]),
                tfnNo: new FormControl(null, [Validators.required]),
                bankAccountNo: new FormControl(null, [Validators.required, this.bankAccountValidator.bind(this)]),
                bankAccountBSB: new FormControl(null, [Validators.required,this.bankAccountBSBValidator.bind(this)]),
            }),
            corporateAccountDetails: new FormGroup({
                accountName: new FormControl(null, [Validators.required]),
                companyName: new FormControl(null, [Validators.required]),
                abnNo: new FormControl(null, [Validators.required]),
                bankAccountNo: new FormControl(null, [Validators.required, this.bankAccountValidator.bind(this)]),
                bankAccountBSB: new FormControl(null, [Validators.required,this.bankAccountBSBValidator.bind(this)]),
                companyOfficersCount:new FormControl(null, [Validators.required]),
            })
        });


        this.registrationForm.setValue({
            // 'userData':{
            //   'username':'geetha',
            //   'email':'geetha@gmail.com'
            // },
            'age': '',
            'accountType': '',
            'individualCount': '',
            'associatedIndividualsDetails': [],
            'gender': 'female',
            'hobbies': [],
            'personalAccountDetails':
            {
                'accountName': '',
                'accountHolderFirstName': '',
                'accountHolderLastName': '',
                'tfnNo': '',
                'bankAccountNo': '',
                'bankAccountBSB': ''
            },
            'corporateAccountDetails':
            {
                'accountName': '',
                'companyName': '',
                'abnNo':'',
                'bankAccountNo': '',
                'bankAccountBSB': '',
                'companyOfficersCount':''
            }
        })
    }

    onSubmit() {
        console.log(this.registrationForm);
    }

    onAddHobby() {

        const control = new FormControl(null, Validators.required);
        (<FormArray>this.registrationForm.get('hobbies')).push(control);
        console.log(this.registrationForm.get('hobbies'));

    }



    bankAccountValidator(control: FormControl,value): { [key: string]: boolean } | null {

        if (control && control.value) {
            let str =this.numDigits(control.value);//.toLocaleString();
            console.log("str", str);
            if(str !== 8)
            {
                return { 'invalidBankAccountNumber': true };
            }
            return null;
        }
        return null;
    }

    bankAccountBSBValidator(control: FormControl,value): { [key: string]: boolean } | null {

        if (control && control.value) {
            let str =this.numDigits(control.value);//.toLocaleString();
            console.log("str", str);
            if(str !== 6)
            {
                return { 'invalidBankAccountBSBNumber': true };
            }
            return null;
        }
        return null;
    }
    numDigits(x) {
        return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
      }
    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({ 'emailIsForbidden': true });
                }
                else {
                    resolve(null);
                }

            }, 1500);
        });
        return promise;
    }


    displayAssociatedIndividuals() {

        return this.registrationForm.value.accountType !== "" && this.registrationForm.value.individualCount !== "";
    }
    updateIndividualCount(count) {
        console.log("here", this.registrationForm.get('associatedIndividualsDetails'));
        this.availableAssociatedAccounts = this.updateAssociatedIndividualDetails(count);
        // let regForm =this.registrationForm.get('associatedIndividualsDetails');
        // this.availableAssociatedAccounts.forEach(item => {

        //     const control=new FormControl("H1",Validators.required);
        //  console.log("here",this.registrationForm.get('associatedIndividualsDetails'));
        //      (<FormArray>regForm).push(control);
        //   });
        // console.log(this.registrationForm.get('associatedIndividualsDetails'));

    }
    updateAssociatedIndividualDetails(selectedindividualCount) {

        return Array.apply(null, { length: selectedindividualCount }).map(function (value, index) {
            return index + 1;
        });
        console.log(this.availableAssociatedAccounts);
    }
    displayPersonalAccountDetails() {
        return this.registrationForm.value.accountType === this.accountTypes[0] && this.registrationForm.value.individualCount > 0;
    }
    displayCorporateAccountDetails() {
        return this.registrationForm.value.accountType === this.accountTypes[1] && this.registrationForm.value.individualCount > 0;
    }
    

}
