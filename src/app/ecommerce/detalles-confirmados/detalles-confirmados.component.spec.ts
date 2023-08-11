import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesConfirmadosComponent } from './detalles-confirmados.component';

describe('DetallesConfirmadosComponent', () => {
  let component: DetallesConfirmadosComponent;
  let fixture: ComponentFixture<DetallesConfirmadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesConfirmadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
