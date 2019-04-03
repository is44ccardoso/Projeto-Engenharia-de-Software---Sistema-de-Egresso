import { Routes, RouterModule } from '@angular/router';
import { GraficoComponent } from './grafico.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: GraficoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class GraficoRoutingModule { }
