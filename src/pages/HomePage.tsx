
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BrandGrid } from "../components/ProductGrid";
import { StatsCard } from "../components/StatsCard";
import { fetchBrands } from "../services/brandService";
import { Brand } from "../types";
import { brands } from "../data/brands"; // Import the mock brands data

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const { data: brandsData } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands
  });

  // Use Allbirds as the featured brand
  const allbirdsBrand = brands.find(brand => brand.name === "Allbirds");

  const totalBrands = brandsData?.length || 64;

  return (
    <div className="min-h-screen">
      <div className="container py-8 px-4 md:px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <StatsCard 
            title="Today's New Brand" 
            value={allbirdsBrand?.name || "Loading..."} 
            brand={allbirdsBrand}
          />
          <StatsCard title="Total Brands" value={totalBrands.toString()} />
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
