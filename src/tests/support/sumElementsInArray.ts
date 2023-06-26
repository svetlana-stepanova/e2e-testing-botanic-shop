export function sumElementsInArray(array: number[]) {
  return Number(array.reduce((sum, element) => sum + element, 0).toFixed(2));
}
