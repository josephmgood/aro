
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const categories = [
  {
    id: "beauty",
    name: "Beauty",
    description: "Clean, ethical, and innovative beauty brands focused on natural ingredients and unique formulations.",
    brandCount: 42,
    color: "bg-accent/20",
    icon: "✨"
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Sustainable, ethical fashion brands creating high-quality, timeless pieces with transparent supply chains.",
    brandCount: 36,
    color: "bg-muted/20",
    icon: "👕"
  },
  {
    id: "food",
    name: "Food",
    description: "Innovative food brands offering better-for-you alternatives, unique flavors, and sustainable packaging.",
    brandCount: 51,
    color: "bg-primary/20",
    icon: "🍽️"
  },
  {
    id: "health",
    name: "Health",
    description: "Forward-thinking health brands creating supplements, vitamins, and wellness products backed by science.",
    brandCount: 29,
    color: "bg-secondary/20",
    icon: "💊"
  },
  {
    id: "home",
    name: "Home",
    description: "Eco-friendly home goods brands offering sustainable alternatives to everyday products.",
    brandCount: 19,
    color: "bg-accent/20",
    icon: "🏠"
  },
  {
    id: "wellness",
    name: "Wellness",
    description: "Holistic wellness brands focused on mental, physical, and emotional wellbeing through innovative products.",
    brandCount: 34,
    color: "bg-primary/20",
    icon: "🧘"
  },
  {
    id: "pets",
    name: "Pets",
    description: "Premium pet care brands offering natural, nutritious products for your furry friends.",
    brandCount: 17,
    color: "bg-secondary/20",
    icon: "🐾"
  },
];

export default function CategoriesPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <h1 className="section-title text-3xl md:text-4xl mb-2">Categories</h1>
      <p className="text-muted-foreground mb-8">Browse direct-to-consumer brands by category</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link to={`/?category=${category.id}`} key={category.id}>
            <Card className="h-full transition-all hover:shadow-md hover:border-primary/20">
              <CardHeader className={`${category.color} rounded-t-lg`}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  <CardTitle>{category.name}</CardTitle>
                </div>
                <CardDescription className="text-foreground/70">{category.brandCount} brands</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
