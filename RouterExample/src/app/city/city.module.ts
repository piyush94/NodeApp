import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChicagoComponent } from './chicago/chicago.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';

export const cityroutes = {
  path: 'city',
  children: [
    {
      path: 'chicago',
      component: ChicagoComponent
    },
    {
      path: 'newyork',
      component: NewyorkComponent
    }
  ]
};

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ChicagoComponent,
    NewyorkComponent,
    CityComponent
  ],
  declarations: [ChicagoComponent, NewyorkComponent, CityComponent]
})
export class CityModule { }
