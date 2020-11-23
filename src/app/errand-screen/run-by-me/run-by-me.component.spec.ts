import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunByMeComponent } from './run-by-me.component';

describe('RunByMeComponent', () => {
  let component: RunByMeComponent;
  let fixture: ComponentFixture<RunByMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunByMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunByMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
