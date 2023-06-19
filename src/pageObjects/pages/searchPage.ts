import { Product } from '../../tests/testData/productNames';
import { BasePage } from './basePage';

class SearchPage extends BasePage {
  constructor() {
    super('https://rbgeshop.org/search', 'Search');
  }

  get searchInput() {
    return cy.get('#Search-In-Template');
  }

  get searchButton() {
    return cy.get('button[type="Submit"].search__button');
  }

  get clearSearchTermButton() {
    return cy.get('.template-search__search button.reset__button');
  }

  get firstRowOfResults() {
    return cy.get('a[id^="CardLink"]').invoke('slice', 0, 4);
  }

  get noResultFoundElement() {
    return cy.get('p[role="status"]');
  }

  findProduct(product: Product) {
    this.searchInput.type(product);
    this.searchButton.click();
  }

  validateFirstRowSearchResults(product: Product) {
    return this.firstRowOfResults.each((productTitle) =>
      cy.wrap(productTitle.text().toUpperCase()).should('include', product)
    );
  }
}

export default new SearchPage();
