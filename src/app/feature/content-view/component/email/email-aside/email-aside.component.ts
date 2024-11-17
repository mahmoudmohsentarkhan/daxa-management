import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SearchComponent, SharedModule } from '@app/shared';

@Component({
  selector: 'email-aside',
  standalone: true,
  imports: [SharedModule, SearchComponent,MatButtonModule,MatIcon],
  templateUrl: './email-aside.component.html',
  styleUrl: './email-aside.component.scss'
})
export class EmailAsideComponent {
  lists:{icon:string,title:string}[]
  constructor(){
    this.lists = [
      {
        icon:'inbox',
        title:'inbox'
      },
      {
        icon:'grade',
        title:'starred'
      },
      {
        icon:'snooze',
        title:'snoozed'
      },
      {
        icon:'send',
        title:'send'
      },
      {
        icon:'drafts',
        title:'drafts'
      },
      {
        icon:'report_gmailerrorred',
        title:'spam'
      },
      {
        icon:'delete',
        title:'trash'
      },
      {
        icon:'bookmark_border',
        title:'important'
      },
      {
        icon:'email',
        title:'all mail'
      },
      {
        icon:'person',
        title:'Personal'
      },
      {
        icon:'business_center',
        title:'company'
      },
      {
        icon:'attach_money',
        title:'wallet balance'
      },
      {
        icon:'people',
        title:'friends'
      },
    ]
  }
}
