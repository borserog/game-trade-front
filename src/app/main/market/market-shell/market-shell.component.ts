import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable,  Subject } from 'rxjs';
import { ProductService } from '@src/app/main/product/shared/service/product.service';
import { filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { Product } from '@src/app/main/product/shared/model/product.model';
import { AuthService } from '@src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-shell',
  templateUrl: './market-shell.component.html',
  styleUrls: ['./market-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketShellComponent implements OnInit {
  productList$: Observable<any>;
  loading$ = new BehaviorSubject(true);
  searchText$ = new Subject();

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.productList$ = this.productService.getProducts().pipe(
      map((theProducts) => {
        return theProducts.filter((p) => p.imagePath !== null);
      }),
      finalize(() => {
        this.loading$.next(false);
      })
    );

    this.searchText$.subscribe((text) => {
      console.log(`game-trade.com/api/products?strSearch=${text}`);
    });
  }

  onSearchTextChanged(searchText: string): void {
    this.searchText$.next(searchText);
  }

  onProductPurchased({id: productId}: Product): void {
    this.authService.loggedUser$.pipe(
      tap((user) => {
        if (user == null) {
          console.log('Show login toaster');
        }
      }),
      take(1),
      filter((user) => user !== null),
      switchMap(({id: userId}) => {
        return this.productService.purchaseProduct(Number(productId), userId);
      })
    ).subscribe(async () => {
      await this.router.navigate(['/profile']);
    });
  }
}
