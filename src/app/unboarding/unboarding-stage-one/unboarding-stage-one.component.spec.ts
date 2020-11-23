import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnboardingStageOneComponent } from './unboarding-stage-one.component';

describe('UnboardingStageOneComponent', () => {
  let component: UnboardingStageOneComponent;
  let fixture: ComponentFixture<UnboardingStageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnboardingStageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnboardingStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
