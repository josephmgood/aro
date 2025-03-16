
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
          className={activeCategory === category 
            ? "bg-brandColors-salmon text-brandColors-darkTeal hover:bg-brandColors-salmon/90" 
            : "border-brandColors-mediumTeal/40 text-brandColors-darkTeal hover:bg-brandColors-lightSalmon/50"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
