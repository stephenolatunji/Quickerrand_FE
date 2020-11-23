import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeErrandPageFiveComponent } from './make-errand-page-five.component';

describe('MakeErrandPageFiveComponent', () => {
  let component: MakeErrandPageFiveComponent;
  let fixture: ComponentFixture<MakeErrandPageFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeErrandPageFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeErrandPageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
