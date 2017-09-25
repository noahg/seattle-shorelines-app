import { NgModule } from '@angular/core';

import {
  MdMenuModule,
  MdToolbarModule,
  MdCardModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule
  ]
})
export class MaterialModule {}