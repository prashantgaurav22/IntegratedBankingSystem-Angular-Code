import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestministatementComponent } from './requestministatement.component';

describe('RequestministatementComponent', () => {
  let component: RequestministatementComponent;
  let fixture: ComponentFixture<RequestministatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestministatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestministatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
