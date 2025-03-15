
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, ExternalLink, MessageSquare, Share2, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { brands } from "../data/brands";
import { Brand } from "../types";
import { useToast } from "../hooks/use-toast";
import { Badge } from "../components/ui/badge";

export default function BrandDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [brand, setBrand] = useState<Brand | null>(null);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const foundBrand = brands.find(b => b.id === id);
    if (foundBrand) {
      setBrand(foundBrand);
      setLikes(foundBrand.likes);
    }
  }, [id]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
      toast({
        title: "Brand liked!",
        description: `You liked ${brand?.name}`,
      });
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
      toast({
        title: "Removed like",
        description: `You removed your like from ${brand?.name}`,
      });
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Brand link copied to clipboard",
    });
  };

  if (!brand) {
    return (
      <div className="container py-8 px-4 md:px-6 text-center">
        <h1 className="text-2xl font-bold">Brand not found</h1>
        <p className="mt-2 text-muted-foreground">
          The brand you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to brands</span>
      </Link>

      <div className="grid md:grid-cols-[2fr_1fr] gap-6">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-primary">{brand.name}</h1>
              <p className="text-xl text-muted-foreground mt-1">{brand.tagline}</p>
            </div>
            <div className="flex flex-col items-center">
              <Button 
                variant={hasLiked ? "default" : "outline"} 
                size="icon" 
                className={`h-12 w-12 rounded-full like-button ${hasLiked ? 'bg-accent text-white hover:bg-accent/90' : ''}`}
                onClick={handleLike}
              >
                <Heart className={`h-6 w-6 ${hasLiked ? 'fill-current animate-pulse-scale' : ''}`} />
              </Button>
              <span className="text-sm font-medium mt-1">{likes}</span>
            </div>
          </div>

          <div className="mb-6">
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className="w-full h-auto rounded-lg max-h-80 object-cover"
            />
          </div>

          <Card className="mb-6">
            <CardHeader className="bg-primary/5 rounded-t-lg">
              <CardTitle>About {brand.name}</CardTitle>
              <CardDescription>Launched on {brand.launchDate}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-base">{brand.description}</p>
              
              {brand.ingredients && brand.ingredients.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {brand.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1">
                        <Check className="h-3 w-3 text-primary" /> {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4 mt-6">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={brand.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
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
            <CardHeader className="bg-primary/5 rounded-t-lg">
              <CardTitle className="flex items-center gap-1">
                <MessageSquare className="h-5 w-5" />
                Discussion
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-center py-8 text-muted-foreground">
                Be the first to start the conversation about this brand!
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader className="bg-primary/5 rounded-t-lg">
              <CardTitle>Founder</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <img 
                  src={brand.founder.avatarUrl} 
                  alt={brand.founder.name}
                  className="w-12 h-12 rounded-full" 
                />
                <div>
                  <h3 className="font-medium">{brand.founder.name}</h3>
                  <p className="text-sm text-muted-foreground">Brand Founder</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-primary/5 rounded-t-lg">
              <CardTitle>Brand Info</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="text-sm font-medium">Category</h3>
                <p className="text-sm">{brand.category}</p>
              </div>
              <Separator />
              
              {brand.pricing && (
                <>
                  <div>
                    <h3 className="text-sm font-medium">Price Range</h3>
                    <p className="text-sm">{brand.pricing}</p>
                  </div>
                  <Separator />
                </>
              )}
              
              {brand.sustainability && (
                <>
                  <div>
                    <h3 className="text-sm font-medium">Sustainability</h3>
                    <p className="text-sm">{brand.sustainability}</p>
                  </div>
                  <Separator />
                </>
              )}
              
              <div>
                <h3 className="text-sm font-medium">Launched</h3>
                <p className="text-sm">{brand.launchDate}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium">Likes</h3>
                <p className="text-sm">{likes}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
