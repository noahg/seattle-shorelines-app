import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ShorelineService } from './../shoreline.service';
@Component({
  selector: 'shorelines-map',
  templateUrl: './shorelines-map.component.html',
  styleUrls: ['./shorelines-map.component.css']
})
export class ShorelinesMapComponent {
  @Output() shorelineClicked = new EventEmitter;
  // rough-in center for Seattle
  lat = 47.606209;
  lng = -122.332071;
  // id fieldname used in Seattle SDOT shapefile
  featureIdFieldname = 'NO_';
  shorelines;

  constructor(shorelineService: ShorelineService) { 
    this.shorelines = shorelineService.getShorelines();
  }

  layerClicked(clickEvent) {
    // console.log(clickEvent.feature.f[this.featureIdFieldname]);
    this.shorelineClicked.emit(clickEvent.feature.f[this.featureIdFieldname]);
  }

}
