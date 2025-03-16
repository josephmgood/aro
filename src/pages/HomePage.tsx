
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { BrandGrid } from "../components/ProductGrid";
import { StatsCard } from "../components/StatsCard";
import { fetchBrands } from "../services/brandService";
import { Brand } from "../types";
import { brands } from "../data/brands"; // Import the mock brands data

export default function HomePage() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);
  
  // Extract category from URL search params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    setActiveCategory(category || undefined);
  }, [location.search]);
  
  const { data: brandsData } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands
  });

  // Use Allbirds as the featured brand
  const allbirdsBrand = brands.find(brand => brand.name === "Allbirds");

  // Get the founder data from Allbirds for Maker of the Month
  const makerOfMonth = allbirdsBrand?.founder;

  return (
    <div className="min-h-screen">
      <div className="container py-8 px-4 md:px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <StatsCard 
            title="Brand of the Month" 
            value={allbirdsBrand?.name || "Loading..."} 
            brand={allbirdsBrand}
          />
          <StatsCard 
            title="Maker of the Month" 
            value={makerOfMonth?.name || "Loading..."}
            person={makerOfMonth}
          />
        </div>
        
        {/* Brands Section with proper spacing */}
        <div className="mb-10 mt-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Brands</h2>
          
          <BrandGrid filter={activeCategory} />
        </div>
      </div>
    </div>
  );
}
