import { Injectable, Inject } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Restangular } from 'ngx-restangular';
import { RestheartService } from './restheart.service';
import { isDefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class RhService {

  constructor(private localStorageService: LocalStorageService, private restangular: Restangular, private restheart: RestheartService) {
  }

  Rh() {
    return this.restangular.withConfig((RestangularConfigurer) => {
      // restheart.setBaseUrl('hwllo');
      let baseUrl = this.restheart.getBaseUrl();
      // baseUrl = 'http://server1.localhost/';
      // console.log('baseurl' + baseUrl);

      if (isDefined(baseUrl) && baseUrl !== null) {
        this.localStorageService.set('rh_baseUrl', baseUrl);
        RestangularConfigurer.setBaseUrl(baseUrl);
      } else if (isDefined(this.localStorageService.get('rh_baseUrl'))) {
        baseUrl = this.localStorageService.get('rh_baseUrl');
        RestangularConfigurer.setBaseUrl(baseUrl);
      } else {
        throw "Rh ERROR: baseUrl not found with localStorageService.get('rh_baseUrl')";
      }

      // RestangularConfigurer.addErrorInterceptor((response, deferred, responseHandler) => {
      //   // this.handleTokenExpiration(response);
      //   // handleForbidden(response);
      //   // handleNetworkError(response);
      // });

      RestangularConfigurer.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
        headers = this.setAuthHeaderFromLS(headers);
        return {
          headers: headers,
          element: element
        }
      });

    });
  }

  setAuthHeaderFromLS(headers) {
    var token = this.localStorageService.get('rh_authtoken');
    if (isDefined(token) && token !== null) {
      headers['Authorization'] = 'Basic ' + this.localStorageService.get('rh_authtoken');
      // $http.defaults.headers.common["Authorization"] = 'Basic ' + this.localStorageService.get('rh_authtoken');
    }
    return headers;
  }

  handleTokenExpiration() {

  }

  clearAuthInfo() {
    this.localStorageService.remove("rh_userid");
    this.localStorageService.remove("rh_authtoken");
    this.localStorageService.remove("rh_nav");
  }

}
