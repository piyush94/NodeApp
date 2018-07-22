import { Component, OnInit } from '@angular/core';
import { Router, NavigationError, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title, private auth: AuthService) {
    // router.events.forEach((event) => {
    //   if (event instanceof NavigationStart) {
    //     console.log('change ' + event.id + ', ' + event.url);
    //   }
    // });
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.route)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((data) => {
        this.titleService.setTitle(data.title);
        if (data.title !== 'Login' && data !== undefined) {
          if (data.permMap.indexOf(this.auth.roles[0]) < 0) {
            localStorage.clear();
            this.router.navigate(['/403']);
          }
        }
      });
  }
}
