import { Injectable } from '@angular/core';
import { ILabeledData, Iproject } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpService) { }

  get project():Observable<Iproject[]>{
    return this.http.get<Iproject[]>('projects')
  }

  get projectsAnalysis():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('projects-analysis')
  }

  get projectsProgress():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('projects-progress')
  }
  get projectsRoadmap():Observable<ILabeledData>{
    return this.http.get<ILabeledData>('projects-roadmap')
  }
}
