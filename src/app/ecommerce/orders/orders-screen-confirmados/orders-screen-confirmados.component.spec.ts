import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersScreenConfirmadosComponent } from './orders-screen-confirmados.component';

describe('OrdersScreenConfirmadosComponent', () => {
  let component: OrdersScreenConfirmadosComponent;
  let fixture: ComponentFixture<OrdersScreenConfirmadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersScreenConfirmadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersScreenConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
