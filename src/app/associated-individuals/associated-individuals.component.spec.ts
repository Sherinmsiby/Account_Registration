import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedIndividualsComponent } from './associated-individuals.component';

describe('AssociatedIndividualsComponent', () => {
  let component: AssociatedIndividualsComponent;
  let fixture: ComponentFixture<AssociatedIndividualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedIndividualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
