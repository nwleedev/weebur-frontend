import { InfiniteData } from "@tanstack/react-query";

import { UseSuspenseInfiniteQueryResult } from "@tanstack/react-query";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { cloneElement, PropsWithChildren, useEffect } from "react";

export interface FetchNextProps<T> extends PropsWithChildren {
  query: UseSuspenseInfiniteQueryResult<InfiniteData<T, unknown>, Error>;
  children: JSX.Element;
}

/**
 * 데이터를 더 불러올 수 있는지 판단하고 추가 페이지를 불러오는 컴포넌트입니다.
 * 여러 쿼리를 지원
 */
const FetchNext = <T,>(props: FetchNextProps<T>) => {
  const { query } = props;
  const { fetchNextPage, hasNextPage, isFetchingNextPage } = query;
  const [ref, entry] = useIntersectionObserver();

  useEffect(() => {
    if (entry && entry.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, hasNextPage]);

  const children = cloneElement(props.children, {
    ref: ref,
  });

  if (isFetchingNextPage) {
    return props.children;
  } else {
    return children;
  }
};

export default FetchNext;
