'use client';

import { Product } from '../types';
import ProductCard from './ProductCard';
import BoothCard from './BoothCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  const booths = products.filter(p => p.type === 'booth');
  const others = products.filter(p => p.type !== 'booth');

  if (products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 text-sm">No items match your filters.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Booth-type items — full-width horizontal cards */}
      {booths.length > 0 && (
        <div className="mb-4">
          {booths.map(product => (
            <BoothCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Structures / Furniture — 3-column grid */}
      {others.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-1 mt-10">
        {[1, 2, 3, 4].map(n => (
          <button
            key={n}
            className={`w-8 h-8 text-sm rounded transition-colors ${
              n === 1
                ? 'bg-gray-900 text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

    </div>
  );
}
