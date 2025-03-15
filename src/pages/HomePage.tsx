
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FeaturedBrand } from "../components/FeaturedBrand";
import { BrandGrid } from "../components/ProductGrid";
import { CategoriesList } from "../components/CategoriesList";
import { fetchFeaturedBrand } from "../services/brandService";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const { data: featuredBrand, isLoading } = useQuery({
    queryKey: ['featuredBrand'],
    queryFn: fetchFeaturedBrand
  });

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="container py-8 px-4 md:px-6">
      <section className="mb-10">
        <h1 className="section-title text-3xl md:text-4xl">Discover Direct-to-Consumer Brands</h1>
        <p className="text-muted-foreground mb-8">Find innovative, sustainable, and quality D2C brands in one place</p>
        
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-[300px] bg-gray-200 rounded-lg mb-8"></div>
          </div>
        ) : featuredBrand ? (
          <FeaturedBrand brand={featuredBrand} />
        ) : null}
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
