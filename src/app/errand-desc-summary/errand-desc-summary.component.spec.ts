import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandDescSummaryComponent } from './errand-desc-summary.component';

describe('ErrandDescSummaryComponent', () => {
  let component: ErrandDescSummaryComponent;
  let fixture: ComponentFixture<ErrandDescSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandDescSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandDescSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
