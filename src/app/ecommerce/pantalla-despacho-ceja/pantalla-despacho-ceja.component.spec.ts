import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDespachoCejaComponent } from './pantalla-despacho-ceja.component';

describe('PantallaDespachoCejaComponent', () => {
  let component: PantallaDespachoCejaComponent;
  let fixture: ComponentFixture<PantallaDespachoCejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaDespachoCejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaDespachoCejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
