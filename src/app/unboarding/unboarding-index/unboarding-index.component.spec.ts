import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnboardingIndexComponent } from './unboarding-index.component';

describe('UnboardingIndexComponent', () => {
  let component: UnboardingIndexComponent;
  let fixture: ComponentFixture<UnboardingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnboardingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnboardingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
