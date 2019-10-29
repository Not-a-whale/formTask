import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSliderComponent } from './form-slider.component';

describe('FormSliderComponent', () => {
  let component: FormSliderComponent;
  let fixture: ComponentFixture<FormSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
