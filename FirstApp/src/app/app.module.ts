import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import { Error403Component } from './error403/error403.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '403',
    component: Error403Component,
    data: {
      title: 'Forbidden',
      permMap: []
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Error403Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    LoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
