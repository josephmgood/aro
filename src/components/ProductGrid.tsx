
import { useEffect, useState } from "react";
import { BrandCard } from "./BrandCard";
import { Brand } from "../types";
import { brands as initialBrands } from "../data/brands";

interface BrandGridProps {
  filter?: string;
}

export function BrandGrid({ filter }: BrandGridProps) {
  const [brands, setBrands] = useState<Brand[]>(initialBrands);
  
  useEffect(() => {
    if (filter) {
      const filtered = initialBrands.filter(
        brand => brand.category.toLowerCase() === filter.toLowerCase()
      );
      setBrands(filtered);
    } else {
      setBrands(initialBrands);
    }
  }, [filter]);

  return (
    <div className="grid gap-6 animate-fade-in">
      {brands.map(brand => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}
