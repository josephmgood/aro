
import { useState } from "react";
import { ArrowUpRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Product } from "../types";
import { useToast } from "../hooks/use-toast";

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
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
    <Card className="overflow-hidden mb-6 border-2 border-ph-orange transition-all">
      <div className="bg-ph-orange text-white px-4 py-1 text-sm font-medium">
        Featured Product
      </div>
      <Link to={`/product/${product.id}`}>
        <div className="grid md:grid-cols-[1fr_2fr] gap-4">
          <div className="p-4 flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <CardContent className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-2xl">{product.name}</h2>
                  <p className="text-lg text-muted-foreground mt-1">{product.tagline}</p>
                </div>
                <Button 
                  variant={hasVoted ? "default" : "outline"} 
                  size="icon" 
                  className={`h-12 w-12 rounded-full ${hasVoted ? 'bg-ph-orange text-white' : ''}`}
                  onClick={handleVote}
                >
                  <ChevronUp className={`h-6 w-6 ${hasVoted ? 'animate-pulse-scale' : ''}`} />
                  <span className="sr-only">Upvote</span>
                </Button>
              </div>
              <p className="mt-4 line-clamp-3">{product.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs px-2 py-1 bg-ph-lightGray rounded-full">
                  {product.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {votes} upvotes
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img 
                  src={product.maker.avatarUrl} 
                  alt={product.maker.name}
                  className="w-6 h-6 rounded-full" 
                />
                <span className="text-sm">by {product.maker.name}</span>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                Visit <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}
