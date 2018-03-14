import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UIRouterModule } from '@uirouter/angular';
import { EarthComponent } from '../config/earth/earth.component';
import { MarsComponent } from '../config/mars/mars.component';

@NgModule({
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: [
        {
          parent: 'app',
          name: 'layout',
          url: '/home',
          component: LayoutComponent
        }
      ]
    })
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, NavigationComponent, EarthComponent, MarsComponent]
})
export class LayoutModule { }
