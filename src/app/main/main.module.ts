import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule,
    ProductModule
  ]
})
export class MainModule { }
