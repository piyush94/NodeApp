import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RhService {

  baseUrl: string;

  httpHeaders: string[];

  constructor(private http: HttpClient) {
  }

  setBaseUrl(url) {
    this.baseUrl = url;
  }

  setHeader(header) {
    this.httpHeaders = header;
  }

  doQuery(url) {
    // const that = this;
    return new Promise<any>((resolve, reject) => {
      const headers = { [this.httpHeaders[0]]: this.httpHeaders[1] };
      this.http.get(this.baseUrl + url, {
        headers: headers,
        observe: 'response'
      }).subscribe((response) => {
        if (response.ok) {
          resolve(response.body);
        }
        if (response.status === 403) {
          reject('forbidden');
        }
      },
        (error) => {
          console.log(error);

        });
    });
  }

}
