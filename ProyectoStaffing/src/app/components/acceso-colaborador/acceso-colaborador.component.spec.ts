import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoColaboradorComponent } from './acceso-colaborador.component';

describe('AccesoColaboradorComponent', () => {
  let component: AccesoColaboradorComponent;
  let fixture: ComponentFixture<AccesoColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
