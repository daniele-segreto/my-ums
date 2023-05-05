import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../interfaces/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  public user: UserInterface | undefined; // Lo metto come puclic, altrimenti non è visibile nel template (html)

  constructor(private userService: UserService, private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = Number(param['id']);
      const user = this.userService.getUser(id);
      if (user) {
        this.user = user;
      }
    })
  }

}
