import { HttpClient } from '@angular/common/http';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { environment } from 'environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) {
  }


  get<T>(endpoint:string):Observable<T>{
    return this.http.get<T>(`${environment.url}/${endpoint}.json`)
  }

  getById<T>(endpoint:string):Observable<T>{
    return this.http.get<T>(`${environment.url}/${endpoint}.json`)
  }

  delete<T>(endpoint: string): Observable<void> {
    return this.http.delete<void>(`${environment.url}/${endpoint}.json`);
  }

  post<T>(endpoint:string, object:T):Observable<T>{
    return this.http.post<T>(`${environment.url}/${endpoint}.json`,object)
  }

}


