
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SortOption } from "@/types/category";

interface SortOptionsProps {
  onSortChange: (sortId: string) => void;
}

const sortOptions: SortOption[] = [
  { id: "newest", name: "Newest First" },
  { id: "oldest", name: "Oldest First" },
  { id: "price_high", name: "Price: High to Low" },
  { id: "price_low", name: "Price: Low to High" }
];

const SortOptions = ({ onSortChange }: SortOptionsProps) => {
  const [currentSort, setCurrentSort] = useState<string>("newest");

  const handleSortChange = (value: string) => {
    setCurrentSort(value);
    onSortChange(value);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-700">Sort by:</span>
      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select sorting option" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map(option => (
            <SelectItem key={option.id} value={option.id}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortOptions;
