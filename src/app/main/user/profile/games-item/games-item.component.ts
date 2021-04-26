import {Component, Input, OnInit} from '@angular/core';
import { Product } from '@src/app/main/product/shared/model/product.model';

@Component({
  selector: 'app-games-item',
  templateUrl: './games-item.component.html',
  styleUrls: ['./games-item.component.scss']
})
export class GamesItemComponent implements OnInit {
  @Input() game: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
