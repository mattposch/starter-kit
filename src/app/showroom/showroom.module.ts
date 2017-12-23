import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { ShowroomRoutingModule } from './showroom-routing.module';
import { ShowroomComponent } from './showroom.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalComponent } from './modal/modal.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,

    CollapseModule,
    BsDatepickerModule,

    ShowroomRoutingModule,
  ],
  declarations: [
    ShowroomComponent,
    CollapseComponent,
    ModalComponent,
    DatepickerComponent,
  ]
})
export class ShowroomModule { }
