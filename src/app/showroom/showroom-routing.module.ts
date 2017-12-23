import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { ShowroomComponent } from './showroom.component';

const routes: Routes = Route.withShell([
  { path: 'showroom', component: ShowroomComponent, data: { title: extract('About') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShowroomRoutingModule { }
