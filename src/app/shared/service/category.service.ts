import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CategoryModel } from '../../navbar/model/category.model';
import { GenericInterceptor } from '../interceptor/http-interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends GenericInterceptor<CategoryModel[]>  {

  private API_URL = 'https://static.compragamer.com/test/subcategorias.json';
  private IMG_BASE_URL: string = 'https://compragamer.net/categorias_demo/';
  private categoryImgURLSubject: Subject<string> = new Subject<string>();

  constructor( private http: HttpClient, snackBar: MatSnackBar) {
        super(snackBar);
   }

  getCategoryData(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.API_URL);
  }

  getCategoryImgURL(): Observable<string> {
    return this.categoryImgURLSubject.asObservable();
  }

  setCategoryImgURL(imgName: string | null): void {
    this.categoryImgURLSubject.next(imgName !== null ? this.IMG_BASE_URL + imgName : null);
  }

}
