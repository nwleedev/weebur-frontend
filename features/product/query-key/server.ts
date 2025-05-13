import {
  PRODUCT_GET_PATHNAME,
  PRODUCT_ORDER_VALUES,
  PRODUCT_SEARCH_PATHNAME,
  PRODUCT_SORT_BY_VALUES,
} from "@/features/product/data";
import { getEnum, getNumber, getString } from "@/shared/libs/string";
import { ServerSideSearchParams } from "@/shared/libs/type";
import { ProductsQueryKey, SearchProductsQueryKey } from "./type";

/**
 * 서버 사이드에서 쿼리 파라미터로 쿼리 키 생성
 */

export function productQueryKey(
  searchParams: ServerSideSearchParams
): ProductsQueryKey {
  const limit = getNumber(getString(searchParams["limit"]));
  const sortBy = getEnum(
    getString(searchParams["sortBy"]),
    PRODUCT_SORT_BY_VALUES
  );
  const order = getEnum(getString(searchParams["order"]), PRODUCT_ORDER_VALUES);
  return [PRODUCT_GET_PATHNAME, limit, sortBy, order] as const;
}

export function searchProductQueryKey(
  searchParams: ServerSideSearchParams
): SearchProductsQueryKey {
  const limit = getNumber(getString(searchParams["limit"]));
  const query = getString(searchParams["query"]);
  const sortBy = getEnum(
    getString(searchParams["sortBy"]),
    PRODUCT_SORT_BY_VALUES
  );
  const order = getEnum(getString(searchParams["order"]), PRODUCT_ORDER_VALUES);
  return [PRODUCT_SEARCH_PATHNAME, query, limit, sortBy, order] as const;
}
