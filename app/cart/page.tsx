'use client';

import Link from 'next/link';
import { useCartStore } from '../../lib/cartStore';
import Header from '../../components/Header';
import SafeImage from '../../components/SafeImage';

export default function CartPage() {
  const items = useCartStore(state => state.items);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeItem = useCartStore(state => state.removeItem);
  const total = useCartStore(state => state.getTotal());

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-gray-400 text-sm mb-4">Your booth is empty.</p>
          <Link href="/" className="text-jnj-red text-sm hover:underline">
            ← Continue browsing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Booth</h1>

        {/* Cart item rows */}
        <div className="space-y-px mb-10">
          {items.map(item => (
            <div
              key={item.product.id}
              className="bg-white border border-gray-200 flex items-start gap-5 p-5"
            >
              {/* Thumbnail */}
              <div className="w-20 h-20 shrink-0 rounded overflow-hidden bg-gray-100">
                <SafeImage
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name + description */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-gray-900 mb-1">{item.product.name}</p>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                  {item.product.description}
                </p>

                {/* Quantity controls */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-gray-200 rounded text-xs">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2.5 py-1 hover:bg-gray-50 text-gray-600"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 border-x border-gray-200 text-gray-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2.5 py-1 hover:bg-gray-50 text-gray-600"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-xs text-gray-400 hover:text-jnj-red transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Pricing stack (right-aligned) */}
              <div className="text-right shrink-0">
                <p className="text-xs text-gray-400 mb-0.5">
                  {item.product.price.toFixed(2)} per {item.product.priceType}
                </p>
                <p className="text-xs text-gray-400 mb-1">
                  {item.quantity}× quantity
                </p>
                <p className="text-base font-bold text-jnj-red">
                  {item.lineTotal.toFixed(2)} total
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xs text-jnj-red hover:underline">
            ← Continue browsing
          </Link>

          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-0.5">Total</p>
              <p className="text-2xl font-bold text-jnj-red">{total.toFixed(2)}</p>
            </div>
            <button className="px-8 py-3 bg-jnj-red text-white text-sm font-semibold rounded hover:bg-jnj-red-dark transition-colors">
              Place order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
