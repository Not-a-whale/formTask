import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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

  statesUSA = [new FormControl('New York'), new FormControl('California')];
  statesIndia = [new FormControl('Andhra Pradesh'), new FormControl('Goa')]

  citiesNY = [new FormControl('Albany'), new FormControl('New York City')];
  citiesCali = [new FormControl('Sacramento'), new FormControl('Los Angeles'), new FormControl('San Francisco')];
  citiesAndhra = [new FormControl('Visakhapatnam'), new FormControl('Amaravati')];
  citiesGoa = [new FormControl('Panaji'), new FormControl('Vasco da Gama')];

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null),
      'email': new FormControl(null),
      'country': new FormControl(null),
      'phone': new FormControl(null),
      'lastName': new FormControl(null),
      'id': new FormControl(null),
      'state': new FormControl(),
      'city': new FormControl(),
      'code': new FormControl(null)
    })
  }

  onSubmit() {

  }
   
  onReset() {

  }
}
