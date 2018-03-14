import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { planetroutes } from './planet/planet.module';
import { cityroutes } from '../city/city.module';


export const homeroutes = {
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: '',
      children: [cityroutes, planetroutes]
    }
  ]
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
