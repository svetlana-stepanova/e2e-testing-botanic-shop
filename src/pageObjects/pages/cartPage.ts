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
}

export default new CartPage();
