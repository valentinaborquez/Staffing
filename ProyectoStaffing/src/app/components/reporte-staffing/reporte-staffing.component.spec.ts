import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteStaffingComponent } from './reporte-staffing.component';

describe('ReporteStaffingComponent', () => {
  let component: ReporteStaffingComponent;
  let fixture: ComponentFixture<ReporteStaffingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
