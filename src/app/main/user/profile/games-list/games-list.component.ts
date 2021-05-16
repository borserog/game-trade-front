import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@src/app/main/product/shared/model/product.model';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  @Input() gamesList: Product[];
  @Input() loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  removeProductFromList(productId: number): void {
    this.gamesList = this.gamesList.filter(product => product.id !== productId);
  }
}
