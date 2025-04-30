
import { useState } from "react";
import Navigation from "@/components/Navigation";
import CategoryCard from "@/components/CategoryCard";
import SubcategoryList from "@/components/SubcategoryList";
import SortOptions from "@/components/SortOptions";
import FilterPanel from "@/components/FilterPanel";
import { categories } from "@/data/categories";
import { SearchFilters } from "@/types/category";

const AdvancedSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentSort, setCurrentSort] = useState<string>("newest");
  const [activeFilters, setActiveFilters] = useState<SearchFilters>({});
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const handleSortChange = (sortId: string) => {
    setCurrentSort(sortId);
    console.log(`Sorting changed to: ${sortId}`);
    // In a real implementation, this would trigger a re-query of the data
  };

  const handleFilterChange = (filters: SearchFilters) => {
    setActiveFilters(filters);
    console.log("Filters applied:", filters);
    // In a real implementation, this would trigger a re-query of the data
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Advanced Search</h2>
          <p className="text-gray-600">Browse by category to find the perfect digital assets</p>
        </div>
        
        {/* Sorting and Filtering */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <SortOptions onSortChange={handleSortChange} />
            <div className="text-sm text-gray-500">
              {activeFilters.condition?.length || activeFilters.excludeWords || 
               activeFilters.priceRange || activeFilters.location ? 
                "Filters applied" : "No filters applied"}
            </div>
          </div>
          
          <FilterPanel onFilterChange={handleFilterChange} />
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Main Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id}
                category={category}
                isActive={selectedCategory === category.id}
                onClick={() => handleCategorySelect(category.id)}
              />
            ))}
          </div>
        </div>

        {selectedCategory && (
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <SubcategoryList 
              categoryId={selectedCategory}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default AdvancedSearch;
