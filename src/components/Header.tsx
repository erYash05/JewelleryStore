import React, { useState } from 'react';
import { COLLECTIONS } from '../data/catalog';
import { CollectionSlug, PageRoute } from '../types/catalog';
import { ImageWithFallback } from './ImageWithFallback';

interface HeaderProps {
  route: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenEnquire: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  route,
  onNavigate,
  onOpenEnquire,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(true);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const handleNav = (nextRoute: PageRoute) => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    onNavigate(nextRoute);
  };

  const isCollectionsActive =
    route.page === 'collections' || route.page === 'category' || route.page === 'product';
  const isWholesaleActive = route.page === 'home' && route.section === 'wholesale';
  const isStoryActive = route.page === 'home' && route.section === 'our-story';
  const isContactActive = route.page === 'home' && route.section === 'contact';

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-secondary/20 transition-colors duration-300">
      <div className="h-20 w-full px-margin md:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => handleNav({ page: 'home' })}
            className="flex flex-col text-left cursor-pointer"
          >
            <span className="font-display-lg text-headline-sm md:text-headline-md tracking-[0.22em] text-on-surface uppercase leading-none">
              SHAKUNTALA
            </span>
            <span className="font-label-uppercase text-caption text-secondary tracking-[0.28em] uppercase mt-1">
              JEWELLERS • GWALIOR
            </span>
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-gutter-desktop h-full">
          <div
            className="group relative h-full flex items-center"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => handleNav({ page: 'collections' })}
              className={`font-label-uppercase text-label-uppercase transition-colors py-1 inline-flex items-center gap-1.5 cursor-pointer uppercase ${
                isCollectionsActive
                  ? 'text-primary font-medium border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Collections</span>
              <span
                className={`material-symbols-outlined text-[14px] text-secondary transition-transform duration-300 ${
                  megaMenuOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            <div
              className={`transition-all duration-300 ease-out absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-surface-container-low border border-secondary/30 shadow-2xl p-space-md ${
                megaMenuOpen
                  ? 'visible opacity-100 pointer-events-auto'
                  : 'invisible opacity-0 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-secondary/20">
                <span className="font-label-uppercase text-caption text-secondary uppercase tracking-[0.2em]">
                  Silver Ornaments Catalogues • Gwalior Archive
                </span>
                <button
                  type="button"
                  onClick={() => handleNav({ page: 'collections' })}
                  className="font-label-uppercase text-caption text-on-surface-variant hover:text-secondary tracking-widest uppercase transition-colors cursor-pointer"
                >
                  View Entire Ledger →
                </button>
              </div>

              <div className="grid grid-cols-5 gap-space-sm">
                {COLLECTIONS.map((col) => {
                  const activeCat =
                    route.page === 'category' && route.slug === col.slug;
                  return (
                    <button
                      key={col.slug}
                      type="button"
                      onClick={() =>
                        handleNav({ page: 'category', slug: col.slug as CollectionSlug })
                      }
                      className={`group/item flex flex-col text-left p-space-xs hover:bg-surface-container transition-colors cursor-pointer ${
                        activeCat ? 'border-b-2 border-secondary bg-surface-container' : ''
                      }`}
                    >
                      <div className="aspect-square w-full overflow-hidden bg-surface-container-high border border-secondary/20 mb-2">
                        <ImageWithFallback
                          src={col.megaMenuImage}
                          alt={col.shortTitle}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                        />
                      </div>
                      <span className="font-display-lg text-sm text-on-surface leading-snug group-hover/item:text-secondary transition-colors">
                        {col.shortTitle}
                      </span>
                      <span className="font-label-uppercase text-[10px] text-on-surface-variant tracking-wider uppercase mt-0.5">
                        {col.megaMenuSubtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleNav({ page: 'home', section: 'wholesale' })}
            className={`font-label-uppercase text-label-uppercase transition-colors py-1 cursor-pointer uppercase ${
              isWholesaleActive
                ? 'text-primary font-medium border-b-2 border-secondary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Wholesale
          </button>

          <button
            type="button"
            onClick={() => handleNav({ page: 'home', section: 'our-story' })}
            className={`font-label-uppercase text-label-uppercase transition-colors py-1 cursor-pointer uppercase ${
              isStoryActive
                ? 'text-primary font-medium border-b-2 border-secondary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Our Story
          </button>

          <button
            type="button"
            onClick={() => handleNav({ page: 'home', section: 'contact' })}
            className={`font-label-uppercase text-label-uppercase transition-colors py-1 cursor-pointer uppercase ${
              isContactActive
                ? 'text-primary font-medium border-b-2 border-secondary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-space-md">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquire();
            }}
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm font-label-uppercase text-label-uppercase text-secondary border border-secondary hover:bg-secondary hover:text-on-secondary transition-colors uppercase cursor-pointer"
          >
            Enquire
          </button>

          <button
            type="button"
            onClick={() => handleNav({ page: 'home', section: 'contact' })}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
            title="Trade Contact"
            aria-label="Trade Contact"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden cursor-pointer text-on-surface p-1"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low border-b border-secondary/20 px-margin py-space-md max-h-[85vh] overflow-y-auto">
          <div className="mb-space-sm">
            <button
              type="button"
              onClick={() => setMobileCollectionsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-2 cursor-pointer font-label-uppercase text-label-uppercase text-on-surface border-b border-secondary/20"
            >
              <span className="tracking-wider uppercase">Collections</span>
              <span
                className={`material-symbols-outlined text-[18px] text-secondary transition-transform ${
                  mobileCollectionsOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {mobileCollectionsOpen && (
              <div className="grid grid-cols-1 gap-space-xs pt-space-xs pl-space-xs">
                <button
                  type="button"
                  onClick={() => handleNav({ page: 'collections' })}
                  className="text-left py-2 px-space-xs font-label-uppercase text-caption text-secondary tracking-widest uppercase border-b border-secondary/10 hover:bg-surface-container cursor-pointer"
                >
                  View All Collections →
                </button>
                {COLLECTIONS.map((col, idx) => (
                  <button
                    key={col.slug}
                    type="button"
                    onClick={() =>
                      handleNav({ page: 'category', slug: col.slug as CollectionSlug })
                    }
                    className={`flex items-center gap-space-sm py-2 px-space-xs hover:bg-surface-container text-left cursor-pointer ${
                      idx < COLLECTIONS.length - 1 ? 'border-b border-secondary/10' : ''
                    }`}
                  >
                    <ImageWithFallback
                      src={col.mobileMenuImage}
                      alt={col.shortTitle}
                      className="w-10 h-10 object-cover border border-secondary/20 shrink-0"
                    />
                    <div>
                      <span className="font-display-lg text-sm text-on-surface block">
                        {col.shortTitle}
                      </span>
                      <span className="font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
                        {col.megaMenuSubtitle}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-space-xs border-t border-secondary/20 pt-space-xs">
            <button
              type="button"
              onClick={() => handleNav({ page: 'home', section: 'wholesale' })}
              className="text-left font-label-uppercase text-label-uppercase text-on-surface py-2 tracking-wider uppercase cursor-pointer"
            >
              Wholesale
            </button>
            <button
              type="button"
              onClick={() => handleNav({ page: 'home', section: 'our-story' })}
              className="text-left font-label-uppercase text-label-uppercase text-on-surface py-2 tracking-wider uppercase cursor-pointer"
            >
              Our Story
            </button>
            <button
              type="button"
              onClick={() => handleNav({ page: 'home', section: 'contact' })}
              className="text-left font-label-uppercase text-label-uppercase text-on-surface py-2 tracking-wider uppercase cursor-pointer"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquire();
              }}
              className="text-left font-label-uppercase text-label-uppercase text-secondary py-2 tracking-wider uppercase font-semibold cursor-pointer"
            >
              Submit Wholesale Enquiry →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
