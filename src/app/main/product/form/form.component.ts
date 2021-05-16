import { Component, OnInit } from '@angular/core';
import { EProductLabel, Product } from '@src/app/main/product/shared/model/product.model';
import { ProductService } from '@src/app/main/product/shared/service/product.service';
import { AuthService } from '@src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  product: Product;

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.product = new Product();
  }

  productLabelKeys(): string[] {
    return Object.keys(EProductLabel);
  }

  handleAddProduct(): void {
    this.authService.loggedUser$.subscribe(user => {
      this.product.price = Number(this.product.price);
      this.productService.addProduct(this.product, user.id).subscribe(async () => {
        await this.router.navigate(['/profile']);
      });
    });
  }

}
