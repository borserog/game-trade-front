import { Component, OnInit } from '@angular/core';
import { AuthService } from '@src/app/core/auth.service';
import { User } from '@src/app/main/user/shared/model/user.model';
import {UserService} from "@src/app/main/user/shared/service/user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.authService.loggedUser$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  handleUpdateSubmit(): void {
    this.userService.updateUser(this.user).subscribe(updatedUser => {
      this.authService.onUserUpdate(updatedUser);
    });
  }
}
