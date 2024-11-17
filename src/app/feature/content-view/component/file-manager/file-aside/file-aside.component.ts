import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SearchComponent, SharedModule } from '@app/shared';

@Component({
  selector: 'file-aside',
  standalone: true,
  imports: [SharedModule, SearchComponent,MatIcon],
  templateUrl: './file-aside.component.html',
  styleUrl: './file-aside.component.scss'
})
export class FileAsideComponent {
  links:{icon:string,title:string}[] = [
    {
      icon:'drive_eta',
      title:'my drive'
    },
    {
      icon:'description',
      title:'documents'
    },
    {
      icon:'perm_media',
      title:'media'
    },
    {
      icon:'schedule',
      title:'recents'
    },
    {
      icon:'grade',
      title:'important'
    },
    {
      icon:'report_gmailerrorred',
      title:'spam'
    },
    {
      icon:'delete',
      title:'trash'
    }
  ]
}
