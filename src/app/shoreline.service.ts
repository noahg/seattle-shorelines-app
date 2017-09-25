import { Injectable } from '@angular/core';

//Geojson file exported from QGIS source shapefile via email from SDOT
import shorelinesData from '../data/ShorelineStreetEndsLayer.json';

@Injectable()
export class ShorelineService {

  idFieldname = 'NO_';

  public getShorelinesGeojson() {
      return shorelinesData;
  }

  public getShorelines() {
    // return an array of shoreline locations not geojson object
      return shorelinesData['features'];
}

  public getShoreline(id) {
      return this.getSingleShorelineFromGeojson(id, this.idFieldname);
  }

  private getSingleShorelineFromGeojson(id, idFieldname) {
    // pluck individual shoreline location from geojson object
    for(var i = 0; i < shorelinesData.features.length; i++) { 
      if(shorelinesData.features[i].properties[idFieldname] == id)
      return shorelinesData.features[i].properties
    }
  }

  constructor() { }

}
