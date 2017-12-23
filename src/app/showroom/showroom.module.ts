import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ShowroomRoutingModule } from './showroom-routing.module';
import { ShowroomComponent } from './showroom.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ShowroomRoutingModule,
    SharedModule,
  ],
  declarations: [
    ShowroomComponent,
  ]
})
export class ShowroomModule { }
