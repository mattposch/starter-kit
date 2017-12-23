import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ShowroomRoutingModule } from './showroom-routing.module';
import { ShowroomComponent } from './showroom.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ShowroomRoutingModule,
    CollapseModule,
  ],
  declarations: [
    ShowroomComponent,
    CollapseComponent,
    ModalComponent
  ]
})
export class ShowroomModule { }
