
import { Link } from "react-router-dom";
import { Brand } from "../types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-brandColors-lightSalmon/20 hover:shadow-md transition-all">
      <Link to={`/brand/${brand.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={brand.imageUrl}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-brandColors-darkTeal truncate">{brand.name}</h3>
          <div className="mt-2 text-xs font-medium text-brandColors-mediumTeal">
            {brand.category}
          </div>
          <div className="flex items-center mt-1">
            <span className="text-xs text-brandColors-salmon">@{brand.founder.name.replace(/\s+/g, "").toLowerCase()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
