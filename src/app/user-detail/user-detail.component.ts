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

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router // Inetto anche il Router
  ) {
    this.user = new User();
    this.__user = new User();
    this.userCopy = new User();
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = Number(param['id']);
      const user = this.userService.getUser(id);
      if (user) {
        this.user = user;
      }
    })
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
    // Adesso non c'è più bisogno di resettare, perchè in questo caso ritorniamo alla home page
    // this.user = new User();
    // Dopo aver salvato l'utente, possiamo tornare alla home page (in questo caso 'users')
    this.router.navigate(['users']); // 'users' è il percorso il cui vogliamo navigare
  }

  resetForm(form: FormGroup) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.__user = this.userCopy;
    }
  }

}
