import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import * as moment from 'moment'


@Component({
    selector: 'IPS-registration-details',
    templateUrl: './registration-details.component.html',
    styleUrls: ['./registration-details.component.scss']
})
export class RegistrationDetailsComponent implements OnInit {
    accountDetailsData: any;
    registrationForm: FormGroup;
    selectedAssociateCount: any;
    availableAssociatedAccounts: [];
    accountTypes = ['Personal', 'Corporate'];
    individualsCount = [1, 2, 3, 4, 5, 6];
    dateErrorArray = [];
    constructor(private fb: FormBuilder) { }
    formSubscriber: any;
    individualAssociateData = [{
        'details': {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        }
    },
    {
        'details': {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        }
    },
    {
        'details': {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        }
    },
    {
        'details': {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        }
    },
    {
        'details': {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        }
    },
    {
        'details': {
            'title': '',
            'firstName': '',
            'lastName': '',
            'dob': ''
        }
    }
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
            projectOfficersDetails: new FormArray(details.map((detail) => this.createDetail(details))),
            accountType: new FormControl([Validators.required]),
            individualCount: new FormControl(null, [Validators.required])
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

            })
        });
    }

    ngOnInit() {
        this.registrationForm = this.setUpForm(this.details);
        this.registrationForm.setValue({
            'accountType': '',
            'individualCount': '',
            'associatedIndividualDetailsPersonal': this.individualAssociateData,
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
        this.onChanges();
    }


    save(form: FormGroup) {
        console.log(this.findInvalidControls() );
      }
    
      findInvalidControls() {
        const invalid = [];
        const controls = this.registrationForm.controls;
        for (const name in controls) {
            if (controls[name].invalid && controls[name].dirty) {
                invalid.push(name);
            }
        }
        return invalid;
    }
    onChanges(): void {
        this.formSubscriber = this.registrationForm.valueChanges.subscribe(value => {
            this.dateErrorArray = [];
            value['associatedIndividualDetailsCorporate'].forEach(item => {
                if (item.details.dob) {
                    this.dateErrorArray.push(this.ageValidator(item.details.dob));
                }

            });
            value['associatedIndividualDetailsPersonal'].forEach(item => {
                if (item.details.dob) {
                    this.dateErrorArray.push(this.ageValidator(item.details.dob));
                }

            });
            this.dateErrorArray = this.dateErrorArray.filter(Boolean);
        });

    }
    ngOnDestroy() {
        this.formSubscriber.unsubscribe();
    }
 
    ageValidator(changedValue) {
        let dateEntered = moment(new Date(changedValue)).format("DD.MM.YYYY");
        let modifiedDate = moment(dateEntered, "DD.MM.YYYY"),
            age = moment().diff(modifiedDate, 'years');
        if (age >= 18) {
            return null;
        } else {
            return { 'inValidAge': true };
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
        return this.registrationForm.value.accountType !== "" && this.registrationForm.value.individualCount !== "";
    }
    updateIndividualCount(count) {
        this.selectedAssociateCount = count;
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
    updateSelectType(value)
    {
        this.dateErrorArray=[];
    }

}
