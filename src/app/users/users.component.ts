import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  title = 'Users';
  users = [
    {
      name: 'Daniele1',
      lastname: 'Segreto1',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      name: 'Daniele2',
      lastname: 'Segreto2',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      name: 'Daniele3',
      lastname: 'Segreto3',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
    {
      name: 'Daniele4',
      lastname: 'Segreto4',
      email: 'daniele@gmail.com',
      fidcalcode: 'SGTDAN77J33X777Z',
      province: 'Palermo',
      phone: '3334455678',
      age: 33
    },
  ]

}
