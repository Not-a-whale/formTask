import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormLoginedUserComponent } from './form/form-logined-user/form-logined-user.component';
import { FormSliderComponent } from './form-slider/form-slider.component';
import { IMaskModule } from 'angular-imask';
import { StorageComponent } from './storage/storage.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormLoginedUserComponent,
    FormSliderComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
