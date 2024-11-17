import { Component} from '@angular/core';
import { NavComponent } from './component/nav/nav.component';
import {  FaIconComponent} from '@fortawesome/angular-fontawesome';
import { SearchComponent } from 'app/shared/component/search/search.component';
import { NgClass } from '@angular/common';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchComponent,
    NavComponent,
    MatIcon,
    FaIconComponent,
    NgClass
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faAngleDown = faAngleDown
  show = false;
  toggle(){
    this.show = !this.show
  }
}
