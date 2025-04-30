
import { Card, CardContent } from "@/components/ui/card";
import { CategoryType } from "@/types/category";

interface CategoryCardProps {
  category: CategoryType;
  isActive: boolean;
  onClick: () => void;
}

const CategoryCard = ({ category, isActive, onClick }: CategoryCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all overflow-hidden ${
        isActive ? "ring-2 ring-primary" : "hover:shadow-md"
      }`}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 bg-white">
        <h3 className="font-medium text-center">{category.name}</h3>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
