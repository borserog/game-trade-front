import {Component, Input, OnInit} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from '@src/app/main/product/shared/service/product.service';
import { finalize,  } from 'rxjs/operators';

@Component({
  selector: 'app-games-shell',
  templateUrl: './games-shell.component.html',
  styleUrls: ['./games-shell.component.scss']
})
export class GamesShellComponent implements OnInit {
  @Input() userId: number;

  gamesList$: Observable<any>;
  loading$ = new BehaviorSubject(true);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.gamesList$ = this.productService.getUserProducts(this.userId).pipe(
      finalize(() => this.loading$.next(false))
    );
  }

}
