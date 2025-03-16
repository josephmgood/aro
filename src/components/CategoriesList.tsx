
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
            ? "bg-brandColors-darkTan text-brandColors-darkBlue hover:bg-brandColors-darkTan/90" 
            : "border-brandColors-darkBlue/40 text-brandColors-darkBlue hover:bg-brandColors-mediumTan/50"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
