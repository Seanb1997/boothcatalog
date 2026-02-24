'use client';

import { useState } from 'react';
import { Booth, Congress } from '../types';
import { mockBooths, mockCongresses } from '../data/mockData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'booths' | 'congresses'>('booths');
  const [booths, setBooths] = useState<Booth[]>(mockBooths);
  const [congresses, setCongresses] = useState<Congress[]>(mockCongresses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Booth | Congress | null>(null);

  // Booth Form State
  const [boothForm, setBoothForm] = useState({
    name: '',
    description: '',
    width: 6,
    depth: 6,
    height: 3,
    capacity: 20,
    features: '',
    estimatedCost: 15000,
    estimatedSetupTime: 8,
    status: 'available' as Booth['status'],
    tags: ''
  });

  // Congress Form State
  const [congressForm, setCongressForm] = useState({
    name: '',
    location: '',
    venue: '',
    startDate: '',
    endDate: '',
    totalCost: 0,
    notes: ''
  });

  const resetBoothForm = () => {
    setBoothForm({
      name: '',
      description: '',
      width: 6,
      depth: 6,
      height: 3,
      capacity: 20,
      features: '',
      estimatedCost: 15000,
      estimatedSetupTime: 8,
      status: 'available',
      tags: ''
    });
  };

  const resetCongressForm = () => {
    setCongressForm({
      name: '',
      location: '',
      venue: '',
      startDate: '',
      endDate: '',
      totalCost: 0,
      notes: ''
    });
  };

  const handleAddBooth = () => {
    const newBooth: Booth = {
      id: `booth-${Date.now()}`,
      name: boothForm.name,
      description: boothForm.description,
      dimensions: {
        width: boothForm.width,
        depth: boothForm.depth,
        height: boothForm.height,
        unit: 'meters'
      },
      capacity: boothForm.capacity,
      features: boothForm.features.split(',').map(f => f.trim()).filter(f => f),
      components: [],
      images: [{ id: 'img1', url: '/booths/placeholder.jpg', isPrimary: true }],
      status: boothForm.status,
      estimatedSetupTime: boothForm.estimatedSetupTime,
      estimatedCost: boothForm.estimatedCost,
      tags: boothForm.tags.split(',').map(t => t.trim()).filter(t => t),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setBooths([...booths, newBooth]);
    setShowAddForm(false);
    resetBoothForm();
    alert('✅ Booth added successfully! (This is temporary - refresh page to reset)');
  };

  const handleAddCongress = () => {
    const newCongress: Congress = {
      id: `congress-${Date.now()}`,
      name: congressForm.name,
      location: congressForm.location,
      venue: congressForm.venue,
      startDate: new Date(congressForm.startDate),
      endDate: new Date(congressForm.endDate),
      totalCost: congressForm.totalCost,
      boothsUsed: [],
      notes: congressForm.notes
    };

    setCongresses([...congresses, newCongress]);
    setShowAddForm(false);
    resetCongressForm();
    alert('✅ Congress added successfully! (This is temporary - refresh page to reset)');
  };

  const handleDeleteBooth = (id: string) => {
    if (confirm('Are you sure you want to delete this booth?')) {
      setBooths(booths.filter(b => b.id !== id));
    }
  };

  const handleDeleteCongress = (id: string) => {
    if (confirm('Are you sure you want to delete this congress?')) {
      setCongresses(congresses.filter(c => c.id !== id));
    }
  };

  const exportData = () => {
    const data = {
      booths,
      congresses,
      exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `booth-catalog-data-${Date.now()}.json`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 to-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-red-100 mt-1">Manage booths and congresses</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportData}
                className="px-4 py-2 bg-white text-red-700 rounded-md hover:bg-red-50 font-medium transition-colors"
              >
                📥 Export Data
              </button>
              <a
                href="/"
                className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 font-medium transition-colors"
              >
                ← Back to Catalog
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('booths')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'booths'
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Booths ({booths.length})
            </button>
            <button
              onClick={() => setActiveTab('congresses')}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                activeTab === 'congresses'
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Congresses ({congresses.length})
            </button>
          </div>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 font-medium transition-colors"
          >
            {showAddForm ? '✕ Cancel' : `+ Add New ${activeTab === 'booths' ? 'Booth' : 'Congress'}`}
          </button>
        </div>

        {/* Add Forms */}
        {showAddForm && activeTab === 'booths' && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Booth</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Booth Name *
                </label>
                <input
                  type="text"
                  value={boothForm.name}
                  onChange={(e) => setBoothForm({ ...boothForm, name: e.target.value })}
                  placeholder="e.g., Innovation Hub Pro"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  value={boothForm.description}
                  onChange={(e) => setBoothForm({ ...boothForm, description: e.target.value })}
                  placeholder="Detailed description of the booth..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Width (meters) *
                </label>
                <input
                  type="number"
                  value={boothForm.width}
                  onChange={(e) => setBoothForm({ ...boothForm, width: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Depth (meters) *
                </label>
                <input
                  type="number"
                  value={boothForm.depth}
                  onChange={(e) => setBoothForm({ ...boothForm, depth: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (meters) *
                </label>
                <input
                  type="number"
                  value={boothForm.height}
                  onChange={(e) => setBoothForm({ ...boothForm, height: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capacity (people) *
                </label>
                <input
                  type="number"
                  value={boothForm.capacity}
                  onChange={(e) => setBoothForm({ ...boothForm, capacity: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Cost ($) *
                </label>
                <input
                  type="number"
                  value={boothForm.estimatedCost}
                  onChange={(e) => setBoothForm({ ...boothForm, estimatedCost: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Setup Time (hours) *
                </label>
                <input
                  type="number"
                  value={boothForm.estimatedSetupTime}
                  onChange={(e) => setBoothForm({ ...boothForm, estimatedSetupTime: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={boothForm.status}
                  onChange={(e) => setBoothForm({ ...boothForm, status: e.target.value as Booth['status'] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="available">Available</option>
                  <option value="reserved">Reserved</option>
                  <option value="in-use">In Use</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features (comma-separated)
                </label>
                <input
                  type="text"
                  value={boothForm.features}
                  onChange={(e) => setBoothForm({ ...boothForm, features: e.target.value })}
                  placeholder="LED Display, Meeting Room, Storage Area"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={boothForm.tags}
                  onChange={(e) => setBoothForm({ ...boothForm, tags: e.target.value })}
                  placeholder="large, premium, tech-enabled"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleAddBooth}
                disabled={!boothForm.name || !boothForm.description}
                className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
              >
                Add Booth
              </button>
              <button
                onClick={() => { setShowAddForm(false); resetBoothForm(); }}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {showAddForm && activeTab === 'congresses' && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Congress</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Congress Name *
                </label>
                <input
                  type="text"
                  value={congressForm.name}
                  onChange={(e) => setCongressForm({ ...congressForm, name: e.target.value })}
                  placeholder="e.g., ASCO 2025"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={congressForm.location}
                  onChange={(e) => setCongressForm({ ...congressForm, location: e.target.value })}
                  placeholder="e.g., Chicago, IL"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Venue *
                </label>
                <input
                  type="text"
                  value={congressForm.venue}
                  onChange={(e) => setCongressForm({ ...congressForm, venue: e.target.value })}
                  placeholder="e.g., McCormick Place"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <input
                  type="date"
                  value={congressForm.startDate}
                  onChange={(e) => setCongressForm({ ...congressForm, startDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date *
                </label>
                <input
                  type="date"
                  value={congressForm.endDate}
                  onChange={(e) => setCongressForm({ ...congressForm, endDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Budget ($)
                </label>
                <input
                  type="number"
                  value={congressForm.totalCost}
                  onChange={(e) => setCongressForm({ ...congressForm, totalCost: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={congressForm.notes}
                  onChange={(e) => setCongressForm({ ...congressForm, notes: e.target.value })}
                  placeholder="Additional notes about this congress..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={handleAddCongress}
                disabled={!congressForm.name || !congressForm.location || !congressForm.startDate || !congressForm.endDate}
                className="px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
              >
                Add Congress
              </button>
              <button
                onClick={() => { setShowAddForm(false); resetCongressForm(); }}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Data Tables */}
        {activeTab === 'booths' && (
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dimensions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Capacity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {booths.map(booth => (
                    <tr key={booth.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booth.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booth.dimensions.width} × {booth.dimensions.depth} × {booth.dimensions.height}m
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booth.capacity} people
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${booth.estimatedCost.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          booth.status === 'available' ? 'bg-green-100 text-green-800' :
                          booth.status === 'reserved' ? 'bg-yellow-100 text-yellow-800' :
                          booth.status === 'in-use' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booth.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleDeleteBooth(booth.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'congresses' && (
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Venue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dates</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Budget</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {congresses.map(congress => (
                    <tr key={congress.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{congress.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {congress.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {congress.venue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(congress.startDate).toLocaleDateString()} - {new Date(congress.endDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${congress.totalCost.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleDeleteCongress(congress.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Changes made here are temporary and will reset when you refresh the page. 
            To make permanent changes, use the "Export Data" button to download your data, then update the <code className="bg-blue-100 px-1 rounded">data/mockData.ts</code> file.
          </p>
        </div>
      </div>
    </div>
  );
}
