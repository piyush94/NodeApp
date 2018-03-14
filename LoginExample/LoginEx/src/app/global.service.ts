import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  loggedIn: boolean;
  state: any;
  stateParams: any;
  logout: any;
  title: string;
  ptitle: string;
  user: any = {};

  constructor() { }

}
