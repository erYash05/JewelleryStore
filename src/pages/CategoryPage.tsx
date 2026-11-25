import React, { useEffect, useMemo, useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ProductCard } from '../components/ProductCard';
import {
  getCollectionBySlug,
  getProductsByCategory,
  WHATSAPP_URL,
} from '../data/catalog';
import { CollectionSlug, PageRoute, Product } from '../types/catalog';

interface CategoryPageProps {
  slug: CollectionSlug;
  onNavigate: (route: PageRoute) => void;
  onOpenEnquire: (articleName: string, articleCode?: string) => void;
}

type SortOrder = 'curation' | 'code-asc' | 'code-desc';

export const CategoryPage: React.FC<CategoryPageProps> = ({
  slug,
  onNavigate,
  onOpenEnquire,
}) => {
  const collection = getCollectionBySlug(slug);
  const categoryProducts = getProductsByCategory(slug);

  const [subFilter, setSubFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('curation');
  const [compactGrid, setCompactGrid] = useState<boolean>(false);

  useEffect(() => {
    setSubFilter('all');
    setSortOrder('curation');
  }, [slug]);

  const filteredProducts = useMemo(() => {
    const base =
      subFilter === 'all'
        ? categoryProducts
        : categoryProducts.filter((p) => p.subCategory === subFilter);

    const list = [...base];
    if (sortOrder === 'code-asc') {
      list.sort((a, b) => a.code.localeCompare(b.code));
    } else if (sortOrder === 'code-desc') {
      list.sort((a, b) => b.code.localeCompare(a.code));
    }
    return list;
  }, [categoryProducts, subFilter, sortOrder]);

  const handleOpenProduct = (code: string) => {
    onNavigate({ page: 'product', code });
  };

  const handleEnquireProduct = (product: Product) => {
    onOpenEnquire(product.name, product.code);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Archival Notice Strip */}
      <section className="w-full bg-surface-container-high py-space-xs px-margin md:px-margin-desktop">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-on-surface-variant font-label-uppercase text-caption tracking-widest gap-2">
          <div className="flex items-center gap-space-sm">
            <span className="inline-block w-1.5 h-1.5 bg-secondary" />
            <span className="text-secondary font-medium">
              GWALIOR SARAFA ARCHIVE
            </span>
            <span className="text-on-surface-variant/40">/</span>
            <span>SARAFA BAZAAR, LASHKAR</span>
          </div>
          <div className="flex items-center gap-space-md">
            <span>WHOLESALE SILVER CATALOGUE</span>
            <span className="text-on-surface-variant/40">|</span>
            <span className="text-secondary uppercase">
              DIRECT ATELIER DISPATCH
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Hero Banner with Atmospheric Overlay */}
      <section className="relative w-full overflow-hidden bg-primary-container min-h-[460px] md:min-h-[520px] flex items-end">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${collection.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/75 to-primary-container/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/50 to-transparent" />

        <div className="relative z-10 w-full px-margin md:px-margin-desktop py-space-xl max-w-7xl mx-auto flex flex-col justify-end">
          {/* Archival Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-surface-variant/70 font-label-uppercase text-caption mb-space-md"
          >
            <button
              type="button"
              onClick={() => onNavigate({ page: 'home' })}
              className="hover:text-surface-container-lowest transition-colors uppercase cursor-pointer"
            >
              Home
            </button>
            <span className="text-secondary/70">/</span>
            <button
              type="button"
              onClick={() => onNavigate({ page: 'collections' })}
              className="hover:text-surface-container-lowest transition-colors uppercase cursor-pointer"
            >
              Collections
            </button>
            <span className="text-secondary/70">/</span>
            <span className="text-secondary font-medium tracking-widest uppercase">
              {collection.title}
            </span>
          </nav>

          <div className="max-w-3xl space-y-space-sm">
            <div className="inline-flex items-center gap-2 bg-surface-container-lowest/10 backdrop-blur-sm px-3 py-1 text-surface-container-lowest font-label-uppercase text-[11px] tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {collection.romanIndex} • {collection.seriesTag}
            </div>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-surface-container-lowest font-normal tracking-tight leading-none">
              {collection.title}
            </h1>
            <p className="font-body-lg text-body-md md:text-body-lg text-surface-container-highest max-w-2xl font-light leading-relaxed">
              {collection.heroSubtitle}
            </p>
          </div>

          {/* Quick Metrics Ledger Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-lg pt-space-md border-t border-surface-container-highest/15 max-w-3xl">
            <div>
              <span className="font-label-uppercase text-[10px] text-surface-variant/70 block uppercase tracking-widest">
                Suite
              </span>
              <span className="font-display-lg text-headline-sm text-surface-container-lowest">
                {collection.shortTitle}
              </span>
            </div>
            <div>
              <span className="font-label-uppercase text-[10px] text-surface-variant/70 block uppercase tracking-widest">
                Sample Designs
              </span>
              <span className="font-display-lg text-headline-sm text-surface-container-lowest">
                {categoryProducts.length} Pieces
              </span>
            </div>
            <div>
              <span className="font-label-uppercase text-[10px] text-surface-variant/70 block uppercase tracking-widest">
                Order Mode
              </span>
              <span className="font-display-lg text-headline-sm text-surface-container-lowest">
                Wholesale Only
              </span>
            </div>
            <div>
              <span className="font-label-uppercase text-[10px] text-surface-variant/70 block uppercase tracking-widest">
                Atelier
              </span>
              <span className="font-display-lg text-headline-sm text-secondary">
                Gwalior, MP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter & Ledger Controls Bar */}
      <section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          {/* Sub-category Filters */}
          <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-1">
            <button
              type="button"
              onClick={() => setSubFilter('all')}
              className={`font-label-uppercase text-caption uppercase px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                subFilter === 'all'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
            >
              All ({String(categoryProducts.length).padStart(2, '0')})
            </button>

            {collection.subFilters.map((filter) => (
              <React.Fragment key={filter.id}>
                <span className="text-secondary/40 font-light select-none">
                  |
                </span>
                <button
                  type="button"
                  onClick={() => setSubFilter(filter.id)}
                  className={`font-label-uppercase text-caption uppercase px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                    subFilter === filter.id
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {filter.label}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Sorting & Grid Toggle */}
          <div className="flex items-center justify-between sm:justify-end gap-space-md">
            <div className="flex items-center gap-2">
              <label
                htmlFor="sort-select"
                className="font-label-uppercase text-caption text-secondary uppercase tracking-widest hidden sm:inline"
              >
                Sort Order:
              </label>
              <div className="relative">
                <select
                  id="sort-select"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                  className="bg-surface-container-low text-on-surface font-label-uppercase text-caption py-1.5 pl-3 pr-7 border border-secondary/20 focus:outline-none focus:border-secondary cursor-pointer uppercase appearance-none"
                >
                  <option value="curation">Atelier Curation</option>
                  <option value="code-asc">Reference Code (Ascending)</option>
                  <option value="code-desc">Reference Code (Descending)</option>
                </select>
                <span className="material-symbols-outlined text-[14px] text-secondary absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1 pl-space-sm border-l border-secondary/20">
              <button
                type="button"
                onClick={() => setCompactGrid(false)}
                className={`p-1.5 transition-colors cursor-pointer ${
                  !compactGrid
                    ? 'text-primary bg-surface-container'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
                title="Editorial Grid"
                aria-label="Editorial Grid"
              >
                <span className="material-symbols-outlined text-[18px]">
                  grid_view
                </span>
              </button>
              <button
                type="button"
                onClick={() => setCompactGrid(true)}
                className={`p-1.5 transition-colors cursor-pointer ${
                  compactGrid
                    ? 'text-primary bg-surface-container'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
                title="Compact Grid"
                aria-label="Compact Grid"
              >
                <span className="material-symbols-outlined text-[18px]">
                  view_agenda
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase Catalogue Grid */}
      <FadeIn>
        <section className="w-full px-margin md:px-margin-desktop py-space-xl max-w-7xl mx-auto">
          <div
            className={
              compactGrid
                ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop'
            }
          >
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.code}
                product={item}
                variant="category"
                compact={compactGrid}
                onOpenProduct={handleOpenProduct}
                onEnquire={handleEnquireProduct}
              />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Technical Ledger Overview */}
      <FadeIn>
        <section className="w-full bg-surface-container px-margin md:px-margin-desktop py-space-xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-secondary/20 gap-space-sm">
              <div>
                <span className="font-label-uppercase text-caption text-secondary uppercase tracking-[0.25em]">
                  Atelier Reference
                </span>
                <h2 className="font-display-lg text-headline-md text-on-surface font-normal mt-1">
                  Wholesale Specification Table
                </h2>
              </div>
              <p className="font-body-md text-caption text-on-surface-variant max-w-md">
                Detailed trade specifications, sizing, and pricing terms are
                provided directly upon wholesale enquiry.
              </p>
            </div>

            <div className="overflow-x-auto mt-space-md">
              <table className="w-full text-left font-body-md text-caption border-collapse">
                <thead>
                  <tr className="bg-surface-container-high border-b border-secondary/20 text-on-surface font-label-uppercase text-[10px] tracking-widest uppercase">
                    <th className="py-3 px-4">Article Code</th>
                    <th className="py-3 px-4">Ornament Name</th>
                    <th className="py-3 px-4">Classification</th>
                    <th className="py-3 px-4">Dimensions &amp; Sizing</th>
                    <th className="py-3 px-4">Order Terms</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary/10 bg-surface-container-low">
                  {categoryProducts.slice(0, 4).map((item) => (
                    <tr
                      key={item.code}
                      className="hover:bg-surface-container transition-colors"
                    >
                      <td className="py-3 px-4 font-mono font-medium text-primary">
                        <button
                          type="button"
                          onClick={() => handleOpenProduct(item.code)}
                          className="hover:text-secondary transition-colors cursor-pointer"
                        >
                          {item.code}
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <button
                          type="button"
                          onClick={() => handleOpenProduct(item.code)}
                          className="hover:text-secondary transition-colors text-left cursor-pointer"
                        >
                          {item.name}
                        </button>
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant">
                        {item.classification}
                      </td>
                      <td className="py-3 px-4 text-on-surface-variant italic">
                        [To be supplied]
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-secondary/15 text-secondary px-2 py-0.5 font-semibold uppercase text-[10px] tracking-wider">
                          Wholesale
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleEnquireProduct(item)}
                          className="font-label-uppercase text-[11px] text-secondary hover:text-on-surface uppercase font-medium cursor-pointer"
                        >
                          Request Spec
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Editorial Closing Trade Band */}
      <FadeIn>
        <section className="w-full bg-primary-container text-on-primary px-margin md:px-margin-desktop py-space-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none flex items-center justify-center">
            <span className="font-display-xl text-[240px] select-none text-surface-container-lowest">
              SJ
            </span>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <div className="lg:col-span-8 space-y-space-sm">
              <div className="inline-flex items-center gap-2 border border-secondary/40 px-3 py-1 text-secondary font-label-uppercase text-caption tracking-widest uppercase">
                Workshop B2B Channel
              </div>
              <h2 className="font-display-xl text-headline-md md:text-display-lg text-surface-container-lowest font-normal leading-tight">
                Looking for custom orders or specific regional designs? Direct
                workshop trade access.
              </h2>
              <p className="font-body-md text-body-md text-surface-variant max-w-2xl">
                Connect with our Gwalior office for full catalogue specifications,
                custom wholesale requirements, and showroom partnerships.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-sm justify-center">
              <button
                type="button"
                onClick={() => onOpenEnquire(collection.title)}
                className="w-full py-3.5 px-space-md bg-secondary hover:bg-secondary/90 text-on-secondary font-label-uppercase text-label-uppercase tracking-[0.2em] text-center transition-colors shadow-sm flex items-center justify-center gap-2 uppercase cursor-pointer"
              >
                <span>Send Wholesale Enquiry</span>
                <span className="material-symbols-outlined text-[16px]">
                  mail
                </span>
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-space-md border border-surface-variant/30 hover:border-surface-variant text-surface-container-lowest font-label-uppercase text-label-uppercase tracking-[0.2em] text-center transition-colors flex items-center justify-center gap-2 uppercase"
              >
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  chat
                </span>
                <span>WhatsApp: +91 81043 04050</span>
              </a>

              <div className="text-center pt-2">
                <span className="font-label-uppercase text-[10px] text-surface-variant/60 tracking-widest uppercase">
                  Sarafa Bazaar • Lashkar, Gwalior
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
};
