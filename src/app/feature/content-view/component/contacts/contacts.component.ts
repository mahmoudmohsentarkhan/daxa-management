import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { take } from 'rxjs';
import { IContact } from '@app/interface';
import { AvatarWithInfoComponent, SearchComponent, SharedModule } from '@app/shared';
import { ContactService } from '@app/service';

@Component({
  selector: 'contacts',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatCheckboxModule,
    AvatarWithInfoComponent,
    SearchComponent
],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'lastContacted','company','leadScore','status','action'];
  dataSource:any
  selection = new SelectionModel<IContact>(true, []);
  @ViewChild(MatPaginator) paginator!:MatPaginator
  constructor(private contactService:ContactService){}
  ngOnInit(): void {
    this.contactService.contacts.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<IContact>(val);
      this.dataSource.paginator = this.paginator;
    })
  }
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

