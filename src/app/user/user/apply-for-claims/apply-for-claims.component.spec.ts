import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForClaimsComponent } from './apply-for-claims.component';

describe('ApplyForClaimsComponent', () => {
  let component: ApplyForClaimsComponent;
  let fixture: ComponentFixture<ApplyForClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
