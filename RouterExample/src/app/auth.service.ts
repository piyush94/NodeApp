import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  // canActivateChild(): boolean {
  //   console.log('herere');
  //   this.router.navigate(['/login']);
  //   return false;
  // }

  canActivate(): boolean {
    console.log('herere');
    this.router.navigate(['/home']);
    return false;
  }

}
