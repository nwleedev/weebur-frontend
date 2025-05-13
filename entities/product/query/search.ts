import { getSearchProducts, responseToQuery } from "@/features/product/api";
import { DEFAULT_PRODUCT_PAGE } from "@/features/product/data";
import { SearchProductsQueryKey } from "@/features/product/query-key/type";
import { GetNextPageParamFunction } from "@tanstack/react-query";

export type SearchProductsQueryProps = {
  queryKey: SearchProductsQueryKey;
  pageParam: number;
};

export async function searchProductsQuery(props: SearchProductsQueryProps) {
  const { queryKey, pageParam } = props;

  const [, query, limit, sortBy, order] = queryKey;
  const response = await getSearchProducts({
    query,
    limit,
    sortBy,
    order,
    page: pageParam,
  });
  const data = await response.json();
  return responseToQuery(data);
}

export const initialPageParam = DEFAULT_PRODUCT_PAGE;
export const getNextPageParam: GetNextPageParamFunction<
  number,
  Awaited<ReturnType<typeof searchProductsQuery>>
> = (...params) => {
  const [page, , pageParam] = params;
  if (page.skip >= page.total) {
    return null;
  }
  return pageParam + 1;
};
