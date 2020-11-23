import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeErrandPageFourComponent } from './make-errand-page-four.component';

describe('MakeErrandPageFourComponent', () => {
  let component: MakeErrandPageFourComponent;
  let fixture: ComponentFixture<MakeErrandPageFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeErrandPageFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeErrandPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
