"use client";

import {
  getNextPageParam,
  getProductsQuery,
} from "@/entities/product/query/get";
import ProductGrid from "@/entities/product/ui/Grid";
import ProductList from "@/entities/product/ui/List";
import { DEFAULT_PRODUCT_PAGE } from "@/features/product/data";
import { productQueryKey } from "@/features/product/query-key/client";
import FetchNext from "@/features/utils/ui/fetch-next";
import NoInfinitePage from "@/features/utils/ui/no-infinite-page";
import NoNextPage from "@/features/utils/ui/no-next-page";
import { VIEW_TYPE_GRID, VIEW_TYPE_LIST, ViewType } from "@/features/view/data";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export interface ProductWidgetProps {
  viewType: ViewType;
}

const ProductWidget = (props: ProductWidgetProps) => {
  const { viewType } = props;
  const searchParams = useSearchParams();
  const query = useSuspenseInfiniteQuery({
    queryKey: productQueryKey(searchParams),
    queryFn: getProductsQuery,
    initialPageParam: DEFAULT_PRODUCT_PAGE,
    getNextPageParam: getNextPageParam,
  });
  const { data } = query;

  return (
    <div className="w-full min-h-full flex flex-col items-center">
      {viewType === VIEW_TYPE_GRID && (
        <ProductGrid products={data.pages.flatMap((page) => page.products)} />
      )}
      {viewType === VIEW_TYPE_LIST && (
        <ProductList products={data.pages.flatMap((page) => page.products)} />
      )}
      <FetchNext query={query}>
        <div className="h-px w-full bg-transparent" />
      </FetchNext>
      <NoNextPage query={query}>
        <div className="flex items-center w-full p-2">
          <div className="w-full flex justify-center items-center min-h-20">
            <p className="text-sm text-gray-500">더 이상 불러올 수 없습니다.</p>
          </div>
        </div>
      </NoNextPage>
      <NoInfinitePage query={query}>
        <div className="flex items-center w-full p-2">
          <div className="w-full flex justify-center items-center min-h-20">
            <p className="text-sm text-gray-500">일치하는 결과가 없습니다.</p>
          </div>
        </div>
      </NoInfinitePage>
    </div>
  );
};

export default ProductWidget;
