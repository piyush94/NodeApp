import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxRestheartModule, RhService, RhauthService, RestheartService } from 'ngx-restheart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRestheartModule
  ],
  providers: [RhService, RhauthService, RestheartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
