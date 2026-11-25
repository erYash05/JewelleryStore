import React, { useEffect, useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ImageWithFallback } from '../components/ImageWithFallback';
import {
  getComplementaryProducts,
  getProductByCode,
  WHATSAPP_URL,
} from '../data/catalog';
import { PageRoute } from '../types/catalog';

interface ProductDetailPageProps {
  code: string;
  onNavigate: (route: PageRoute) => void;
  onOpenEnquire: (articleName: string, articleCode?: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  code,
  onNavigate,
  onOpenEnquire,
}) => {
  const product = getProductByCode(code);
  const complementary = getComplementaryProducts(product.code);
  const [selectedImage, setSelectedImage] = useState<string>(
    product.galleryImages[0] ?? product.image
  );

  useEffect(() => {
    setSelectedImage(product.galleryImages[0] ?? product.image);
  }, [product]);

  return (
    <div className="flex flex-col w-full">
      {/* Specimen Archival Navigation Breadcrumb Bar */}
      <div className="w-full bg-surface-container-low px-margin md:px-margin-desktop py-space-sm">
        <div className="flex flex-wrap items-center justify-between gap-y-2 max-w-7xl mx-auto">
          <div className="flex items-center gap-space-sm font-label-uppercase text-caption text-on-surface-variant">
            <button
              type="button"
              onClick={() => onNavigate({ page: 'collections' })}
              className="hover:text-secondary transition-colors uppercase tracking-[0.2em] cursor-pointer"
            >
              Archive
            </button>
            <span className="text-secondary/40">/</span>
            <button
              type="button"
              onClick={() =>
                onNavigate({ page: 'category', slug: product.categorySlug })
              }
              className="hover:text-secondary transition-colors uppercase tracking-[0.2em] cursor-pointer"
            >
              {product.categoryName}
            </button>
            <span className="text-secondary/40">/</span>
            <span className="text-on-surface font-semibold uppercase tracking-[0.2em]">
              {product.code} ({product.name})
            </span>
          </div>

          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5 font-label-uppercase text-caption text-secondary tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Master Specimen
            </span>
            <span className="text-secondary/30">|</span>
            <span className="font-label-uppercase text-caption text-on-surface-variant tracking-widest uppercase">
              Sarafa Bazaar Archive
            </span>
          </div>
        </div>
      </div>

      {/* Main Product Detail Dossier Section */}
      <section className="w-full px-margin md:px-margin-desktop py-space-md md:py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter md:gap-gutter-desktop items-start">
          {/* Left Editorial Gallery (Col 1-7) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-space-md items-start">
            {/* Vertical Thumbnails Column */}
            <div className="flex md:flex-col gap-space-sm w-full md:w-20 shrink-0">
              {product.galleryImages.map((imgUrl, idx) => {
                const isSelected = selectedImage === imgUrl;
                return (
                  <button
                    key={`${product.code}-thumb-${idx}`}
                    type="button"
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`group relative aspect-square w-16 md:w-full bg-surface-container-high overflow-hidden focus:outline-none transition-all cursor-pointer ${
                      isSelected
                        ? 'ring-1 ring-secondary/70 opacity-100'
                        : 'opacity-80 hover:opacity-100 ring-1 ring-transparent hover:ring-secondary/40'
                    }`}
                    aria-label={`View angle ${idx + 1} of ${product.name}`}
                  >
                    <ImageWithFallback
                      src={imgUrl}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                );
              })}

              <div className="hidden md:flex flex-col items-center justify-center p-2 bg-surface-container-low aspect-square text-center">
                <span className="material-symbols-outlined text-secondary text-base">
                  diamond
                </span>
                <span className="font-label-uppercase text-[9px] text-secondary tracking-widest uppercase mt-1 leading-tight">
                  GWALIOR ATELIER
                </span>
              </div>
            </div>

            {/* Primary Hero Photograph Canvas */}
            <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden group">
              <ImageWithFallback
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
                <span className="font-label-uppercase text-caption text-on-surface tracking-[0.2em] uppercase font-semibold">
                  {product.code}
                </span>
                <span className="text-secondary/40">·</span>
                <span className="font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
                  LASHKAR ATELIER
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm px-2.5 py-1 text-on-surface-variant flex items-center gap-1.5 pointer-events-none">
                <span className="material-symbols-outlined text-[14px]">
                  zoom_in
                </span>
                <span className="font-label-uppercase text-[10px] tracking-wider uppercase">
                  Editorial Macro
                </span>
              </div>
            </div>
          </div>

          {/* Right Specimen Dossier (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low px-4 py-2">
              <span className="font-label-uppercase text-caption text-secondary tracking-[0.24em] uppercase font-medium">
                CATEGORY: {product.categoryName}
              </span>
              <span className="font-label-uppercase text-caption text-on-surface tracking-[0.24em] font-semibold uppercase">
                CODE: {product.code}
              </span>
            </div>

            <h1 className="font-display-lg text-display-lg text-on-surface leading-none tracking-tight mb-space-sm">
              {product.name}
            </h1>

            <div className="flex items-center gap-space-xs font-label-uppercase text-caption text-on-surface-variant tracking-[0.2em] uppercase mb-space-md">
              <span>{product.originSubtitle}</span>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-lg">
              {product.fullDescription}
            </p>

            {/* Technical Specification Ledger Table */}
            <div className="bg-surface-container mb-space-lg p-space-md">
              <div className="flex items-center justify-between pb-space-xs mb-space-xs">
                <h2 className="font-label-uppercase text-caption text-secondary tracking-[0.22em] uppercase font-semibold">
                  Wholesale Spec Ledger
                </h2>
                <span className="font-label-uppercase text-[10px] text-on-surface-variant tracking-widest uppercase">
                  Ref: {product.code}
                </span>
              </div>
              <dl className="space-y-space-xs font-body-md text-sm">
                <div className="flex justify-between py-1.5 items-baseline gap-4">
                  <dt className="font-label-uppercase text-caption text-on-surface-variant uppercase tracking-wider shrink-0">
                    Material
                  </dt>
                  <dd className="text-right text-on-surface-variant italic">
                    {product.specMaterial}
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 items-baseline gap-4">
                  <dt className="font-label-uppercase text-caption text-on-surface-variant uppercase tracking-wider shrink-0">
                    Dimensions &amp; Gauge
                  </dt>
                  <dd className="text-right text-on-surface-variant italic">
                    {product.specDimensions}
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 items-baseline gap-4">
                  <dt className="font-label-uppercase text-caption text-on-surface-variant uppercase tracking-wider shrink-0">
                    Minimum Order Volume
                  </dt>
                  <dd className="text-right text-on-surface-variant italic">
                    {product.specMinimumOrder}
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 items-baseline gap-4">
                  <dt className="font-label-uppercase text-caption text-on-surface-variant uppercase tracking-wider shrink-0">
                    Dispatch
                  </dt>
                  <dd className="text-right text-on-surface">
                    {product.specDispatch}
                  </dd>
                </div>
                <div className="flex justify-between py-1.5 items-baseline gap-4">
                  <dt className="font-label-uppercase text-caption text-on-surface-variant uppercase tracking-wider shrink-0">
                    Finish &amp; Craft
                  </dt>
                  <dd className="text-right text-on-surface">
                    {product.specFinish}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Action Suite */}
            <div className="flex flex-col sm:flex-row gap-space-sm mb-space-md">
              <button
                type="button"
                onClick={() => onOpenEnquire(product.name, product.code)}
                className="flex-1 inline-flex items-center justify-center px-space-lg py-space-md bg-primary text-on-primary font-label-uppercase text-label-uppercase tracking-[0.2em] uppercase hover:bg-secondary transition-colors duration-200 text-center cursor-pointer"
              >
                Enquire for Wholesale (Pre-fill {product.code})
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-space-md py-space-md bg-surface-container-high text-on-surface font-label-uppercase text-label-uppercase tracking-[0.16em] uppercase hover:bg-surface-container-highest transition-colors duration-200 text-center"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  chat
                </span>
                <span>WhatsApp this Piece (+91 81043 04050)</span>
              </a>
            </div>

            {/* B2B Registry Notice Banner */}
            <div className="bg-surface-container-low p-space-md flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                lock
              </span>
              <div className="space-y-1">
                <span className="font-label-uppercase text-caption text-secondary tracking-widest uppercase block font-medium">
                  B2B Trade Protocol Notice
                </span>
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                  Wholesale pricing and trade specifications are shared directly
                  with retail jewellers and wholesale buyers upon enquiry.
                </p>
              </div>
            </div>

            {/* Ancillary Specimen Tiles */}
            <div className="grid grid-cols-3 gap-space-sm pt-space-md text-center">
              <div className="p-space-xs bg-surface-container-lowest">
                <span className="font-label-uppercase text-[10px] text-secondary uppercase tracking-widest block font-medium">
                  Wholesale Only
                </span>
                <span className="font-caption text-[11px] text-on-surface-variant block mt-0.5">
                  Trade Accounts
                </span>
              </div>
              <div className="p-space-xs bg-surface-container-lowest">
                <span className="font-label-uppercase text-[10px] text-secondary uppercase tracking-widest block font-medium">
                  Gwalior House
                </span>
                <span className="font-caption text-[11px] text-on-surface-variant block mt-0.5">
                  Sarafa Bazaar
                </span>
              </div>
              <div className="p-space-xs bg-surface-container-lowest">
                <span className="font-label-uppercase text-[10px] text-secondary uppercase tracking-widest block font-medium">
                  Custom Orders
                </span>
                <span className="font-caption text-[11px] text-on-surface-variant block mt-0.5">
                  Upon Enquiry
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section Divider */}
      <div className="w-full px-margin md:px-margin-desktop py-space-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-space-md">
          <span className="h-[1px] flex-1 bg-surface-container-high" />
          <span className="font-label-uppercase text-caption text-secondary uppercase tracking-[0.3em] shrink-0">
            COMPLEMENTARY CATALOGUE SPECIMENS
          </span>
          <span className="h-[1px] flex-1 bg-surface-container-high" />
        </div>
      </div>

      {/* Curated Line Harmonizations (You May Also Like) */}
      <FadeIn>
        <section className="w-full px-margin md:px-margin-desktop pb-space-xl bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-baseline justify-between mb-space-lg">
              <div>
                <span className="font-label-uppercase text-caption text-secondary tracking-[0.24em] uppercase block">
                  ARCHIVAL ACQUISITIONS
                </span>
                <h2 className="font-display-lg text-headline-md text-on-surface">
                  Curated Line Harmonizations
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate({ page: 'collections' })}
                className="font-label-uppercase text-caption text-on-surface-variant hover:text-secondary uppercase tracking-widest transition-colors mt-2 sm:mt-0 cursor-pointer"
              >
                View Complete Ledger →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
              {complementary.map((item) => (
                <article
                  key={item.code}
                  onClick={() =>
                    onNavigate({ page: 'product', code: item.code })
                  }
                  className="group flex flex-col bg-surface-container-low transition-colors duration-300 cursor-pointer"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-surface-container-high">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 px-2.5 py-1">
                      <span className="font-label-uppercase text-[10px] text-secondary tracking-widest uppercase font-semibold">
                        {item.categoryName}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-surface/90 px-2 py-0.5">
                      <span className="font-label-uppercase text-[9px] text-on-surface-variant tracking-wider uppercase">
                        {item.code}
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md flex flex-col flex-1 justify-between">
                    <div>
                      <span className="font-label-uppercase text-[10px] text-secondary uppercase tracking-widest block mb-1">
                        {item.classification}
                      </span>
                      <h3 className="font-display-lg text-headline-sm text-on-surface group-hover:text-secondary transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-body-md text-xs text-on-surface-variant mt-2 leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                    <div className="mt-space-md pt-space-sm flex items-center justify-between">
                      <span className="font-label-uppercase text-[10px] text-on-surface-variant tracking-wider uppercase">
                        {item.code}
                      </span>
                      <span className="font-label-uppercase text-caption text-secondary uppercase tracking-widest group-hover:underline">
                        Inspect Specimen →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};
