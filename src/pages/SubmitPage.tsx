
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
        title: "Product submitted!",
        description: "Your product has been submitted for review.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div className="container py-6 px-4 md:px-6 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Submit a Product</h1>
      <p className="text-muted-foreground mb-6">Share your product with the community</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            Fill out the form below to submit your product for review.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name *</Label>
              <Input id="name" required placeholder="Enter your product name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline *</Label>
              <Input 
                id="tagline" 
                required 
                placeholder="A short, catchy description of your product" 
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
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="developer-tools">Developer Tools</SelectItem>
                  <SelectItem value="productivity">Productivity</SelectItem>
                  <SelectItem value="design-tools">Design Tools</SelectItem>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="ai">AI</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="url">Product URL *</Label>
              <Input id="url" type="url" required placeholder="https://" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description" 
                required
                placeholder="Tell us about your product..." 
                className="min-h-[120px]" 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Product Thumbnail *</Label>
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
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Product"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
