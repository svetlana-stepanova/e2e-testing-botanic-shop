import { convertToArrayOfPrices } from '../../tests/support/convertToArray';
import { sumElementsInArray } from '../../tests/support/sumElementsInArray';
import { Wait } from '../../tests/testData/waitOptions';
import { BasePage } from './basePage';

class CartPage extends BasePage {
  constructor() {
    super('/cart', 'Your Shopping Cart');
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

  get removeButtons() {
    return cy.get('cart-remove-button[id^="Remove"]');
  }

  get quantityInputs() {
    return cy.get('.quantity__input');
  }

  get emptyCartText() {
    return cy.get('.cart__empty-text');
  }

  get checkoutButton() {
    return cy.get('button#checkout');
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

  validateTotalChangesWithQuantity(quantity: string) {
    return this.priceElements
      .then((elements) => {
        const arrayOfPrice = convertToArrayOfPrices(cy.wrap(elements));

        return cy.wrap(arrayOfPrice);
      })
      .then((arrayOfPrice) => {
        return cy.wrap(Number([...arrayOfPrice]));
      })
      .then((initialPrice) => {
        this.quantityInputs.clear();
        this.quantityInputs.type(quantity).wait(Wait.Minim);
        this.priceElements
          .then((elements) => {
            const arrayOfPrice = convertToArrayOfPrices(cy.wrap(elements));

            return cy.wrap(arrayOfPrice);
          })
          .then((arrayOfPrice) => {
            return cy.wrap(Number([...arrayOfPrice]));
          })
          .then((changedPrice) => {
            cy.wrap(initialPrice * Number(quantity) === changedPrice).should('be.true');
          });
      });
  }
}

export default new CartPage();
