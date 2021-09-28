import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankrepresentativeComponent } from './bankrepresentative.component';

describe('BankrepresentativeComponent', () => {
  let component: BankrepresentativeComponent;
  let fixture: ComponentFixture<BankrepresentativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankrepresentativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankrepresentativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
