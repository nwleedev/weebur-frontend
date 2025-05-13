/**
 * 랜덤 값이 특정 퍼센트 이상인지에 대해서 값을 반환합니다.
 * @param percentage 확률
 * @returns Boolean
 */
export function isOver(percentage: number) {
  return Math.random() < percentage;
}
