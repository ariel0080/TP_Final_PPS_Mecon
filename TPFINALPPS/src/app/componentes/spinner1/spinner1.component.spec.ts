import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spinner1Component } from './spinner1.component';

describe('Spinner1Component', () => {
  let component: Spinner1Component;
  let fixture: ComponentFixture<Spinner1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spinner1Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spinner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
