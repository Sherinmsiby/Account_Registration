import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment'
import { DatePipe } from '@angular/common';

@Component({
    selector: 'IPS-registration-details',
    templateUrl: './registration-details.component.html',
    styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit {
    accountDetailsData;
    registrationForm: FormGroup;
    selectedAssociateCount;
    availableAssociatedAccounts: [];
    accountTypes = ['Personal', 'Corporate'];
    individualsCount = [1, 2, 3, 4, 5, 6];
    formsArr = [];
    constructor(private fb: FormBuilder) { }
    individualAssociateData=[{'details': {
        'title': '',
        'firstName': '',
        'lastName': '',
        'dob': ''
    }},
    {'details': {
        'title': '',
        'firstName': '',
        'lastName': '',
        'dob': ''
    }},
    {'details': {
        'title': '',
        'firstName': '',
        'lastName': '',
        'dob': ''
    }},
    {'details': {
        'title': '',
        'firstName': '',
        'lastName': '',
        'dob': ''
    }},
    {'details': {
        'title': '',
        'firstName': '',
        'lastName': '',
        'dob': ''
    }},
    {'details': {
        'title': '',
        'firstName': '',
        'lastName': '',
        'dob': ''
    }}
];
    details = [
        {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        },
        {
            title: '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        },
        {
            title: '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        },
        {
            title: '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        },
        {
            title: '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        },
        {
            title: '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        }
    ]

    createDetail(detail: any) {
        return new FormGroup({
            details: new FormGroup({
                title: new FormControl(detail.title, [Validators.required]),
                firstName: new FormControl(detail.firstName, [Validators.required]),
                lastName: new FormControl(detail.lastName, [Validators.required]),
                dob: new FormControl(detail.dob, [Validators.required]),
            }),

        })
    }

    setUpForm(details: any[]) {
        return new FormGroup({
            associatedIndividualDetailsCorporate: new FormArray(details.map((detail) => this.createDetail(details))),
            associatedIndividualDetailsPersonal: new FormArray(details.map((detail) => this.createDetail(details))),
            projectOfficersDetails:new FormArray(details.map((detail) => this.createDetail(details))),
            effectiveEndDate: new FormControl([Validators.required, this.bankAccountValidator.bind(this)]),
            accountType: new FormControl([Validators.required]),
            individualCount: new FormControl(null, [Validators.required]),
            gender: new FormControl(),
            hobbies: new FormArray([]),
            age: new FormControl([Validators.required])
            , personalAccountDetails: new FormGroup({
                accountName: new FormControl(null, [Validators.required]),
                accountHolderFirstName: new FormControl(null, [Validators.required]),
                accountHolderLastName: new FormControl(null, [Validators.required]),
                tfnNo: new FormControl(null, [Validators.required]),
                bankAccountNo: new FormControl(null, [Validators.required, this.bankAccountValidator.bind(this)]),
                bankAccountBSB: new FormControl(null, [Validators.required, this.bankAccountBSBValidator.bind(this)])

            }),
            corporateAccountDetails: new FormGroup({
                accountName: new FormControl(null, [Validators.required]),
                companyName: new FormControl(null, [Validators.required]),
                abnNo: new FormControl(null, [Validators.required]),
                bankAccountNo: new FormControl(null, [Validators.required, this.bankAccountValidator.bind(this)]),
                bankAccountBSB: new FormControl(null, [Validators.required, this.bankAccountBSBValidator.bind(this)]),
                companyOfficersCount: new FormControl(null, [Validators.required])

            }),
            associatedIndividualDetails: new FormGroup({
                title: new FormControl(null, [Validators.required]),
                firstName: new FormControl(null, [Validators.required]),
                lastName: new FormControl(null, [Validators.required]),
                dob: new FormControl(null, [Validators.required]),
            })
        });
    }

    ngOnInit() {
        this.registrationForm = this.setUpForm(this.details);
        this.registrationForm.setValue({
            'effectiveEndDate': '',
            'age': '',
            'accountType': '',
            'individualCount': '',
            'associatedIndividualDetails': {
                'title': '',
                'firstName': '',
                'lastName': '',
                'dob': ''
            },
            'associatedIndividualDetailsPersonal': this.individualAssociateData,
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
                'abnNo': '',
                'bankAccountNo': '',
                'bankAccountBSB': '',
                'companyOfficersCount': '',

            },

            'associatedIndividualDetailsCorporate': this.individualAssociateData,
            'projectOfficersDetails': this.individualAssociateData,
            })
        //this.registrationForm.addControl('cars',this.setUpForm(this.cars));
        //this.registrationForm.patchValue({'cars':this.cars});
    }

    onSubmit() {
        console.log(this.registrationForm);
        this.compareTwoDates();
    }
    compareTwoDates() {
        let DateEntered = moment(new Date(this.registrationForm.controls['effectiveEndDate'].value)).format("DD.MM.YYYY");
        var birthday = moment(DateEntered, "DD.MM.YYYY"),
            age = moment().diff(birthday, 'years');

        console.log(age); // output: 18; expected: == 18
        if (age >= 18) {
            let error = { isError: true, errorMessage: 'BIG' };
            console.log("error", error);

        } else {
            let error = { isError: true, errorMessage: 'SMALL' };
            console.log("error", error);
            if (this.registrationForm.get('effectiveEndDate').errors) {
                this.registrationForm.get('effectiveEndDate').errors.push({ 'inValidAge': true });
            }

        }
    }


    bankAccountValidator(control: FormControl): { [key: string]: boolean } | null {

        if (control && control.value) {
            let str = this.numDigits(control.value);
            if (str !== 8) {
                return { 'invalidBankAccountNumber': true };
            }
            return null;
        }
        return null;
    }

    bankAccountBSBValidator(control: FormControl, ): { [key: string]: boolean } | null {

        if (control && control.value) {
            let str = this.numDigits(control.value);
            if (str !== 6) {
                return { 'invalidBankAccountBSBNumber': true };
            }
            return null;
        }
        return null;
    }
    numDigits(x) {
        return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
    }


    displayAssociatedIndividuals() {

        console.log(this.registrationForm.value.accountType !== "" && this.registrationForm.value.individualCount !== "");
        return this.registrationForm.value.accountType !== "" && this.registrationForm.value.individualCount !== "";
    }
    updateIndividualCount(count) {
           this.selectedAssociateCount =count;
           this.availableAssociatedAccounts = this.updateAssociatedIndividualDetails(count);
    }
    updateAssociatedIndividualDetails(selectedindividualCount) {

        return Array.apply(null, { length: selectedindividualCount }).map(function (value, index) {
            return index + 1;
        });
    }
    displayPersonalAccountDetails() {
        return this.registrationForm.value.accountType === this.accountTypes[0] && this.registrationForm.value.individualCount > 0;
    }
    displayCorporateAccountDetails() {
        return this.registrationForm.value.accountType === this.accountTypes[1] && this.registrationForm.value.individualCount > 0;
    }


}
