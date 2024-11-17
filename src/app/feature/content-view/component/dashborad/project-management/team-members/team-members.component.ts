import { Component } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DecimalPipe } from '@angular/common';

import { take } from 'rxjs';
import { ProgressBarComponent} from 'app/index/shared/shared-index';
import { IMemberTeam } from '@app/interface';
import { AvatarWithInfoComponent } from 'app/shared/component/avatar-with-info/avatar-with-info.component';
import { SharedModule } from '@app/shared';
import { TeamService } from 'app/services/team/team.service';

@Component({
  selector: 'team-members',
  standalone: true,
  imports: [SharedModule,MatRippleModule,AvatarWithInfoComponent,MatTableModule,MatProgressBarModule,DecimalPipe, ProgressBarComponent],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {
  colors = ["#00cae3", "#e74c3c", "#0f79f3", "#ffb264", "#2ed47e", "#796df6"]
  lengthColors:number
  displayedColumns: string[] = ['persone', 'hours','status'];
  dataSource!:IMemberTeam[]
  constructor(private teamService:TeamService){
    teamService.membersTeam.pipe(take(1)).subscribe(val=>{
      this.dataSource = val;
    })
    this.lengthColors = this.colors.length
  }
  calculatePercentage(hours: number): number {
    const totalHours = 160;
    return (hours / totalHours) * 100;
  }
}
