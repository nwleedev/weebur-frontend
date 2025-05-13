"use client";

import { PRODUCT_SORT_BY_RATING } from "@/features/product/data";
import Search from "@/features/search/ui";
import { getStringValue } from "@/shared/libs/search-params";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

const ProductSearch = () => {
  const searchParams = useSearchParams();
  const defaultQuery = getStringValue(searchParams, "query");
  const defaultChecked =
    getStringValue(searchParams, "sortBy") === PRODUCT_SORT_BY_RATING;
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();
  const onSubmit = (
    event: FormEvent<HTMLFormElement>,
    data: { query: string; checked: boolean }
  ) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.append("sortBy", data.checked ? PRODUCT_SORT_BY_RATING : "");
    searchParams.append("query", data.query);
    router.push(`/search?${searchParams.toString()}`);
  };
  const componentKey = `${pathname}:${searchParams.toString()}`;
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="w-full max-w-xl">
        <Search
          key={componentKey}
          defaultQuery={defaultQuery}
          defaultChecked={defaultChecked}
          onSubmit={onSubmit}
          className="flex items-center"
        >
          {!isHomePage && (
            <Search.Back
              className="mr-2 px-4 py-1 rounded-full bg-black text-white font-semibold hover:bg-primary-600 transition-colors"
              onClick={() => router.back()}
            />
          )}
          <Search.Input
            className="flex-1 bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:outline-none shadow-none focus:ring-0 text-base placeholder-gray-400 py-0 px-2"
            placeholder="검색어를 입력하세요."
          />
          <Search.Toggle label="별점 내림차순" />
          <Search.Button
            text="검색"
            className="ml-2 px-4 py-1 rounded-full bg-black text-white font-semibold hover:bg-primary-600 transition-colors"
          />
        </Search>
      </div>
    </div>
  );
};

export default ProductSearch;
