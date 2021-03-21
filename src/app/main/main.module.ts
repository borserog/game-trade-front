import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductModule } from './product/product.module';
import { MainComponent } from './main.component';
import { MarketModule } from '@src/app/main/market/market.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MarketModule,
    MainRoutingModule,
    ProductModule
  ]
})
export class MainModule { }
