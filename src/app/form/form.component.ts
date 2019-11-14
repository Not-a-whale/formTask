import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  signUpForm: FormGroup;
  countries = [
    new FormControl('USA'),
    new FormControl('India')
  ];

  savedForm: {
    city: string,
    code: number,
    country: string,
    email: string,
    firstName: string,
    id: string,
    lastName: string,
    phone: number,
    state: string;
  }

  statesUSA = [new FormControl('New York'), new FormControl('California')];
  statesIndia = [new FormControl('Andhra Pradesh'), new FormControl('Goa')]

  citiesNY = [new FormControl('Albany'), new FormControl('New York City')];
  citiesCali = [new FormControl('Sacramento'), new FormControl('Los Angeles'), new FormControl('San Francisco')];
  citiesAndhra = [new FormControl('Visakhapatnam'), new FormControl('Amaravati')];
  citiesGoa = [new FormControl('Panaji'), new FormControl('Vasco da Gama')];

  @ViewChild('phoneInput', {static: false}) phoneInput: ElementRef;
  public mask:any = {
    mask: '+{38}(0__)000-00-00',
    lazy: false
  }

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required, Validators.pattern(/^[а-яА-ЯёЁіІїЇ]{2,32}$/iu)]),
      'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^\S{2,255}@\S+\.\S+$/iu)]),
      'country': new FormControl(null, Validators.required),
      'phone': new FormControl(null),
      'lastName': new FormControl(null, [Validators.required, Validators.pattern(/^[а-яА-ЯёЁіІїЇ]{2,32}$/iu)]),
      'id': new FormControl(null, [Validators.required, Validators.pattern(/\b[A-Za-z_]{5,30}\b/)]),
      'state': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'code': new FormControl(null, [Validators.pattern(/\b[A-Za-z_0-9]{1,10}\b/)])
    });

    this.signUpForm.setValue(this.savedForm);
  }


  onBlur(blur: boolean) {

  }

  onSubmit() {
    if(this.signUpForm.status === 'VALID') {
      this.savedForm = this.signUpForm.value;
      console.log(this.savedForm);
    }
  }
   
  onReset() {

  }

  onChange() {
   (<FormGroup>this.signUpForm.get('state').value) = null;
   (<FormGroup>this.signUpForm.get('city').value) = null;
  }

  onOpen(controlName: string) {
  }
}
