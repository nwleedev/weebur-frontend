/**
 * 주어진 변수에서 문자열 값인지 판별합니다.
 * @param value 값
 * @returns String | undefined
 */
export function getString(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === undefined) return undefined;
  return undefined;
}

/**
 * 주어진 문자열이 숫자 값인지 판별합니다.
 * @param value 문자열
 * @returns Number | undefined
 */
export function getNumber(value: string | undefined) {
  if (!value) return undefined;
  const number = Number(value);
  if (isNaN(number)) return undefined;
  return number;
}

/**
 * 주어진 문자열이 Enum 값인지 판별합니다.
 * @param value 문자열
 * @param values Enum 값
 * @returns Enum
 */
export function getEnum<T extends readonly (string | null)[]>(
  value: string | undefined,
  values: T
) {
  if (!value) return undefined;
  if (!values.includes(value)) return undefined;
  return value as T[number];
}

/**
 * 주어진 문자열이 참, 거짓 값인지 판별합니다.
 * @param value 문자열
 * @returns Boolean | undefined
 */
export function getBoolean(value: string | undefined) {
  if (!value) return undefined;
  if (value === "true") return true;
  if (value === "false") return false;
  return undefined;
}
