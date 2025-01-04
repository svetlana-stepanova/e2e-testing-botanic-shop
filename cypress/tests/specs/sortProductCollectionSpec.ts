import { homePage, productCollectionPage } from '../../pageObjects/pages/index';
import { sortedAscending, sortedDescending } from '../support/sortingArray';
import { SortProductOptions } from '../testData/sort,filterProductOptions';
import { Wait } from '../testData/waitOptions';

describe('Sort product collection', function () {
  beforeEach(function () {
    homePage.open();
    homePage.header.getRandomSubcategory();
  });

  it('Should sort products by price from low to high', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.PriceAscending).wait(Wait.Minim);

    productCollectionPage.checkProductsSortedByPrice(sortedAscending).should('be.true');
  });

  it('Should sort products by price from high to low', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.PriceDescending).wait(Wait.Minim);

    productCollectionPage.checkProductsSortedByPrice(sortedDescending).should('be.true');
  });

  it('Should sort products by alphabet from A to Z', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.AlphabetAscending).wait(Wait.Minim);

    productCollectionPage.checkProductsSortedByAlphabet(sortedAscending).should('be.true');
  });

  it('Should sort products by alphabet from Z to A', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.AlphabetDescending).wait(Wait.Minim);

    productCollectionPage.checkProductsSortedByAlphabet(sortedDescending).should('be.true');
  });
});
