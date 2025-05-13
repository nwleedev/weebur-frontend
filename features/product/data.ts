export const PRODUCT_SIZE = 20;
export const DEFAULT_PRODUCT_PAGE = 0;
export const PRODUCT_API_URL = "https://dummyjson.com/";
export const PRODUCT_GET_PATHNAME = "/products";
export const PRODUCT_SEARCH_PATHNAME = "/products/search";

export const PRODUCT_ORDER_ASC = "asc";
export const PRODUCT_ORDER_DESC = "desc";

export const PRODUCT_ORDER_VALUES = [
  PRODUCT_ORDER_ASC,
  PRODUCT_ORDER_DESC,
] as const;

export const PRODUCT_SORT_BY_RATING = "rating";
export const PRODUCT_SORT_BY_EMPTY = "";
export const PRODUCT_SORT_BY_NULL = null;

export const PRODUCT_SORT_BY_VALUES = [
  PRODUCT_SORT_BY_RATING,
  PRODUCT_SORT_BY_EMPTY,
  PRODUCT_SORT_BY_NULL,
] as const;

export type ProductSortBy =
  | typeof PRODUCT_SORT_BY_RATING
  | typeof PRODUCT_SORT_BY_EMPTY
  | typeof PRODUCT_SORT_BY_NULL;
export type ProductOrder = typeof PRODUCT_ORDER_ASC | typeof PRODUCT_ORDER_DESC;
