import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { LoaderComponent } from './loader/loader.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CollapseModule,
    BsDatepickerModule,

  ],
  declarations: [
    LoaderComponent,
    CollapseComponent,
    ModalComponent,
    DatepickerComponent,
  ],
  exports: [
    LoaderComponent,
    CollapseComponent,
    ModalComponent,
    DatepickerComponent,
  ]
})
export class SharedModule { }
