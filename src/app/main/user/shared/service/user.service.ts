import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '@src/app/main/user/shared/model/user.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly RESOURCE_URL = environment.url + '/auth';

  constructor(
    private httpClient: HttpClient
  ) { }

  logIn(credentials: LoginData): Observable<User> {
    const { email, password } = credentials;
    return this.httpClient.post<User>(`${this.RESOURCE_URL}/login`, { email, password });
  }

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.RESOURCE_URL}/register`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${environment.url}/users/${user.id}`, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }
}
