import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIndexComponent } from './transaction-index.component';

describe('TransactionIndexComponent', () => {
  let component: TransactionIndexComponent;
  let fixture: ComponentFixture<TransactionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
