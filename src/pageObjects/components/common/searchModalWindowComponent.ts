import { Product } from '../../../tests/testData/productNames';
import { BaseComponent } from '../baseComponent';

export class SearchModalWindowComponent extends BaseComponent {
  constructor() {
    super('.search-modal__content');
  }

  get searchInput() {
    return this.rootElement.find('#Search-In-Modal');
  }

  get searchButton() {
    return this.rootElement.find('.search__button');
  }

  findProduct(product: Product) {
    this.searchInput.type(product);
    this.searchButton.click();
  }
}
