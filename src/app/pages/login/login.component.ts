import {Component} from '@angular/core';
import {UserService} from '../../@core/mock/users.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private userEmail: string = "";
  private appToken: string = "";

  constructor(private userService: UserService) {
  }

  login() {
    let userObservable = this.userService.login(this.userEmail, this.appToken);
    userObservable.subscribe(user => {
      console.log(user);
    });
  }
}
