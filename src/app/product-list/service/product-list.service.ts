import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private API_URL = 'https://static.compragamer.com/test/productos.json';

  constructor( private http: HttpClient ) { }

  getProductData(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.API_URL);
  }

}
