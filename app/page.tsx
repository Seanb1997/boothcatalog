import CatalogView from '../components/CatalogView';
import { mockProducts } from '../data/mockData';
import { getProducts, getSiteSettings } from '../lib/queries';

export default async function Home() {
  let products = mockProducts;

  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const sanityProducts = await getProducts();
      if (sanityProducts.length > 0) products = sanityProducts;
    } catch {
      // Sanity not reachable — fall back to local mock data
    }
  }

  const siteSettings = await getSiteSettings();

  return <CatalogView products={products} siteSettings={siteSettings} />;
}
