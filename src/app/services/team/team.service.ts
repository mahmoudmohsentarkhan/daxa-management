import { Injectable } from '@angular/core';
import { IMemberTeam } from '@app/interface';
import { HttpService } from '@app/service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpService) { }

  get membersTeam():Observable<IMemberTeam[]>{
    return this.http.get<IMemberTeam[]>('members-team')
  }
}
