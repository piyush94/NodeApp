import { NgModule } from '@angular/core';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';
import { RestangularModule, Restangular } from 'ngx-restangular';
// import * as _ from "lodash";

import { NgxRestheartComponent } from './ngx-restheart.component';
import { RhauthService } from './services/rhauth.service';
import { RestheartService } from './services/restheart.service';
import { RhService } from './services/rh.service';
import { RestheartConfig, RhLogicFactory } from './ngx-restheart-config.factory';


@NgModule({
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'rh',
      storageType: 'sessionStorage'
    }),
    RestangularModule.forRoot(RestheartConfig)
  ],
  providers: [
    {
      provide: 'RhLogic',
      useFactory: RhLogicFactory,
      deps: [Restangular, RestheartService, LocalStorageService]
    }, RhService, RhauthService, RestheartService],
  declarations: [NgxRestheartComponent],
  exports: []
})

export class NgxRestheartModule { }
