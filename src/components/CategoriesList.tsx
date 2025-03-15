
import { Button } from "./ui/button";

const categories = [
  "All",
  "Beauty",
  "Fashion",
  "Food",
  "Health",
  "Home",
  "Wellness",
  "Pets",
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
          className={activeCategory === category ? "bg-primary hover:bg-primary/90" : ""}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
