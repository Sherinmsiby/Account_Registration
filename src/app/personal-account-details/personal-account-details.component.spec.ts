import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAccountDetailsComponent } from './personal-account-details.component';

describe('PersonalAccountDetailsComponent', () => {
  let component: PersonalAccountDetailsComponent;
  let fixture: ComponentFixture<PersonalAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
