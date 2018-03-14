import { NgModule, state } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Restangular } from 'ngx-restangular';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'restheart', useClass: RestheartModule }
  ],
  exports: [],
  declarations: []
})
export class RestheartModule {

  _baseUrl: string;
  _logicBaseUrl: string;

  setBaseUrl(f) {
    this._baseUrl = f;
  }
  setLogicBaseUrl(f) {
    this._logicBaseUrl = f;
  }
  getLogicBaseUrl() {
    return this._baseUrl;
  }

  get() {
    return this;
  }

}

// export function restheart() {

//   const setb = function () {

//   };

//   this.setBaseUrl = function (f) {
//     this._baseUrl = f;
//   };

//   this.setLogicBaseUrl = function (f) {
//     this._logicBaseUrl = f;
//   };
// }
