import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ProfileComponent} from '@src/app/main/user/profile/profile.component';
import { GamesShellComponent } from './games-shell/games-shell.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesItemComponent } from './games-item/games-item.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '@src/app/shared/shared.module';

@NgModule({
  declarations: [ProfileComponent, GamesShellComponent, GamesListComponent, GamesItemComponent, EditComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class ProfileModule { }
