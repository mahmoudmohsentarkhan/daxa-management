import { Component, HostListener } from '@angular/core';
import { DropDownComponent } from './drop-down/drop-down.component';
import { faBell,faCalendar,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { animate, style, transition, trigger } from '@angular/animations';
import { faAngleDown, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { NavService } from '@app/service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    DropDownComponent,
    FaIconComponent

  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({opacity: 0}), animate('100ms', style({opacity: 1}))]),
      transition(':leave', [animate('100ms', style({opacity: 0}))]),
    ]),
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  faBell = faBell
  faEnvelope = faEnvelope
  faCalendar = faCalendar
  faLanguage = faLanguage
  faAngleDown = faAngleDown
  activeDropDown:null|string = null
  isShowAside = false;
  constructor(private navService:NavService){}

  toggleAsid(){
    this.isShowAside = !this.isShowAside
    this.navService.changeValue(this.isShowAside)
  }

  onButtonClick(event: MouseEvent,nameShow:string) {
    if(this.activeDropDown == nameShow){
      this.activeDropDown = null
    }else {
      this.activeDropDown = nameShow
    }
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.doSomethingOutsideClick();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.doSomethingOutsideClick();
  }
  doSomethingOutsideClick() {
    if(this.activeDropDown){
      this.activeDropDown = null
    }
  }
}
