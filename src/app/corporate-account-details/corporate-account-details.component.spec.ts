import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAccountDetailsComponent } from './corporate-account-details.component';

describe('CorporateAccountDetailsComponent', () => {
  let component: CorporateAccountDetailsComponent;
  let fixture: ComponentFixture<CorporateAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
