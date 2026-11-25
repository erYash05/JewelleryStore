import React from 'react';
import { EnquiryForm } from '../components/EnquiryForm';
import { FadeIn } from '../components/FadeIn';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { HOME_IMAGES, INSTAGRAM_URL, WHATSAPP_URL } from '../data/catalog';
import { CollectionSlug, PageRoute } from '../types/catalog';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenEnquire: (articleName: string, articleCode?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquire,
}) => {
  const goCategory = (slug: CollectionSlug) => {
    onNavigate({ page: 'category', slug });
  };

  const goProduct = (code: string) => {
    onNavigate({ page: 'product', code });
  };

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================================
          HERO SECTION: Full Bleed Editorial Campaign
          ========================================================================= */}
      <section className="relative w-full min-h-[92vh] flex items-end justify-start overflow-hidden bg-primary -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={HOME_IMAGES.hero}
            alt="Shakuntala Jewellers Wholesale Silver Ornaments"
            className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.78]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        <div className="relative z-10 w-full px-margin md:px-margin-desktop pb-16 md:pb-24 pt-32 max-w-7xl">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-secondary-fixed" />
              <span className="font-label-uppercase text-caption text-secondary-fixed tracking-[0.28em] uppercase">
                WHOLESALE SILVER ORNAMENTS • GWALIOR
              </span>
            </div>

            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-surface-container-lowest font-normal leading-[1.08] tracking-[-0.015em]">
              The Art of Silver.
              <br />
              <em className="font-display-xl italic font-light text-secondary-fixed">
                Crafted to Inspire.
              </em>
            </h1>

            <p className="font-body-lg text-body-lg text-surface-container-high/90 max-w-xl font-light leading-relaxed">
              Discover an exquisite collection of silver ornaments designed for
              timeless elegance. Curated trade access for jewelers and purveyors
              across India.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#collections-anchor"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('collections-anchor')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-secondary text-primary font-label-uppercase text-label-uppercase tracking-[0.2em] font-medium transition-colors hover:bg-secondary-fixed duration-150 inline-block text-center uppercase"
              >
                Explore Collections
              </a>
              <a
                href="#wholesale-section"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('wholesale-section')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 font-label-uppercase text-label-uppercase tracking-[0.2em] text-surface-bright py-2 border-b border-secondary/60 hover:border-secondary-fixed transition-colors uppercase"
              >
                <span>Wholesale Enquiries</span>
                <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-margin md:right-margin-desktop z-10 hidden sm:flex flex-col items-center gap-3">
          <span className="font-label-uppercase text-[10px] text-surface-container-highest/70 tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-secondary/30 relative overflow-hidden">
            <div className="w-full h-1/2 bg-secondary animate-pulse" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          01 — COLLECTIONS: Editorial Asymmetric Collage
          ========================================================================= */}
      <FadeIn>
        <section
          className="w-full bg-surface py-24 md:py-32 px-margin md:px-margin-desktop"
          id="collections-anchor"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-secondary/20">
            <div>
              <span className="font-label-uppercase text-caption text-secondary tracking-[0.26em] uppercase block mb-3">
                01 — ARCHIVAL PORTFOLIO
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-normal">
                Explore the Collections
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 mt-4 md:mt-0">
              <p className="font-body-md text-on-surface-variant max-w-sm leading-relaxed md:text-right">
                Five sovereign lines sculpted in silver, reflecting Sarafa
                Bazaar&apos;s traditional craftsmanship.
              </p>
              <button
                type="button"
                onClick={() => onNavigate({ page: 'collections' })}
                className="font-label-uppercase text-caption text-secondary hover:text-on-surface uppercase tracking-[0.2em] border-b border-secondary/40 pb-0.5 transition-colors cursor-pointer"
              >
                View All Collections →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
            {/* 1. Silver Bangles (Span 7) */}
            <div className="md:col-span-7 group relative bg-surface-container-low overflow-hidden border border-secondary/15 flex flex-col justify-between">
              <div
                onClick={() => goCategory('silver-bangles')}
                className="relative overflow-hidden aspect-[16/10] w-full cursor-pointer"
              >
                <ImageWithFallback
                  src={HOME_IMAGES.banglesFeature}
                  alt="Handcrafted Silver Bangles and Kadas"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
                <span className="absolute top-4 left-4 bg-primary text-surface-container-lowest font-label-uppercase text-[10px] tracking-[0.2em] px-2.5 py-1">
                  COLLECTION I
                </span>
              </div>
              <div className="p-8 flex items-baseline justify-between gap-4 bg-surface-container-low">
                <div>
                  <h3
                    onClick={() => goCategory('silver-bangles')}
                    className="font-display-lg text-headline-md text-on-surface font-normal cursor-pointer hover:text-secondary transition-colors"
                  >
                    Silver Bangles &amp; Kadas
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">
                    Intricate hand-engraved broad cuffs &amp; traditional sets.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goCategory('silver-bangles')}
                  className="group/btn inline-flex items-center gap-2 font-label-uppercase text-label-uppercase text-secondary hover:text-on-surface transition-colors py-1 border-b border-secondary/40 hover:border-secondary shrink-0 uppercase cursor-pointer"
                >
                  <span>View collection</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                    north_east
                  </span>
                </button>
              </div>
            </div>

            {/* 2. Silver Bracelets (Span 5, Portrait) */}
            <div className="md:col-span-5 group relative bg-surface-container-low overflow-hidden border border-secondary/15 flex flex-col justify-between">
              <div
                onClick={() => goCategory('silver-bracelets')}
                className="relative overflow-hidden aspect-[4/5] w-full cursor-pointer"
              >
                <ImageWithFallback
                  src={HOME_IMAGES.braceletsFeature}
                  alt="Silver Fluid Bracelets"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
                <span className="absolute top-4 left-4 bg-primary text-surface-container-lowest font-label-uppercase text-[10px] tracking-[0.2em] px-2.5 py-1">
                  COLLECTION II
                </span>
              </div>
              <div className="p-8 flex items-baseline justify-between gap-4 bg-surface-container-low">
                <div>
                  <h3
                    onClick={() => goCategory('silver-bracelets')}
                    className="font-display-lg text-headline-md text-on-surface font-normal cursor-pointer hover:text-secondary transition-colors"
                  >
                    Silver Bracelets
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">
                    Articulated links, sculpted bands, and fluid wrist ornaments.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goCategory('silver-bracelets')}
                  className="group/btn inline-flex items-center gap-2 font-label-uppercase text-label-uppercase text-secondary hover:text-on-surface transition-colors py-1 border-b border-secondary/40 hover:border-secondary shrink-0 uppercase cursor-pointer"
                >
                  <span>View collection</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                    north_east
                  </span>
                </button>
              </div>
            </div>

            {/* 3. Silver Necklaces (Span 5, Portrait) */}
            <div className="md:col-span-5 group relative bg-surface-container-low overflow-hidden border border-secondary/15 flex flex-col justify-between">
              <div
                onClick={() => goCategory('silver-necklaces')}
                className="relative overflow-hidden aspect-[4/5] w-full cursor-pointer"
              >
                <ImageWithFallback
                  src={HOME_IMAGES.necklacesFeature}
                  alt="Sculpted Silver Necklaces and Chokers"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
                <span className="absolute top-4 left-4 bg-primary text-surface-container-lowest font-label-uppercase text-[10px] tracking-[0.2em] px-2.5 py-1">
                  COLLECTION III
                </span>
              </div>
              <div className="p-8 flex items-baseline justify-between gap-4 bg-surface-container-low">
                <div>
                  <h3
                    onClick={() => goCategory('silver-necklaces')}
                    className="font-display-lg text-headline-md text-on-surface font-normal cursor-pointer hover:text-secondary transition-colors"
                  >
                    Silver Necklaces
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">
                    Torques, collars, and traditional layered chokers.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goCategory('silver-necklaces')}
                  className="group/btn inline-flex items-center gap-2 font-label-uppercase text-label-uppercase text-secondary hover:text-on-surface transition-colors py-1 border-b border-secondary/40 hover:border-secondary shrink-0 uppercase cursor-pointer"
                >
                  <span>View collection</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                    north_east
                  </span>
                </button>
              </div>
            </div>

            {/* 4. Silver Earrings (Span 7) */}
            <div className="md:col-span-7 group relative bg-surface-container-low overflow-hidden border border-secondary/15 flex flex-col justify-between">
              <div
                onClick={() => goCategory('silver-earrings')}
                className="relative overflow-hidden aspect-[16/10] w-full cursor-pointer"
              >
                <ImageWithFallback
                  src={HOME_IMAGES.earringsFeature}
                  alt="Minimalist Silver Earrings"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
                <span className="absolute top-4 left-4 bg-primary text-surface-container-lowest font-label-uppercase text-[10px] tracking-[0.2em] px-2.5 py-1">
                  COLLECTION IV
                </span>
              </div>
              <div className="p-8 flex items-baseline justify-between gap-4 bg-surface-container-low">
                <div>
                  <h3
                    onClick={() => goCategory('silver-earrings')}
                    className="font-display-lg text-headline-md text-on-surface font-normal cursor-pointer hover:text-secondary transition-colors"
                  >
                    Silver Earrings &amp; Jhumkas
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">
                    Chandbalis, droplets, studs, and filigree hanging accents.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goCategory('silver-earrings')}
                  className="group/btn inline-flex items-center gap-2 font-label-uppercase text-label-uppercase text-secondary hover:text-on-surface transition-colors py-1 border-b border-secondary/40 hover:border-secondary shrink-0 uppercase cursor-pointer"
                >
                  <span>View collection</span>
                  <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                    north_east
                  </span>
                </button>
              </div>
            </div>

            {/* 5. Traditional Silver Ornaments (Span 12, Wide Banner) */}
            <div className="md:col-span-12 group relative bg-surface-container-low overflow-hidden border border-secondary/15">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div
                  onClick={() => goCategory('traditional-silver-ornaments')}
                  className="lg:col-span-7 relative overflow-hidden aspect-[16/8] lg:aspect-auto lg:h-[340px] cursor-pointer"
                >
                  <ImageWithFallback
                    src={HOME_IMAGES.hero}
                    alt="Traditional Gwalior Silver Ornaments"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-primary/15" />
                </div>
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-4">
                  <span className="font-label-uppercase text-caption text-secondary tracking-[0.24em] uppercase">
                    COLLECTION V • HERITAGE SPECIALTY
                  </span>
                  <h3
                    onClick={() => goCategory('traditional-silver-ornaments')}
                    className="font-display-lg text-headline-md lg:text-display-lg-mobile text-on-surface font-normal cursor-pointer hover:text-secondary transition-colors"
                  >
                    Traditional Silver Ornaments
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Payals, haslis, waist ornaments, and ceremonial articles
                    handcrafted using traditional repoussé and silversmithing
                    methods.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => goCategory('traditional-silver-ornaments')}
                      className="px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary font-label-uppercase text-label-uppercase tracking-[0.2em] transition-colors uppercase cursor-pointer"
                    >
                      View Collection →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =========================================================================
          02 — FEATURED PIECES (Deep Charcoal #1C1B1A Gallery)
          ========================================================================= */}
      <FadeIn>
        <section className="w-full bg-primary-container text-surface-container-lowest py-24 md:py-32 px-margin md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-surface-container-highest/15">
            <div>
              <span className="font-label-uppercase text-caption text-secondary-fixed tracking-[0.28em] uppercase block mb-3">
                02 — CURATED SELECTION
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-surface-container-lowest font-normal">
                Wholesale Highlights
              </h2>
            </div>
            <p className="font-body-md text-surface-variant max-w-md mt-4 md:mt-0 leading-relaxed">
              Specimen articles available for wholesale procurement. Direct
              from our Gwalior atelier.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            {/* Left: Major Statement Article */}
            <div className="lg:col-span-7 bg-primary border border-surface-container-highest/10 p-8 md:p-10 flex flex-col">
              <div
                onClick={() => goProduct('SJ-N-201')}
                className="relative overflow-hidden aspect-[4/5] w-full bg-inverse-surface/30 mb-8 cursor-pointer group"
              >
                <ImageWithFallback
                  src={HOME_IMAGES.necklacesFeature}
                  alt="Kalyan Sculpted Choker SJ-N-201"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary-container/90 px-3 py-1 text-secondary-fixed font-label-uppercase text-[11px] tracking-[0.2em]">
                  REF: SJ-N-201
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-surface-container-highest/10 pb-4">
                  <h3
                    onClick={() => goProduct('SJ-N-201')}
                    className="font-display-lg text-headline-md text-surface-container-lowest font-normal cursor-pointer hover:text-secondary-fixed transition-colors"
                  >
                    Kalyan Sculpted Choker
                  </h3>
                  <span className="font-label-uppercase text-caption text-secondary-fixed tracking-widest">
                    MASTER ATELIER
                  </span>
                </div>
                <p className="font-body-md text-surface-variant leading-relaxed">
                  Formed in silver with a softly hammered, antique-brushed finish.
                  Articulated rear hinges crafted specifically for comfort and
                  retail showroom displays.
                </p>
                <div className="pt-4 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenEnquire('Kalyan Sculpted Choker', 'SJ-N-201')
                    }
                    className="px-6 py-3 border border-secondary-fixed text-secondary-fixed hover:bg-secondary-fixed hover:text-on-secondary-fixed font-label-uppercase text-label-uppercase tracking-[0.2em] transition-colors uppercase cursor-pointer"
                  >
                    Enquire for Wholesale
                  </button>
                  <button
                    type="button"
                    onClick={() => goProduct('SJ-N-201')}
                    className="font-caption text-caption text-surface-container-highest/70 hover:text-secondary-fixed uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Inspect Piece →
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Stack of 3 Secondary Articles */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {/* Piece SJ-B-001 */}
              <div className="bg-primary border border-surface-container-highest/10 p-6 flex flex-col sm:flex-row gap-6 items-center">
                <div
                  onClick={() => goProduct('SJ-B-001')}
                  className="w-full sm:w-36 h-36 flex-shrink-0 overflow-hidden bg-inverse-surface/30 cursor-pointer group"
                >
                  <ImageWithFallback
                    src={HOME_IMAGES.banglesFeature}
                    alt="Virasat Filigree Kada SJ-B-001"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full space-y-2">
                  <span className="font-label-uppercase text-[10px] text-secondary-fixed tracking-[0.22em] block">
                    REF: SJ-B-001
                  </span>
                  <h4
                    onClick={() => goProduct('SJ-B-001')}
                    className="font-display-lg text-headline-sm text-surface-container-lowest font-normal leading-tight cursor-pointer hover:text-secondary-fixed transition-colors"
                  >
                    Virasat Filigree Kada
                  </h4>
                  <p className="font-body-md text-surface-variant text-xs line-clamp-2 leading-relaxed">
                    Silver kada pair with deeply chiseled Gwalior floral motifs
                    and precision locking clasp.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenEnquire('Virasat Filigree Kada', 'SJ-B-001')
                      }
                      className="inline-flex items-center gap-2 font-label-uppercase text-[11px] text-secondary-fixed hover:text-surface-bright tracking-[0.18em] border-b border-secondary-fixed/40 pb-0.5 transition-colors uppercase cursor-pointer"
                    >
                      <span>Enquire Article</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Piece SJ-BR-101 */}
              <div className="bg-primary border border-surface-container-highest/10 p-6 flex flex-col sm:flex-row gap-6 items-center">
                <div
                  onClick={() => goProduct('SJ-BR-101')}
                  className="w-full sm:w-36 h-36 flex-shrink-0 overflow-hidden bg-inverse-surface/30 cursor-pointer group"
                >
                  <ImageWithFallback
                    src={HOME_IMAGES.braceletsFeature}
                    alt="Aura Fluid Cuff SJ-BR-101"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full space-y-2">
                  <span className="font-label-uppercase text-[10px] text-secondary-fixed tracking-[0.22em] block">
                    REF: SJ-BR-101
                  </span>
                  <h4
                    onClick={() => goProduct('SJ-BR-101')}
                    className="font-display-lg text-headline-sm text-surface-container-lowest font-normal leading-tight cursor-pointer hover:text-secondary-fixed transition-colors"
                  >
                    Aura Fluid Cuff
                  </h4>
                  <p className="font-body-md text-surface-variant text-xs line-clamp-2 leading-relaxed">
                    Minimalist curvilinear execution ergonomically contouring
                    the wrist with satin polish.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenEnquire('Aura Fluid Cuff', 'SJ-BR-101')
                      }
                      className="inline-flex items-center gap-2 font-label-uppercase text-[11px] text-secondary-fixed hover:text-surface-bright tracking-[0.18em] border-b border-secondary-fixed/40 pb-0.5 transition-colors uppercase cursor-pointer"
                    >
                      <span>Enquire Article</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Piece SJ-E-301 */}
              <div className="bg-primary border border-surface-container-highest/10 p-6 flex flex-col sm:flex-row gap-6 items-center">
                <div
                  onClick={() => goProduct('SJ-E-301')}
                  className="w-full sm:w-36 h-36 flex-shrink-0 overflow-hidden bg-inverse-surface/30 cursor-pointer group"
                >
                  <ImageWithFallback
                    src={HOME_IMAGES.earringsFeature}
                    alt="Chandrika Droplets SJ-E-301"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-full space-y-2">
                  <span className="font-label-uppercase text-[10px] text-secondary-fixed tracking-[0.22em] block">
                    REF: SJ-E-301
                  </span>
                  <h4
                    onClick={() => goProduct('SJ-E-301')}
                    className="font-display-lg text-headline-sm text-surface-container-lowest font-normal leading-tight cursor-pointer hover:text-secondary-fixed transition-colors"
                  >
                    Chandrika Droplets
                  </h4>
                  <p className="font-body-md text-surface-variant text-xs line-clamp-2 leading-relaxed">
                    Hand-hammered silver concave drops suspended on refined
                    post-findings for retail counters.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenEnquire('Chandrika Droplets', 'SJ-E-301')
                      }
                      className="inline-flex items-center gap-2 font-label-uppercase text-[11px] text-secondary-fixed hover:text-surface-bright tracking-[0.18em] border-b border-secondary-fixed/40 pb-0.5 transition-colors uppercase cursor-pointer"
                    >
                      <span>Enquire Article</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =========================================================================
          03 — WHOLESALE PARTNERSHIP: Split Layout & Direct Trade Form
          ========================================================================= */}
      <FadeIn>
        <section
          className="w-full bg-surface-container-low py-24 md:py-32 px-margin md:px-margin-desktop"
          id="wholesale-section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            <div className="lg:col-span-5 relative">
              <div className="border border-secondary/20 p-3 bg-surface">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-dim">
                  <ImageWithFallback
                    src={HOME_IMAGES.braceletsFeature}
                    alt="Shakuntala Jewellers Wholesale Trade Craft"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="font-label-uppercase text-caption text-secondary tracking-widest uppercase block">
                    COMMERCIAL INTEGRITY
                  </span>
                  <p className="font-display-lg text-headline-sm text-on-surface">
                    Precision in craftsmanship, service, and dispatch schedules.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <span className="font-label-uppercase text-caption text-secondary tracking-[0.28em] uppercase block">
                  B2B TRADE ENGAGEMENT
                </span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-normal leading-tight">
                  Your Trusted Partner in Silver Jewellery.
                </h2>
                <p className="font-body-md text-on-surface-variant max-w-xl leading-relaxed">
                  Supplying retail showrooms, family jewelers, and lifestyle
                  boutiques from our wholesale house in Gwalior.
                </p>
              </div>

              <div className="border-t border-b border-secondary/20 divide-y divide-secondary/20">
                <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <span className="font-label-uppercase text-label-uppercase text-secondary md:col-span-2">
                    01
                  </span>
                  <span className="font-display-lg text-headline-sm text-on-surface md:col-span-5">
                    Wholesale Collection Access
                  </span>
                  <p className="font-body-md text-on-surface-variant text-sm md:col-span-5">
                    Curated access across our five silver ornament suites for
                    registered retail buyers.
                  </p>
                </div>

                <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <span className="font-label-uppercase text-label-uppercase text-secondary md:col-span-2">
                    02
                  </span>
                  <span className="font-display-lg text-headline-sm text-on-surface md:col-span-5">
                    Bulk Inquiries &amp; Custom Orders
                  </span>
                  <p className="font-body-md text-on-surface-variant text-sm md:col-span-5">
                    Bulk ornament orders and custom wholesale requirements
                    handled directly by our desk.
                  </p>
                </div>

                <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <span className="font-label-uppercase text-label-uppercase text-secondary md:col-span-2">
                    03
                  </span>
                  <span className="font-display-lg text-headline-sm text-on-surface md:col-span-5">
                    Retailer Partnerships
                  </span>
                  <p className="font-body-md text-on-surface-variant text-sm md:col-span-5">
                    Seasonal collection updates and ongoing trade support for
                    partner jewellers.
                  </p>
                </div>

                <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <span className="font-label-uppercase text-label-uppercase text-secondary md:col-span-2">
                    04
                  </span>
                  <span className="font-display-lg text-headline-sm text-on-surface md:col-span-5">
                    Dedicated Business Support
                  </span>
                  <p className="font-body-md text-on-surface-variant text-sm md:col-span-5">
                    Direct line to our Gwalior workshop desk via WhatsApp or
                    wholesale enquiry.
                  </p>
                </div>
              </div>

              <div className="bg-surface p-8 md:p-10 border border-secondary/20 space-y-8">
                <div className="space-y-1">
                  <h3 className="font-display-lg text-headline-sm text-on-surface">
                    Initiate Commercial Inquiry
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    Please share your business details below. A representative
                    will connect with you regarding wholesale terms.
                  </p>
                </div>

                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =========================================================================
          04 — THE HOUSE (Editorial Brand Spread)
          ========================================================================= */}
      <FadeIn>
        <section
          className="w-full bg-surface py-24 md:py-32 px-margin md:px-margin-desktop overflow-hidden"
          id="our-story"
        >
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-3">
              <span className="font-label-uppercase text-caption text-secondary tracking-[0.3em] uppercase">
                03 — THE HOUSE
              </span>
              <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface font-normal">
                Lineage in Pure Metal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-center">
              <div className="md:col-span-7 relative">
                <div className="border border-secondary/20 p-2 bg-surface-container-lowest">
                  <ImageWithFallback
                    src={HOME_IMAGES.banglesFeature}
                    alt="Shakuntala Jewellers Gwalior Metalwork"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <span className="font-label-uppercase text-[10px] text-on-surface-variant tracking-widest uppercase mt-3 block">
                  PLATE 07 — HANDCRAFTED SILVER ORNAMENTS
                </span>
              </div>

              <div className="md:col-span-5 space-y-8 md:-ml-8 z-10">
                <div className="border border-secondary/20 p-2 bg-surface-container-lowest w-4/5 hidden md:block">
                  <ImageWithFallback
                    src={HOME_IMAGES.earringsFeature}
                    alt="Artisanal Silver Earring Still"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-6 bg-surface p-6 md:p-8 border-l-2 border-secondary">
                  <p className="font-display-lg text-headline-sm md:text-headline-md text-on-surface italic font-light leading-snug">
                    “Silver shaped not merely for adornment, but as an enduring
                    dialogue between heritage technique and contemporary form.”
                  </p>
                  <div className="space-y-3 font-body-md text-on-surface-variant text-sm leading-relaxed">
                    <p>
                      From our base in Gwalior&apos;s Sarafa Bazaar, Shakuntala
                      Jewellers crafts wholesale silver ornaments rooted in
                      regional artistry and careful hand-finishing.
                    </p>
                    <p className="text-xs text-outline italic">
                      [Brand story to be supplied by the business — celebrating
                      craftsmanship and retail partnership in Gwalior].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =========================================================================
          CONTACT & CONVERSATION: Deep Charcoal Minimalist Hub
          ========================================================================= */}
      <FadeIn>
        <section
          className="w-full bg-primary-container text-surface-container-lowest py-20 px-margin md:px-margin-desktop border-t border-surface-container-highest/10"
          id="contact"
        >
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-surface-container-highest/15">
              <div className="space-y-2">
                <span className="font-label-uppercase text-caption text-secondary-fixed tracking-[0.28em] uppercase">
                  DIRECT TRADE ACCESS
                </span>
                <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-surface-container-lowest font-normal">
                  Let’s Begin a Conversation.
                </h2>
              </div>
              <p className="font-body-md text-surface-variant text-sm mt-4 md:mt-0">
                Direct liaison for regional retail distribution, stockists, and
                wholesale enquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-container-highest/15 border-b border-surface-container-highest/15 pb-12">
              <div className="py-6 md:py-0 md:px-8 first:pl-0 space-y-3">
                <span className="font-label-uppercase text-caption text-secondary-fixed tracking-[0.2em] uppercase block">
                  Direct Trade Line
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-display-lg text-headline-sm text-surface-container-lowest hover:text-secondary-fixed transition-colors"
                >
                  <span>+91 81043 04050</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    north_east
                  </span>
                </a>
                <p className="font-body-md text-surface-variant text-xs">
                  Direct WhatsApp for catalogue enquiries and wholesale trade
                  coordination.
                </p>
              </div>

              <div className="py-6 md:py-0 md:px-8 space-y-3">
                <span className="font-label-uppercase text-caption text-secondary-fixed tracking-[0.2em] uppercase block">
                  Atelier &amp; Office
                </span>
                <p className="font-display-lg text-headline-sm text-surface-container-lowest">
                  Gwalior, Madhya Pradesh
                </p>
                <p className="font-body-md text-surface-variant text-xs">
                  Sarafa Bazaar, Lashkar. Commercial address and visiting details
                  shared with verified trade partners.
                </p>
              </div>

              <div className="py-6 md:py-0 md:px-8 last:pr-0 space-y-3">
                <span className="font-label-uppercase text-caption text-secondary-fixed tracking-[0.2em] uppercase block">
                  Digital Archive
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-display-lg text-headline-sm text-surface-container-lowest hover:text-secondary-fixed transition-colors break-all sm:break-normal"
                >
                  <span>@shakuntala_jewellers_gwalior</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform shrink-0">
                    north_east
                  </span>
                </a>
                <p className="font-body-md text-surface-variant text-xs">
                  Atelier updates, recent designs, and wholesale visual previews.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <span className="font-label-uppercase text-caption text-surface-variant tracking-widest uppercase">
                WHOLESALE ENQUIRIES • TRADE DETAILS UPON REQUEST
              </span>
              <button
                type="button"
                onClick={() => onOpenEnquire('General Catalog Request')}
                className="px-6 py-2.5 border border-surface-container-highest/30 text-surface-container-lowest hover:border-secondary-fixed hover:text-secondary-fixed font-label-uppercase text-caption tracking-[0.2em] transition-colors uppercase cursor-pointer"
              >
                Request Trade Lookbook →
              </button>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* =========================================================================
          SUB-FOOTER ATTRIBUTION
          ========================================================================= */}
      <div className="w-full bg-primary px-margin md:px-margin-desktop py-4 border-t border-surface-container-highest/10 flex flex-col sm:flex-row items-center justify-between text-surface-variant font-caption text-caption">
        <span>SHAKUNTALA JEWELLERS • GWALIOR ARCHIVE</span>
        <span className="text-surface-container-highest/60 italic mt-1 sm:mt-0">
          Sample product codes and placeholder imagery shown.
        </span>
      </div>
    </div>
  );
};
