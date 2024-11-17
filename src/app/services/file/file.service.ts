import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ifile } from '@app/interface';
import { HttpService } from '@app/service';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpService) {}

  get fileProjects():Observable<Ifile[]>{
    return this.http.get<Ifile[]>('file-projects')
  }
}
