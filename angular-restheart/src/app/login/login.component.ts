import { Component, OnInit } from '@angular/core';
import { RhauthService, RhService } from 'ngx-restheart';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Rh;

  constructor(private rhService: RhService, private RhAuth: RhauthService) { }

  ngOnInit() {
    this.RhAuth.signin('piyush.sohal', 'PIY@1234').then(() => {
      this.Rh = this.rhService.Rh();
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
