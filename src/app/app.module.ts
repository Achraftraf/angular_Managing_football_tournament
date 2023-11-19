import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArbitreComponent } from './arbitre/arbitre.component';
import { MenuComponent } from './arbitre/menu/menu.component';
import { FormComponent } from './arbitre/form/form.component';
import { ListComponent } from './arbitre/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './arbitre/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ArbitreComponent,
    MenuComponent,
    FormComponent,
    ListComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
