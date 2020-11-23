import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestedErrandersComponent } from './intrested-erranders.component';

describe('IntrestedErrandersComponent', () => {
  let component: IntrestedErrandersComponent;
  let fixture: ComponentFixture<IntrestedErrandersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrestedErrandersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrestedErrandersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
