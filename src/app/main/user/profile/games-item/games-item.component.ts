import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '@src/app/main/product/shared/model/product.model';
import { ProductService } from '@src/app/main/product/shared/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss']
})
export class GamesItemComponent implements OnInit {
  @Input() game: Product;
  @Output() removeEvent = new EventEmitter<number>();

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async editProduct(product: Product): Promise<void> {
    this.productService.setProductToEdit(product);
    await this.router.navigate(['/product/form']);
  }

  deleteProduct(productId: string | number): void {
    this.productService.removeProduct(productId as number).subscribe(() => {
      this.removeEvent.emit(productId as number);
    });
  }
}
