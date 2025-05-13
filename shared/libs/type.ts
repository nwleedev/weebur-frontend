/**
 * Next.js 서버 컴포넌트에서 사용할 수 있는 쿼리 파라미터 타입
 */
export type ServerSideSearchParams = {
  [key: string]: string | string[] | undefined;
};

/**
 * Next.js 서버 컴포넌트에서 사용할 수 있는 페이지 내 파라미터 타입
 */
export type PageParams = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<ServerSideSearchParams>;
};
