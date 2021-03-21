import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-market-search',
  templateUrl: './market-search.component.html',
  styleUrls: ['./market-search.component.scss']
})
export class MarketSearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchBox') searchBox: ElementRef;

  readonly searchText$ = new Subject();

  @Output() searchTextChanged = new EventEmitter<string>();
  private componentDestroyed$ = new Subject();

  constructor() {
  }

  ngOnInit(): void {
    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(console.log),
      takeUntil(this.componentDestroyed$),
      finalize(() => console.log('Encerrou'))
    ).subscribe((searchText) => {
      this.searchTextChanged.emit(searchText);
    });
  }

  onKeyup(event: KeyboardEvent): void {
    this.searchText$.next((event.target as HTMLInputElement).value);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
  }
}
