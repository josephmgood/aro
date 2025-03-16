
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
      <div className="rounded-lg p-6 flex items-center justify-between bg-gradient-to-br from-[#e6e9f0] to-[#eef1f5] shadow-sm border border-[#1B4D3E]/10">
        <div className="flex-1">
          <div className="text-[#1B4D3E]/70 text-sm mb-2">{title}</div>
          <Link to={`/brand/${brand.id}`} className="block">
            <div className="text-[#1B4D3E] text-3xl font-bold hover:text-[#1B4D3E]/80 transition-colors">{brand.name}</div>
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
      <div className="rounded-lg p-6 flex items-center justify-between bg-gradient-to-br from-[#accbee] to-[#e7f0fd] shadow-sm border border-[#1B4D3E]/10">
        <div className="flex-1">
          <div className="text-[#1B4D3E]/70 text-sm mb-2">{title}</div>
          <div className="text-[#1B4D3E] text-3xl font-bold">{person.name}</div>
        </div>
        <div className="w-24 h-24 ml-4">
          <Avatar className="w-full h-full rounded-lg">
            <AvatarImage src={person.avatarUrl} alt={person.name} className="w-full h-full object-cover" />
            <AvatarFallback className="w-full h-full bg-[#1B4D3E]/10 text-[#1B4D3E] text-2xl rounded-lg">
              {person.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-br from-[#F2FCE2] to-[#e6e9f0] rounded-lg p-6 shadow-sm border border-[#1B4D3E]/10">
      <div className="text-[#1B4D3E]/70 text-sm mb-2">{title}</div>
      <div className="text-[#1B4D3E] text-3xl font-bold">{value}</div>
    </div>
  );
}
