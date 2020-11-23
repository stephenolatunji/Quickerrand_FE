import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandRequestComponent } from './errand-request.component';

describe('ErrandRequestComponent', () => {
  let component: ErrandRequestComponent;
  let fixture: ComponentFixture<ErrandRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
