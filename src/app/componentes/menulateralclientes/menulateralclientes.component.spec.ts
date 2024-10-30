import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulateralclientesComponent } from './menulateralclientes.component';

describe('MenulateralclientesComponent', () => {
  let component: MenulateralclientesComponent;
  let fixture: ComponentFixture<MenulateralclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenulateralclientesComponent]
    });
    fixture = TestBed.createComponent(MenulateralclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
