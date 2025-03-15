
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";

export default function SubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Brand submitted!",
        description: "Your brand has been submitted for review.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div className="container py-8 px-4 md:px-6 max-w-3xl">
      <h1 className="section-title text-3xl md:text-4xl mb-2">Submit a Brand</h1>
      <p className="text-muted-foreground mb-8">Share a direct-to-consumer brand with our community</p>
      
      <Card>
        <CardHeader className="bg-primary/5 rounded-t-lg">
          <CardTitle>Brand Details</CardTitle>
          <CardDescription>
            Fill out the form below to submit a D2C brand for review.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Brand Name *</Label>
              <Input id="name" required placeholder="Enter the brand name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline *</Label>
              <Input 
                id="tagline" 
                required 
                placeholder="A short, catchy description of the brand" 
                maxLength={60} 
              />
              <p className="text-xs text-muted-foreground">Maximum 60 characters</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beauty">Beauty</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="wellness">Wellness</SelectItem>
                  <SelectItem value="pets">Pets</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Brand Website *</Label>
              <Input id="websiteUrl" type="url" required placeholder="https://" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pricing">Price Range</Label>
              <Input id="pricing" placeholder="e.g., $15-$50" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description" 
                required
                placeholder="Tell us about this brand..." 
                className="min-h-[120px]" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="sustainability">Sustainability</Label>
              <Input id="sustainability" placeholder="e.g., Vegan, plastic-free, ethical sourcing" />
            </div>
            
            <div className="space-y-2">
              <Label>Brand Logo/Image *</Label>
              <div className="border-2 border-dashed rounded-md p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Drag and drop an image here, or click to browse
                </p>
                <input type="file" className="hidden" accept="image/*" />
                <Button type="button" variant="outline" size="sm" className="mt-2">
                  Upload Image
                </Button>
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Brand"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
