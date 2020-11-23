import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnboardingStageTwoComponent } from './unboarding-stage-two.component';

describe('UnboardingStageTwoComponent', () => {
  let component: UnboardingStageTwoComponent;
  let fixture: ComponentFixture<UnboardingStageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnboardingStageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnboardingStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
