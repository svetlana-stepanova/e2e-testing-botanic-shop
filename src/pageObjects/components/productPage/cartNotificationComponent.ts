import { BaseComponent } from '../baseComponent';

export class CartNotificationComponent extends BaseComponent {
  constructor() {
    super('#cart-notification');
  }

  get viewMyCartButton() {
    return this.rootElement.find('#cart-notification-button');
  }
}
