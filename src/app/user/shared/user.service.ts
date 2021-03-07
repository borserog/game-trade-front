import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '@src/app/user/shared/model/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly RESOURCE_URL = environment.url + '/users';

  constructor(
    private httpClient: HttpClient
  ) { }

  logIn(credentials: LoginData): Observable<User> {
    const { email, password } = credentials;
    return this.httpClient.get<User[]>(this.RESOURCE_URL, { params: { email, password } }).pipe(
      map(response => response[0])
    );

    // return this.httpClient.post<User>(this.RESOURCE_URL,  credentials).pipe(
    //   tap(console.log),
    //   map(response => response[0])
    // );
  }

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(this.RESOURCE_URL, user);
  }
}
