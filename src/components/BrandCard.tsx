
import { useState } from "react";
import { Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Brand } from "../types";
import { useToast } from "../hooks/use-toast";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
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
    <Card className="brand-card overflow-hidden">
      <Link to={`/brand/${brand.id}`}>
        <div className="flex">
          <div className="p-4 flex flex-col items-center justify-start gap-1 border-r">
            <Button 
              variant={hasLiked ? "default" : "outline"} 
              size="icon" 
              className={`h-10 w-10 rounded-full like-button ${hasLiked ? 'bg-accent text-white hover:bg-accent/90' : ''}`}
              onClick={handleLike}
            >
              <Heart className={`h-5 w-5 ${hasLiked ? 'fill-current animate-pulse-scale' : ''}`} />
            </Button>
            <span className="text-sm font-medium">{likes}</span>
          </div>
          <CardContent className="flex flex-1 p-4">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="w-full h-full brand-image"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg leading-none">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{brand.tagline}</p>
                </div>
                <a 
                  href={brand.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="category-badge">
                  {brand.category}
                </span>
                {brand.pricing && (
                  <span className="text-xs text-muted-foreground">
                    {brand.pricing}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
