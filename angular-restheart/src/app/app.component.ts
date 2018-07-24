import { Component, Inject, OnInit } from '@angular/core';
import { RhService, RhauthService, RestheartService } from 'ngx-restheart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  Rh;

  constructor(private restheartProvider: RestheartService) {
    restheartProvider.setBaseUrl('http://inblr-vm-2295.eu.uis.unisys.com/');
    restheartProvider.setLogicBaseUrl('http://inblr-vm-2295.eu.uis.unisys.com/_logic/');

    // RhAuth.signin('piyush.sohal', 'PIY@1234').then(() => {
    //   this.Rh = RhService.Rh();
    //   this.Rh.one('db/ls/ls-comps?np').getList().toPromise().then((response) => {
    //     console.log(response);
    //   }, (error) => {
    //     console.log("error: " + error.message);
    //   });
    // }, (error) => {
    //   console.log(error);
    // });
  }

  ngOnInit() {
    console.log(this.restheartProvider.getBaseUrl());
    console.log(this.restheartProvider.getLogicBaseUrl());
  }
}
