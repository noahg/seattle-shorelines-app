import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShorelineService } from './../shoreline.service';

@Component({
  selector: 'app-shoreline-list',
  templateUrl: './shoreline-list.component.html',
  styleUrls: ['./shoreline-list.component.css']
})
export class ShorelineListComponent implements OnInit {
  shorelines;
  selectedShoreline;

  constructor(shorelineService: ShorelineService, private route: ActivatedRoute) {
    this.shorelines = shorelineService.getShorelines();
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.selectedShoreline = +params.get('id')
      })
  }

  ngAfterViewInit() {
    this.scrollTo(this.selectedShoreline)
  }

  private scrollTo(element) {
    //element will not exist when navigating *back* to root route
    if (element) {
      document.getElementById(element).scrollIntoView();
    }
  }

}
