import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addProduct(product: Product, userId: number): Observable<Product> {
    const headers = new HttpHeaders({
      'user-id': userId.toString()
    });

    return this.http.post<Product>(`${this.API_URL}`, product, {
      headers
    });
  }

  removeProduct(productId: number): Observable<null> {
    return this.http.delete<null>(`${this.API_URL}/${productId}`);
  }
}
