import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientScreenListComponent } from './client-screen-list.component';

describe('ClientScreenListComponent', () => {
  let component: ClientScreenListComponent;
  let fixture: ComponentFixture<ClientScreenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientScreenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientScreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
