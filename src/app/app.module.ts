import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormLoginedUserComponent } from './form/form-logined-user/form-logined-user.component';
import { FormSliderComponent } from './form-slider/form-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormLoginedUserComponent,
    FormSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
