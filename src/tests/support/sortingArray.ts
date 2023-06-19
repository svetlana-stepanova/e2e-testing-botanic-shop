export function sortedAscending(initialArray: string[] | number[]) {
  const sortedArray = initialArray
    .slice()
    .sort((element: string | number, nextElement: string | number) => (element > nextElement ? 1 : -1));

  return JSON.stringify(initialArray) === JSON.stringify(sortedArray);
}

export function sortedDescending(initialArray: string[] | number[]) {
  const sortedArray = initialArray
    .slice()
    .sort((element: string | number, nextElement: string | number) => (element > nextElement ? -1 : 1));

  return JSON.stringify(initialArray) === JSON.stringify(sortedArray);
}
