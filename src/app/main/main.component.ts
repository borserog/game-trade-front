import { Component, OnInit } from '@angular/core';
import { AuthService } from '@src/app/core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isLogged$: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) {
    this.isLogged$ = this.authService.userLoggedIn$;
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.onUserLoggedOut();
  }
}
