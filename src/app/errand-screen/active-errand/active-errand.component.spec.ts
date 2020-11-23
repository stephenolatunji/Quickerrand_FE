import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveErrandComponent } from './active-errand.component';

describe('ActiveErrandComponent', () => {
  let component: ActiveErrandComponent;
  let fixture: ComponentFixture<ActiveErrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveErrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveErrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
