
import { useState } from "react";
import { ChevronUp, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Product } from "../types";
import { useToast } from "../hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [votes, setVotes] = useState(product.votes);
  const [hasVoted, setHasVoted] = useState(false);
  const { toast } = useToast();

  const handleVote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
      toast({
        title: "Upvoted!",
        description: `You upvoted ${product.name}`,
      });
    } else {
      setVotes(votes - 1);
      setHasVoted(false);
      toast({
        title: "Removed vote",
        description: `You removed your vote from ${product.name}`,
      });
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="flex">
          <div className="p-4 flex flex-col items-center justify-start gap-1 border-r">
            <Button 
              variant={hasVoted ? "default" : "outline"} 
              size="icon" 
              className={`h-10 w-10 rounded-full ${hasVoted ? 'bg-ph-orange text-white' : ''}`}
              onClick={handleVote}
            >
              <ChevronUp className={`h-6 w-6 ${hasVoted ? 'animate-pulse-scale' : ''}`} />
            </Button>
            <span className="text-sm font-medium">{votes}</span>
          </div>
          <CardContent className="flex flex-1 p-4">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg leading-none">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
                </div>
                <a 
                  href={product.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-ph-lightGray rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
