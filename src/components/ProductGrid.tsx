
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BrandCard } from "./BrandCard";
import { Brand } from "../types";
import { fetchBrands } from "../services/brandService";
import { brands as mockBrands } from "../data/brands"; // Use mock data for now

interface BrandGridProps {
  filter?: string;
}

export function BrandGrid({ filter }: BrandGridProps) {
  const [brands, setBrands] = useState<Brand[]>([]);
  
  const { data: allBrands, isLoading } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands
  });

  // Filter brands based on category
  useEffect(() => {
    if (allBrands) {
      if (filter) {
        // Filter brands by the selected category
        setBrands(allBrands.filter(brand => 
          brand.category.toLowerCase() === filter.toLowerCase()
        ));
      } else {
        // If no filter, show all brands
        setBrands(allBrands);
      }
    } else {
      // Fallback to mock data if API data isn't available
      if (filter) {
        setBrands(mockBrands.filter(brand => 
          brand.category.toLowerCase() === filter.toLowerCase()
        ));
      } else {
        setBrands(mockBrands);
      }
    }
  }, [filter, allBrands]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-pulse">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} className="bg-gray-200 rounded-lg h-48"></div>
        ))}
      </div>
    );
  }

  if (brands.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-white">No brands found in this category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {brands.map(brand => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}
