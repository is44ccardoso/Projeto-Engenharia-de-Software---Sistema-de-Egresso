import { FormRoutingModule } from './form.routing.module';
import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
  ]
})
export class FormModule { }
