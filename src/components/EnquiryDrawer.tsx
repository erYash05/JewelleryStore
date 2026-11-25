import React, { useEffect } from 'react';
import { EnquiryContext } from '../types/catalog';
import { EnquiryForm } from './EnquiryForm';

interface EnquiryDrawerProps {
  open: boolean;
  context: EnquiryContext;
  onClose: () => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  open,
  context,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="absolute inset-0 bg-primary/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-surface p-8 sm:p-10 shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out border-l border-secondary/30 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-secondary/20 pb-4">
            <div>
              <span className="font-label-uppercase text-[10px] text-secondary tracking-[0.28em] uppercase block">
                B2B SPECIFICATION SLIP
              </span>
              <h3 className="font-display-lg text-headline-sm text-on-surface">
                Wholesale Enquiry
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close drawer"
              onClick={onClose}
              className="p-2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <div className="p-4 bg-surface-container-low border border-secondary/20 space-y-1">
            <span className="font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
              Target Article
            </span>
            <p className="font-display-lg text-headline-sm text-on-surface">
              {context.articleName || 'General Wholesale Collection'}
            </p>
            <span className="font-caption text-caption text-outline block">
              {context.articleCode
                ? `REF: ${context.articleCode}`
                : 'REF: WHOLESALE CATALOGUE'}
            </span>
          </div>

          <EnquiryForm compact prefilledArticle={context.articleName} />
        </div>

        <div className="pt-6 border-t border-secondary/15 mt-6">
          <p className="font-caption text-caption text-outline text-center">
            Shakuntala Jewellers • Lashkar, Gwalior
          </p>
        </div>
      </div>
    </div>
  );
};
