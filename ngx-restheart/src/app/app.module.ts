import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule, LocalStorageService } from "angular-2-local-storage";
import { RestangularModule, Restangular } from "ngx-restangular";
import * as _ from "lodash";

import { AppComponent } from './app.component';
import { RestheartService } from './services/restheart.service';
import { isDefined } from '@angular/compiler/src/util';
import { isArray } from 'util';
import { RhService } from './services/rh.service';
import { RhauthService } from './services/rhauth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({
      prefix: 'rh',
      storageType: 'sessionStorage'
    }),
    RestangularModule.forRoot(RestheartConfig)
  ],
  providers: [RestheartService, RhService,
    {
      provide: 'RhLogic',
      useFactory: RhLogicFactory,
      deps: [Restangular, RestheartService, LocalStorageService]
    },
    RhauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function RhLogicFactory(restangular: Restangular, restheart: RestheartService, localStorageService: LocalStorageService) {
  return restangular.withConfig(function (RestangularConfigurer) {
    RestangularConfigurer.setFullResponse(true);

    var logicBaseUrl = restheart.getLogicBaseUrl();
    console.log('logicBaseUrl', logicBaseUrl);

    if (isDefined(logicBaseUrl) && logicBaseUrl !== null) {
      localStorageService.set('rh_logicBaseUrl', logicBaseUrl);
      RestangularConfigurer.setBaseUrl(logicBaseUrl);
    } else if (isDefined(localStorageService.get('rh_logicBaseUrl'))) {
      logicBaseUrl = localStorageService.get('rh_logicBaseUrl');
      RestangularConfigurer.setBaseUrl(logicBaseUrl);
    } else {
      throw "RhLogic ERROR: logicBaseUrl not found with localStorageService.get('rh_logicBaseUrl')";
    }

    // RestangularConfigurer.setErrorInterceptor(function (response, deferred, responseHandler) {
    //   var f = handleUnauthenticated(response);
    //   var ne = handleNetworkError(response);
    // });

    // function handleUnauthenticated(response) {
    //   if (response.status === 401) {
    //     localStorageService.set('rh_autherror', {
    //       'why': 'not_authenticated',
    //       "path": $location.path(),
    //       "state": $state.current.name,
    //       "params": $stateParams
    //     });
    //     // call configured call back, if any
    //     if (angular.isFunction(restheart.onUnauthenticated)) {
    //       restheart.onUnauthenticated($location, $state);
    //     }
    //   }
    // }

    // function handleNetworkError(response) {
    //   if (response.status === -1) {
    //     localStorageService.set('rh_networkError', {
    //       'why': 'network_error',
    //       "path": $location.path(),
    //       "state": $state.current.name,
    //       "params": $stateParams
    //     });
    //     // call configured call back, if any
    //     if (angular.isFunction(restheart.onNetworkError)) {
    //       restheart.onNetworkError($location, $state);
    //     }
    //   }
    // }
  });
}

export function RestheartConfig(RestangularProvider) {

  RestangularProvider.setRestangularFields({
    id: "_id.$oid" ? "_id.$oid" : "_id",
    etag: "_etag.$oid",
    selfLink: "_links['self'].href"
  });

  RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
    var extractedData = [];
    if (operation === "getList") {

      if (isDefined(data._embedded)) {
        if (isArray(data._embedded)) {
          // plain json representation format
          extractedData = data._embedded;
        } else {
          // hal representation format
          data._embedded.forEach(([key, value]) => {
            if (key.lastIndexOf("rh:", 0) === 0 && key !== "rh:warnings")
              extractedData = _.union(extractedData, value);
          });
        }

        // warnings in hal format
        if (isDefined(data._embedded['rh:warnings'])) {
          extractedData['_warnings'] = data._embedded['rh:warnings'];
        }

        // warnings in pain json format
        if (isDefined(data._warnings)) {
          extractedData['_warnings'] = data._warnings;
        }
      }

      for (var propertyName in data) {
        extractedData[propertyName] = data[propertyName];
      }
    } else {
      extractedData = data;
    }

    return extractedData;
  });
  RestangularProvider.setDefaultHeaders({
    'Accept': 'application/hal+json',
    'Content-Type': 'application/json',
    'No-Auth-Challenge': 'true'
  });
}

// function Rh(localStorageService: LocalStorageService, Restangular: Restangular, restheart: RestheartService) {



// }