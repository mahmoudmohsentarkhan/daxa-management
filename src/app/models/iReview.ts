import { Status } from "@app/enum"
export interface IReveiw {
  id:string,
  productName:string,
  productImg:string,
  customerName:string,
  customerImg:string,
  customerReview:string,
  rate:number,
  time:Date,
  status: Status
}
