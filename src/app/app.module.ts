import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { GlobalModule } from './global/global/global.module';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

 
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableComponent } from './component/dashboard/table/table.component';
import { HeaderComponent } from './component/dashboard/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { ViewComponentComponent } from './component/dashboard/table/view-component/view-component.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    HeaderComponent,
    LoginComponent,
    ViewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    GlobalModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
