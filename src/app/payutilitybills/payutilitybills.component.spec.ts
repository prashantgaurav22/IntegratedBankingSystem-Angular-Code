import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayutilitybillsComponent } from './payutilitybills.component';

describe('PayutilitybillsComponent', () => {
  let component: PayutilitybillsComponent;
  let fixture: ComponentFixture<PayutilitybillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayutilitybillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayutilitybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
