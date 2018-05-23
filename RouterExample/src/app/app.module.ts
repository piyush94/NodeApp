import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule, homeroutes } from './home/home.module';
import { CityModule, cityroutes } from './city/city.module';
import { PlanetModule } from './home/planet/planet.module';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [homeroutes]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CityModule,
    PlanetModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
