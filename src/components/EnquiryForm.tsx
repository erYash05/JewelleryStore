import React, { useEffect, useState } from 'react';
import { WHATSAPP_URL } from '../data/catalog';
import { Button } from './Button';

interface EnquiryFormProps {
  compact?: boolean;
  prefilledArticle?: string;
  prefilledInterest?: string;
  onSubmitted?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  compact = false,
  prefilledArticle,
  prefilledInterest = 'All Collections',
  onSubmitted,
}) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState(prefilledInterest);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setInterest(prefilledInterest);
    setSubmitted(false);
  }, [prefilledInterest, prefilledArticle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setBusinessName('');
    setCity('');
    setPhone('');
    setNotes('');
    if (onSubmitted) {
      onSubmitted();
    }
  };

  if (compact) {
    return (
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-1">
          <label className="block font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
            Buyer / Retailer Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-outline/40 py-2 text-on-surface focus:outline-none focus:border-secondary font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>

        <div className="space-y-1">
          <label className="block font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
            Showroom / City
          </label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Business Name & City"
            className="w-full bg-transparent border-b border-outline/40 py-2 text-on-surface focus:outline-none focus:border-secondary font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>

        <div className="space-y-1">
          <label className="block font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
            WhatsApp Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXX XXXXX"
            className="w-full bg-transparent border-b border-outline/40 py-2 text-on-surface focus:outline-none focus:border-secondary font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>

        <div className="relative space-y-1">
          <label className="block font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
            Inquiry Type
          </label>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full bg-transparent border-b border-outline/40 py-2 text-on-surface focus:outline-none focus:border-secondary font-body-md text-sm appearance-none rounded-none cursor-pointer"
          >
            <option value="All Collections">Sample Unit Inspection</option>
            <option value="Bulk Order">Bulk Wholesale Order</option>
            <option value="Retailer Partnership">Retailer Showroom Partnership</option>
            <option value="Custom Order">Custom Design Requirement</option>
          </select>
          <span className="material-symbols-outlined text-[14px] text-secondary absolute right-0 bottom-2.5 pointer-events-none">
            expand_more
          </span>
        </div>

        <div className="space-y-1">
          <label className="block font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
            Notes
          </label>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Specific requirements or delivery timeline..."
            className="w-full bg-transparent border-b border-outline/40 py-2 text-on-surface focus:outline-none focus:border-secondary font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>

        <div className="pt-4 space-y-3">
          <Button type="submit" variant="primary" fullWidth>
            Send Enquiry
          </Button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary font-label-uppercase text-[11px] tracking-[0.18em] flex items-center justify-center gap-2 transition-colors uppercase"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>Chat on WhatsApp (+91 81043 04050)</span>
          </a>
        </div>

        {submitted && (
          <div className="p-3 bg-surface-container border border-secondary text-center">
            <p className="font-label-uppercase text-caption text-secondary tracking-widest">
              Thank you. Your wholesale enquiry has been noted.
            </p>
          </div>
        )}
      </form>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block font-label-uppercase text-[11px] text-secondary tracking-widest uppercase mb-1">
            Your Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Vikramaditya Rathore"
            className="w-full bg-transparent border-b border-outline/40 py-2.5 px-0 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>

        <div className="relative">
          <label className="block font-label-uppercase text-[11px] text-secondary tracking-widest uppercase mb-1">
            Enterprise / Store Name
          </label>
          <input
            type="text"
            required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="e.g. Rathore Jewellers"
            className="w-full bg-transparent border-b border-outline/40 py-2.5 px-0 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block font-label-uppercase text-[11px] text-secondary tracking-widest uppercase mb-1">
            City &amp; State
          </label>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Indore, Madhya Pradesh"
            className="w-full bg-transparent border-b border-outline/40 py-2.5 px-0 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>

        <div className="relative">
          <label className="block font-label-uppercase text-[11px] text-secondary tracking-widest uppercase mb-1">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXX XXXXX"
            className="w-full bg-transparent border-b border-outline/40 py-2.5 px-0 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body-md text-sm placeholder:text-outline-variant"
          />
        </div>
      </div>

      <div className="relative">
        <label className="block font-label-uppercase text-[11px] text-secondary tracking-widest uppercase mb-1">
          Primary Product Interest
        </label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full bg-transparent border-b border-outline/40 py-2.5 px-0 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body-md text-sm appearance-none rounded-none cursor-pointer"
        >
          <option value="All Collections">
            Comprehensive Wholesale Catalogue (All Lines)
          </option>
          <option value="Silver Bangles">Silver Bangles &amp; Solid Kadas</option>
          <option value="Silver Bracelets">Articulated Silver Bracelets</option>
          <option value="Silver Necklaces">Chokers &amp; Traditional Torques</option>
          <option value="Silver Earrings">
            Earrings, Chandbalis &amp; Jhumkas
          </option>
          <option value="Traditional Silver Ornaments">
            Traditional Silver Ornaments
          </option>
        </select>
        <span className="material-symbols-outlined absolute right-0 bottom-3 pointer-events-none text-secondary text-sm">
          expand_more
        </span>
      </div>

      <div className="relative">
        <label className="block font-label-uppercase text-[11px] text-secondary tracking-widest uppercase mb-1">
          Anticipated Volume / Specific Requirements
        </label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Outline your order requirements or preferred ornament lines..."
          className="w-full bg-transparent border-b border-outline/40 py-2.5 px-0 text-on-surface focus:outline-none focus:border-secondary transition-colors font-body-md text-sm placeholder:text-outline-variant"
        />
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
        <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3.5">
          Send Enquiry
        </Button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3.5 border border-secondary text-on-surface font-label-uppercase text-label-uppercase tracking-[0.18em] flex items-center justify-center gap-2 hover:bg-surface-container transition-colors uppercase"
        >
          <span className="material-symbols-outlined text-secondary text-[18px]">
            chat
          </span>
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {submitted && (
        <p className="text-xs font-label-uppercase tracking-widest text-secondary pt-2">
          Thank you. Your wholesale enquiry has been received.
        </p>
      )}
    </form>
  );
};
