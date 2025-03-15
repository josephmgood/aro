
import { useState } from "react";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { ProductGrid } from "../components/ProductGrid";
import { CategoriesList } from "../components/CategoriesList";
import { products } from "../data/products";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredProduct = products[2]; // Using Taskify as the featured product

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="container py-6 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-2">Today's Products</h1>
      <p className="text-muted-foreground mb-6">Discover the best products launched today</p>
      
      <FeaturedProduct product={featuredProduct} />
      
      <CategoriesList 
        activeCategory={activeCategory} 
        onSelectCategory={handleCategorySelect} 
      />
      
      <ProductGrid 
        filter={activeCategory === "All" ? undefined : activeCategory} 
      />
    </div>
  );
}
