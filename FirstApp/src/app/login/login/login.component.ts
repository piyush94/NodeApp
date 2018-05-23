import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isLoggedIn)
      this.router.navigate(['/home']);
  }

  login = function () {
    this.auth.login();
    this.router.navigate(['/home']);
  }

}
