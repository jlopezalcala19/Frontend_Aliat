import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardclientesComponent } from './dashboardclientes.component';

describe('DashboardclientesComponent', () => {
  let component: DashboardclientesComponent;
  let fixture: ComponentFixture<DashboardclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardclientesComponent]
    });
    fixture = TestBed.createComponent(DashboardclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
