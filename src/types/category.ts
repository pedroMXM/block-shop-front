
export interface SubcategoryType {
  id: string;
  name: string;
  image?: string;
  subcategories?: SubcategoryType[];
}

export interface CategoryType {
  id: string;
  name: string;
  image: string;
  subcategories: SubcategoryType[];
}

export interface SortOption {
  id: string;
  name: string;
}

export interface FilterOption {
  id: string;
  name: string;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface SearchFilters {
  condition?: string[];
  excludeWords?: string;
  priceRange?: PriceRange;
  location?: string;
}

export interface ProductFormData {
  title: string;
  description: string;
  price: string;
  condition: 'new' | 'used';
  pricingType: 'fixed' | 'auction';
  isDigital: boolean;
  isOnsite: boolean;
  category: string;
  region: string;
}

export interface RegionType {
  id: string;
  name: string;
  subregions?: RegionType[];
}
