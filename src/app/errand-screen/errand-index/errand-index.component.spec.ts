import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandIndexComponent } from './errand-index.component';

describe('ErrandIndexComponent', () => {
  let component: ErrandIndexComponent;
  let fixture: ComponentFixture<ErrandIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
