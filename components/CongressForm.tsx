'use client';

import { useState } from 'react';
import { Congress } from '../types';

interface CongressFormData {
  // Client Information
  clientName: string;
  clientEmail: string;
  clientDepartment: string;
  
  // Show Information
  showName: string;
  showLocation: string;
  showVenue: string;
  startDate: string;
  endDate: string;
  
  // Booth Details
  boothSizeBooked: string;
  boothNumber?: string;
  
  // Objectives & Goals
  boothObjectives: string;
  keyGoals: string[];
  targetAudience: string;
  
  // Budget
  totalBudget: number;
  budgetBreakdown?: {
    booth: number;
    marketing: number;
    staffing: number;
    other: number;
  };
  
  // Additional Information
  briefDescription: string;
  specialRequirements?: string;
}

interface CongressFormProps {
  onClose: () => void;
  onSubmit: (data: CongressFormData) => void;
  existingCongresses?: Congress[];
}

export default function CongressForm({ onClose, onSubmit, existingCongresses = [] }: CongressFormProps) {
  const [formData, setFormData] = useState<CongressFormData>({
    clientName: '',
    clientEmail: '',
    clientDepartment: '',
    showName: '',
    showLocation: '',
    showVenue: '',
    startDate: '',
    endDate: '',
    boothSizeBooked: '',
    boothObjectives: '',
    keyGoals: [],
    targetAudience: '',
    totalBudget: 0,
    briefDescription: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentGoal, setCurrentGoal] = useState('');
  const [step, setStep] = useState(1);

  const goalOptions = [
    'Product Launch',
    'Brand Awareness',
    'Lead Generation',
    'Customer Education',
    'Networking',
    'Competitive Intelligence',
    'Media Coverage',
    'Partnership Development'
  ];

  const boothSizeOptions = [
    '3m x 3m (9 sqm)',
    '6m x 3m (18 sqm)',
    '6m x 6m (36 sqm)',
    '9m x 6m (54 sqm)',
    '12m x 6m (72 sqm)',
    'Custom Size'
  ];

  const departmentOptions = [
    'Marketing',
    'Sales',
    'Medical Affairs',
    'Commercial Operations',
    'Corporate Communications',
    'R&D',
    'Other'
  ];

  const validateStep = (stepNumber: number) => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.clientName) newErrors.clientName = 'Name is required';
      if (!formData.clientEmail) newErrors.clientEmail = 'Email is required';
      if (!formData.clientDepartment) newErrors.clientDepartment = 'Department is required';
    }

    if (stepNumber === 2) {
      if (!formData.showName) newErrors.showName = 'Show name is required';
      if (!formData.showLocation) newErrors.showLocation = 'Location is required';
      if (!formData.showVenue) newErrors.showVenue = 'Venue is required';
      if (!formData.startDate) newErrors.startDate = 'Start date is required';
      if (!formData.endDate) newErrors.endDate = 'End date is required';
      
      if (formData.startDate && formData.endDate && formData.startDate > formData.endDate) {
        newErrors.endDate = 'End date must be after start date';
      }

      // Check for date conflicts with existing congresses
      if (formData.startDate && formData.endDate) {
        const newStart = new Date(formData.startDate);
        const newEnd = new Date(formData.endDate);
        
        const hasConflict = existingCongresses.some(congress => {
          const existingStart = new Date(congress.startDate);
          const existingEnd = new Date(congress.endDate);
          
          return (newStart <= existingEnd && newEnd >= existingStart);
        });

        if (hasConflict) {
          newErrors.startDate = 'These dates conflict with an existing congress booking';
        }
      }
    }

    if (stepNumber === 3) {
      if (!formData.boothSizeBooked) newErrors.boothSizeBooked = 'Booth size is required';
      if (!formData.boothObjectives) newErrors.boothObjectives = 'Objectives are required';
      if (!formData.briefDescription) newErrors.briefDescription = 'Description is required';
    }

    if (stepNumber === 4) {
      if (!formData.totalBudget || formData.totalBudget <= 0) {
        newErrors.totalBudget = 'Budget is required and must be greater than 0';
      }
      if (formData.keyGoals.length === 0) {
        newErrors.keyGoals = 'Please select at least one key goal';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(4)) {
      onSubmit(formData);
    }
  };

  const toggleGoal = (goal: string) => {
    setFormData({
      ...formData,
      keyGoals: formData.keyGoals.includes(goal)
        ? formData.keyGoals.filter(g => g !== goal)
        : [...formData.keyGoals, goal]
    });
  };

  const addCustomGoal = () => {
    if (currentGoal && !formData.keyGoals.includes(currentGoal)) {
      setFormData({
        ...formData,
        keyGoals: [...formData.keyGoals, currentGoal]
      });
      setCurrentGoal('');
    }
  };

  const removeGoal = (goal: string) => {
    setFormData({
      ...formData,
      keyGoals: formData.keyGoals.filter(g => g !== goal)
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-3xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">New Congress Registration</h2>
              <p className="text-red-100 mt-1">Step {step} of 4</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-red-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="h-2 bg-red-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Client Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="e.g., John Smith"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.clientName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.clientName && (
                  <p className="mt-1 text-sm text-red-600">{errors.clientName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  placeholder="john.smith@jnj.com"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.clientEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.clientEmail && (
                  <p className="mt-1 text-sm text-red-600">{errors.clientEmail}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.clientDepartment}
                  onChange={(e) => setFormData({ ...formData, clientDepartment: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.clientDepartment ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select department...</option>
                  {departmentOptions.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                {errors.clientDepartment && (
                  <p className="mt-1 text-sm text-red-600">{errors.clientDepartment}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Show Information */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Show Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Show/Congress Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={formData.showName}
                  onChange={(e) => setFormData({ ...formData, showName: e.target.value })}
                  placeholder="e.g., American Society of Clinical Oncology (ASCO) 2025"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.showName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.showName && (
                  <p className="mt-1 text-sm text-red-600">{errors.showName}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.showLocation}
                    onChange={(e) => setFormData({ ...formData, showLocation: e.target.value })}
                    placeholder="e.g., Chicago, IL"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.showLocation ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.showLocation && (
                    <p className="mt-1 text-sm text-red-600">{errors.showLocation}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Venue <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.showVenue}
                    onChange={(e) => setFormData({ ...formData, showVenue: e.target.value })}
                    placeholder="e.g., McCormick Place"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.showVenue ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.showVenue && (
                    <p className="mt-1 text-sm text-red-600">{errors.showVenue}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.startDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.endDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.endDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Booth Number (if known)
                </label>
                <input
                  type="text"
                  value={formData.boothNumber || ''}
                  onChange={(e) => setFormData({ ...formData, boothNumber: e.target.value })}
                  placeholder="e.g., A-1234"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          )}

          {/* Step 3: Booth Details & Objectives */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Booth Details & Objectives</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Booth Size Booked <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.boothSizeBooked}
                  onChange={(e) => setFormData({ ...formData, boothSizeBooked: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.boothSizeBooked ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select booth size...</option>
                  {boothSizeOptions.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.boothSizeBooked && (
                  <p className="mt-1 text-sm text-red-600">{errors.boothSizeBooked}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={formData.briefDescription}
                  onChange={(e) => setFormData({ ...formData, briefDescription: e.target.value })}
                  placeholder="Provide a brief overview of your booth concept and purpose..."
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.briefDescription ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.briefDescription && (
                  <p className="mt-1 text-sm text-red-600">{errors.briefDescription}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Booth Objectives <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={formData.boothObjectives}
                  onChange={(e) => setFormData({ ...formData, boothObjectives: e.target.value })}
                  placeholder="What are the primary objectives for this booth? (e.g., Launch new drug X, educate on disease Y, generate leads for therapeutic area Z)"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    errors.boothObjectives ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.boothObjectives && (
                  <p className="mt-1 text-sm text-red-600">{errors.boothObjectives}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience
                </label>
                <input
                  type="text"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  placeholder="e.g., Oncologists, Primary Care Physicians, Pharmacists"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements (Optional)
                </label>
                <textarea
                  value={formData.specialRequirements || ''}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  placeholder="Any special equipment, power requirements, storage needs, etc."
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          )}

          {/* Step 4: Goals & Budget */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Goals & Budget</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Key Goals <span className="text-red-600">*</span>
                </label>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {goalOptions.map(goal => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        formData.keyGoals.includes(goal)
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentGoal}
                    onChange={(e) => setCurrentGoal(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCustomGoal())}
                    placeholder="Add custom goal..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    type="button"
                    onClick={addCustomGoal}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Add
                  </button>
                </div>

                {formData.keyGoals.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {formData.keyGoals.map(goal => (
                      <span key={goal} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm flex items-center gap-2">
                        {goal}
                        <button
                          type="button"
                          onClick={() => removeGoal(goal)}
                          className="hover:text-red-900"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                {errors.keyGoals && (
                  <p className="mt-1 text-sm text-red-600">{errors.keyGoals}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Budget (USD) <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.totalBudget || ''}
                    onChange={(e) => setFormData({ ...formData, totalBudget: parseFloat(e.target.value) || 0 })}
                    placeholder="0"
                    className={`w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      errors.totalBudget ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.totalBudget && (
                  <p className="mt-1 text-sm text-red-600">{errors.totalBudget}</p>
                )}
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Summary</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Show:</span> {formData.showName || 'Not specified'}</p>
                  <p><span className="font-medium">Location:</span> {formData.showLocation || 'Not specified'}</p>
                  <p><span className="font-medium">Dates:</span> {formData.startDate && formData.endDate ? `${formData.startDate} to ${formData.endDate}` : 'Not specified'}</p>
                  <p><span className="font-medium">Booth Size:</span> {formData.boothSizeBooked || 'Not specified'}</p>
                  <p><span className="font-medium">Budget:</span> ${formData.totalBudget.toLocaleString()}</p>
                  <p><span className="font-medium">Goals:</span> {formData.keyGoals.length > 0 ? formData.keyGoals.join(', ') : 'None selected'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer Buttons */}
          <div className="flex gap-3 justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={step === 1 ? onClose : handleBack}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
