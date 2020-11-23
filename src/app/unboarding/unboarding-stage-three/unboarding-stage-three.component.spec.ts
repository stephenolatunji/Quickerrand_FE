import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnboardingStageThreeComponent } from './unboarding-stage-three.component';

describe('UnboardingStageThreeComponent', () => {
  let component: UnboardingStageThreeComponent;
  let fixture: ComponentFixture<UnboardingStageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnboardingStageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnboardingStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
