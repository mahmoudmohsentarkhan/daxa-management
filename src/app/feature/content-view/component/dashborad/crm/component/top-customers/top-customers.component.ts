import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { take } from 'rxjs';
import { CrmService } from 'app/index/service-index';
import { SharedModule } from '@app/shared';
import { ISeller } from '@app/interface';

@Component({
  selector: 'top-customers',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './top-customers.component.html',
  styleUrl: './top-customers.component.scss'
})
export class TopCustomersComponent  implements OnInit{

  displayedColumns: string[] = ['persone', 'rate'];
  dataSource!:MatTableDataSource<ISeller>
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private crmService:CrmService) {}
  ngOnInit(): void {
    this.crmService.topCustomers.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<ISeller>(val);
      this.dataSource.paginator = this.paginator
    })
  }
}


