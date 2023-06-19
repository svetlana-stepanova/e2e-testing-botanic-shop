export function convertToArrayOfPrices(prices: string) {
  return prices
    .replace(/(£|GBP)/g, '')
    .trim()
    .split('\n      \n')
    .map(Number);
}

export function convertToArrayOfTitles(titles: string) {
  return titles
    .trim()
    .split('\n            \n')
    .map((el) => el.trim());
}
