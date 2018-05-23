import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRoute } from '@angular/router';

@Injectable()
export class PermService implements CanActivateChild {

  constructor(private route: ActivatedRoute) { }

  canActivateChild() {
    this.route.data.subscribe(v => console.log(v));
    console.log('child');
    return false;
  }

}
