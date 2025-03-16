
import { Link } from "react-router-dom";
import { Brand } from "../types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  // Mock ETH price for each brand
  const ethPrice = (Math.random() * 4 + 0.1).toFixed(2);

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <Link to={`/brand/${brand.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={brand.imageUrl}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-900 truncate">{brand.name}</h3>
          <div className="flex items-center mt-1">
            <span className="text-xs text-gray-500">@{brand.founder.name.replace(/\s+/g, "").toLowerCase()}</span>
          </div>
          <div className="mt-2 text-xs font-medium">
            {ethPrice} ETHSold
          </div>
        </div>
      </Link>
    </div>
  );
}
