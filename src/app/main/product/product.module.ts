import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from '@src/app/shared/shared.module';
import { Product } from '@src/app/main/product/shared/model/product.model';

@NgModule({
  declarations: [ProductComponent, FormComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductModule {
}
