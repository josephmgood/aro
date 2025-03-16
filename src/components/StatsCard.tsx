
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
      <div className="rounded-lg p-6 flex items-center justify-between bg-white shadow-sm border border-brandColors-darkTan">
        <div className="flex-1">
          <div className="text-brandColors-darkBlue/70 text-sm mb-2">{title}</div>
          <Link to={`/brand/${brand.id}`} className="block">
            <div className="text-brandColors-darkBlue text-3xl font-bold hover:text-brandColors-darkBlue/80 transition-colors">{brand.name}</div>
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
    // Update with a different profile picture
    const updatedPerson = {
      ...person,
      avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg"
    };
    
    return (
      <div className="rounded-lg p-6 flex items-center justify-between bg-white shadow-sm border border-brandColors-darkTan">
        <div className="flex-1">
          <div className="text-brandColors-darkBlue/70 text-sm mb-2">{title}</div>
          <div className="text-brandColors-darkBlue text-3xl font-bold">{updatedPerson.name}</div>
        </div>
        <div className="w-24 h-24 ml-4">
          <Avatar className="w-full h-full rounded-lg">
            <AvatarImage src={updatedPerson.avatarUrl} alt={updatedPerson.name} className="w-full h-full object-cover" />
            <AvatarFallback className="w-full h-full bg-brandColors-darkTan/20 text-brandColors-darkBlue text-2xl rounded-lg">
              {updatedPerson.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-brandColors-darkTan">
      <div className="text-brandColors-darkBlue/70 text-sm mb-2">{title}</div>
      <div className="text-brandColors-darkBlue text-3xl font-bold">{value}</div>
    </div>
  );
}
