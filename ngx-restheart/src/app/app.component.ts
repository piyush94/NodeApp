import { Component } from '@angular/core';
import { RhService } from './services/rh.service';
import { RestheartService } from './services/restheart.service';
import { RhauthService } from './services/rhauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Rh;

  constructor(private RhService: RhService, private restheartProvider: RestheartService, private RhAuth: RhauthService) {
    restheartProvider.setBaseUrl('http://192.168.0.27/');
    restheartProvider.setLogicBaseUrl('http://192.168.0.27/_logic/')
    // console.log(restheartProvider.getBaseUrl());

    RhAuth.signin('admin', 'changeit').then(() => {
      this.Rh = RhService.Rh();
      this.Rh.one('db/coll/item1').getList().toPromise().then((response) => {
        console.log(response);
      }, (error) => {
        console.log("error: " + error.message);
      });
    }, (error) => {
      console.log(error);
    });
  }
}
