
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
          className={activeCategory === category ? "bg-white text-black hover:bg-gray-200" : "border-gray-600 text-white hover:bg-gray-800"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
