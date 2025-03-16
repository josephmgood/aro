
import { Link } from "react-router-dom";
import { Brand } from "../types";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

interface StatsCardProps {
  title: string;
  value: string;
  brand?: Brand;
  person?: {
    name: string;
    avatarUrl: string;
  };
}

export function StatsCard({ title, value, brand, person }: StatsCardProps) {
  if (brand) {
    return (
      <div className="bg-[#1B4D3E] rounded-lg p-6 flex items-center justify-between">
        <div className="flex-1">
          <div className="text-gray-400 text-sm mb-2">{title}</div>
          <Link to={`/brand/${brand.id}`} className="block">
            <div className="text-white text-3xl font-bold hover:text-gray-200 transition-colors">{brand.name}</div>
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
  
  if (person) {
    return (
      <div className="bg-[#1B4D3E] rounded-lg p-6 flex items-center justify-between">
        <div className="flex-1">
          <div className="text-gray-400 text-sm mb-2">{title}</div>
          <div className="text-white text-3xl font-bold">{person.name}</div>
        </div>
        <div className="w-24 h-24 ml-4">
          <Avatar className="w-full h-full rounded-lg">
            <AvatarImage src={person.avatarUrl} alt={person.name} className="w-full h-full object-cover" />
            <AvatarFallback className="w-full h-full bg-gray-700 text-white text-2xl rounded-lg">
              {person.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-[#1B4D3E] rounded-lg p-6">
      <div className="text-gray-400 text-sm mb-2">{title}</div>
      <div className="text-white text-3xl font-bold">{value}</div>
    </div>
  );
}
