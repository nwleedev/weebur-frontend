import {
  PRODUCT_GET_PATHNAME,
  PRODUCT_ORDER_VALUES,
  PRODUCT_SEARCH_PATHNAME,
  PRODUCT_SORT_BY_VALUES,
} from "@/features/product/data";
import {
  getEnumValue,
  getNumberValue,
  getStringValue,
} from "@/shared/libs/search-params";
import { ProductsQueryKey, SearchProductsQueryKey } from "./type";

/**
 * 클라이언트에서 쿼리 파라미터로 쿼리 키 생성
 */

export function productQueryKey(
  searchParams: URLSearchParams
): ProductsQueryKey {
  const limit = getNumberValue(searchParams, "limit");
  const sortBy = getEnumValue(searchParams, "sortBy", PRODUCT_SORT_BY_VALUES);
  const order = getEnumValue(searchParams, "order", PRODUCT_ORDER_VALUES);

  return [PRODUCT_GET_PATHNAME, limit, sortBy, order] as const;
}

export function searchProductQueryKey(
  searchParams: URLSearchParams
): SearchProductsQueryKey {
  const limit = getNumberValue(searchParams, "limit");
  const sortBy = getEnumValue(searchParams, "sortBy", PRODUCT_SORT_BY_VALUES);
  const order = getEnumValue(searchParams, "order", PRODUCT_ORDER_VALUES);
  const query = getStringValue(searchParams, "query");
  return [PRODUCT_SEARCH_PATHNAME, query, limit, sortBy, order] as const;
}
