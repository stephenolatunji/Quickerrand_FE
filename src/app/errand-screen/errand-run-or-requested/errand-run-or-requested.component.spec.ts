import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandRunOrRequestedComponent } from './errand-run-or-requested.component';

describe('ErrandRunOrRequestedComponent', () => {
  let component: ErrandRunOrRequestedComponent;
  let fixture: ComponentFixture<ErrandRunOrRequestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandRunOrRequestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandRunOrRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
