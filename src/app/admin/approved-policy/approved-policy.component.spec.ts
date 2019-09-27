import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedPolicyComponent } from './approved-policy.component';

describe('ApprovedPolicyComponent', () => {
  let component: ApprovedPolicyComponent;
  let fixture: ComponentFixture<ApprovedPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
