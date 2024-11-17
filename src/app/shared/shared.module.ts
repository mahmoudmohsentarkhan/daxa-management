import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSectionComponent } from './component/title-section/title-section.component';
import { StockArrowComponent } from './component/stock-arrow/stock-arrow.component';
import { MenuListComponent } from './component/menu-list/menu-list.component';
import { StyleSectionDirective } from './style-section.directive';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TitleSectionComponent,
    StockArrowComponent,
    StyleSectionDirective,
    MenuListComponent
  ],
  exports:[CommonModule,TitleSectionComponent,StyleSectionDirective,MenuListComponent,StockArrowComponent]
})
export class SharedModule { }
