import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Injectable()
export class AuthService implements CanActivate {

  roles = [];

  constructor(private router: Router) { }

  canActivate() {
    console.log('here');
    if (this.isLoggedIn())
      return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  login = function () {
    localStorage.clear();
    localStorage.setItem('permMap', 'world');
    localStorage.setItem('auth', 'true');
    this.roles = localStorage.getItem('permMap').split(',');
    console.log(this.roles);
  }

  logout = function () {
    localStorage.clear();
  }

  isLoggedIn = function () {
    return localStorage.getItem('auth') === 'true';
  }

}
