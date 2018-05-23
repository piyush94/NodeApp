import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(v => this.proceed(v));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  proceed = function (data) {
    // console.log(data);
  }
}
