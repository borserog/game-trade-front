import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '@src/app/main/product/shared/model/product.model';
import { AuthService } from '@src/app/core/auth.service';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { User } from '@src/app/main/user/shared/model/user.model';
import { noop, of } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss']
})
export class MarketItemComponent {
  @Input() product: Product;
  @Output() productPurchased = new EventEmitter<Product>();

  onPurchase(product: Product): void {
    this.productPurchased.emit(product);
  }
}
