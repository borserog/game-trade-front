import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from '@src/app/main/user/login/login.component';
import { NewUserComponent } from '@src/app/main/user/new-user/new-user.component';
import { MarketComponent } from '@src/app/main/market/market.component';
import { ProfileComponent } from '@src/app/main/user/profile/profile.component';
import { EditComponent } from '@src/app/main/user/profile/edit/edit.component';
import { FormComponent } from '@src/app/main/product/form/form.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/market',
      pathMatch: 'full'
    },
    {
      path: 'market',
      component: MarketComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    {
      path: 'product/form',
      component: FormComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'new-user',
      component: NewUserComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'profile/edit',
      component: EditComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
