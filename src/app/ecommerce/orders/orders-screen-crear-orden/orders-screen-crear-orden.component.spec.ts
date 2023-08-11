import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersScreenCrearOrdenComponent } from './orders-screen-crear-orden.component';

describe('OrdersScreenCrearOrdenComponent', () => {
  let component: OrdersScreenCrearOrdenComponent;
  let fixture: ComponentFixture<OrdersScreenCrearOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersScreenCrearOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersScreenCrearOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
