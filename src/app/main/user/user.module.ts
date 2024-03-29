import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileModule } from '@src/app/main/user/profile/profile.module';


@NgModule({
  declarations: [
    LoginComponent,
    NewUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileModule
  ]
})
export class UserModule { }
