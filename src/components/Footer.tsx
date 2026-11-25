import React from 'react';
import { COLLECTIONS, INSTAGRAM_URL, WHATSAPP_URL } from '../data/catalog';
import { CollectionSlug, PageRoute } from '../types/catalog';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenEnquire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquire }) => {
  return (
    <footer className="w-full bg-primary-container text-surface-container-low">
      <div className="w-full px-margin md:px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop pb-space-xl border-b border-surface-container-highest/10">
          <div className="md:col-span-5 space-y-space-md">
            <span className="font-display-lg text-headline-md text-surface-container-lowest tracking-[0.16em] uppercase block">
              SHAKUNTALA JEWELLERS
            </span>
            <p className="font-body-md text-surface-variant max-w-md">
              Wholesale purveyors of handcrafted silver ornaments rooted in the
              metalsmithing traditions of Gwalior.
            </p>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <span className="font-label-uppercase text-caption text-secondary border border-secondary/40 px-2 py-1 uppercase">
                WHOLESALE SILVER
              </span>
              <span className="font-label-uppercase text-caption text-secondary border border-secondary/40 px-2 py-1 uppercase">
                GWALIOR ATELIER
              </span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-space-sm">
            <h3 className="font-label-uppercase text-caption text-secondary tracking-widest uppercase">
              Catalogues
            </h3>
            <ul className="space-y-space-xs font-body-md text-surface-container-highest text-sm">
              {COLLECTIONS.map((col) => (
                <li key={col.slug}>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({
                        page: 'category',
                        slug: col.slug as CollectionSlug,
                      })
                    }
                    className="hover:text-surface-bright transition-colors text-left cursor-pointer"
                  >
                    {col.slug === 'traditional-silver-ornaments'
                      ? 'Traditional Silver Ornaments'
                      : col.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-space-sm">
            <h3 className="font-label-uppercase text-caption text-secondary tracking-widest uppercase">
              Wholesale Spec
            </h3>
            <ul className="space-y-space-xs font-body-md text-surface-container-highest text-sm">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    onNavigate({ page: 'home', section: 'wholesale' })
                  }
                  className="hover:text-surface-bright transition-colors text-left cursor-pointer"
                >
                  Wholesale Partnership
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate({ page: 'collections' })}
                  className="hover:text-surface-bright transition-colors text-left cursor-pointer"
                >
                  All Collections
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenEnquire}
                  className="hover:text-surface-bright transition-colors text-left cursor-pointer"
                >
                  Trade Enquiry
                </button>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-surface-bright transition-colors inline-block"
                >
                  WhatsApp Desk
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-space-sm">
            <h3 className="font-label-uppercase text-caption text-secondary tracking-widest uppercase">
              Atelier &amp; Office
            </h3>
            <p className="font-body-md text-surface-container-highest text-sm leading-relaxed">
              Sarafa Bazaar, Lashkar
              <br />
              Gwalior, Madhya Pradesh — 474001
              <br />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary-fixed mt-1 block transition-colors"
              >
                +91 81043 04050
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-variant hover:text-surface-bright mt-1 block transition-colors text-xs"
              >
                @shakuntala_jewellers_gwalior
              </a>
            </p>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-caption text-caption text-on-surface-variant">
          <p>© Shakuntala Jewellers. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px] text-surface-container-highest/60">
            Gwalior Wholesale Silver Ornaments
          </p>
        </div>
      </div>
    </footer>
  );
};
