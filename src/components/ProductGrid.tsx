
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BrandCard } from "./BrandCard";
import { Brand } from "../types";
import { fetchBrands, fetchBrandsByCategory } from "../services/brandService";

interface BrandGridProps {
  filter?: string;
}

export function BrandGrid({ filter }: BrandGridProps) {
  const [brands, setBrands] = useState<Brand[]>([]);
  
  const { data: allBrands, isLoading: isLoadingAll } = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands
  });
  
  const { data: filteredBrands, isLoading: isLoadingFiltered } = useQuery({
    queryKey: ['brands', filter],
    queryFn: () => filter ? fetchBrandsByCategory(filter) : fetchBrands(),
    enabled: !!filter
  });

  useEffect(() => {
    if (filter && filteredBrands) {
      setBrands(filteredBrands);
    } else if (allBrands) {
      setBrands(allBrands);
    }
  }, [filter, allBrands, filteredBrands]);

  if (isLoadingAll || (filter && isLoadingFiltered)) {
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
        <p className="text-lg text-muted-foreground">No brands found</p>
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
