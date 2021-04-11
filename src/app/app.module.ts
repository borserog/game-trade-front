import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { UserModule } from './main/user/user.module';
import { MainModule } from '@src/app/main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        CoreModule,
        NgbModule,
        MainModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
