import { CartNotificationComponent } from '../components/productPage/cartNotificationComponent';
import { BasePage } from './basePage';

class ProductPage extends BasePage {
  cartNotificationModalWindow = new CartNotificationComponent();

  constructor() {
    super('https://rbgeshop.org/products/', '');
  }

  get addToCartButton() {
    return cy.get('button[id^="ProductSubmitButton"]');
  }
}

export default new ProductPage();
