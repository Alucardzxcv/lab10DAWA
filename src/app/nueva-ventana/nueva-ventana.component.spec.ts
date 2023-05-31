import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaVentanaComponent } from './nueva-ventana.component';

describe('NuevaVentanaComponent', () => {
  let component: NuevaVentanaComponent;
  let fixture: ComponentFixture<NuevaVentanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaVentanaComponent]
    });
    fixture = TestBed.createComponent(NuevaVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
