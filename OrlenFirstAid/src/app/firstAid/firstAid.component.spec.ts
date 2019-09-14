/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirstAidComponent } from './firstAid.component';

describe('FirstAidComponent', () => {
  let component: FirstAidComponent;
  let fixture: ComponentFixture<FirstAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
