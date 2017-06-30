import { Component, OnInit } from '@angular/core';

import { ShorelineService } from './../shoreline.service';

@Component({
  selector: 'app-shoreline-list',
  templateUrl: './shoreline-list.component.html',
  styleUrls: ['./shoreline-list.component.css']
})
export class ShorelineListComponent implements OnInit {
  shorelines;

  constructor(shorelineService: ShorelineService) {
    this.shorelines = shorelineService.getShorelines();
    console.log(this.shorelines);
  }

  ngOnInit() {
  }

}
