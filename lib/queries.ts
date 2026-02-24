import { client } from './sanityClient';
import { Product, SiteSettings } from '../types';

const productFields = `
  "id": _id,
  name,
  type,
  size,
  category,
  description,
  price,
  priceType,
  stockQuantity,
  isCustomizable,
  "imageUrl": image.asset->url,
  "additionalImages": additionalImages[].asset->url,
  customizationOptions[] {
    "id": _key,
    name,
    description,
    additionalCost,
    "imageUrl": image.asset->url
  },
  status,
  tags
`;

export async function getProducts(): Promise<Product[]> {
  if (!client) return [];
  return client.fetch(
    `*[_type == "product"] | order(_createdAt asc) { ${productFields} }`
  );
}

const defaultSiteSettings: SiteSettings = {
  siteName: 'J&J Booth Builder',
  navBoothsLabel: 'Booths',
  navStructuresLabel: 'Structures',
  navFurnitureLabel: 'Furniture',
};

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!client) return defaultSiteSettings;
  try {
    const settings = await client.fetch(
      `*[_type == "siteSettings" && _id == "siteSettings"][0] {
        siteName,
        navBoothsLabel,
        navStructuresLabel,
        navFurnitureLabel
      }`
    );
    if (!settings) return defaultSiteSettings;
    return {
      siteName: settings.siteName || defaultSiteSettings.siteName,
      navBoothsLabel: settings.navBoothsLabel || defaultSiteSettings.navBoothsLabel,
      navStructuresLabel: settings.navStructuresLabel || defaultSiteSettings.navStructuresLabel,
      navFurnitureLabel: settings.navFurnitureLabel || defaultSiteSettings.navFurnitureLabel,
    };
  } catch {
    return defaultSiteSettings;
  }
}
