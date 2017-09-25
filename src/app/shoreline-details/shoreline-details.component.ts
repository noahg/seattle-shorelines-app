import { ShorelineService } from './../shoreline.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-shoreline-details',
  templateUrl: './shoreline-details.component.html',
  styleUrls: ['./shoreline-details.component.css']
})
export class ShorelineDetailsComponent implements OnInit {

  shoreline;

  constructor(
    private route: ActivatedRoute,
    private shorelineService: ShorelineService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id')
        this.shoreline = this.shorelineService.getShoreline(id);
      })
  }

}
