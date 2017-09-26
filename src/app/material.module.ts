import { NgModule } from '@angular/core';

import {
  MdMenuModule,
  MdToolbarModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule
  ]
})
export class MaterialModule {}