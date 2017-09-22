import { Injectable } from '@angular/core';

import shorelinesData from '../data/ShorelineStreetEndsLayer.json';

@Injectable()
export class ShorelineService {
  shorelines;
  shorelinesGeojson;

  public getShorelines() {
      // return an array of shoreline locations not geojson object
      this.shorelines = shorelinesData['features'];
      return this.shorelines;
  }

    public getShorelinesGeojson() {
      this.shorelinesGeojson = shorelinesData;
      return this.shorelinesGeojson;
  }

  public getShoreline(id) {
    console.log(this.shorelines);
    return id;
  }

  constructor() { }

}
