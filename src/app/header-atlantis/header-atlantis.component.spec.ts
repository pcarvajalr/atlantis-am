import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAtlantisComponent } from './header-atlantis.component';

describe('HeaderAtlantisComponent', () => {
  let component: HeaderAtlantisComponent;
  let fixture: ComponentFixture<HeaderAtlantisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAtlantisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAtlantisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
