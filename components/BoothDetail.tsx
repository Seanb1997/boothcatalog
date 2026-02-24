'use client';

import { useState } from 'react';
import { Booth, Congress, CongressBoothUsage } from '../types';
import { mockCongresses } from '../data/mockData';

interface BoothDetailProps {
  booth: Booth;
  onClose: () => void;
  onOrder: (booth: Booth) => void;
}

export default function BoothDetail({ booth, onClose, onOrder }: BoothDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'components'>('overview');

  // Find congresses where this booth was used
  const usageHistory = mockCongresses
    .filter(congress => 
      congress.boothsUsed.some(usage => usage.boothId === booth.id)
    )
    .map(congress => ({
      congress,
      usage: congress.boothsUsed.find(u => u.boothId === booth.id)!
    }))
    .sort((a, b) => b.congress.startDate.getTime() - a.congress.startDate.getTime());

  const statusColors = {
    available: 'bg-green-100 text-green-800',
    reserved: 'bg-yellow-100 text-yellow-800',
    'in-use': 'bg-blue-100 text-blue-800',
    maintenance: 'bg-red-100 text-red-800'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-5xl w-full my-8">
        {/* Header */}
        <div className="border-b p-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-gray-900">{booth.name}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[booth.status]}`}>
                  {booth.status}
                </span>
              </div>
              <p className="text-gray-600">{booth.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 ml-4"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'history'
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Usage History ({usageHistory.length})
            </button>
            <button
              onClick={() => setActiveTab('components')}
              className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'components'
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Components
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Dimensions</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {booth.dimensions.width} × {booth.dimensions.depth} × {booth.dimensions.height} {booth.dimensions.unit}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Capacity</p>
                    <p className="text-lg font-semibold text-gray-900">{booth.capacity} people</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Setup Time</p>
                    <p className="text-lg font-semibold text-gray-900">{booth.estimatedSetupTime} hours</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Est. Cost</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${booth.estimatedCost.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {booth.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-2 bg-red-50 text-red-800 rounded-lg text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {booth.images.map(image => (
                    <div key={image.id} className="aspect-video bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                      <span className="text-white text-4xl">🏢</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Congress Usage</h3>
              
              {usageHistory.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">This booth hasn't been used at any congresses yet</p>
                </div>
              ) : (
                usageHistory.map(({ congress, usage }) => (
                  <div key={congress.id} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{congress.name}</h4>
                        <p className="text-sm text-gray-600">
                          {congress.location} • {congress.venue}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(congress.startDate).toLocaleDateString()} - {new Date(congress.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Setup Cost</p>
                        <p className="text-lg font-bold text-gray-900">
                          ${usage.setupCost.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {usage.boothNumber && (
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Booth Number:</span> {usage.boothNumber}
                      </p>
                    )}

                    {usage.customizations && usage.customizations.length > 0 && (
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700 mb-1">Customizations:</p>
                        <div className="flex flex-wrap gap-2">
                          {usage.customizations.map((custom, idx) => (
                            <span key={idx} className="px-2 py-1 bg-red-50 text-red-800 text-xs rounded font-medium">
                              {custom}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {usage.performanceNotes && (
                      <div className="mt-3 p-3 bg-red-50 rounded">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Performance Notes:</span> {usage.performanceNotes}
                        </p>
                      </div>
                    )}

                    {usage.attendeeCount && (
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Attendees:</span> {usage.attendeeCount.toLocaleString()}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'components' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booth Components</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Component</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Condition</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {booth.components.map(component => (
                      <tr key={component.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {component.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                          {component.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {component.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            component.condition === 'excellent' ? 'bg-green-100 text-green-800' :
                            component.condition === 'good' ? 'bg-blue-100 text-blue-800' :
                            component.condition === 'fair' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {component.condition}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50">
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onOrder(booth)}
              disabled={booth.status === 'maintenance'}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                booth.status === 'maintenance'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-700 text-white hover:bg-red-800'
              }`}
            >
              {booth.status === 'available' ? 'Request This Booth' : 
               booth.status === 'reserved' ? 'Join Waitlist' :
               booth.status === 'in-use' ? 'Check Availability' :
               'Under Maintenance'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
