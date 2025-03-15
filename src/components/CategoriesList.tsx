
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const categories = [
  "All",
  "Marketing",
  "Developer Tools",
  "Productivity",
  "Design Tools",
  "Social Media",
  "AI",
  "Finance",
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
          className={activeCategory === category ? "bg-ph-orange hover:bg-ph-orange/90" : ""}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
