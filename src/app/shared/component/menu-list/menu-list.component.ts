import { Component, signal } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'menu-list',
  standalone: true,
  imports: [MatMenuModule,MatButtonModule,TitleCasePipe,MatIconModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  filterYear = signal<string>("year 2024")
  toggleFilterYear(val:string){
    this.filterYear.set(val);
  }
}
