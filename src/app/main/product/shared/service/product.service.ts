import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@src/app/main/product/shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = environment.url + '/items';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  getUserProducts(userId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/${userId}`);
  }
}
