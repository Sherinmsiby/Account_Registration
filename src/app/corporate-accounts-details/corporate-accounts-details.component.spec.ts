import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAccountsDetailsComponent } from './corporate-accounts-details.component';

describe('CorporateAccountsDetailsComponent', () => {
  let component: CorporateAccountsDetailsComponent;
  let fixture: ComponentFixture<CorporateAccountsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateAccountsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateAccountsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
