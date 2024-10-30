import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderclientelogComponent } from './headerclientelog.component';

describe('HeaderclientelogComponent', () => {
  let component: HeaderclientelogComponent;
  let fixture: ComponentFixture<HeaderclientelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderclientelogComponent]
    });
    fixture = TestBed.createComponent(HeaderclientelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
