import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

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

  isLoggedIn = function () {
    return localStorage.getItem('auth') === 'true';
  }

}
