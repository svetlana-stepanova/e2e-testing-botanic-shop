import { getRandomElementOfArray } from '../../../tests/support/getRandomElementOfArray';
import { BaseComponent } from '../baseComponent';

export class HeaderComponent extends BaseComponent {
  constructor() {
    super('.header--top-left');
  }

  get searchButton() {
    return this.rootElement.find('.header__icon--search ');
  }

  get loginButton() {
    return this.rootElement.find('.header__icons .icon-account');
  }

  get cartButton() {
    return this.rootElement.find('#cart-icon-bubble');
  }

  get categoryList() {
    return this.rootElement.find('.header__menu-item');
  }

  getSubcategoryList(category: string) {
    return cy.get(category).parent().find('.mega-menu__link--level-2[href^="/collections"]');
  }

  getRandomSubcategory() {
    this.categoryList.then((list) => {
      const category = getRandomElementOfArray(list);

      this.rootElement.find(category).click();

      if (category.hasAttribute('aria-expanded')) {
        this.getSubcategoryList(category).then((list) => {
          const subcategory = getRandomElementOfArray(list);

          this.rootElement.find(subcategory).click();
        });
      }
    });
  }
}
