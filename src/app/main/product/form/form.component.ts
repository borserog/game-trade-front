import { Component, OnInit } from '@angular/core';
import { EProductLabel, Product } from '@src/app/main/product/shared/model/product.model';
import { ProductService } from '@src/app/main/product/shared/service/product.service';
import { AuthService } from '@src/app/core/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  product: Product;
  productToEdit$: Observable<Product>;

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private router: Router
  ) {
    this.productToEdit$ = this.productService.productToEdit$;
  }

  ngOnInit(): void {
    this.productToEdit$.subscribe(product => {
      if (product) {
        this.product = product;
      } else {
        this.product = new Product();
      }
    });
  }

  productLabelKeys(): string[] {
    return Object.keys(EProductLabel);
  }

  handleSaveProduct(): void {
    this.authService.loggedUser$.pipe(
      switchMap(({ id }) => {
        if (this.product.id) {
          return this.productService.edit(this.product, id);
        } else {
          return this.productService.addProduct(this.product, id);
        }
      }),
      take(1)
    ).subscribe(async () => {
      await this.router.navigate(['/profile']);
    });
  }
}
