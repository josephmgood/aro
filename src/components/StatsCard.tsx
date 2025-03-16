
import { Link } from "react-router-dom";
import { Brand } from "../types";

interface StatsCardProps {
  title: string;
  value: string;
  brand?: Brand;
}

export function StatsCard({ title, value, brand }: StatsCardProps) {
  if (brand) {
    return (
      <div className="bg-black rounded-lg p-6 flex items-center justify-between">
        <div className="flex-1">
          <div className="text-gray-400 text-sm mb-2">{title}</div>
          <Link to={`/brand/${brand.id}`} className="block">
            <div className="text-white text-4xl font-bold hover:text-gray-200 transition-colors">{brand.name}</div>
          </Link>
        </div>
        <div className="w-24 h-24 ml-4 overflow-hidden rounded-lg">
          <Link to={`/brand/${brand.id}`}>
            <img src={brand.imageUrl} alt={brand.name} className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-black rounded-lg p-6">
      <div className="text-gray-400 text-sm mb-2">{title}</div>
      <div className="text-white text-4xl font-bold">{value}</div>
    </div>
  );
}
