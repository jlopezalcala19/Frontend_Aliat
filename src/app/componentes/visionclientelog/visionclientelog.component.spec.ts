import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionclientelogComponent } from './visionclientelog.component';

describe('VisionclientelogComponent', () => {
  let component: VisionclientelogComponent;
  let fixture: ComponentFixture<VisionclientelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionclientelogComponent]
    });
    fixture = TestBed.createComponent(VisionclientelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
