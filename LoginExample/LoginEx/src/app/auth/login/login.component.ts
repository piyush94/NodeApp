import { Component, OnInit } from '@angular/core';

import { RhauthService } from '../../restheart/services/rhauth.service';
import { RhService } from '../../restheart/services/rh.service';
import { isUndefined } from 'util';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User('', '');
  comps: any;

  constructor(private restheartLogic: RhauthService, private restheart: RhService) {
    restheartLogic.setBaseUrl('http://inblr-vm-2295.eu.uis.unisys.com/');
    restheart.setBaseUrl('http://inblr-vm-2295.eu.uis.unisys.com/');
    if (restheartLogic.isAuthenticated()) {
      restheart.setHeader(['Authorization', 'Basic ' + localStorage.getItem('rh_authtoken')]);
    }
  }

  login() {
    console.log(this.user);
    this.restheartLogic.signin(this.user.username, this.user.password).then((response) => {
      this.user.username = '';
      this.user.password = '';
      if (response && !isUndefined(this.restheartLogic.getUserRoles())) {
        console.log(localStorage);
        this.restheart.setHeader(['Authorization', 'Basic ' + localStorage.getItem('rh_authtoken')]);
      } else {
        this.restheartLogic.signout();
      }
    });
  }

  getComps() {
    this.restheart.doQuery('microservice/comps/?np&sort_by={_id:1}').then((response) => {
      // console.log(response);
      this.comps = response;
      this.comps.forEach(element => {
        console.log(element);
      });
    })
      .catch((reason) => {
        console.log(reason);
        this.restheartLogic.clearAuthInfo();
      });
  }

  logout() {
    this.restheartLogic.signout().then((response) => {
      if (response) {
        console.log(response);
        this.comps = undefined;
      }
    });
  }

}
