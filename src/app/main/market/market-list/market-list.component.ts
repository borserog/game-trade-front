import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@src/app/main/market/market-shell/market-shell.component';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {

  @Input() productList: Product[];

  constructor() { }

  ngOnInit(): void {
  }

  getTitle({ title }: Product): string {
    console.log('Method RUN: ', title);
    return title;
  }
}