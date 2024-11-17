import { Status } from "@app/enum";
export interface ICustomer {
  id: number,
  name: string;
  email: string;
  img: string;
  phone:string;
  lastLogin:Date;
  totalSpand:number;
  totalOrder:number;
  status:Status;

}
