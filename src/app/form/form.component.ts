import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output, 
  EventEmitter
} from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { storageService } from "../storage-service.component";
import { Router } from "@angular/router";


@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  signUpForm: FormGroup;
  countries = [new FormControl("USA"), new FormControl("India")];

  statesUSA = [new FormControl("New York"), new FormControl("California")];
  statesIndia = [new FormControl("Andhra Pradesh"), new FormControl("Goa")];

  citiesNY = [new FormControl("Albany"), new FormControl("New York City")];
  citiesCali = [
    new FormControl("Sacramento"),
    new FormControl("Los Angeles"),
    new FormControl("San Francisco")
  ];
  citiesAndhra = [
    new FormControl("Visakhapatnam"),
    new FormControl("Amaravati")
  ];
  citiesGoa = [new FormControl("Panaji"), new FormControl("Vasco da Gama")];

  @ViewChild("phoneInput", { static: false }) phoneInput: ElementRef;

  @Output() formReseted = new EventEmitter<boolean>();

  public mask: any = {
    mask: "+{38}(0__)000-00-00",
    lazy: false
  };

  formValid = false;


  DeleteMessage = 'Are you sure you want to reset the form? Click "Continue" if you aren\'t sure about that. Click again to reset the form.'

  public IDColor: string = "#a0a0a0";

  invalidMessages = [
    "This field is required and has to contain 2-32 cyrillic characters!",
    "This field is required and has to be a valid email address!",
    "This is a required field!",
    'This is a required field! Please enter your telephone number, formated as "0__-___-__-__"',
    "This field is required and has to contain 2-32 cyrillic characters",
    'This is a required field! It has to contain from 5 to 30 latin characters and "_"',
    "This is a required field!",
    "This is a required field!",
    "This field has to contain from 1 to 10 latin characters or numbers."
  ];

  public statusArr: string[] = [];

  constructor(private storageService: storageService, private router: Router) {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[а-яА-ЯёЁіІїЇ]{2,32}$/iu)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(/^\S{2,255}@\S+\.\S+$/iu)
      ]),
      country: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/\b[0-9]{12}\b/)
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[а-яА-ЯёЁіІїЇ]{2,32}$/iu)
      ]),
      id: new FormControl(null, [
        Validators.required,
        Validators.pattern(/\b[A-Za-z_]{5,30}\b/)
      ]),
      state: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.pattern(/\b[A-Za-z_0-9]{1,10}\b/))
    });

    if (this.storageService.savedForm)
      this.signUpForm.setValue(this.storageService.savedForm);
  }

  getColor() {
    if (
      this.signUpForm.get("id").pristine == false &&
      this.signUpForm.get("id").status === "VALID"
    ) {
      this.IDColor = "green";
    } else {
      this.IDColor = "red";
    }
    console.log(this.IDColor);
  }

  onSubmit() {
    if (this.signUpForm.status === "VALID") {
      this.storageService.savedForm = this.signUpForm.value;
      console.log(this.signUpForm);
      this.formValid = true;
      this.router.navigate(["/logined-user"]);
    } else {
      let namesArr = Object.keys(this.signUpForm.controls);
      console.log(namesArr);
      for (let i = 0; i < namesArr.length; i++) {
        this.statusArr.push(this.signUpForm.controls[namesArr[i]].status);
      }
      this.formValid = false;
      console.log(this.statusArr);
    }
  }

  onReset() {
    this.formReseted.emit(true);
  }

  resetForm (action: boolean) {
    if(action) {
      let namesArr = Object.keys(this.signUpForm.controls);

      for (let i = 0; i < namesArr.length; i++) {
        this.signUpForm.controls[namesArr[i]].setValue(null);
      }

      this.storageService.savedForm = {
        city: "",
        code: null,
        country: "",
        email: "",
        firstName: "",
        id: "",
        lastName: "",
        phone: null,
        state: null
      };

      this.statusArr = [];

      this.formValid = false;

      this.IDColor = '#a0a0a0';

      (<boolean>this.signUpForm.get("firstName").touched) = false;
      (<boolean>this.signUpForm.get('firstName').pristine) = true;

      (<boolean>this.signUpForm.get("id").touched) = false;
      (<boolean>this.signUpForm.get('id').pristine) = true;

      (<boolean>this.signUpForm.get("email").touched) = false;
      (<boolean>this.signUpForm.get('email').pristine) = true;

      (<boolean>this.signUpForm.get("country").touched) = false;
      (<boolean>this.signUpForm.get('country').pristine) = true;

      (<boolean>this.signUpForm.get("phone").touched) = false;
      (<boolean>this.signUpForm.get('phone').pristine) = true;

      (<boolean>this.signUpForm.get("lastName").touched) = false;
      (<boolean>this.signUpForm.get('lastName').pristine) = true;

      (<boolean>this.signUpForm.get("state").touched) = false;
      (<boolean>this.signUpForm.get('state').pristine) = true;

      (<boolean>this.signUpForm.get("city").touched) = false;
      (<boolean>this.signUpForm.get('city').pristine) = true;
      
      (<boolean>this.signUpForm.get("code").touched) = false;
      (<boolean>this.signUpForm.get('code').pristine) = true;
    }
  }

  onChange() {
    (<FormGroup>this.signUpForm.get("state").value) = null;
    (<FormGroup>this.signUpForm.get("city").value) = null;
  }
}
