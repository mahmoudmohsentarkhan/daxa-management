import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { take } from 'rxjs';
import { AvatarWithInfoComponent, SearchComponent, SharedModule } from '@app/shared';
import { CategoryService } from '@app/service';
import { ICustomer } from 'app/models/icustomer';
import { ICategory } from 'app/models/icategory';
@Component({
  selector: 'categories',
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
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'image', 'name', 'totalProducts', 'slug','description','status','action'];
  dataSource:any
  selection = new SelectionModel<ICustomer>(true, []);
  @ViewChild(MatPaginator) paginator!:MatPaginator
  constructor(private cateogryService:CategoryService){

  }
  ngOnInit(): void {
    this.cateogryService.categories.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<ICategory>(val);
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
