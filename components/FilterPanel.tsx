'use client';

import { useState } from 'react';
import { FilterOptions, Booth } from '../types';

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  availableBooths: Booth[];
}

export default function FilterPanel({ filters, onFiltersChange, availableBooths }: FilterPanelProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(filters.searchTerm || '');

  // Extract unique features and tags from available booths
  const allFeatures = Array.from(new Set(availableBooths.flatMap(b => b.features)));
  const allTags = Array.from(new Set(availableBooths.flatMap(b => b.tags)));

  const handleSearchChange = (value: string) => {
    setLocalSearchTerm(value);
    onFiltersChange({ ...filters, searchTerm: value || undefined });
  };

  const handleStatusToggle = (status: Booth['status']) => {
    const currentStatuses = filters.status || [];
    const newStatuses = currentStatuses.includes(status)
      ? currentStatuses.filter(s => s !== status)
      : [...currentStatuses, status];
    
    onFiltersChange({ 
      ...filters, 
      status: newStatuses.length > 0 ? newStatuses : undefined 
    });
  };

  const handleDimensionChange = (dimension: keyof NonNullable<FilterOptions['dimensions']>, value: string) => {
    const numValue = value ? parseFloat(value) : undefined;
    onFiltersChange({
      ...filters,
      dimensions: {
        ...filters.dimensions,
        [dimension]: numValue
      }
    });
  };

  const handleCostChange = (value: string) => {
    const numValue = value ? parseFloat(value) : undefined;
    onFiltersChange({ ...filters, maxCost: numValue });
  };

  const handleTagToggle = (tag: string) => {
    const currentTags = filters.tags || [];
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    
    onFiltersChange({ 
      ...filters, 
      tags: newTags.length > 0 ? newTags : undefined 
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 sticky top-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          type="text"
          value={localSearchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search booths..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {/* Status Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>
        <div className="space-y-2">
          {(['available', 'reserved', 'in-use', 'maintenance'] as const).map(status => (
            <label key={status} className="flex items-center">
              <input
                type="checkbox"
                checked={(filters.status || []).includes(status)}
                onChange={() => handleStatusToggle(status)}
                className="rounded border-gray-300 text-red-700 focus:ring-red-600"
              />
              <span className="ml-2 text-sm text-gray-700 capitalize">
                {status.replace('-', ' ')}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Dimensions Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dimensions (meters)
        </label>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Width</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.dimensions?.minWidth || ''}
                onChange={(e) => handleDimensionChange('minWidth', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.dimensions?.maxWidth || ''}
                onChange={(e) => handleDimensionChange('maxWidth', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Depth</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.dimensions?.minDepth || ''}
                onChange={(e) => handleDimensionChange('minDepth', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.dimensions?.maxDepth || ''}
                onChange={(e) => handleDimensionChange('maxDepth', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Max Cost Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Max Cost ($)
        </label>
        <input
          type="number"
          placeholder="Enter max cost"
          value={filters.maxCost || ''}
          onChange={(e) => handleCostChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {/* Tags Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                (filters.tags || []).includes(tag)
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {Object.keys(filters).length > 0 && (
        <button
          onClick={() => {
            setLocalSearchTerm('');
            onFiltersChange({});
          }}
          className="w-full py-2 text-sm text-red-700 hover:text-red-900 font-medium"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}
