import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from '@src/app/main/user/profile/profile.component';
import { GamesShellComponent } from './games-shell/games-shell.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesItemComponent } from './games-item/games-item.component';

@NgModule({
  declarations: [ProfileComponent, GamesShellComponent, GamesListComponent, GamesItemComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
