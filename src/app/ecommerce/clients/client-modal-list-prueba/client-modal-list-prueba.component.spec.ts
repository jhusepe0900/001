import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientModalListPruebaComponent } from './client-modal-list-prueba.component';

describe('ClientModalListPruebaComponent', () => {
  let component: ClientModalListPruebaComponent;
  let fixture: ComponentFixture<ClientModalListPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientModalListPruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientModalListPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
