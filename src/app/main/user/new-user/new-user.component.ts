import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  user: User;
  confirmPassword: string;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  handleSignupSubmit(): void {
    if (this.user.password !== this.confirmPassword) {
      console.log('Senha inválida');
      return;
    }

    this.userService.signUp(this.user).subscribe(user => {
      console.log(user.id);

      this.user = new User();
      this.confirmPassword = null;
    });
  }
}
