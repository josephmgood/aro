
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { BrandGrid } from "../components/ProductGrid";
import { StatsCard } from "../components/StatsCard";
import { fetchBrands, fetchFeaturedBrand } from "../services/brandService";
import { Brand } from "../types";
import { CategoriesList } from "../components/CategoriesList";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const { data: brands } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands
  });

  const { data: featuredBrand } = useQuery({
    queryKey: ['featuredBrand'],
    queryFn: fetchFeaturedBrand
  });

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  const totalBrands = brands?.length || 64;

  return (
    <div className="min-h-screen">
      <div className="container py-8 px-4 md:px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <StatsCard 
            title="Today's New Brand" 
            value={featuredBrand?.name || "Loading..."} 
            brand={featuredBrand || undefined}
          />
          <StatsCard title="Total Brands" value={totalBrands.toString()} />
        </div>
        
        {/* Category Filter */}
        <div className="mb-6">
          <CategoriesList 
            activeCategory={activeCategory} 
            onSelectCategory={handleCategorySelect}
          />
        </div>
        
        {/* Brands Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-white">Brands</h2>
          
          <BrandGrid 
            filter={activeCategory === "All" ? undefined : activeCategory} 
          />
        </div>
      </div>
    </div>
  );
}
