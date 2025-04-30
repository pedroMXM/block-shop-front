
import { useState } from "react";
import { categories } from "@/data/categories";
import { SubcategoryType } from "@/types/category";

interface SubcategoryListProps {
  categoryId: string;
}

const SubcategoryList = ({ categoryId }: SubcategoryListProps) => {
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);
  
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) return null;

  const handleExpandSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories(prev => 
      prev.includes(subcategoryId)
        ? prev.filter(id => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
  };
  
  const renderSubcategories = (subcategories: SubcategoryType[], depth = 0) => {
    return (
      <ul className={`space-y-1 ${depth > 0 ? 'ml-6' : ''}`}>
        {subcategories.map((subcategory) => {
          const isExpanded = expandedSubcategories.includes(subcategory.id);
          const hasChildren = subcategory.subcategories && subcategory.subcategories.length > 0;
          
          return (
            <li key={subcategory.id} className="py-1">
              <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100">
                <div className="flex items-center gap-2">
                  {subcategory.image && (
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                      <img 
                        src={subcategory.image} 
                        alt={subcategory.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}
                  <span className="text-gray-700">{subcategory.name}</span>
                </div>
                
                {hasChildren && (
                  <button 
                    onClick={() => handleExpandSubcategory(subcategory.id)}
                    className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    {isExpanded ? 'Hide' : 'Show'} ({subcategory.subcategories?.length})
                  </button>
                )}
              </div>
              
              {isExpanded && hasChildren && renderSubcategories(subcategory.subcategories!, depth + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        {category.name} Subcategories
      </h3>
      {renderSubcategories(category.subcategories || [])}
    </div>
  );
};

export default SubcategoryList;
