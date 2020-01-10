import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Artur'
    },
    {
      id: 2,
      name: 'Przemek'
    },
    {
      id: 3,
      name: 'Magda'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
