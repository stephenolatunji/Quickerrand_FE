import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeErrandPageThreeComponent } from './make-errand-page-three.component';

describe('MakeErrandPageThreeComponent', () => {
  let component: MakeErrandPageThreeComponent;
  let fixture: ComponentFixture<MakeErrandPageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeErrandPageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeErrandPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
