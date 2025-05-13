import { InfiniteData } from "@tanstack/react-query";

import { UseSuspenseInfiniteQueryResult } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { InfinitePage } from "../types/page";

export interface NoNextPageProps<T extends InfinitePage>
  extends PropsWithChildren {
  query: UseSuspenseInfiniteQueryResult<InfiniteData<T, unknown>, Error>;
  children: JSX.Element;
}

/**
 * 추가적인 데이터가 없을 경우 렌더링됩니다.
 */
const NoNextPage = <T extends InfinitePage>(props: NoNextPageProps<T>) => {
  const { query } = props;
  const { data, hasNextPage } = query;

  const hasNoPage = data.pages.at(0)?.total === 0;

  if (hasNextPage) {
    return null;
  }
  if (hasNoPage) {
    return null;
  }

  return props.children;
};

export default NoNextPage;
