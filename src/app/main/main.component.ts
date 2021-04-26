import { Component, OnInit } from '@angular/core';
import { AuthService } from '@src/app/core/auth.service';
import { Observable } from 'rxjs';
import { User } from '@src/app/main/user/shared/model/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isLogged$: Observable<boolean>;
  loggedUser: User;

  constructor(
    private authService: AuthService
  ) {
    this.isLogged$ = this.authService.userLoggedIn$;
    this.authService.loggedUser$.subscribe(user => {
      this.loggedUser = user;
    });
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.onUserLoggedOut();
  }
}
