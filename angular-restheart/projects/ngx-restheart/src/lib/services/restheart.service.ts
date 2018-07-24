import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class RestheartService {

  constructor(private localStorageService: LocalStorageService) { }

  setBaseUrl(f) {
    this.localStorageService.set('_baseUrl', f);
  }

  setLogicBaseUrl(f) {
    this.localStorageService.set('_logicBaseUrl', f);
  }

  getBaseUrl() {
    return this.localStorageService.get('_baseUrl')
  }

  getLogicBaseUrl() {
    return this.localStorageService.get('_logicBaseUrl');
  }

  // onForbidden = function (f) {
  //   this.onForbidden = f;
  // };

  // onTokenExpired = function (f) {
  //   this.onTokenExpired = f;
  // };

  // onUnauthenticated = function (f) {
  //   this.onUnauthenticated = f;
  // };

  // onNetworkError = function (f) {
  //   this.onNetworkError = f;
  // };

  // $get = function () {
  //   return this;
  // };

}

// export function Restheart() {
//   const obj = {
//     _baseUrl: '',
//     _logicBaseUrl: '',
//     setBaseUrl: (f) => {
//       this._baseUrl = f;
//     },
//     setLogicBaseUrl: (f) => {
//       this._logicBaseUrl = f;
//     },
//     getBaseUrl: (f) => {
//       return this._baseUrl;
//     },
//     getLogicBaseUrl: (f) => {
//       return this._logicBaseUrl;
//     }
//   };

//   return obj;
//   // this.setBaseUrl = function(f) {
//   //   this._baseUrl = f;
//   // };
//   // this.setLogicBaseUrl = function(f) {
//   //   this. = f;
//   // };
//   // this.getBaseUrl = function() {
//   //   return this._baseUrl;
//   // };
//   // this.getLogicBaseUrl = function() {
//   //   return this._logicBaseUrl;
//   // };
//   //
//   // return this;
// }
