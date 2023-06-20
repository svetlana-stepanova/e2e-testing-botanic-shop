import { Product } from './productNames';

export const statusMessage = {
  noResults(product: Product) {
    return `No results found for “${product}”.`;
  },
  get noProducts() {
    return 'No products found';
  },
};
