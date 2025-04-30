
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
