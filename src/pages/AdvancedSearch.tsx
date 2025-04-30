
import { useState } from "react";
import Navigation from "@/components/Navigation";
import CategoryCard from "@/components/CategoryCard";
import SubcategoryList from "@/components/SubcategoryList";
import { categories } from "@/data/categories";

const AdvancedSearch = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Advanced Search</h2>
          <p className="text-gray-600">Browse by category to find the perfect digital assets</p>
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
