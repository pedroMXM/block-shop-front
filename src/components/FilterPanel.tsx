
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SearchFilters, PriceRange } from "@/types/category";
import { ChevronDown } from "lucide-react";

interface FilterPanelProps {
  onFilterChange: (filters: SearchFilters) => void;
}

const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [condition, setCondition] = useState<string[]>([]);
  const [excludeWords, setExcludeWords] = useState<string>("");
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 1000 });
  const [location, setLocation] = useState<string>("");

  const handleConditionChange = (value: string, checked: boolean) => {
    setCondition(prev => 
      checked 
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange({ min: value[0], max: value[1] });
  };

  const applyFilters = () => {
    const filters: SearchFilters = {
      condition: condition.length > 0 ? condition : undefined,
      excludeWords: excludeWords || undefined,
      priceRange: priceRange.min > 0 || priceRange.max < 1000 ? priceRange : undefined,
      location: location || undefined
    };
    onFilterChange(filters);
  };

  const resetFilters = () => {
    setCondition([]);
    setExcludeWords("");
    setPriceRange({ min: 0, max: 1000 });
    setLocation("");
    onFilterChange({});
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full bg-white rounded-lg shadow-sm p-4 mb-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
            <span className="sr-only">Toggle filter panel</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      
      <CollapsibleContent className="pt-4">
        <div className="space-y-6">
          {/* Condition Filter */}
          <div>
            <h4 className="text-sm font-medium mb-2">Condition</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="new" 
                  checked={condition.includes("new")}
                  onCheckedChange={(checked) => handleConditionChange("new", checked === true)}
                />
                <label htmlFor="new" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  New
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="used" 
                  checked={condition.includes("used")}
                  onCheckedChange={(checked) => handleConditionChange("used", checked === true)}
                />
                <label htmlFor="used" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Used
                </label>
              </div>
            </div>
          </div>
          
          {/* Exclude Words */}
          <div>
            <label htmlFor="exclude-words" className="text-sm font-medium mb-2 block">
              Exclude Words
            </label>
            <Input
              id="exclude-words"
              placeholder="Words to exclude"
              value={excludeWords}
              onChange={(e) => setExcludeWords(e.target.value)}
            />
          </div>
          
          {/* Price Range */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium">Price Range</h4>
              <span className="text-sm text-gray-500">
                ${priceRange.min} - ${priceRange.max}
              </span>
            </div>
            <Slider 
              defaultValue={[priceRange.min, priceRange.max]} 
              max={1000} 
              step={10}
              onValueChange={handlePriceChange}
              className="mb-6"
            />
          </div>
          
          {/* Geographic Area */}
          <div>
            <label htmlFor="location" className="text-sm font-medium mb-2 block">
              Geographic Area
            </label>
            <Input
              id="location"
              placeholder="City, region, or postal code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <Button variant="outline" onClick={resetFilters} size="sm">
              Reset All
            </Button>
            <Button onClick={applyFilters} size="sm">
              Apply Filters
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterPanel;
