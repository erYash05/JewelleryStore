import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { ProductCard } from '../components/ProductCard';
import {
  COLLECTIONS,
  getProductsByCategory,
  WHATSAPP_URL,
} from '../data/catalog';
import { CollectionSlug, PageRoute, Product } from '../types/catalog';

interface CollectionsPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenEnquire: (articleName: string, articleCode?: string) => void;
}

const FILTER_TABS: { id: 'all' | CollectionSlug; label: string }[] = [
  { id: 'all', label: 'All Suites' },
  { id: 'silver-bangles', label: 'Silver Bangles' },
  { id: 'silver-bracelets', label: 'Silver Bracelets' },
  { id: 'silver-necklaces', label: 'Silver Necklaces' },
  { id: 'silver-earrings', label: 'Silver Earrings' },
  { id: 'traditional-silver-ornaments', label: 'Traditional Ornaments' },
];

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onNavigate,
  onOpenEnquire,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | CollectionSlug>('all');

  const handleOpenProduct = (code: string) => {
    onNavigate({ page: 'product', code });
  };

  const handleEnquireProduct = (product: Product) => {
    onOpenEnquire(product.name, product.code);
  };

  const visibleCollections =
    activeFilter === 'all'
      ? COLLECTIONS
      : COLLECTIONS.filter((c) => c.slug === activeFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Top Editorial Header Band */}
      <section className="w-full bg-surface-container-low px-margin md:px-margin-desktop pt-space-lg pb-space-xl">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="space-y-space-sm max-w-3xl">
            <div className="flex items-center gap-space-xs">
              <span className="inline-block w-2 h-2 bg-secondary" />
              <span className="font-label-uppercase text-caption text-secondary uppercase tracking-[0.24em]">
                COLLECTIONS · SARAFA BAZAAR ARCHIVE
              </span>
            </div>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface leading-[0.95] tracking-tight">
              The Silver Collections
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-space-xs font-normal">
              Curated wholesale ornament suites handcrafted in silver for
              discerning retail jewellers across India. Archival precision meets
              timeless high-relief metalsmithing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-space-xs font-caption text-caption text-on-surface-variant">
            <div className="bg-surface-container px-space-md py-space-xs flex items-center gap-space-sm">
              <span className="text-secondary font-label-uppercase">
                GWALIOR ARCHIVE
              </span>
              <span className="text-outline-variant">/</span>
              <span className="uppercase tracking-widest text-[10px]">
                SARAFA BAZAAR
              </span>
            </div>
            <div className="text-[11px] text-on-surface-variant tracking-wider uppercase">
              Wholesale Catalogue • Five Suites
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Editorial Category Filter Bar */}
      <nav className="sticky top-20 z-40 w-full bg-surface/95 backdrop-blur-md px-margin md:px-margin-desktop py-space-sm border-b border-secondary/10">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-space-md whitespace-nowrap min-w-max text-caption font-label-uppercase">
            {FILTER_TABS.map((tab, index) => {
              const isActive = activeFilter === tab.id;
              return (
                <React.Fragment key={tab.id}>
                  <button
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`py-space-xs border-b-2 tracking-widest uppercase transition-colors cursor-pointer ${
                      isActive
                        ? 'text-primary font-medium border-secondary'
                        : 'text-on-surface-variant hover:text-on-surface border-transparent'
                    }`}
                  >
                    {tab.label}
                  </button>
                  {index < FILTER_TABS.length - 1 && (
                    <span className="text-outline-variant select-none">•</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-space-sm text-caption font-label-uppercase text-secondary tracking-widest uppercase">
            <span className="material-symbols-outlined text-[15px]">
              diamond
            </span>
            <span>Wholesale Trade Only</span>
          </div>
        </div>
      </nav>

      {/* Main Catalog Content Container */}
      <div className="w-full px-margin md:px-margin-desktop py-space-xl space-y-space-xl max-w-screen-2xl mx-auto">
        {visibleCollections.map((collection) => {
          const items = getProductsByCategory(collection.slug);
          const isBraceletsSpread = collection.slug === 'silver-bracelets';
          const isEarringsSpread = collection.slug === 'silver-earrings';

          return (
            <FadeIn key={collection.slug}>
              <section className="category-section space-y-space-lg">
                {/* Section Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md bg-surface-container-low p-space-lg">
                  <div className="space-y-space-xs max-w-2xl">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-uppercase text-caption text-secondary uppercase tracking-[0.2em]">
                        {collection.archiveNumber}
                      </span>
                      <span className="text-secondary/40 font-caption">|</span>
                      <span className="font-label-uppercase text-[11px] text-on-surface-variant uppercase tracking-widest">
                        {collection.seriesTag}
                      </span>
                    </div>
                    <h2
                      onClick={() =>
                        onNavigate({ page: 'category', slug: collection.slug })
                      }
                      className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-none cursor-pointer hover:text-secondary transition-colors"
                    >
                      {collection.title}
                    </h2>
                    <p className="font-body-md text-on-surface-variant font-normal">
                      {collection.collectionsCaption}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onNavigate({ page: 'category', slug: collection.slug })
                    }
                    className="inline-flex items-center gap-space-xs font-label-uppercase text-label-uppercase text-secondary group cursor-pointer shrink-0"
                  >
                    <span className="tracking-widest uppercase">
                      View All {collection.shortTitle}
                    </span>
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>

                {/* Layout Variant A: Asymmetrical 5-Col Feature + 7-Col 3-Card Stack (Bracelets) */}
                {isBraceletsSpread && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
                    <div
                      onClick={() =>
                        onNavigate({ page: 'category', slug: collection.slug })
                      }
                      className="lg:col-span-5 bg-surface-container-high overflow-hidden relative group min-h-[480px] cursor-pointer"
                    >
                      <ImageWithFallback
                        src={collection.collectionsLeadImage}
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent flex flex-col justify-end p-space-md text-surface">
                        <span className="font-label-uppercase text-caption text-secondary-fixed tracking-widest uppercase">
                          {collection.collectionsBannerSubtitle}
                        </span>
                        <p className="font-display-lg text-headline-sm text-surface-bright">
                          {collection.collectionsBannerTitle}
                        </p>
                        <p className="font-caption text-surface-dim text-xs mt-1">
                          {collection.collectionsBannerNote}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
                      {items.slice(0, 3).map((item) => (
                        <ProductCard
                          key={item.code}
                          product={item}
                          variant="collections"
                          onOpenProduct={handleOpenProduct}
                          onEnquire={handleEnquireProduct}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Layout Variant B: Asymmetrical 4-Col Feature + 8-Col 3-Card Stack (Earrings) */}
                {isEarringsSpread && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
                    <div
                      onClick={() =>
                        onNavigate({ page: 'category', slug: collection.slug })
                      }
                      className="lg:col-span-4 bg-surface-container-high overflow-hidden relative group min-h-[460px] cursor-pointer"
                    >
                      <ImageWithFallback
                        src={collection.collectionsLeadImage}
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent flex flex-col justify-end p-space-md text-surface">
                        <span className="font-label-uppercase text-caption text-secondary-fixed tracking-widest uppercase">
                          {collection.collectionsBannerSubtitle}
                        </span>
                        <p className="font-display-lg text-headline-sm text-surface-bright">
                          {collection.collectionsBannerTitle}
                        </p>
                        <p className="font-caption text-surface-dim text-xs mt-1">
                          {collection.collectionsBannerNote}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
                      {items.slice(0, 3).map((item) => (
                        <ProductCard
                          key={item.code}
                          product={item}
                          variant="collections"
                          onOpenProduct={handleOpenProduct}
                          onEnquire={handleEnquireProduct}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Layout Variant C: Wide 21:9 Lead Hero + 4-Column Product Grid (Bangles, Necklaces, Traditional) */}
                {!isBraceletsSpread && !isEarringsSpread && (
                  <>
                    <div
                      onClick={() =>
                        onNavigate({ page: 'category', slug: collection.slug })
                      }
                      className="relative w-full aspect-[21/9] overflow-hidden bg-surface-container-high group cursor-pointer"
                    >
                      <ImageWithFallback
                        src={collection.collectionsLeadImage}
                        alt={collection.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent p-space-md flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-sm text-surface">
                        <div>
                          <span className="font-label-uppercase text-caption tracking-widest uppercase text-secondary-fixed">
                            {collection.collectionsBannerSubtitle}
                          </span>
                          <p className="font-display-lg text-headline-sm text-surface-bright">
                            {collection.collectionsBannerTitle}
                          </p>
                        </div>
                        <span className="font-label-uppercase text-caption text-surface-dim uppercase tracking-wider">
                          {collection.collectionsBannerNote}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
                      {items.slice(0, 4).map((item) => (
                        <ProductCard
                          key={item.code}
                          product={item}
                          variant="collections"
                          onOpenProduct={handleOpenProduct}
                          onEnquire={handleEnquireProduct}
                        />
                      ))}
                    </div>
                  </>
                )}
              </section>
            </FadeIn>
          );
        })}
      </div>

      {/* Wholesale Inquiry Consultation Banner */}
      <FadeIn>
        <section className="w-full bg-primary-container text-surface-container-low px-margin md:px-margin-desktop py-space-xl">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-8 space-y-space-sm">
              <span className="font-label-uppercase text-caption text-secondary uppercase tracking-[0.24em]">
                B2B PARTNERSHIP LEDGER
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-surface-container-lowest leading-tight">
                Request Wholesale Catalogue &amp; Trade Enquiries
              </h2>
              <p className="font-body-lg text-surface-variant max-w-2xl font-normal">
                Shakuntala Jewellers works directly with retail showrooms and
                jewellery merchants from our wholesale office in Sarafa Bazaar,
                Gwalior.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm">
              <button
                type="button"
                onClick={() => onOpenEnquire('Wholesale Catalogue Request')}
                className="px-space-md py-space-md bg-secondary text-on-secondary font-label-uppercase text-label-uppercase text-center uppercase tracking-widest hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors cursor-pointer"
              >
                Submit Wholesale Enquiry
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-md py-space-md bg-transparent border border-surface-container-highest/20 text-surface-container-lowest font-label-uppercase text-label-uppercase text-center uppercase tracking-widest hover:bg-surface-container-lowest hover:text-primary transition-colors"
              >
                Chat on WhatsApp (+91 81043 04050)
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};
