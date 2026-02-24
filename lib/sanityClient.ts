import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

// Only instantiate when credentials are present — avoids throwing at module load time
export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  : null;

export function urlFor(source: SanityImageSource) {
  if (!client) throw new Error('Sanity client not configured');
  return imageUrlBuilder(client).image(source).auto('format').url();
}
