  import { CurrencyPipe } from '@angular/common';
  import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
  import { MatRippleModule } from '@angular/material/core';
  import { MatIconModule } from '@angular/material/icon';
  import { MatInputModule } from '@angular/material/input';
  import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
  import { MatTableDataSource, MatTableModule } from '@angular/material/table';
  import { MatTooltipModule } from '@angular/material/tooltip';
  import { IOrder} from '@app/interface';
  import { OrderService, ProductService } from '@app/service';
  import { SharedModule } from '@app/shared';
  import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';
  import { take } from 'rxjs';
import { QuantityCounterComponent } from 'app/index/e-commerce/e-commerces-shared-index';

  @Component({
    selector: 'my-orders',
    standalone: true,
    imports: [
      SharedModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatIconModule,
      MatTooltipModule,
      MatRippleModule,
      QuantityCounterComponent
  ],
    templateUrl: './my-orders.component.html',
    styleUrl: './my-orders.component.scss'
  })

  export class MyOrdersComponent  implements OnInit {
    faSearch:IconDefinition = faSearch
    displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'total', 'action'];
    dataSource:MatTableDataSource<IOrder> = new MatTableDataSource<IOrder>();
    currenyPipe:CurrencyPipe =  new CurrencyPipe('en-US');
    orders!:IOrder[]
    @Output() totalPrice:EventEmitter<number> = new EventEmitter<number>()


    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private orderService:OrderService, private productService:ProductService){}

    ngOnInit(): void {
      this.orderService.orders.pipe(take(1)).subscribe(val => {
        this.dataSource.data = val
        this.dataSource.paginator = this.paginator;
        this.calcTotalPrice()
      });
    }
    getPrice= (data: IOrder): string => {
     const result = this.currenyPipe.transform(data.price,'USD', 'symbol', '1.0')
     return  result === null ? '' : result;
    }


    qunatityChange(newQunatity:number, idOrder:number){
      const orderIndex = this.dataSource.data.findIndex(order => order.id === idOrder);
      this.dataSource.data[orderIndex].quantity = newQunatity
      this.calcTotalPrice()
    }

    deleteOrder(id:number){
      this.orderService.delete(id).subscribe(()=>{
        this.dataSource.data = this.dataSource.data.filter((item) => item.id !== id);
        this.calcTotalPrice()
      })
    }

    private calcTotalPrice(){
      let total = 0;
      this.dataSource.data.forEach(o=>{
        total += o.price*o.quantity
      })
      this.totalPrice.emit(total)
    }

  }

