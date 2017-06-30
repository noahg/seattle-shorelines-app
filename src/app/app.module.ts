// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// 3rd Party
import { AgmCoreModule } from '@agm/core';

// App
import { ENV_VARS } from '../environments/environment.secret';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ShorelineListComponent } from './shoreline-list/shoreline-list.component';
import { ShorelineDetailsComponent } from './shoreline-details/shoreline-details.component';
import { ShorelinesMapComponent } from './shorelines-map/shorelines-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ShorelineListComponent,
    ShorelineDetailsComponent,
    ShorelinesMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRouting,
    AgmCoreModule.forRoot({
      apiKey: ENV_VARS.GMAPS_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
