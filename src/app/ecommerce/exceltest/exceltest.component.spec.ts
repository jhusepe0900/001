import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceltestComponent } from './exceltest.component';

describe('ExceltestComponent', () => {
  let component: ExceltestComponent;
  let fixture: ComponentFixture<ExceltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceltestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
