import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormLoginedUserComponent } from './form/form-logined-user/form-logined-user.component';
import { FormSliderComponent } from './form-slider/form-slider.component';
import { IMaskModule } from 'angular-imask';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'logined-user', component: FormLoginedUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormLoginedUserComponent,
    FormSliderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IMaskModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
