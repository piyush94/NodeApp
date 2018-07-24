import { Component } from '@angular/core';
import { RhService, RhauthService, RestheartService } from 'ngx-restheart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Rh;

  constructor(private RhService: RhService, private restheartProvider: RestheartService, private RhAuth: RhauthService) {
    restheartProvider.setBaseUrl('http://inblr-vm-2295.eu.uis.unisys.com/');
    restheartProvider.setLogicBaseUrl('http://inblr-vm-2295.eu.uis.unisys.com/_logic/')
    // console.log(restheartProvider.getBaseUrl());
    // console.log(restheartProvider.getLogicBaseUrl());

    RhAuth.signin('piyush.sohal', 'PIY@1234').then(() => {
      this.Rh = RhService.Rh();
      this.Rh.one('db/ls/ls-comps?np').getList().toPromise().then((response) => {
        console.log(response);
      }, (error) => {
        console.log("error: " + error.message);
      });
    }, (error) => {
      console.log(error);
    });
  }
}
