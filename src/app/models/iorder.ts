export interface IOrder {
  id: number,
  nameProduct:string,
  imgProduct:string,
  price:number,
  nameCustomer: string;
  imgCustomer: string;
  quantity:number,
  profit: number;
  status: string;
  created: string;
}
