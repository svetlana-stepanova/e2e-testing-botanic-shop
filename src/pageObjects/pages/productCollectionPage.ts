import { FacetFilterComponent } from '../components/productCollectionPage/facetFilterComponent';
import { BasePage } from './basePage';
import { sortedAscending, sortedDescending } from '../../tests/support/sortingArray';
import { convertToArrayOfPrices, convertToArrayOfTitles } from '../../tests/support/convertToArray';
import { CartNotificationComponent } from '../components/productPage/cartNotificationComponent';

class ProductCollectionPage extends BasePage {
  facetFilter = new FacetFilterComponent();
  cartNotificationModalWindow = new CartNotificationComponent();

  constructor() {
    super('https://rbgeshop.org/collections', 'Collections');
  }

  get productList() {
    return cy.get('#product-grid');
  }

  get elementsProductPrices() {
    return cy.get('span.price-item--regular');
  }

  get elementsProductTitles() {
    return cy.get('.card__heading.h5 > a');
  }

  get productPrices() {
    return this.elementsProductPrices.then(($text) => $text.text());
  }

  get productTitles() {
    return this.elementsProductTitles.then(($text) => $text.text());
  }

  get emptyCollectionMessageElement() {
    return cy.get('#ProductGridContainer .collection--empty h2');
  }

  get resetFilterButton() {
    return cy.get('[id^="Facet-2"] .facets__reset');
  }

  get addToCartButtons() {
    return cy.get('button[id^="quick-add"]');
  }

  checkElementsSortedByPrice(sortTypeFunction: typeof sortedAscending | typeof sortedDescending) {
    return this.productPrices.then((elements) => {
      const arrayOfPrices = convertToArrayOfPrices(elements);

      cy.wrap(sortTypeFunction(arrayOfPrices));
    });
  }

  checkElementsSortedByAlphabet(sortTypeFunction: typeof sortedAscending | typeof sortedDescending) {
    return this.productTitles.then((elements) => {
      const arrayOfTitles = convertToArrayOfTitles(elements);

      cy.wrap(sortTypeFunction(arrayOfTitles));
    });
  }

  validateProductsFilteredByPrice(from: number, to: number) {
    this.productPrices.then((text) =>
      cy.wrap(convertToArrayOfPrices(text)).each((price) => cy.wrap(price).should('be.within', from, to))
    );
  }
}

export default new ProductCollectionPage();
