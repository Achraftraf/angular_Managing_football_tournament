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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArbitreDashboardComponent } from './arbitre/arbitre-dashboard/arbitre-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ArbitreComponent,
    MenuComponent,
    FormComponent,
    ListComponent,
    ConfirmComponent,
    ArbitreDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
