import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { take } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { AvatarWithInfoComponent, SharedModule } from '@app/shared';
import { ProductService } from 'app/services/product/product.service';
import { IProduct } from '@app/interface';

@Component({
  selector: 'top-selling-products',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    CurrencyPipe,
    AvatarWithInfoComponent
],
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent  implements OnInit {
  displayedColumns: string[] = ['order', 'name', 'itemCode', 'price'];
  dataSource!:MatTableDataSource<IProduct>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.topsSellingProducts.pipe(take(1)).subscribe(val=>{
      this.dataSource = new MatTableDataSource<IProduct>(val);
      this.dataSource.paginator = this.paginator
    })
  }

}

