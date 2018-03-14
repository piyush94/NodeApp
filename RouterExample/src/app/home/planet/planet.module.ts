import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from '../home.module';

export const planetroutes = {
  path: 'planet',
  children: [
    {
      path: 'earth',
      component: EarthComponent
    },
    {
      path: 'mars',
      component: MarsComponent
    }
  ]
};

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EarthComponent, MarsComponent
  ],
  declarations: [EarthComponent, MarsComponent]
})
export class PlanetModule { }
