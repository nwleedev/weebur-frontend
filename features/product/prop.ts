import { ProductOrder, ProductSortBy } from "./data";

export interface GetProductProps {
  limit?: number;
  page?: number;
  sortBy?: ProductSortBy;
  order?: ProductOrder;
}

export interface GetSearchProductProps extends GetProductProps {
  query?: string;
}
