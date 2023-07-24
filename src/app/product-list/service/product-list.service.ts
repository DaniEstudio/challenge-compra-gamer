import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/product.model';
import { GenericInterceptor } from 'src/app/shared/interceptor/http-interceptor';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Injectable({
  providedIn: 'root'
})
export class ProductListService extends GenericInterceptor<ProductModel[]> {

  private API_URL = 'https://static.compragamer.com/test/productos.json';

  constructor(private http: HttpClient, snackBar: MatSnackBar) {
    super(snackBar);
  }

  getProductData(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.API_URL);
  }

}
