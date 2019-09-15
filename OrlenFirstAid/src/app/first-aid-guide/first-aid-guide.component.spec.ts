import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAidGuideComponent } from './first-aid-guide.component';

describe('FirstAidGuideComponent', () => {
  let component: FirstAidGuideComponent;
  let fixture: ComponentFixture<FirstAidGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAidGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAidGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
