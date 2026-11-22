import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: 'Residential Renovation',
    budget: '$50,000 - $100,000',
    timeline: 'Within 3-6 months',
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = [
    'Residential Renovation',
    'Custom Penthouse Architecture',
    'Bespoke Kitchen & Joinery',
    'Commercial / Boutique Hospitality',
    'Full Interior Styling & Furnishing'
  ];

  const budgets = [
    '$30,000 - $60,000',
    '$60,000 - $120,000',
    '$120,000 - $250,000',
    '$250,000+'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#F5F2EB] text-[#171513] rounded-2xl shadow-2xl border border-[#DED8CB] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#DED8CB]/70 bg-[#EFECE4]">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#6E6B65] uppercase">Vivida Studio</span>
            <h3 className="text-2xl font-bold font-display tracking-tight text-[#171513]">Request an Architectural Consultation</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#171513] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-display text-[#171513]">Consultation Request Received</h4>
            <p className="text-[#6E6B65] max-w-md mx-auto text-sm leading-relaxed">
              Thank you, {formData.name || 'Valued Client'}. Our senior design partner will review your project brief and connect with you within 24 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 bg-[#171513] text-[#F5F2EB] text-xs font-semibold tracking-wider uppercase rounded hover:bg-black transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6B65] mb-2.5">
                1. Project Scope & Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`text-left text-xs font-medium px-3.5 py-3 rounded-lg border transition-all ${
                      formData.projectType === type 
                        ? 'bg-[#171513] text-white border-[#171513] shadow-sm' 
                        : 'bg-white/60 hover:bg-white text-[#171513] border-[#DED8CB]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Estimated Investment */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6B65] mb-2.5">
                2. Anticipated Investment Bracket
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`text-center text-xs font-semibold py-2.5 rounded-lg border transition-all ${
                      formData.budget === b 
                        ? 'bg-[#171513] text-white border-[#171513]' 
                        : 'bg-white/60 hover:bg-white text-[#171513] border-[#DED8CB]'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6B65] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DED8CB] rounded-md text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#171513]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6B65] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="eleanor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DED8CB] rounded-md text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#171513]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6B65] mb-1.5">
                  Phone / Mobile
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DED8CB] rounded-md text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#171513]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6B65] mb-1.5">
                  Property Location / City
                </label>
                <input
                  type="text"
                  placeholder="Tribeca, New York"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DED8CB] rounded-md text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#171513]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6E6B65] mb-1.5">
                Tell Us About Your Vision (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Key inspirations, must-have features, or specific aesthetic preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 bg-white border border-[#DED8CB] rounded-md text-sm text-[#171513] focus:outline-none focus:ring-2 focus:ring-[#171513] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#6E6B65] hover:text-[#171513] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-[#171513] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-black transition-all shadow-md"
              >
                <span>Submit Consultation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
