import { SortProductOptions } from '../../../tests/testData/sortProductOptions';
import { BaseComponent } from '../baseComponent';

export class FacetFilterComponent extends BaseComponent {
  constructor() {
    super('#FacetFiltersForm');
  }

  get filterByPriceButton() {
    return cy.get('[id^="Details-2"] > summary');
  }

  sortByOptions(item: SortProductOptions) {
    const options = {
      PRICEASCENDING: 'price-ascending',
      PRICEDESCENDING: 'price-descending',
      ALPHABETASCENDING: 'title-ascending',
      ALPHABETDESCENDING: 'title-descending',
    };

    return cy.get('#SortBy').select(options[item]);
  }
}
