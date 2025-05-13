import { getBoolean, getEnum, getNumber } from "./string";

/**
 * 검색 파라미터에서 문자열 값을 가져옵니다.
 * @param searchParams 검색 파라미터
 * @param key 키
 * @returns String | undefined
 */
export function getStringValue(searchParams: URLSearchParams, key: string) {
  const value = searchParams.get(key);
  if (!value) {
    return undefined;
  }

  return value;
}

/**
 * 쿼리 파라미터에서 숫자 값을 가져옵니다.
 * @param searchParams 쿼리 파라미터
 * @param key 키
 * @returns Number | undefined
 */
export function getNumberValue(searchParams: URLSearchParams, key: string) {
  const value = getStringValue(searchParams, key);
  return getNumber(value);
}

/**
 * 쿼리 파라미터에서 참, 거짓 값을 가져옵니다.
 * @param searchParams 쿼리 파라미터
 * @param key 키
 * @returns Boolean | undefined
 */
export function getBooleanValue(searchParams: URLSearchParams, key: string) {
  const value = getStringValue(searchParams, key);
  return getBoolean(value);
}

/**
 * 쿼리 파라미터에서 Enum 값을 가져옵니다.
 * @param searchParams 쿼리 파라미터
 * @param key 키
 * @param values Enum 값
 * @returns Enum
 */
export function getEnumValue<Keys extends readonly (string | null)[]>(
  searchParams: URLSearchParams,
  key: string,
  values: Keys
) {
  const value = getStringValue(searchParams, key);
  return getEnum(value, values);
}
