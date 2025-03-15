
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const topics = [
  {
    id: "marketing",
    name: "Marketing",
    description: "Tools and services to help grow your business and reach new customers.",
    productCount: 423,
    color: "bg-green-100",
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "Software and resources that make developers' lives easier.",
    productCount: 356,
    color: "bg-blue-100",
  },
  {
    id: "productivity",
    name: "Productivity",
    description: "Apps and tools to help you get more done in less time.",
    productCount: 512,
    color: "bg-purple-100",
  },
  {
    id: "design-tools",
    name: "Design Tools",
    description: "Resources for designers to create beautiful digital experiences.",
    productCount: 287,
    color: "bg-pink-100",
  },
  {
    id: "social-media",
    name: "Social Media",
    description: "Tools to enhance your social media presence and engagement.",
    productCount: 198,
    color: "bg-yellow-100",
  },
  {
    id: "ai",
    name: "AI",
    description: "Artificial intelligence tools and platforms for various applications.",
    productCount: 345,
    color: "bg-indigo-100",
  },
  {
    id: "finance",
    name: "Finance",
    description: "Tools for personal and business financial management.",
    productCount: 176,
    color: "bg-green-100",
  },
];

export default function TopicsPage() {
  return (
    <div className="container py-6 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-2">Topics</h1>
      <p className="text-muted-foreground mb-6">Browse products by category</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader className={`${topic.color} rounded-t-lg`}>
              <CardTitle>{topic.name}</CardTitle>
              <CardDescription className="text-foreground/70">{topic.productCount} products</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
