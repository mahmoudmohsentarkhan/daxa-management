import { Component } from '@angular/core';
import { RateComponent, SearchComponent, SharedModule} from '@app/shared';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'aside-product-grid',
  standalone: true,
  imports: [SharedModule, SearchComponent, MatCheckboxModule, MatSliderModule, RateComponent],
  templateUrl: './aside-product-grid.component.html',
  styleUrl: './aside-product-grid.component.scss'
})
export class AsideProductGridComponent {
  categories = [
    {name:'all', size:246},
    {name:'electronics', size:85},
    {name:'accessories', size:99},
    {name:'sports', size:27},
    {name:'games', size:16},
    {name:'computers', size:38},
    {name:'mobiles', size:24},
  ]

  brands = [
    {name:'all', size:'156'},
    {name:'adidas', size:'34'},
    {name:'banboo', size:'26'},
    {name:'canin', size:'19'},
    {name:'debilop', size:'29'},
    {name:'emburo', size:'10'},
    {name:'fediz', size:'13'},
  ]

  colors = ['black','cadetblue','brown','aquamarine','darkblue','darkgreen','darkgray']

  rates = [
    {rate:5, size:145},
    {rate:4, size:75},
    {rate:3, size:12},
    {rate:2, size:5},
    {rate:1, size:3},
  ]
}
