import { NgModule } from '@angular/core';

import {
  MdMenuModule,
  MdToolbarModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [

    MdMenuModule,
    MdToolbarModule,
    MdCardModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdCardModule
  ]
})
export class MaterialModule {}