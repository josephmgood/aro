
import { useState } from "react";
import { FeaturedBrand } from "../components/FeaturedBrand";
import { BrandGrid } from "../components/ProductGrid";
import { CategoriesList } from "../components/CategoriesList";
import { brands } from "../data/brands";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredBrand = brands.find(brand => brand.featured) || brands[0];

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="container py-8 px-4 md:px-6">
      <section className="mb-10">
        <h1 className="section-title text-3xl md:text-4xl">Discover Direct-to-Consumer Brands</h1>
        <p className="text-muted-foreground mb-8">Find innovative, sustainable, and quality D2C brands in one place</p>
        
        <FeaturedBrand brand={featuredBrand} />
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-title mb-0 text-xl md:text-2xl">Browse by Category</h2>
        </div>
        
        <CategoriesList 
          activeCategory={activeCategory} 
          onSelectCategory={handleCategorySelect} 
        />
        
        <BrandGrid 
          filter={activeCategory === "All" ? undefined : activeCategory} 
        />
      </section>
    </div>
  );
}
