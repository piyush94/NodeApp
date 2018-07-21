import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  user = { name: '', email: '' };

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  save() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('saved!');
  }

}
