import { convertToArrayOfPrices } from '../../tests/support/convertToArray';
import { sumElementsInArray } from '../../tests/support/sumElementsInArray';
import { BasePage } from './basePage';

class CartPage extends BasePage {
  constructor() {
    super('https://rbgeshop.org/cart', 'Your Shopping Cart');
  }

  get cartItemsTable() {
    return cy.get('.cart-items');
  }

  get priceElements() {
    return this.cartItemsTable.find('.small-hide .price');
  }

  get subtotalElement() {
    return cy.get('.totals__subtotal-value');
  }

  validateSumPricesInCart() {
    return this.priceElements
      .then((elements) => {
        const arrayOfPrices = convertToArrayOfPrices(cy.wrap(elements));

        return cy.wrap(arrayOfPrices);
      })
      .then((arrayOfPrices) => {
        const sumOfPrices = sumElementsInArray(arrayOfPrices);

        this.subtotalElement.should('include.text', sumOfPrices);
      });
  }
}

export default new CartPage();
