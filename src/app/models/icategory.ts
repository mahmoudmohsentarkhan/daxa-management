import { ProductType, Status } from "@app/enum";

export interface ICategory {
  id: number,
  name:string,
  totalProducts?:number,
  parentCategory?:string,
  type?:ProductType;
  slug?:string,
  description?: string;
  status?: Status;
  img?:string,
}
