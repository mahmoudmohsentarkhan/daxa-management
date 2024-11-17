import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private valueSource = new BehaviorSubject<boolean>(false);
  currentValue$ = this.valueSource.asObservable();

  changeValue(value: boolean) {
    this.valueSource.next(value);
  }
}
