import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayErrandFeeComponent } from './pay-errand-fee.component';

describe('PayErrandFeeComponent', () => {
  let component: PayErrandFeeComponent;
  let fixture: ComponentFixture<PayErrandFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayErrandFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayErrandFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
