'use client';

import { FilterOptions } from '../types';
import { filterTypeOptions, filterSizeOptions, filterFeatureOptions, filterSpecificationOptions } from '../data/mockData';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const selectClass = 'w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 bg-white focus:outline-none focus:border-jnj-red appearance-none';
const labelClass = 'block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider';

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  return (
    <div className="bg-white border-b border-gray-200 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-4 items-end">

          <div className="flex-1">
            <label className={labelClass}>Type</label>
            <select
              className={selectClass}
              value={filters.type?.[0] ?? ''}
              onChange={e => onFilterChange({ ...filters, type: e.target.value ? [e.target.value] : [] })}
            >
              <option value="">Select...</option>
              {filterTypeOptions.map(opt => (
                <option key={opt} value={opt.toLowerCase()}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className={labelClass}>Size</label>
            <select
              className={selectClass}
              value={filters.size?.[0] ?? ''}
              onChange={e => onFilterChange({ ...filters, size: e.target.value ? [e.target.value] : [] })}
            >
              <option value="">Select...</option>
              {filterSizeOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className={labelClass}>Feature</label>
            <select
              className={selectClass}
              value={filters.feature?.[0] ?? ''}
              onChange={e => onFilterChange({ ...filters, feature: e.target.value ? [e.target.value] : [] })}
            >
              <option value="">Select...</option>
              {filterFeatureOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className={labelClass}>Specification</label>
            <select
              className={selectClass}
              value={filters.specification?.[0] ?? ''}
              onChange={e => onFilterChange({ ...filters, specification: e.target.value ? [e.target.value] : [] })}
            >
              <option value="">Select...</option>
              {filterSpecificationOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => onFilterChange({})}
            className="px-8 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors whitespace-nowrap h-[38px]"
          >
            Filter
          </button>

        </div>
      </div>
    </div>
  );
}
