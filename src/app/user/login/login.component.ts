import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '@src/app/user/shared/user.service';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  handleLoginSubmit() {
    const credentials = {
      email: this.user.email,
      password: this.user.password
    };

    this.userService.logIn(credentials).subscribe(user => {
      if(user) {
        alert(`Bem vindo, ${user.firstName}!`);
        this.router.navigate(['/main/home']);
        return;
      }

      alert("Não existe");
    }, () => {
      alert("Erro na conexão");
    })

    this.user = new User();
  }
}
