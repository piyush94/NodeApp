import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { GlobalService } from '../global.service';

import { FormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIRouterModule.forChild({
      states: [
        {
          name: 'login',
          url: '/login',
          component: LoginComponent
        }
      ]
    })
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class AuthModule { }
