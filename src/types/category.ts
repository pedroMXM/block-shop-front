
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
