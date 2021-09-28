import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmonannperstatementComponent } from './requestmonannperstatement.component';

describe('RequestmonannperstatementComponent', () => {
  let component: RequestmonannperstatementComponent;
  let fixture: ComponentFixture<RequestmonannperstatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestmonannperstatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestmonannperstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
