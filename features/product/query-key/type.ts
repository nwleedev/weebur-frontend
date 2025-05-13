import {
  PRODUCT_GET_PATHNAME,
  PRODUCT_SEARCH_PATHNAME,
  ProductOrder,
  ProductSortBy,
} from "../data";

export type ProductsQueryKey = readonly [
  typeof PRODUCT_GET_PATHNAME,
  number | undefined,
  ProductSortBy | undefined,
  ProductOrder | undefined
];
export type SearchProductsQueryKey = readonly [
  typeof PRODUCT_SEARCH_PATHNAME,
  string | undefined,
  number | undefined,
  ProductSortBy | undefined,
  ProductOrder | undefined
];
