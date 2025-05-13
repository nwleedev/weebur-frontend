import {
  DEFAULT_PRODUCT_PAGE,
  PRODUCT_API_URL,
  PRODUCT_GET_PATHNAME,
  PRODUCT_ORDER_DESC,
  PRODUCT_SEARCH_PATHNAME,
  PRODUCT_SIZE,
  PRODUCT_SORT_BY_NULL,
} from "./data";
import { ProductModel, ProductResponse, ProductResponseItem } from "./model";
import { GetProductProps, GetSearchProductProps } from "./prop";

export function getProducts({
  limit = PRODUCT_SIZE,
  page = DEFAULT_PRODUCT_PAGE,
  sortBy = PRODUCT_SORT_BY_NULL,
  order = PRODUCT_ORDER_DESC,
}: GetProductProps) {
  const url = new URL(PRODUCT_GET_PATHNAME, PRODUCT_API_URL);
  const skip = page * limit;
  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("skip", skip.toString());
  if (sortBy) {
    url.searchParams.set("sortBy", sortBy);
  }
  url.searchParams.set("order", order);
  return fetch(url);
}

export function getSearchProducts({
  query = "",
  ...props
}: GetSearchProductProps) {
  const url = new URL(PRODUCT_SEARCH_PATHNAME, PRODUCT_API_URL);
  if (query) {
    url.searchParams.set("q", query);
  }
  const {
    limit = PRODUCT_SIZE,
    page = DEFAULT_PRODUCT_PAGE,
    sortBy = PRODUCT_SORT_BY_NULL,
    order = PRODUCT_ORDER_DESC,
  } = props;
  const skip = page * limit;
  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("skip", skip.toString());
  if (sortBy) {
    url.searchParams.set("sortBy", sortBy);
  }
  url.searchParams.set("order", order);
  return fetch(url);
}

export function responseToModel(response: ProductResponseItem): ProductModel {
  return {
    id: response.id,
    title: response.title,
    description: response.description,
    rating: response.rating,
    reviews: response.reviews.length,
    thumbnail: response.thumbnail,
  };
}
export function responseToQuery(response: ProductResponse) {
  const products = response.products.map(responseToModel);
  return {
    products,
    total: response.total,
    skip: response.skip,
    limit: response.limit,
  };
}
