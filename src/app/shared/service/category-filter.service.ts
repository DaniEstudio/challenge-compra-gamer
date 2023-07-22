import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryFilterService {
  private groupIdSubject = new BehaviorSubject<number>(null);

  setGroupId(groupId: number): void {
    this.groupIdSubject.next(groupId);
  }

  getGroupId(): Observable<number> {
    return this.groupIdSubject.asObservable();
  }
}
