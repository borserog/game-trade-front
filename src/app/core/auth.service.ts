import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '@src/app/main/user/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userLoggedInSubject = new BehaviorSubject(false);
  readonly userLoggedIn$ = this.userLoggedInSubject.asObservable();

  private readonly loggedUserSubject = new BehaviorSubject<User>(null);
  readonly loggedUser$ = this.loggedUserSubject.asObservable();

  constructor() {
  }

  onUserUpdate(user: User): void {
    this.loggedUserSubject.next(user);
  }

  onUserLoggedIn(user: User): void {
    this.userLoggedInSubject.next(true);
    this.loggedUserSubject.next(user);
  }

  onUserLoggedOut(): void {
    this.userLoggedInSubject.next(false);
    this.loggedUserSubject.next(null);
  }
}
