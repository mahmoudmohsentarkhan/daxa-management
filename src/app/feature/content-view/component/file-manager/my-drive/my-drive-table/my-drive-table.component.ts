import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from 'app/index/shared/shared-index';

@Component({
  selector: 'my-drive-table',
  standalone: true,
  imports: [
    MatTooltipModule,
    MatIcon,
    MatRippleModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './my-drive-table.component.html',
  styleUrl: './my-drive-table.component.scss',
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class MyDriveTableComponent {
    displayedColumns: string[] = ['select', 'owner', 'listedDate', 'fileSize', 'fileItems','action'];
    dataSource = new MatTableDataSource<Folder>(ELEMENT_DATA);
    selection = new SelectionModel<Folder>(true, []);
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

  export interface Folder {
    id: number,
    name: string;
    owner: string;
    listedDate: string;
    fileSize: string;
    fileItems: string;
  }
  export interface Task{
    name:string,
    assignedTo:string,
    dueDate:Date,
    priority:string,
    status:string
  }
  const ELEMENT_DATA: Folder[] = [
    {id: 1, name: 'Dashboard design file', owner:'Linda Maddox',listedDate:'Nov 20, 2024',fileSize:'1.2 GB',fileItems:'69'},
    {id: 2, name: 'Important documents', owner:'Juanita Lavigne',listedDate:'Nov 21, 2024',fileSize:'1 GB',fileItems:'236'},
    {id: 3, name: 'Product design', owner:'Roy Pope',listedDate:'Nov 22, 2024',fileSize:'2.3 GB',fileItems:'365'},
    {id: 4, name: 'Dashboard design file', owner:'Cecil Jones',listedDate:'Nov 23, 2024',fileSize:'1.4 GB',fileItems:'25'},
    {id: 5, name: 'Media files', owner:'Trudy Venegas',listedDate:'Nov 24, 2024',fileSize:'3 GB',fileItems:'47'},
    {id: 6, name: 'Graphic design file', owner:'Sharilyn Goodall',listedDate:'Nov 25, 2024',fileSize:'4.7 GB',fileItems:'98'},
    {id: 7, name: 'Personal photo', owner:'Annie Carver',listedDate:'Nov 26, 2024',fileSize:'1.6 GB',fileItems:'35'},
    {id: 8, name: 'Audio file', owner:'Winona Etzel',listedDate:'Nov 27, 2024',fileSize:'2.1 GB',fileItems:'75'},
    {id: 9, name: 'English learning files', owner:'Thomas Lane',listedDate:'Nov 28, 2024',fileSize:'3.1 GB',fileItems:'84'},
    {id: 10, name: 'Mix projects design files', owner:'Edward Goodman',listedDate:'Nov 29, 2024',fileSize:'3.3 GB',fileItems:'17'},

  ];

