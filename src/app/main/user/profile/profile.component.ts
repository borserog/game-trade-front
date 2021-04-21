import { Component, OnInit } from '@angular/core';
import { User } from '@src/app/main/user/shared/model/user.model';
import { AuthService } from '@src/app/core/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  loggedUser: User;

  constructor(private authService: AuthService) {
    this.authService.loggedUser$.subscribe(user => {
      this.loggedUser = user;
    });
  }

  ngOnInit(): void {
  }

}
