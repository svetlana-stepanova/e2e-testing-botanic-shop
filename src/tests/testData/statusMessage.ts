import { Product } from './productNames';

export const statusMessage = {
  noResults(product: Product) {
    return `No results found for “${product}”.`;
  },
};
