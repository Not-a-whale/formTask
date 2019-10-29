import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginedUserComponent } from './form-logined-user.component';

describe('FormLoginedUserComponent', () => {
  let component: FormLoginedUserComponent;
  let fixture: ComponentFixture<FormLoginedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoginedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
