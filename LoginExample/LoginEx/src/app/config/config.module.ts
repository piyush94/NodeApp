import { NgModule, state } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';

import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild(
      {
        states: [
          {
            parent: 'app',
            name: 'config',
            redirectTo: 'app.earth'
          },
          {
            name: 'app.earth',
            url: '/earth',
            component: EarthComponent,
          },
          {
            name: 'app.mars',
            url: '/mars',
            component: MarsComponent
          }
        ]
      }
    )
  ],
  exports: [EarthComponent, MarsComponent],
  declarations: [EarthComponent, MarsComponent]
})
export class ConfigModule { }
