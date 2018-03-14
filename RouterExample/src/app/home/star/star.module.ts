import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunComponent } from './sun/sun.component';
import { AlphaComponent } from './alpha/alpha.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SunComponent, AlphaComponent]
})
export class StarModule { }
