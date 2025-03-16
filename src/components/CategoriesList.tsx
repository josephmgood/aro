
import { Button } from "./ui/button";

const categories = [
  "All",
  "Drinks",
  "Snacks",
  "Food",
  "Beauty",
  "Home",
  "Health"
];

interface CategoriesListProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export function CategoriesList({ activeCategory = "All", onSelectCategory }: CategoriesListProps) {
  const handleCategoryClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryClick(category)}
          className={activeCategory === category ? "bg-white text-[#1B4D3E] hover:bg-gray-200" : "border-gray-400 text-white hover:bg-[#1B4D3E]/80"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
