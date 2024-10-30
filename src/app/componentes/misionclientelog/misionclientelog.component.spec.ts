import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionclientelogComponent } from './misionclientelog.component';

describe('MisionclientelogComponent', () => {
  let component: MisionclientelogComponent;
  let fixture: ComponentFixture<MisionclientelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisionclientelogComponent]
    });
    fixture = TestBed.createComponent(MisionclientelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
