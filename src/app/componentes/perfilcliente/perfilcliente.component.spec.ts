import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilclienteComponent } from './perfilcliente.component';

describe('PerfilclienteComponent', () => {
  let component: PerfilclienteComponent;
  let fixture: ComponentFixture<PerfilclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilclienteComponent]
    });
    fixture = TestBed.createComponent(PerfilclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
