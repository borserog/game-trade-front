import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductService } from '@src/app/main/product/shared/service/product.service';
import { finalize, map } from 'rxjs/operators';
import {EProductLabel, Product} from '@src/app/main/product/shared/model/product.model';

export const products: Product[] = [
  { id: 1, title: 'Kingdom Hearts', imagePath: 'assets/kingdom.jpg', productItemLabel: EProductLabel.SEMINOVO, price: 10.0 },
  { id: 2, title: 'Metal Gear', imagePath: 'assets/mgs.jpg', productItemLabel: EProductLabel.NOVO, price: 10.0 },
  { id: 3, title: 'Streets of Rage', imagePath: 'assets/street.jpg', productItemLabel: EProductLabel.COLECIONADOR, price: 10.0 },
  { id: 4, title: 'Sunset Riders', imagePath: 'assets/sunset.jpg', productItemLabel: EProductLabel.COLECIONADOR, price: 30.0 },
  { id: 5, title: 'Death Stranding', imagePath: 'assets/dstranding.jpg', productItemLabel: EProductLabel.NOVO, price: 20.0 },
];

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
    private productService: ProductService
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
}
