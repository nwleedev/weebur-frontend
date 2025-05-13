import { NextResponse } from "next/server";
import { VIEW_TYPE_KEY, ViewType } from "../../data";

export function setViewType(response: NextResponse, viewType: ViewType) {
  response.cookies.set(VIEW_TYPE_KEY, viewType);

  return response;
}
