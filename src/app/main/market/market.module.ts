import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { MarketShellComponent } from './market-shell/market-shell.component';
import { MarketListComponent } from './market-list/market-list.component';
import { MarketItemComponent } from './market-item/market-item.component';
import { MarketSearchComponent } from './market-search/market-search.component';



@NgModule({
  declarations: [MarketComponent, MarketShellComponent, MarketListComponent, MarketItemComponent, MarketSearchComponent],
  imports: [
    CommonModule
  ]
})
export class MarketModule { }
