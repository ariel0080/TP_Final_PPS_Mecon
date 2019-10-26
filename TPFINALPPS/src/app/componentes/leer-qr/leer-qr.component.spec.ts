import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerQRComponent } from './leer-qr.component';

describe('LeerQRComponent', () => {
  let component: LeerQRComponent;
  let fixture: ComponentFixture<LeerQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerQRComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
