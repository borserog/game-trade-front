import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketShellComponent } from './market-shell.component';

describe('MarketShellComponent', () => {
  let component: MarketShellComponent;
  let fixture: ComponentFixture<MarketShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
