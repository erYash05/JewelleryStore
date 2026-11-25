import React from 'react';
import { Product } from '../types/catalog';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
  variant?: 'collections' | 'category';
  compact?: boolean;
  onOpenProduct: (code: string) => void;
  onEnquire: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'collections',
  compact = false,
  onOpenProduct,
  onEnquire,
}) => {
  if (variant === 'category') {
    return (
      <article className="product-item group flex flex-col bg-surface-container-low transition-all duration-300">
        <div
          onClick={() => onOpenProduct(product.code)}
          className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-high cursor-pointer"
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            <span className="bg-primary/90 text-on-primary font-label-uppercase text-[10px] px-2 py-0.5 tracking-widest uppercase">
              {product.code}
            </span>
            {product.badge && (
              <span className="bg-surface-container-lowest/90 text-secondary font-label-uppercase text-[9px] px-2 py-0.5 tracking-wider uppercase">
                {product.badge}
              </span>
            )}
          </div>
          <div className="absolute bottom-3 right-3 bg-surface-container-lowest/90 backdrop-blur-xs px-2.5 py-1 text-on-surface font-label-uppercase text-[10px] tracking-wider uppercase">
            Sample Piece
          </div>
        </div>

        <div
          className={`${
            compact ? 'p-space-sm' : 'p-space-md'
          } flex flex-col flex-1 justify-between bg-surface-container-low`}
        >
          <div>
            <div className="flex items-baseline justify-between mb-1 gap-2">
              <span className="font-label-uppercase text-caption text-secondary uppercase tracking-[0.2em] truncate">
                {product.classification}
              </span>
              <span className="font-label-uppercase text-[10px] text-on-surface-variant shrink-0">
                Wholesale
              </span>
            </div>
            <h2
              onClick={() => onOpenProduct(product.code)}
              className="font-display-lg text-headline-sm text-on-surface leading-tight group-hover:text-secondary transition-colors cursor-pointer"
            >
              {product.name}
            </h2>
            {!compact && (
              <p className="font-body-md text-caption text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                {product.shortDescription}
              </p>
            )}
          </div>

          <div className="pt-space-md mt-space-sm border-t border-secondary/15 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => onOpenProduct(product.code)}
              className="font-label-uppercase text-[10px] text-on-surface-variant hover:text-secondary uppercase tracking-wider cursor-pointer transition-colors"
            >
              View Details
            </button>
            <button
              type="button"
              onClick={() => onEnquire(product)}
              className="font-label-uppercase text-caption text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1 group/link cursor-pointer"
            >
              <span>Enquire for Wholesale</span>
              <span className="material-symbols-outlined text-[14px] transition-transform duration-200 group-hover/link:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col group bg-surface-container-lowest p-space-sm transition-all duration-300 hover:bg-surface-container-low">
      <div
        onClick={() => onOpenProduct(product.code)}
        className="aspect-[4/5] w-full overflow-hidden bg-surface-container-high relative mb-space-sm cursor-pointer"
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-surface px-2 py-0.5 font-label-uppercase text-[10px] text-secondary tracking-widest uppercase">
            {product.badge}
          </span>
        )}
      </div>

      <span className="font-label-uppercase text-caption text-on-surface-variant tracking-[0.2em] uppercase">
        {product.code}
      </span>
      <h3
        onClick={() => onOpenProduct(product.code)}
        className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors mt-0.5 cursor-pointer"
      >
        {product.name}
      </h3>
      <p className="font-body-md text-on-surface-variant text-sm line-clamp-2 mt-1 mb-space-sm">
        {product.shortDescription}
      </p>

      <div className="mt-auto pt-space-xs flex items-center justify-between">
        <button
          type="button"
          onClick={() => onEnquire(product)}
          className="font-label-uppercase text-label-uppercase text-on-surface hover:text-secondary inline-flex items-center gap-1 group/link cursor-pointer"
        >
          <span className="relative pb-0.5">
            Enquire for Wholesale
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
          </span>
          <span className="material-symbols-outlined text-[14px] text-secondary">
            arrow_right_alt
          </span>
        </button>
        <button
          type="button"
          onClick={() => onOpenProduct(product.code)}
          className="material-symbols-outlined text-[18px] text-outline hover:text-primary cursor-pointer transition-colors"
          title="View Product Details"
          aria-label={`View details for ${product.name}`}
        >
          north_east
        </button>
      </div>
    </article>
  );
};
