
import { Link } from "react-router-dom";
import { Brand } from "../types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
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
          <h3 className="text-sm font-medium text-[#1B4D3E] truncate">{brand.name}</h3>
          <div className="mt-2 text-xs font-medium text-[#1B4D3E]/80">
            {brand.category}
          </div>
          <div className="flex items-center mt-1">
            <span className="text-xs text-gray-500">@{brand.founder.name.replace(/\s+/g, "").toLowerCase()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
