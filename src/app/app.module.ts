import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ShorelineListComponent } from './shoreline-list/shoreline-list.component';
import { ShorelineDetailsComponent } from './shoreline-details/shoreline-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShorelineListComponent,
    ShorelineDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
