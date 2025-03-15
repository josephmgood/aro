
import { useState } from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Brand } from "../types";
import { useToast } from "../hooks/use-toast";

interface FeaturedBrandProps {
  brand: Brand;
}

export function FeaturedBrand({ brand }: FeaturedBrandProps) {
  const [likes, setLikes] = useState(brand.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      toast({
        title: "Brand liked!",
        description: `You liked ${brand.name}`,
      });
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
      toast({
        title: "Removed like",
        description: `You removed your like from ${brand.name}`,
      });
    }
  };

  return (
    <Card className="overflow-hidden mb-8 border-2 border-accent/30 transition-all animate-fade-in">
      <div className="bg-primary text-white px-4 py-1 text-sm font-medium">
        Featured Brand
      </div>
      <Link to={`/brand/${brand.id}`}>
        <div className="grid md:grid-cols-[1fr_2fr] gap-4">
          <div className="p-4 flex items-center justify-center">
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className="w-full h-48 brand-image"
            />
          </div>
          <CardContent className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-2xl text-primary">{brand.name}</h2>
                  <p className="text-lg text-muted-foreground mt-1">{brand.tagline}</p>
                </div>
                <Button 
                  variant={hasLiked ? "default" : "outline"} 
                  size="icon" 
                  className={`h-12 w-12 rounded-full like-button ${hasLiked ? 'bg-accent text-white hover:bg-accent/90' : ''}`}
                  onClick={handleLike}
                >
                  <Heart className={`h-6 w-6 ${hasLiked ? 'fill-current animate-pulse-scale' : ''}`} />
                  <span className="sr-only">Like</span>
                </Button>
              </div>
              <p className="mt-4 line-clamp-3">{brand.description}</p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="category-badge">
                  {brand.category}
                </span>
                {brand.sustainability && (
                  <span className="category-badge bg-brandColors-lightSalmon/30">
                    Sustainable
                  </span>
                )}
                <span className="text-sm text-muted-foreground">
                  {likes} likes
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img 
                  src={brand.founder.avatarUrl} 
                  alt={brand.founder.name}
                  className="w-6 h-6 rounded-full" 
                />
                <span className="text-sm">by {brand.founder.name}</span>
              </div>
              <Button variant="outline" size="sm" className="gap-1 text-primary border-primary/30 hover:bg-primary/10">
                Visit <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
