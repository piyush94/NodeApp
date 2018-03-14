import { BrowserModule } from '@angular/platform-browser';
import { NgModule, state } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { RhauthService } from './restheart/services/rhauth.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RhService } from './restheart/services/rh.service';
import { GlobalService } from './global.service';
import { AuthenticatorService } from './authenticator.service';
import { RestheartModule } from './restheart/restheart/restheart.module';
import { UIRouterModule } from '@uirouter/angular';
import { config } from '../../protractor.conf';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    RestheartModule,
    AuthModule,
    UIRouterModule.forRoot({
      states: [
        {
          name: 'app',
          url: '/',
          redirectTo: 'layout'
        }
      ]
    })
  ],
  providers: [RhauthService, RhService],
  bootstrap: [AppComponent]
})
export class AppModule { }
