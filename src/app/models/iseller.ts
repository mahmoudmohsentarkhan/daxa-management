export interface ISeller {
  id: number,
  name: string;
  store?:string;
  phone?:number;
  email?:string;
  brith?:Date;
  city?:string;
  country?:string;
  postcode?:number;
  walletBalance?:number;
  description?:number;
  rate?:number;
  img?:string;
  revenue?:number;
  LastSaleDate?:Date;
  stock?:number
}
