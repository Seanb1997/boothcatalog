'use client';

import { useState } from 'react';
import { Product, CustomizationOption } from '../types';
import SafeImage from './SafeImage';
import { useCartStore } from '../lib/cartStore';

interface Props {
  product: Product;
  onClose: () => void;
}

export default function CustomizationModal({ product, onClose }: Props) {
  const [selected, setSelected] = useState<CustomizationOption[]>([]);
  const addItem = useCartStore(state => state.addItem);

  const toggle = (opt: CustomizationOption) =>
    setSelected(prev =>
      prev.find(o => o.id === opt.id)
        ? prev.filter(o => o.id !== opt.id)
        : [...prev, opt]
    );

  const isSelected = (id: string) => selected.some(o => o.id === id);

  const handleAdd = () => {
    addItem(product, selected);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl">

        {/* Close button */}
        <div className="flex justify-end p-4 pb-0">
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex gap-0 px-6 pb-6">

          {/* ── Left column: product info ── */}
          <div className="w-48 shrink-0 mr-8">
            {/* Portrait product image */}
            <div className="w-full aspect-[3/4] rounded overflow-hidden bg-gray-100 mb-4">
              <SafeImage
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-2">{product.name}</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">{product.description}</p>
            <p className="text-jnj-red font-semibold text-sm">
              {product.price.toFixed(2)} per {product.priceType}
            </p>
            <p className="text-xs text-gray-400 mt-1">{product.stockQuantity} Available</p>
          </div>

          {/* ── Right column: add-ons ── */}
          <div className="flex-1 flex flex-col">
            <h2 className="font-bold text-sm text-gray-900 mb-5 uppercase tracking-wide">
              Customisation options available
            </h2>

            {/* 3-column add-on cards */}
            <div className="grid grid-cols-3 gap-4 flex-1">
              {product.customizationOptions?.map(opt => (
                <div
                  key={opt.id}
                  className={`border rounded overflow-hidden flex flex-col transition-colors ${
                    isSelected(opt.id) ? 'border-jnj-red' : 'border-gray-200'
                  }`}
                >
                  {/* Add-on image */}
                  <div className="w-full aspect-square bg-gray-50">
                    <SafeImage
                      src={opt.imageUrl}
                      alt={opt.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Add-on info */}
                  <div className="p-3 flex flex-col flex-1">
                    <p className="font-semibold text-xs text-gray-900 mb-1">{opt.name}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3 flex-1 line-clamp-3">
                      {opt.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-jnj-red text-xs font-semibold">
                        +{opt.additionalCost.toFixed(2)}
                      </span>
                      <button
                        onClick={() => toggle(opt)}
                        className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                          isSelected(opt.id)
                            ? 'bg-jnj-red text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {isSelected(opt.id) ? 'Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add to booth button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={handleAdd}
                className="px-8 py-3 bg-jnj-red text-white text-sm font-semibold rounded hover:bg-jnj-red-dark transition-colors"
              >
                Add to booth
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
