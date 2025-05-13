import { VIEW_TYPE_KEY } from "@/features/view/data";
import { cookies } from "next/headers";

export function getViewType() {
  const cookieStore = cookies();
  const viewType = cookieStore.get(VIEW_TYPE_KEY);
  if (!viewType) {
    return undefined;
  }
  return viewType.value;
}
