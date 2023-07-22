import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private API_URL = 'https://static.compragamer.com/test/subcategorias.json';

  constructor( private http: HttpClient ) { }

  getProductData(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.API_URL);
  }

}
