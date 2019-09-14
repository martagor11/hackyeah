import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAidQuestionComponent } from './first-aid-question.component';

describe('FirstAidQuestionComponent', () => {
  let component: FirstAidQuestionComponent;
  let fixture: ComponentFixture<FirstAidQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAidQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAidQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
