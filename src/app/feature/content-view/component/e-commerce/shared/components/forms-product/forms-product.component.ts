import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRipple, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '@app/shared';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'forms-product',
  standalone: true,
  imports: [SharedModule, MatInputModule, MatFormFieldModule,MatSelectModule,NgxEditorModule,FormsModule,MatDatepickerModule,MatRipple, ReactiveFormsModule],
  templateUrl: './forms-product.component.html',
  styleUrl: './forms-product.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class FormsProductComponent implements OnInit, OnDestroy {
  isEdit = input<boolean>(false)
  editor!: Editor;
  html = '';
  brands=['Emburo','Fediz','Debilop','Canin','Daxa']
  cateogires= ['Watch','Mobile','Laptop','Headphone','Shoe']
  vendors=['Dennis Matthews','Susan Rader','Douglas Harvey','John Valdez','Kathryn Turner']
  collections= ['collection 1','collection 2','collection 3','collection 4','collection 5']
  tags = ['Watch','Electronics', 'Sports','Fashion','Electronics', 'Jewellery']
  fmProduct:FormGroup
  constructor(private fb:FormBuilder){
    this.fmProduct = fb.group({
      id:[],
      title: [],
      type: [],
      sku: [],
      brand: [],
      description:[],
      regularPrice:[],
      salePrice:[],
      publishSchedule:[],
      discount:[],
      availableDate:[],
      endDate:[],
      stock:[],
      img: [],
      category:[],
      vendor:[],
      collection:[],
      tags:fb.array([this.fb.control('')]),
    })
  }

  get tagsList(): FormArray {
    return this.fmProduct.get('tags') as FormArray;
  }

   addTag() {
    this.tagsList.push(this.fb.control(''));
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  create(){
    console.log(this.fmProduct.value)
  }

  update(){
    console.log('update product')
  }

  cancel(){}

}

