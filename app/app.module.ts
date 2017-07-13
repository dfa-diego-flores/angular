import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './controller/form-login.component';
import { FormMainComponent } from './controller/form-main.component';
import { FormPersonaComponent } from './controller/form-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormMainComponent,
    FormPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
