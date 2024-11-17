import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './feature/header/header.component';
import { AsideBarComponent } from './feature/aside/aside-bar.component';
import { NavService } from '@app/service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  isShowAside = false;
  constructor(private navService:NavService){
    navService.currentValue$.subscribe(val=>{
      this.isShowAside = val
    })
  }
}
