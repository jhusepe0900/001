import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenScreenComponent } from './orden-screen.component';

describe('OrdenScreenComponent', () => {
  let component: OrdenScreenComponent;
  let fixture: ComponentFixture<OrdenScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
