import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { AddTaskComponent } from './add-task/add-task.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'to-do-list-table',
  standalone: true,
  imports: [
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatRippleModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './to-do-list-table.component.html',
  styleUrl: './to-do-list-table.component.scss',
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class ToDoListTableComponent {
  displayedColumns: string[] = ['select', 'customer', 'email', 'source', 'status','action'];
  dataSource = new MatTableDataSource<order>(ELEMENT_DATA);
  selection = new SelectionModel<order>(true, []);
  readonly dialog = inject(MatDialog);
  @ViewChild(MatPaginator) set paginator(paginator:MatPaginator){
    this.dataSource.paginator = paginator;
  };

  openDialog() {
    const dialogRef = this.dialog.open(AddTaskComponent,{
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((result:Task) => {
      console.log(result);
    });
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

export interface order {
  id: number,
  name: string;
  img: string;
  email: string;
  source: string;
  status: string;
}
export interface Task{
  name:string,
  assignedTo:string,
  dueDate:Date,
  priority:string,
  status:string
}
const ELEMENT_DATA: order[] = [
  {id: 1217, name: 'Carlos Daley', img:'https://angular.hibootstrap.com/daxa/images/users/user1.jpg',email:'carlos@daxa.com',source:'Website',status:'Shipped'},
  {id: 9513, name: 'Dorothy Young', img:'https://angular.hibootstrap.com/daxa/images/users/user2.jpg',email:'dorothy@daxa.com',source:'Referral',status:'Confirmed'},
  {id: 7513, name: 'Greg Woody', img:'https://angular.hibootstrap.com/daxa/images/users/user3.jpg',email:'greg@daxa.com',source:'Cold Call',status:'Rejected'},
  {id: 3579, name: 'Deborah Rosol', img:'https://angular.hibootstrap.com/daxa/images/users/user4.jpg',email:'deborah@daxa.com',source:'Email Campaign',status:'Pending'},
  {id: 4826, name: 'Kendall Allen', img:'https://angular.hibootstrap.com/daxa/images/users/user5.jpg',email:'kendall@daxa.com',source:'Online Store',status:'Rejected'},
  {id: 1324, name: 'Mark Stjohn', img:'https://angular.hibootstrap.com/daxa/images/users/user6.jpg',email:'mark@daxa.com',source:'Online Store',status:'Shipped'},
  {id: 6235, name: 'Joan Stanley', img:'https://angular.hibootstrap.com/daxa/images/users/user7.jpg',email:'joan@daxa.com',source:'Email Campaign',status:'Confirmed'},
  {id: 4532, name: 'Jacob Bell', img:'https://angular.hibootstrap.com/daxa/images/users/user8.jpg',email:'jacob@daxa.com',source:'Cold Call',status:'Shipped'},
  {id: 1342, name: 'Donald Bryan', img:'https://angular.hibootstrap.com/daxa/images/users/user9.jpg',email:'donald@daxa.com',source:'Referral',status:'Pending'},
  {id: 5313, name: 'Kristina Blomquist', img:'https://angular.hibootstrap.com/daxa/images/users/user10.jpg',email:'kristina@daxa.com',source:'Website',status:'Shipped'},

];

