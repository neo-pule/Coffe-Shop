import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpComponent } from './pop-up.component';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
