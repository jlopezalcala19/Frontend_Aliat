import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosclientelogComponent } from './quienes-somosclientelog.component';

describe('QuienesSomosclientelogComponent', () => {
  let component: QuienesSomosclientelogComponent;
  let fixture: ComponentFixture<QuienesSomosclientelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuienesSomosclientelogComponent]
    });
    fixture = TestBed.createComponent(QuienesSomosclientelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
