
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
      <div className="grid gap-6 animate-pulse">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="h-24 bg-gray-200 rounded-lg"></div>
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
    <div className="grid gap-6 animate-fade-in">
      {brands.map(brand => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}
