
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
      <div className="rounded-lg p-6 flex items-center justify-between bg-gradient-to-br from-brandColors-lightSalmon/30 to-white shadow-sm border border-brandColors-salmon/20">
        <div className="flex-1">
          <div className="text-brandColors-darkTeal/70 text-sm mb-2">{title}</div>
          <Link to={`/brand/${brand.id}`} className="block">
            <div className="text-brandColors-darkTeal text-3xl font-bold hover:text-brandColors-mediumTeal transition-colors">{brand.name}</div>
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
      <div className="rounded-lg p-6 flex items-center justify-between bg-gradient-to-br from-brandColors-mediumTeal/30 to-brandColors-lightSalmon/20 shadow-sm border border-brandColors-mediumTeal/20">
        <div className="flex-1">
          <div className="text-brandColors-darkTeal/70 text-sm mb-2">{title}</div>
          <div className="text-brandColors-darkTeal text-3xl font-bold">{person.name}</div>
        </div>
        <div className="w-24 h-24 ml-4">
          <Avatar className="w-full h-full rounded-lg">
            <AvatarImage src={person.avatarUrl} alt={person.name} className="w-full h-full object-cover" />
            <AvatarFallback className="w-full h-full bg-brandColors-salmon/20 text-brandColors-darkTeal text-2xl rounded-lg">
              {person.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-white to-brandColors-lightSalmon/20 rounded-lg p-6 shadow-sm border border-brandColors-salmon/10">
      <div className="text-brandColors-darkTeal/70 text-sm mb-2">{title}</div>
      <div className="text-brandColors-darkTeal text-3xl font-bold">{value}</div>
    </div>
  );
}
