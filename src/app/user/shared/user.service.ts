import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '@src/app/user/shared/model/user.model';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly RESOURCE_URL = environment.url + '/users';

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): any {
    return this.httpClient.get<User>(this.RESOURCE_URL, { params: { email } }).pipe(
      filter(user => user.password === password)
    );
  }
}
