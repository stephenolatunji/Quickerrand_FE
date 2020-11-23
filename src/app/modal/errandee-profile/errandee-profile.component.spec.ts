import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandeeProfileComponent } from './errandee-profile.component';

describe('ErrandeeProfileComponent', () => {
  let component: ErrandeeProfileComponent;
  let fixture: ComponentFixture<ErrandeeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandeeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
