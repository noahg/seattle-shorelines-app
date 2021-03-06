import { Router, RouterModule } from '@angular/router';

import { ShorelineListComponent } from './shoreline-list/shoreline-list.component';
import { ShorelineDetailsComponent } from './shoreline-details/shoreline-details.component';

export const AppRouting = RouterModule.forRoot([
    {path: ':id', component: ShorelineListComponent},
    {path: 'shoreline/:id', component: ShorelineDetailsComponent},
    {path: '**', component: ShorelineListComponent},
]);
