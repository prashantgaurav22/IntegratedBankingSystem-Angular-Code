import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranactionsComponent } from './tranactions.component';

describe('TranactionsComponent', () => {
  let component: TranactionsComponent;
  let fixture: ComponentFixture<TranactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
