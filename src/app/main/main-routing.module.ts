import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from '@src/app/user/login/login.component';
import { NewUserComponent } from '@src/app/user/new-user/new-user.component';
import { MarketComponent } from '@src/app/main/market/market.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'market',
        component: MarketComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'new-user',
        component: NewUserComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }