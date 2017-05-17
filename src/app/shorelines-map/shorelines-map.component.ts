import { Component, OnInit } from '@angular/core';

import shorelinesData from '../../data/ShorelineStreetEndsLayer.json';

@Component({
  selector: 'shorelines-map',
  templateUrl: './shorelines-map.component.html',
  styleUrls: ['./shorelines-map.component.css']
})
export class ShorelinesMapComponent implements OnInit {
  lat: number = 47.606209;
  lng: number = -122.332071;

  shorelines;

  constructor() { }

  ngOnInit() {
    this.shorelines = shorelinesData;
  }

  layerClicked(clickEvent) {
    console.log(clickEvent)
  }

}
