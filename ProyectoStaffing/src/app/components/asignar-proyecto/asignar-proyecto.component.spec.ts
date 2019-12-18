import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProyectoComponent } from './asignar-proyecto.component';

describe('AsignarProyectoComponent', () => {
  let component: AsignarProyectoComponent;
  let fixture: ComponentFixture<AsignarProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
