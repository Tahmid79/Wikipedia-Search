import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { HttpClientModule } from '@angular/common/http' ;

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule , HttpClientModule , CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
