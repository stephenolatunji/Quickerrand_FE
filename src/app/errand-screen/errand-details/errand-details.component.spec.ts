import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandDetailsComponent } from './errand-details.component';

describe('ErrandDetailsComponent', () => {
  let component: ErrandDetailsComponent;
  let fixture: ComponentFixture<ErrandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
