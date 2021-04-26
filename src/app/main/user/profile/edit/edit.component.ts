import { Component, OnInit } from '@angular/core';
import { AuthService } from '@src/app/core/auth.service';
import { User } from '@src/app/main/user/shared/model/user.model';
import { UserService } from '@src/app/main/user/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = new User();

    this.authService.loggedUser$.subscribe(user => {
      this.user.id = user.id;
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
      this.user.email = user.email;
    });
  }

  ngOnInit(): void {
  }

  handleUpdateSubmit(): void {
    this.userService.updateUser(this.user).subscribe(async updatedUser => {
      this.authService.onUserUpdate(updatedUser);
      await this.router.navigate(['/profile']);
    });
  }
}
