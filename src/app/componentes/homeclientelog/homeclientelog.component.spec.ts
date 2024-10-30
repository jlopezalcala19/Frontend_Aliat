import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeclientelogComponent } from './homeclientelog.component';

describe('HomeclientelogComponent', () => {
  let component: HomeclientelogComponent;
  let fixture: ComponentFixture<HomeclientelogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeclientelogComponent]
    });
    fixture = TestBed.createComponent(HomeclientelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
