import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { SidenavLayoutComponent } from './sidenav-layout/sidenav-layout.component';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { PersonalExpenseComponent } from './personal-expense/personal-expense.component';
import { MonthExpenseComponent } from './month-expense/month-expense.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavLayoutComponent,
    HomeComponent,
    PersonalExpenseComponent,
    MonthExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
