export function convertToArrayOfPrices(price: Cypress.Chainable<JQuery<HTMLElement>>) {
  const arrayOfPrices: number[] = [];

  price.each((element) => arrayOfPrices.push(Number(element.text().replace(/(£|GBP|From)/gi, ''))));

  return arrayOfPrices;
}

export function convertToArrayOfTitles(titles: string) {
  return titles
    .trim()
    .split('\n            \n')
    .map((el) => el.trim());
}
