import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '@src/app/main/product/shared/model/product.model';
import { ProductService } from '@src/app/main/product/shared/service/product.service';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss']
})
export class GamesItemComponent implements OnInit {
  @Input() game: Product;
  @Output() removeEvent = new EventEmitter<number>();

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  deleteProduct(productId: string | number): void {
    this.productService.removeProduct(productId as number).subscribe(() => {
      this.removeEvent.emit(productId as number);
    });
  }
}
