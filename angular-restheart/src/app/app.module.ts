import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRestheartModule, RhService, RhauthService, RestheartService } from 'ngx-restheart';
// import { LoginComponent } from './login/login.component';
import { AppRoutingModule, routeComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents
  ],
  imports: [
    BrowserModule,
    NgxRestheartModule,
    AppRoutingModule
  ],
  providers: [RhService, RhauthService, RestheartService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
