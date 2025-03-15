
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronUp, ExternalLink, MessageSquare, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { products } from "../data/products";
import { Product } from "../types";
import { useToast } from "../hooks/use-toast";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setVotes(foundProduct.votes);
    }
  }, [id]);

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
      toast({
        title: "Upvoted!",
        description: `You upvoted ${product?.name}`,
      });
    } else {
      setVotes(votes - 1);
      setHasVoted(false);
      toast({
        title: "Removed vote",
        description: `You removed your vote from ${product?.name}`,
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Product link copied to clipboard",
    });
  };

  if (!product) {
    return (
      <div className="container py-8 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p className="mt-2 text-muted-foreground">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="mt-4">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-6 px-4 md:px-6">
      <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to products</span>
      </Link>

      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-xl text-muted-foreground mt-1">{product.tagline}</p>
            </div>
            <div className="flex flex-col items-center">
              <Button 
                variant={hasVoted ? "default" : "outline"} 
                size="icon" 
                className={`h-12 w-12 rounded-full ${hasVoted ? 'bg-ph-orange text-white' : ''}`}
                onClick={handleVote}
              >
                <ChevronUp className={`h-6 w-6 ${hasVoted ? 'animate-pulse-scale' : ''}`} />
              </Button>
              <span className="text-sm font-medium mt-1">{votes}</span>
            </div>
          </div>

          <div className="mb-6">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg max-h-80 object-cover"
            />
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About {product.name}</CardTitle>
              <CardDescription>Launched on {product.launchDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base">{product.description}</p>
              <div className="flex items-center gap-4 mt-6">
                <Button asChild>
                  <a href={product.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
                <Button variant="outline" onClick={handleShare} className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-1">
                <MessageSquare className="h-5 w-5" />
                Discussion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-muted-foreground">
                Be the first to start the conversation!
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Maker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <img 
                  src={product.maker.avatarUrl} 
                  alt={product.maker.name}
                  className="w-12 h-12 rounded-full" 
                />
                <div>
                  <h3 className="font-medium">{product.maker.name}</h3>
                  <p className="text-sm text-muted-foreground">Product Maker</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Category</h3>
                <p className="text-sm">{product.category}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium">Launched</h3>
                <p className="text-sm">{product.launchDate}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium">Votes</h3>
                <p className="text-sm">{votes}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
