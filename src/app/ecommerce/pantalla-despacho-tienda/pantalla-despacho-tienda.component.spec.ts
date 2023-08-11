import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDespachoTiendaComponent } from './pantalla-despacho-tienda.component';

describe('PantallaDespachoTiendaComponent', () => {
  let component: PantallaDespachoTiendaComponent;
  let fixture: ComponentFixture<PantallaDespachoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaDespachoTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDespachoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
