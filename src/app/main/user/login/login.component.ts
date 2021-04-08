import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@src/app/main/user/shared/user.service';
import { User } from '../shared/model/user.model';
import { BehaviorSubject, timer } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '@src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  errorMessage: string;

  displayErrorMessage$ = new BehaviorSubject<boolean>(false);

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  handleLoginSubmit(): void {
    const credentials = {
      email: this.user.email,
      password: this.user.password
    };

    this.userService.logIn(credentials).subscribe(async user => {
        alert(`Bem vindo, ${user.firstName}!`);
        this.authService.onUserLoggedIn(user);
        await this.router.navigate(['/market']);

      }, ({error}) => {
        this.errorMessage = error.message;
        this.displayErrorMessage$.next(true);
      }
    );

    this.user = new User();
  }
}
