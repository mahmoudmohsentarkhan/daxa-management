import { Status } from "@app/enum";

export interface ITransaction {
  id:string,
  status:Status,
  amount:number,
  rewards:number,
  date:Date;
}
