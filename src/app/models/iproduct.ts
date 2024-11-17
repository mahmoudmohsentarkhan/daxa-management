import { ProductType } from "@app/enum";

export interface IProduct {
  id: string,
  title: string,
  type:ProductType,
  sku:string,
  brand:string,
  description:string,
  regularPrice:number,
  salePrice:number,
  publishSchedule:Date,
  discount:number,
  availableDate:Date,
  endDate:number,
  img: string,
  category:string,
  vendor:string,
  collection:string,
  tags:string[],
  stock:number,
  soldQuantity: number,
  price: number,
  oldPrice?:number,
  rate?:number,
  itemCode: string
}
