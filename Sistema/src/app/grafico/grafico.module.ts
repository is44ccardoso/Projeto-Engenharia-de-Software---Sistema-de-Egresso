import { GraficoRoutingModule } from './grafico.routing.module';
import { GraficoComponent } from './grafico.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ GraficoComponent ],
  imports: [
    CommonModule,
    GraficoRoutingModule,
    FormsModule,
    NgxChartsModule,
  ]
})
export class GraficoModule { }
