import { IQuery } from "../../../../commons/types/generated/types";

export interface IWriteProps {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
  useditemId?: string;
}
export interface IUseItemFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  useditemAddress?: {
    zipcode: string;
    address: string;
    addressDetail: string;
    lat: number;
    lng: number;
  };
  tags?: string[];
  images?: string[];
}
