import { Injectable } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { isUndefined } from 'util';

@Injectable()
export class RhauthService {

  header: string;
  httpHeader: HttpHeaders;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.httpHeader = new HttpHeaders();
  }

  setBaseUrl(url) {
    this.baseUrl = url;
  }

  clearAuthInfo() {
    localStorage.removeItem('rh_userid');
    localStorage.removeItem('rh_authtoken');
    localStorage.removeItem('rh_nav');

    // console.log(localStorage);

    this.header = '';
  }

  setAuthHeader(id, password) {
    this.httpHeader.append('Authorization', 'Basic ' + btoa(id + ':' + password));
  }

  getAuthHeader() {
    return localStorage.getItem('rh_authtoken');
  }

  isAuthenticated() {
    const authHeader = this.getAuthHeader();
    return !(isUndefined(authHeader) || authHeader === null);
  }

  getUserRoles() {
    const _nav = localStorage.getItem('rh_nav');
    if (!isUndefined(_nav)) {
      return JSON.parse(atob(_nav));
    } else {
      return undefined;
    }
  }

  saveAuthInfo(id, password, roles) {
    this.header = btoa(id + ':' + password);
    localStorage.setItem('rh_userid', id);
    localStorage.setItem('rh_authtoken', this.header);
    localStorage.setItem('rh_nav', btoa(JSON.stringify(roles)));

    // this.httpHeader.append('Authorization', this.header);

    return this.header;
  }

  signin(id, password) {
    // const that = this;
    return new Promise<boolean>((resolve, reject) => {
      this.clearAuthInfo();
      // that.setAuthHeader(id, password);
      const headers = {
        ['Authorization']: 'Basic ' + btoa(id + ':' + password),
        ['nocache']: new Date().getTime().toString()
      };
      // apiOptions.headers = new Headers();
      // apiOptions.headers.append('Authorization', btoa(id + ':' + password));
      // apiOptions.headers.append('nocache', new Date().getTime().toString());
      // that.http.options = apiOptions;
      this.http.get(this.baseUrl + '_logic/roles/' + id, { headers: headers, observe: 'response' }).subscribe((response) => {
        console.log(response.body['roles']);
        console.log(response.status);
        const authtoken = response.headers.get('Auth-Token');
        console.log(authtoken);
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

  signout() {
    return new Promise<boolean>((resolve, reject) => {
      const userid = localStorage.getItem('rh_userid');
      const headers = { ['Authorization']: 'Basic ' + localStorage.getItem('rh_authtoken') };
      this.http.delete(this.baseUrl + '_authtokens/' + userid, { headers: headers, observe: 'response' }).subscribe((response) => {
        if (response.ok) {
          this.clearAuthInfo();
          console.log(localStorage);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

}
