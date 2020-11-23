import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeErrandComponent } from './make-errand.component';

describe('MakeErrandComponent', () => {
  let component: MakeErrandComponent;
  let fixture: ComponentFixture<MakeErrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeErrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeErrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
