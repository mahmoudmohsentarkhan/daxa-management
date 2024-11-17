import { Component, input} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatRipple, provideNativeDateAdapter} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'create-seller',
  standalone: true,
  imports: [SharedModule, MatInputModule, MatFormFieldModule,MatSelectModule,MatRipple, ReactiveFormsModule,MatDatepickerModule],
  templateUrl: './create-seller.component.html',
  styleUrl: './create-seller.component.scss',
  providers: [provideNativeDateAdapter()]

})
export class CreateSellerComponent {
  isEdit = input<boolean>(false)
  cities = [
    "New York",
    "Tokyo",
    "London",
    "Amsterdam",
    "Paris"];
  countries = [
    "Switzerland",
    "New Zealand",
    "Germany",
    "United States",
    "Japan",
    "Netherlands",
    "Sweden",
    "Canada",
    "United Kingdom",
    "Australia"];
    minDate = new Date(1980, 0, 1);
    maxDate = new Date(2008, 11, 31)
  fmSeller:FormGroup
  constructor(private fb:FormBuilder){
    this.fmSeller = fb.group({
      id:[],
      name: [],
      storeName: [],
      phone: [],
      email: [],
      birth:[],
      city: [],
      country: [],
      postcode: [],
      walletBalance:[],
      description:[]
    })
  }
  create(){
    console.log(this.fmSeller)

  }

  update(){
    console.log('update category')
  }

  cancel(){}

}



