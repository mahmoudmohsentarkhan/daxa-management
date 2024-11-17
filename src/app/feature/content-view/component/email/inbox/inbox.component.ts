import { Component, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { SharedModule } from '@app/shared';
import { ButtonsListEmailComponent } from '../buttons-list-email/buttons-list-email.component';

@Component({
  selector: 'email-inbox',
  standalone: true,
  imports: [
    SharedModule,
     ButtonsListEmailComponent,
     FaIconComponent,
     MatTableModule,
     MatPaginatorModule,
     MatIconModule,
     MatTooltipModule,
     MatRippleModule,
     MatCheckboxModule,
    ],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent {
  faStar = faStar
  displayedColumns: string[] = ['title','content'];
  dataSource = new MatTableDataSource<emailInfo>(ELEMENT_DATA);
  selection = new SelectionModel<emailInfo>(true, []);
  @ViewChild(MatPaginator) set paginator(paginator:MatPaginator){
    this.dataSource.paginator = paginator;
  };

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
}

export interface emailInfo {
  id: number,
  title: string;
  content: string;
}

const ELEMENT_DATA: emailInfo[] = [
  {id: 1,title:'Facebook' ,content:'Exclusive Product Offer on Facebook - Limited Time Only!	20 Nov, 2024'},
  {id: 2,title:'Dribbble' ,content:'Get 70% off Dribbble Pro for Cyber Monday! Today	19 Nov, 2024'},
  {id: 3,title:'Instagram' ,content:'Dictum mauris vestibulum proin velit turpis integer tellus tellus.	18 Nov, 2024'},
  {id: 4,title:'LinkedIn' ,content:'Convallis aenean egestas vitae ullamcorper aliquet luctus. Ipsum turpis, 2024'},
  {id: 5,title:'Shanell Rice' ,content:'Dictumst gravida nulla sed vitae eget adipiscing eros. 2024'},
  {id: 6,title:'J. Pinkman, Me (12)' ,content:'A ac et nisl proin quam lacus. Vitae tempor non .	15 Nov, 2024'},
  {id: 7,title:'D. Warner, Me (10)' ,content:'Volutpat cursus enim fames magna aliquam 14 Nov, 2024'},
  {id: 8,title:'Daily UI/UX Design' ,content:'Tincidunt rhoncus risus id elit. Volutpat risus ut nunc bibendum.'},
];

