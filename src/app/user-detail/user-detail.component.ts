import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy!: User;
  private __user!: User;

  @Input() set user(user: User) {
    this.__user = user;
    this.userCopy = Object.assign({}, user);
  }

get user() {
  return this.__user;
}

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
    this.__user = new User();
    this.userCopy = new User();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      if (id) {
        this.userService.getUser(id)
          .subscribe(user => this.user = user.data);
      }
    });
  }

  saveUser() {
    let obs;
    if (this.user.id > 0) {
      obs = this.userService.updateUser(this.user);
    } else {
      obs = this.userService.createUser(this.user);
    }
    obs.subscribe(resp => {
      console.log('response', resp);
      this.router.navigate(['users']);
    });
  }

  resetForm(form: FormGroup) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.__user = this.userCopy;
    }
  }

}
