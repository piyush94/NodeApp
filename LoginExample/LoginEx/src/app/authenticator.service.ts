import { Injectable, Inject } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable()
export class AuthenticatorService {

  constructor(private rootScope: GlobalService, private restheart) { }

  service = { roles: [] };
  // service.roles = [];

  permMap = {
    'Singularity-lineSight-Dev': 15,
    'Singularity-lineSight-Config-Member': 15,
    'Singularity-lineSight-Config-Admin': 15,
    administrator: 15, // 1111->view,enable,edit,delete
    architect: 7, // 0111->view,enable,edit
    developer: 1, // 0011->view,enable
    users: 1// 0001->view
  };

  perms = {
    view: 0,
    enable: 1,
    edit: 2,
    delete: 3
  };

  reset() {
    this.service.roles = [];
  }

  login() {
    if (this.rootScope.loggedIn && !this.service.roles.length) {

    }
  }
}
