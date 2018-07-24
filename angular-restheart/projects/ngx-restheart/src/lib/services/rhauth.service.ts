import { Injectable, Inject } from '@angular/core';
import { RestheartService } from './restheart.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { isString, isUndefined } from 'util';
import { Promise } from 'q';
import { RhService } from './rh.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RhauthService {

  Rh;
  header;

  constructor(private restheart: RestheartService, private localStorageService: LocalStorageService, private RhService: RhService, @Inject('RhLogic') private RhLogic: any, private http: HttpClient) {
    this.Rh = RhService.Rh();
  }

  getBaseUrl() {
    return this.restheart.getBaseUrl();
  }

  getLogicBaseUrl() {
    return this.restheart.getLogicBaseUrl();
  }

  setAuthHeader(userid, password) {
    var header = btoa(userid + ":" + password);
    this.localStorageService.set('rh_authtoken', header);
    this.header = header;
    // $http.defaults.headers.common["Authorization"] = 'Basic ' + $base64.encode(userid + ":" + password);
  }

  saveAuthInfo(userid, password, roles) {
    var header = btoa(userid + ":" + password);
    this.localStorageService.set('rh_userid', userid);
    this.localStorageService.set('rh_authtoken', header);
    this.localStorageService.set('rh_nav', btoa(JSON.stringify(roles)));
    this.header = header;
    return header;
  }

  clearAuthInfo() {
    this.localStorageService.remove("rh_userid");
    this.localStorageService.remove("rh_authtoken");
    this.localStorageService.remove("rh_nav");

    // if (!angular.isUndefined($http) && !angular.isUndefined($http.defaults)) {
    //   delete $http.defaults.headers.common["Authorization"];
    // }
  }

  getAuthHeader() {
    return this.localStorageService.get('rh_authtoken');
  }

  getUserid() {
    return this.localStorageService.get('rh_userid');
  }

  getUserRoles(): any {
    var _nav = this.localStorageService.get('rh_nav');
    if (isString(_nav)) {
      return JSON.parse(atob(_nav.toString()));
    } else {
      return undefined;
    }
  }

  isAuthenticated() {
    var authHeader = this.getAuthHeader();
    return !(isUndefined(authHeader) || authHeader === null);
  }

  // signin(id, password) {
  //   var that = this;
  //   return Promise((resolve, reject) => {
  //     that.clearAuthInfo();
  //     that.setAuthHeader(id, password);
  //     var apiOptions = {
  //       nocache: new Date().getTime()
  //     };
  //     var authHeader = {
  //       Authorization: 'Basic ' + that.header
  //     }
  //     this.RhLogic.one('roles', id)
  //       .get(apiOptions, { customHeader: authHeader })
  //       .then(function (userRoles) {
  //         var authToken = userRoles.headers('Auth-Token');
  //         if (authToken === null) {
  //           that.clearAuthInfo();
  //           resolve(false);
  //           return;
  //         }
  //         that.saveAuthInfo(id, authToken, userRoles.data.roles);
  //         that.setAuthHeader(id, authToken);
  //         resolve(true);
  //       },
  //         function (response) {
  //           if (response.status === 401) {
  //             resolve(false);
  //           } else {
  //             reject(response);
  //           }

  //         });
  //   });
  // }
  signin(id, password) {
    return Promise<boolean>((resolve, reject) => {
      this.clearAuthInfo();
      this.setAuthHeader(id, password);
      const headers = {
        ['Authorization']: 'Basic ' + btoa(id + ':' + password)
      };
      this.http.get(this.restheart.getLogicBaseUrl() + 'roles/' + id, { headers: headers, observe: 'response' }).subscribe((response) => {
        const authtoken = response.headers.get('Auth-Token');
        if (authtoken === null) {
          this.clearAuthInfo();
          resolve(false);
          return;
        }
        if (response.status === 401) {
          resolve(false);
          return;
        }
        this.saveAuthInfo(id, authtoken, response.body['roles']);
        this.setAuthHeader(id, password);
        resolve(true);
      },
        (error) => {
          console.log(error);
        });

    });
  }

  signout(removeTokenFromDB) {
    var that = this;
    return Promise((resolve, reject) => {
      if (removeTokenFromDB) {
        var userid = this.localStorageService.get('rh_userid');
        this.Rh.one('_authtokens', userid).remove().then(function () {
          that.clearAuthInfo();
          resolve(true);
        }, function errorCallback(response) {
          reject(response);
        });
      } else {
        that.clearAuthInfo();
        resolve(true);
      }
    });
  }

}
