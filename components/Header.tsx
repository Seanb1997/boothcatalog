'use client';

import Link from 'next/link';
import { BsBasket2 } from 'react-icons/bs';
import { useCartStore } from '../lib/cartStore';
import { SiteSettings } from '../types';

const defaultSettings: SiteSettings = {
  siteName: 'J&J Booth Builder',
  navBoothsLabel: 'Booths',
  navStructuresLabel: 'Structures',
  navFurnitureLabel: 'Furniture',
};

export default function Header({ siteSettings = defaultSettings }: { siteSettings?: SiteSettings }) {
  const itemCount = useCartStore(state => state.getItemCount());

  return (
    <>
      {/* J&J red top stripe */}
      <div className="h-2 bg-jnj-red w-full" />

      <header className="bg-white border-b-2 border-jnj-red">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              {siteSettings.siteName}
            </Link>

            <nav className="flex items-center gap-3 text-sm font-medium">
              <Link href="/?type=booth" className="text-gray-700 hover:text-jnj-red transition-colors">
                {siteSettings.navBoothsLabel}
              </Link>
              <span className="text-gray-300 select-none">|</span>
              <Link href="/?type=structure" className="text-gray-700 hover:text-jnj-red transition-colors">
                {siteSettings.navStructuresLabel}
              </Link>
              <span className="text-gray-300 select-none">|</span>
              <Link href="/?type=furniture" className="text-gray-700 hover:text-jnj-red transition-colors">
                {siteSettings.navFurnitureLabel}
              </Link>

              <Link href="/cart" className="relative ml-4 group">
                <BsBasket2 className="w-6 h-6 text-jnj-red group-hover:text-jnj-red-dark transition-colors" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-jnj-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold leading-none">
                    {itemCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
