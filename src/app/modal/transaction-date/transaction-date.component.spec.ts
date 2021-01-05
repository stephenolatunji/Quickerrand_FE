import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDateComponent } from './transaction-date.component';

describe('TransactionDateComponent', () => {
  let component: TransactionDateComponent;
  let fixture: ComponentFixture<TransactionDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
