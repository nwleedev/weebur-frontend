import { getProductsQuery } from "@/entities/product/query/get";
import ProductSearch from "@/entities/product/ui/Search";
import { DEFAULT_PRODUCT_PAGE } from "@/features/product/data";
import { productQueryKey } from "@/features/product/query-key/server";
import PrefetchBoundary from "@/features/utils/ui/prefetch";
import { VIEW_TYPE_KEY, ViewType } from "@/features/view/data";
import { PageParams } from "@/shared/libs/type";
import ProductWidget from "@/widgets/product/Widget";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function Home({ searchParams }: PageParams) {
  const cookieStore = cookies();
  const viewType = cookieStore.get(VIEW_TYPE_KEY)?.value as ViewType;
  const queryKey = productQueryKey(await searchParams);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full h-full gap-y-4 max-w-[1200px] p-4">
        <div className="w-full flex">
          <ProductSearch />
        </div>
        <div className="w-full max-w-[1200px] h-full flex flex-col items-center">
          <Suspense>
            <PrefetchBoundary
              queryKey={queryKey}
              queryFn={getProductsQuery}
              initialPageParam={DEFAULT_PRODUCT_PAGE}
            >
              <ProductWidget viewType={viewType} />
            </PrefetchBoundary>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
