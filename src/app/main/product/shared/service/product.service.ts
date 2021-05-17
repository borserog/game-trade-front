import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@src/app/main/product/shared/model/product.model';

export interface PurchaseRequestDTO {
  productId: number;
  loggedUserId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = environment.url + '/items';
  // TODO inserir endereço da api para compra
  private readonly PURCHASE_API_URL = environment.url + '/items';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  getUserProducts(userId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/${userId}`);
  }

  purchaseProduct(productId: number, loggedUserId: number): Observable<unknown> {
    const requestDTO: PurchaseRequestDTO = {
      productId,
      loggedUserId
    };

    return this.http.post<unknown>(this.PURCHASE_API_URL, requestDTO);
  }
}
