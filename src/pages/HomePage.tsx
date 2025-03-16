
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BrandGrid } from "../components/ProductGrid";
import { StatsCard } from "../components/StatsCard";
import { fetchBrands } from "../services/brandService";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const { data: brands } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands
  });

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category);
  };

  // Calculate total sales as a mock value
  const totalSales = "127.5 ETH";
  const totalBrands = brands?.length || 64;

  return (
    <div className="min-h-screen">
      <div className="container py-8 px-4 md:px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <StatsCard title="Total sales" value={totalSales} />
          <StatsCard title="Total Brands" value={totalBrands.toString()} />
        </div>
        
        {/* Brands Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Brands</h2>
          
          <BrandGrid 
            filter={activeCategory === "All" ? undefined : activeCategory} 
          />
        </div>
      </div>
    </div>
  );
}
