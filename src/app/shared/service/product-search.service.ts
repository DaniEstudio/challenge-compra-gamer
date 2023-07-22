import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProductSearchService {
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  setSearchTerm(searchTerm: string): void {
    this.searchTermSubject.next(searchTerm);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm$;
  }
}
