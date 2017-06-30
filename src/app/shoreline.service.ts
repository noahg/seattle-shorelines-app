import { Injectable } from '@angular/core';

import shorelinesData from '../data/ShorelineStreetEndsLayer.json';

@Injectable()
export class ShorelineService {
  shorelines;

  public getShorelines() {
      this.shorelines = shorelinesData;
      return this.shorelines;
  }

  constructor() { }

}
