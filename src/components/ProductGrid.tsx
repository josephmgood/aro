
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../types";
import { products as initialProducts } from "../data/products";

interface ProductGridProps {
  filter?: string;
}

export function ProductGrid({ filter }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  
  useEffect(() => {
    if (filter) {
      const filtered = initialProducts.filter(
        product => product.category.toLowerCase() === filter.toLowerCase()
      );
      setProducts(filtered);
    } else {
      setProducts(initialProducts);
    }
  }, [filter]);

  return (
    <div className="grid gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
