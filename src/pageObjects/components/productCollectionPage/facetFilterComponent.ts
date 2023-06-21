import { FilterByAvailabilityOptions, SortProductOptions } from '../../../tests/testData/sort,filterProductOptions';
import { BaseComponent } from '../baseComponent';

export class FacetFilterComponent extends BaseComponent {
  constructor() {
    super('#FacetFiltersForm');
  }

  get filterByPriceButton() {
    return cy.get('[id^="Details-2"] > summary');
  }

  get filterByAvailabilityButton() {
    return cy.get('[id^="Details-1"] > summary');
  }

  filterByAvailabilityCheckbox(item: FilterByAvailabilityOptions) {
    const options = {
      INSTOCK: '[id="Filter-filter.v.availability-1"]',
      OUTOFSTOCK: '[id="Filter-filter.v.availability-2"]',
    };

    return cy.get(options[item]);
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

  get filterByPriceFromInput() {
    return this.rootElement.find('#Filter-Price-GTE');
  }

  get filterByPriceToInput() {
    return this.rootElement.find('#Filter-Price-LTE');
  }
}
