'use client';

import { useState } from 'react';
import { Product } from '../types';
import SafeImage from './SafeImage';
import CustomizationModal from './CustomizationModal';
import { useCartStore } from '../lib/cartStore';

export default function ProductCard({ product }: { product: Product }) {
  const [showModal, setShowModal] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const handleClick = () => {
    if (product.isCustomizable && product.customizationOptions?.length) {
      setShowModal(true);
    } else {
      addItem(product);
    }
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded overflow-hidden flex flex-col hover:shadow-md transition-shadow">

        {/* Product image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
          <SafeImage
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-4">
          <h3 className="font-bold text-sm text-gray-900 mb-2">{product.name}</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-4">
            {product.description}
          </p>

          <div className="flex justify-between items-center text-xs mb-4">
            <span className="text-jnj-red font-semibold text-sm">
              {product.price.toFixed(2)} per {product.priceType}
            </span>
            <span className="text-gray-400">{product.stockQuantity} Available</span>
          </div>

          {/* Single CTA — dark if customisable, red if not */}
          {product.isCustomizable ? (
            <button
              onClick={handleClick}
              className="w-full py-2.5 bg-jnj-gray text-white text-xs font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Customisation options available
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="w-full py-2.5 bg-jnj-red text-white text-xs font-semibold rounded hover:bg-jnj-red-dark transition-colors"
            >
              Add to booth
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <CustomizationModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
