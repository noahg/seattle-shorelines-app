import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import shorelinesData from '../../data/ShorelineStreetEndsLayer.json';

@Component({
  selector: 'shorelines-map',
  templateUrl: './shorelines-map.component.html',
  styleUrls: ['./shorelines-map.component.css']
})
export class ShorelinesMapComponent implements OnInit {
  @Output() siteClicked = new EventEmitter;
  // rough-in center for Seattle
  lat = 47.606209;
  lng = -122.332071;
  // id fieldname used in Seattle SDOT shapefile
  featureIdFieldname = 'NO_';
  shorelines;

  constructor() { }

  ngOnInit() {
    this.shorelines = shorelinesData;
  }

  layerClicked(clickEvent) {
    console.log(clickEvent.feature.f[this.featureIdFieldname]);
    this.siteClicked.emit(clickEvent.feature.f[this.featureIdFieldname]);
  }

}
