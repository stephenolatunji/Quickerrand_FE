import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInrtestedErrandersListComponent } from './show-inrtested-erranders-list.component';

describe('ShowInrtestedErrandersListComponent', () => {
  let component: ShowInrtestedErrandersListComponent;
  let fixture: ComponentFixture<ShowInrtestedErrandersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInrtestedErrandersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInrtestedErrandersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
