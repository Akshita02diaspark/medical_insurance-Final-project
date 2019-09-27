import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliersComponent } from './appliers.component';

describe('AppliersComponent', () => {
  let component: AppliersComponent;
  let fixture: ComponentFixture<AppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
