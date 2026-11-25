export type CollectionSlug =
  | 'silver-bangles'
  | 'silver-bracelets'
  | 'silver-necklaces'
  | 'silver-earrings'
  | 'traditional-silver-ornaments';

export type PageRoute =
  | { page: 'home'; section?: string }
  | { page: 'collections'; filter?: string }
  | { page: 'category'; slug: CollectionSlug }
  | { page: 'product'; code: string };

export interface SubFilterOption {
  id: string;
  label: string;
}

export interface ProductSpecRow {
  code: string;
  classification: string;
  sizing: string;
  material: string;
  orderSpec: string;
}

export interface Product {
  code: string;
  name: string;
  categorySlug: CollectionSlug;
  categoryName: string;
  subCategory: string;
  classification: string;
  originSubtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  badge?: string;
  specMaterial: string;
  specDimensions: string;
  specMinimumOrder: string;
  specDispatch: string;
  specFinish: string;
}

export interface Collection {
  slug: CollectionSlug;
  romanIndex: string;
  archiveNumber: string;
  title: string;
  shortTitle: string;
  megaMenuSubtitle: string;
  seriesTag: string;
  heroSubtitle: string;
  collectionsCaption: string;
  collectionsBannerSubtitle: string;
  collectionsBannerTitle: string;
  collectionsBannerNote: string;
  ctaLabel: string;
  heroImage: string;
  collectionsLeadImage: string;
  megaMenuImage: string;
  mobileMenuImage: string;
  subFilters: SubFilterOption[];
}

export interface EnquiryContext {
  articleName: string;
  articleCode?: string;
}
