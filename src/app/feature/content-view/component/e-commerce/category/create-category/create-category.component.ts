import { Component} from '@angular/core';
import { FormsCategoryComponent } from 'app/index/e-commerce/e-commerces-shared-index';

@Component({
  selector: 'create-category',
  standalone: true,
  imports: [FormsCategoryComponent],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss'

})
export class CreateCategoryComponent{}
