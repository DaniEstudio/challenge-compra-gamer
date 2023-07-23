import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../navbar/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = 'https://static.compragamer.com/test/subcategorias.json';

  constructor( private http: HttpClient ) { }

  getCategoryData(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.API_URL);
  }

}
