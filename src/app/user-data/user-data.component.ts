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
  public user: UserInterface | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      if (id) {
        this.userService.getUser(id)
        .subscribe(user => this.user = user.data);
      }
    });
  }

}
