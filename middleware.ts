import { NextRequest, NextResponse } from "next/server";
import { getViewType } from "./features/view/cookie/get/server";
import { setViewType } from "./features/view/cookie/set/response";
import { VIEW_TYPE_GRID, VIEW_TYPE_LIST } from "./features/view/data";
import { isOver } from "./shared/libs/random";
export default async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const viewType = getViewType();
  if (!viewType) {
    const newViewType = isOver(0.5) ? VIEW_TYPE_GRID : VIEW_TYPE_LIST;
    response = setViewType(response, newViewType);
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!api|static|manifest.webmanifest|sw.js|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
