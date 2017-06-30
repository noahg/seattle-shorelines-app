import { Component } from '@angular/core';
import { ShorelineService } from './shoreline.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShorelineService]
})
export class AppComponent {
  title = 'app works!';
  selectedSite = 0;
}
