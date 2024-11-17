export interface IRefund {
  id:string,
  customerName:string,
  customerImg:string,
  time:Date,
  numOrdersReturned:number,
  numOrdersRetfunded:number,
  totalRefunded:number,
  totalReplaced:number
}
