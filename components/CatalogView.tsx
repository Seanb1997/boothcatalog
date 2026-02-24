'use client';

import { useState } from 'react';
import Header from './Header';
import FilterBar from './FilterBar';
import ProductGrid from './ProductGrid';
import { Product, FilterOptions, SiteSettings } from '../types';

export default function CatalogView({ products, siteSettings }: { products: Product[]; siteSettings: SiteSettings }) {
  const [filters, setFilters] = useState<FilterOptions>({});

  const filtered = products.filter(p => {
    if (filters.type?.length && !filters.type.some(t => t.toLowerCase().startsWith(p.type))) return false;
    if (filters.size?.length && (!p.size || !filters.size.includes(p.size))) return false;
    if (
      filters.feature?.length &&
      (!p.category || !filters.feature.map(f => f.toLowerCase()).includes(p.category.toLowerCase()))
    )
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header siteSettings={siteSettings} />
      <FilterBar filters={filters} onFilterChange={setFilters} />
      <ProductGrid products={filtered} />
    </div>
  );
}
