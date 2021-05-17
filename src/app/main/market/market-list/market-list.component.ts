import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '@src/app/main/product/shared/model/product.model';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent {

  @Input() productList: Product[];
  @Input() loading: boolean;

  @Output() productPurchased = new EventEmitter<Product>();

  constructor() { }

  getTitle({ title }: Product): string {
    console.log('Method RUN: ', title);
    return title;
  }

  onProductPurchased(product: Product): void {
    this.productPurchased.emit(product);
  }
}
