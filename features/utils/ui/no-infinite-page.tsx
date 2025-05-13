import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { InfinitePage } from "../types/page";

export interface NoInfinitePageProps<T extends InfinitePage>
  extends PropsWithChildren {
  query: UseSuspenseInfiniteQueryResult<InfiniteData<T, unknown>, Error>;
  children: JSX.Element;
}

/**
 * 데이터가 없을 경우 렌더링됩니다.
 */
const NoInfinitePage = <T extends InfinitePage>(
  props: NoInfinitePageProps<T>
) => {
  const { query } = props;
  const { data, isLoading } = query;

  const hasPage = data.pages.at(0)?.total !== 0;

  if (isLoading) {
    return null;
  }

  if (hasPage) {
    return null;
  }

  return props.children;
};

export default NoInfinitePage;
