'use client';

import { useState } from 'react';
import { Booth, Order } from '../types';
import { mockCongresses } from '../data/mockData';

interface OrderFormProps {
  booth: Booth;
  onClose: () => void;
  onSubmit: (order: Partial<Order>) => void;
}

export default function OrderForm({ booth, onClose, onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState({
    congressId: '',
    requestedBy: '',
    startDate: '',
    endDate: '',
    customizationRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Filter to only show future congresses
  const upcomingCongresses = mockCongresses.filter(
    c => new Date(c.startDate) > new Date()
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.congressId) {
      newErrors.congressId = 'Please select a congress';
    }
    if (!formData.requestedBy) {
      newErrors.requestedBy = 'Please enter your name and title';
    }
    if (!formData.startDate) {
      newErrors.startDate = 'Please select a start date';
    }
    if (!formData.endDate) {
      newErrors.endDate = 'Please select an end date';
    }
    if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
      newErrors.endDate = 'End date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const order: Partial<Order> = {
      id: `order-${Date.now()}`,
      boothId: booth.id,
      congressId: formData.congressId,
      requestedBy: formData.requestedBy,
      requestDate: new Date(),
      status: 'pending',
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      customizationRequests: formData.customizationRequests || undefined,
      estimatedCost: booth.estimatedCost
    };

    onSubmit(order);
  };

  const handleCongressChange = (congressId: string) => {
    setFormData({ ...formData, congressId });
    
    // Auto-fill dates based on selected congress
    const congress = upcomingCongresses.find(c => c.id === congressId);
    if (congress) {
      setFormData({
        ...formData,
        congressId,
        startDate: congress.startDate.toISOString().split('T')[0],
        endDate: congress.endDate.toISOString().split('T')[0]
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full">
        {/* Header */}
        <div className="border-b p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Request Booth</h2>
              <p className="text-gray-600 mt-1">{booth.name}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Congress Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Congress / Event <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.congressId}
              onChange={(e) => handleCongressChange(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                errors.congressId ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a congress...</option>
              {upcomingCongresses.map(congress => (
                <option key={congress.id} value={congress.id}>
                  {congress.name} - {new Date(congress.startDate).toLocaleDateString()} ({congress.location})
                </option>
              ))}
            </select>
            {errors.congressId && (
              <p className="mt-1 text-sm text-red-600">{errors.congressId}</p>
            )}
          </div>

          {/* Requested By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requested By <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.requestedBy}
              onChange={(e) => setFormData({ ...formData, requestedBy: e.target.value })}
              placeholder="e.g., John Smith - Marketing Manager"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                errors.requestedBy ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.requestedBy && (
              <p className="mt-1 text-sm text-red-600">{errors.requestedBy}</p>
            )}
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  errors.startDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.startDate && (
                <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  errors.endDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.endDate && (
                <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
              )}
            </div>
          </div>

          {/* Customization Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Customization Requests (Optional)
            </label>
            <textarea
              value={formData.customizationRequests}
              onChange={(e) => setFormData({ ...formData, customizationRequests: e.target.value })}
              placeholder="Describe any specific branding, modifications, or special requirements..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <p className="mt-1 text-xs text-gray-500">
              Note: Customizations may affect final cost
            </p>
          </div>

          {/* Cost Summary */}
          <div className="bg-red-50 rounded-lg p-4 border border-red-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-700 font-medium">Estimated Base Cost</p>
                <p className="text-xs text-gray-600 mt-1">Final cost subject to customizations and approval</p>
              </div>
              <p className="text-2xl font-bold text-red-700">
                ${booth.estimatedCost.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors font-medium"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
