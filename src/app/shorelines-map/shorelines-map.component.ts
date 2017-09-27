import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ShorelineService } from './../shoreline.service';
@Component({
  selector: 'app-shorelines-map',
  templateUrl: './shorelines-map.component.html',
  styleUrls: ['./shorelines-map.component.css']
})
export class ShorelinesMapComponent {
  @Output() shorelineClicked = new EventEmitter;

  // approx center for Seattle
  lat = 47.606209;
  lng = -122.332071;

  shorelines;
  idFieldname;

  constructor(
      shorelineService: ShorelineService,
      private router: Router
    ){
    this.shorelines = shorelineService.getShorelinesGeojson();
    this.idFieldname = shorelineService.getIdFieldname();
  }

  layerClicked(clickEvent) {
    const shorelineClicked = clickEvent.feature.f[this.idFieldname];
      this.router.navigate(['/shoreline', shorelineClicked])
  }

}
