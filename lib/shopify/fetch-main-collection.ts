// lib/shopify/fetchMainCollectionProducts.ts
import { getCollectionProducts } from './index';

export async function fetchMainCollectionProducts() {
  try {
    const products = await getCollectionProducts({ collection: 'main' });
    return products;
  } catch (error) {
    console.error('Error fetching products from main collection:', error);
    return [];
  }
}
