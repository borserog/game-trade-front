import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@src/app/main/market/market-shell/market-shell.component';

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss']
})
export class MarketItemComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}