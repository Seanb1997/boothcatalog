'use client';

import { useState, useMemo } from 'react';
import { Booth, FilterOptions } from '../types';
import { mockBooths } from '../data/mockData';
import BoothCard from './BoothCard';
import FilterPanel from './FilterPanel';

export default function BoothCatalog() {
  const [booths] = useState<Booth[]>(mockBooths);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);

  // Filter logic
  const filteredBooths = useMemo(() => {
    return booths.filter(booth => {
      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesSearch = 
          booth.name.toLowerCase().includes(searchLower) ||
          booth.description.toLowerCase().includes(searchLower) ||
          booth.features.some(f => f.toLowerCase().includes(searchLower)) ||
          booth.tags.some(t => t.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Status filter
      if (filters.status && filters.status.length > 0) {
        if (!filters.status.includes(booth.status)) return false;
      }

      // Features filter
      if (filters.features && filters.features.length > 0) {
        const hasAllFeatures = filters.features.every(f => 
          booth.features.some(bf => bf.toLowerCase().includes(f.toLowerCase()))
        );
        if (!hasAllFeatures) return false;
      }

      // Dimensions filter
      if (filters.dimensions) {
        if (filters.dimensions.minWidth && booth.dimensions.width < filters.dimensions.minWidth) return false;
        if (filters.dimensions.maxWidth && booth.dimensions.width > filters.dimensions.maxWidth) return false;
        if (filters.dimensions.minDepth && booth.dimensions.depth < filters.dimensions.minDepth) return false;
        if (filters.dimensions.maxDepth && booth.dimensions.depth > filters.dimensions.maxDepth) return false;
      }

      // Cost filter
      if (filters.maxCost && booth.estimatedCost > filters.maxCost) return false;

      // Tags filter
      if (filters.tags && filters.tags.length > 0) {
        const hasAnyTag = filters.tags.some(t => booth.tags.includes(t));
        if (!hasAnyTag) return false;
      }

      return true;
    });
  }, [booths, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 to-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-white text-3xl font-bold">
                  Johnson & Johnson
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white">Congress Booth Catalog</h1>
              <p className="mt-1 text-sm text-red-100">
                Browse and order from our inventory of congress booth structures
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="/admin"
                className="px-4 py-2 bg-white text-red-700 rounded-md hover:bg-red-50 font-medium transition-colors"
              >
                ⚙️ Admin
              </a>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-red-700' 
                    : 'bg-red-800 text-white hover:bg-red-900'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-red-700' 
                    : 'bg-red-800 text-white hover:bg-red-900'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <FilterPanel 
              filters={filters} 
              onFiltersChange={setFilters}
              availableBooths={booths}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Summary */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredBooths.length}</span> of{' '}
                <span className="font-semibold">{booths.length}</span> booths
              </p>
              
              {Object.keys(filters).length > 0 && (
                <button
                  onClick={() => setFilters({})}
                  className="text-sm text-red-700 hover:text-red-900 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Booth Grid/List */}
            {filteredBooths.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-gray-500 text-lg">No booths match your criteria</p>
                <button
                  onClick={() => setFilters({})}
                  className="mt-4 text-red-700 hover:text-red-900 font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }>
                {filteredBooths.map(booth => (
                  <BoothCard
                    key={booth.id}
                    booth={booth}
                    viewMode={viewMode}
                    onSelect={() => setSelectedBooth(booth)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Booth Detail Modal (would be implemented) */}
      {selectedBooth && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedBooth.name}</h2>
                <button
                  onClick={() => setSelectedBooth(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              {/* Detail view would go here */}
              <p className="text-gray-600 mb-4">{selectedBooth.description}</p>
              <button className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-800 font-medium transition-colors">
                Request This Booth
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
