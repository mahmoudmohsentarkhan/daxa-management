import { Component, Input } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { faStar, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TitleCasePipe } from '@angular/common';
import { RateComponent } from '@app/shared';

@Component({
  selector: 'top-persone-table',
  standalone: true,
  imports: [
    MatTableModule,
    FaIconComponent,
    TitleCasePipe,
    RateComponent
],
  templateUrl: './top-persone-table.component.html',
  styleUrl: './top-persone-table.component.scss'
})
export class TopPersoneTableComponent {
  faStar:IconDefinition = faStar
  faStarSolid:IconDefinition = faStarSolid
  displayedColumns: string[] = ['persone', 'rate'];
  dataSource:any;
  showIdCol:boolean = false
  @Input({required:true}) set data(data:any){
    this.dataSource = new MatTableDataSource<any>(data);
  }
  @Input() set showIdColumn(show:boolean){
    if(show){
      this.showIdCol = true
      this.displayedColumns.unshift("id")
    }
  }

}
