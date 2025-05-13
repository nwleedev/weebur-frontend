import { getProducts, responseToQuery } from "@/features/product/api";
import { DEFAULT_PRODUCT_PAGE } from "@/features/product/data";
import { ProductsQueryKey } from "@/features/product/query-key/type";
import { GetNextPageParamFunction } from "@tanstack/react-query";

export type GetProductsQueryProps = {
  queryKey: ProductsQueryKey;
  pageParam: number;
};

export async function getProductsQuery(props: GetProductsQueryProps) {
  const { queryKey, pageParam } = props;

  const [, limit, sortBy, order] = queryKey;
  const response = await getProducts({
    limit,
    sortBy,
    order,
    page: pageParam,
  });
  const data = await response.json();
  const query = responseToQuery(data);
  return query;
}

export const initialPageParam = DEFAULT_PRODUCT_PAGE;
export const getNextPageParam: GetNextPageParamFunction<
  number,
  Awaited<ReturnType<typeof getProductsQuery>>
> = (...params) => {
  const [page, , pageParam] = params;
  if (page.skip >= page.total) {
    return null;
  }
  return pageParam + 1;
};
