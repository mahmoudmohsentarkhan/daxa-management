import { Component, input} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRipple} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductType } from '@app/enum';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'forms-category',
  standalone: true,
  imports: [SharedModule, MatInputModule, MatFormFieldModule,MatSelectModule,MatRipple, ReactiveFormsModule],
  templateUrl: './forms-category.component.html',
  styleUrl: './forms-category.component.scss'
})
export class FormsCategoryComponent {
  isEdit = input<boolean>(false)
  typeProduct= [ProductType.DIJITAL,ProductType.PHUSICAL]
  parentCateogry=['Emburo','Fediz','Debilop','Canin','Daxa']
  fmCategory:FormGroup
  constructor(private fb:FormBuilder){
    this.fmCategory = fb.group({
      id:[],
      name: [],
      type: [],
      slug: [],
      ParentCategory: [],
      description:[]
    })
  }


  create(){
    console.log('update product')

  }

  update(){
    console.log('update category')
  }

  cancel(){}

}



