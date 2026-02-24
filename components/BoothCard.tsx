'use client';

import { useState } from 'react';
import { Product } from '../types';
import SafeImage from './SafeImage';
import CustomizationModal from './CustomizationModal';
import { useCartStore } from '../lib/cartStore';

export default function BoothCard({ product }: { product: Product }) {
  const [showModal, setShowModal] = useState(false);
  const addItem = useCartStore(s => s.addItem);

  // Pad to exactly 4 slots with nulls for empty thumbnail cells
  const thumbs = [...(product.additionalImages ?? []), null, null, null, null].slice(0, 4);

  const handleClick = () => {
    if (product.isCustomizable && product.customizationOptions?.length) {
      setShowModal(true);
    } else {
      addItem(product);
    }
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow mb-6">

        {/* Image row: main (left 2/3) + 2×2 thumbnails (right 1/3) */}
        <div className="flex h-64">

          {/* Main image */}
          <div className="flex-[2] overflow-hidden bg-gray-100">
            <SafeImage src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* 2×2 thumbnail grid */}
          <div className="flex-1 grid grid-cols-2 gap-px bg-gray-200">
            {thumbs.map((src, i) => (
              <div key={i} className="overflow-hidden bg-gray-100">
                {src
                  ? <SafeImage src={src} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
                  : <div className="w-full h-full bg-gray-100" />}
              </div>
            ))}
          </div>

        </div>

        {/* Info row */}
        <div className="p-5">
          <h3 className="font-bold text-base text-gray-900 mb-2">{product.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">{product.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-jnj-red font-semibold text-sm">
                {product.price.toFixed(2)} per {product.priceType}
              </span>
              <span className="text-xs text-gray-400">{product.stockQuantity} Available</span>
            </div>

            {product.isCustomizable ? (
              <button
                onClick={handleClick}
                className="px-6 py-2.5 bg-jnj-gray text-white text-xs font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Customisation options available
              </button>
            ) : (
              <button
                onClick={handleClick}
                className="px-6 py-2.5 bg-jnj-red text-white text-xs font-semibold rounded hover:bg-jnj-red-dark transition-colors"
              >
                Add to booth
              </button>
            )}
          </div>
        </div>

      </div>

      {showModal && <CustomizationModal product={product} onClose={() => setShowModal(false)} />}
    </>
  );
}
