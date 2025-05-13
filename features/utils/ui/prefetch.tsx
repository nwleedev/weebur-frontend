import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryFunction,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export interface PrefetchBoundaryProps<
  Key extends readonly unknown[],
  Fn extends QueryFunction<unknown, Key, number>
> extends PropsWithChildren {
  queryKey: Key;
  queryFn: Fn;
  initialPageParam: number;
}

/**
 * 서버 사이드에서 데이터를 Prefetch할 수 있는 컴포넌트입니다.
 */
const PrefetchBoundary = async <
  Key extends readonly unknown[],
  Fn extends QueryFunction<unknown, Key, number>
>(
  props: PrefetchBoundaryProps<Key, Fn>
) => {
  const { queryKey, queryFn, initialPageParam, children } = props;

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default PrefetchBoundary;
