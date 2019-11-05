import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNombreComponent } from './input-nombre.component';

describe('InputNombreComponent', () => {
  let component: InputNombreComponent;
  let fixture: ComponentFixture<InputNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNombreComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
