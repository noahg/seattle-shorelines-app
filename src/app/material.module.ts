import { NgModule } from '@angular/core';

import {
  MdMenuModule,
  MdToolbarModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdInputModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdInputModule
  ]
})
export class MaterialModule {}