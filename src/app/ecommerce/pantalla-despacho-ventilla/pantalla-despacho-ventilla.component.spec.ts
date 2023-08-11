import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDespachoVentillaComponent } from './pantalla-despacho-ventilla.component';

describe('PantallaDespachoVentillaComponent', () => {
  let component: PantallaDespachoVentillaComponent;
  let fixture: ComponentFixture<PantallaDespachoVentillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaDespachoVentillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDespachoVentillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
