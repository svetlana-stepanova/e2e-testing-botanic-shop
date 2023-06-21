import homePage from '../../pageObjects/pages/homePage';
import productCollectionPage from '../../pageObjects/pages/productCollectionPage';
import { sortedAscending, sortedDescending } from '../support/sortingArray';
import { SortProductOptions } from '../testData/sortProductOptions';
import { Wait } from '../testData/waitOptions';

describe('Sort product collection', function () {
  beforeEach(function () {
    homePage.open();
    homePage.header.getRandomSubcategory();
  });

  it('Should sort products by price from low to high', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.PriceAscending).wait(Wait.Minim);

    productCollectionPage
      .checkElementsSortedByPrice(sortedAscending, productCollectionPage.productPrices)
      .should('be.true');
  });

  it('Should sort products by price from high to low', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.PriceDescending).wait(Wait.Minim);

    productCollectionPage
      .checkElementsSortedByPrice(sortedDescending, productCollectionPage.productPrices)
      .should('be.true');
  });

  it('Should sort products by alphabet from A to Z', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.AlphabetAscending).wait(Wait.Minim);

    productCollectionPage
      .checkElementsSortedByAlphabet(sortedAscending, productCollectionPage.productTitles)
      .should('be.true');
  });

  it('Should sort products by alphabet from Z to A', function () {
    productCollectionPage.facetFilter.sortByOptions(SortProductOptions.AlphabetDescending).wait(Wait.Minim);

    productCollectionPage
      .checkElementsSortedByAlphabet(sortedDescending, productCollectionPage.productTitles)
      .should('be.true');
  });
});
