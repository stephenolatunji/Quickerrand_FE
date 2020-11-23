import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandDescriptionExampleComponent } from './errand-description-example.component';

describe('ErrandDescriptionExampleComponent', () => {
  let component: ErrandDescriptionExampleComponent;
  let fixture: ComponentFixture<ErrandDescriptionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrandDescriptionExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandDescriptionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
