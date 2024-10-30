import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactenosclientelogComponent } from './contactenosclientelog.component';

describe('ContactenosclientelogComponent', () => {
  let component: ContactenosclientelogComponent;
  let fixture: ComponentFixture<ContactenosclientelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactenosclientelogComponent]
    });
    fixture = TestBed.createComponent(ContactenosclientelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
